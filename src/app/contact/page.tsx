import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'संपर्क करें | AITechNews',
    description: 'AITechNews team से बात करें — कोई सवाल, tip, या business inquiry हो।',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">संपर्क करें</h1>

            <p className="text-lg text-muted-foreground mb-12">
                कोई सवाल है? कोई news tip देना चाहते हो? या फिर business inquiry है? हमसे बात करें!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-card/50 p-5 card-glow">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email करें</h3>
                            <p className="text-muted-foreground text-sm mb-1">General inquiries और support के लिए:</p>
                            <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline text-sm">
                                aitechindia365@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-card/50 p-5 card-glow">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shrink-0">
                            <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">News Tip भेजें</h3>
                            <p className="text-muted-foreground text-sm mb-1">कोई breaking news या insider scoop है?</p>
                            <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline text-sm">
                                aitechindia365@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-card/50 p-5 card-glow">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 live-dot"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Business & Advertising</h3>
                            <p className="text-muted-foreground text-sm mb-1">Partnership और ads के लिए:</p>
                            <a href="mailto:aitechindia365@gmail.com" className="text-primary hover:underline text-sm">
                                aitechindia365@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur p-8 gradient-border">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
