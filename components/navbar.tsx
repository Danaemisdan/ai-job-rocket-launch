"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/animated-button";

export function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-8 relative">
                {/* Left: Nav Links */}
                <div className="hidden md:flex items-center">
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Features
                        </Link>
                        <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Pricing
                        </Link>
                    </nav>
                </div>

                {/* Center: Logo (Absolute Centered) */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center z-50">
                    <span className="font-semibold text-lg tracking-tight">Jobfinder</span>
                    <span className="font-bold text-lg text-blue-600 ml-1">AI</span>
                </Link>

                {/* Right: Auth Buttons */}
                <nav className="hidden md:flex items-center gap-2">
                    <AnimatedButton href="/login" variant="secondary" className="text-foreground/60 h-9 px-4 text-sm font-medium">
                        Log in
                    </AnimatedButton>
                    <AnimatedButton href="/login" className="h-9 px-4 text-sm">
                        Get Started
                    </AnimatedButton>
                </nav>
            </div>
        </header>
    );
}
