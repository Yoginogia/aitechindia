'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Prevent hydration mismatch by only rendering after mount
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 -mr-2 text-foreground/70 hover:text-foreground md:mr-0 md:bg-secondary/50 md:hover:bg-secondary md:border md:border-border/50 md:hover:border-primary/30 md:transition-all md:rounded-full flex items-center justify-center h-9 w-9 md:h-8 md:w-8">
                <span className="w-4 h-4 bg-muted rounded-full animate-pulse"></span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 -mr-2 text-foreground/70 hover:text-foreground md:mr-0 md:bg-secondary/50 md:hover:bg-secondary md:border md:border-border/50 md:hover:border-primary/30 md:transition-all md:rounded-full flex items-center justify-center group h-9 w-9 md:h-8 md:w-8"
            aria-label="Toggle theme"
        >
            {resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5 md:h-4 md:w-4 group-hover:text-yellow-400 transition-colors" />
            ) : (
                <Moon className="h-5 w-5 md:h-4 md:w-4 group-hover:text-indigo-400 transition-colors" />
            )}
        </button>
    );
}
