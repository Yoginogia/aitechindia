import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  // If API key is not configured, just return success (graceful fallback)
  if (!BREVO_API_KEY || BREVO_API_KEY === 'YOUR_BREVO_API_KEY') {
    console.log(`[Newsletter] Email collected (no API key configured): ${email}`);
    return NextResponse.json({ success: true });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Your Brevo list ID — change this
        updateEnabled: true,
        attributes: {
          SOURCE: 'AITechNews Website',
          SUBSCRIBE_DATE: new Date().toISOString().split('T')[0],
        },
      }),
    });

    if (response.ok || response.status === 204) {
      return NextResponse.json({ success: true });
    }

    const error = await response.json();
    console.error('[Brevo Error]', error);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  } catch (err) {
    console.error('[Subscribe API Error]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
