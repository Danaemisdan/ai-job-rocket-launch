"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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

                {/* Mobile Menu Button */}
                <Button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden z-50"
                    variant="ghost"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    <span className="sr-only">Toggle Menu</span>
                </Button>

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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-[56px] bottom-0 z-[9999] md:hidden bg-white dark:bg-black border-t border-border/40 p-4 flex flex-col items-center justify-start gap-8 pt-12"
                    >
                        <nav className="flex flex-col gap-6 w-full items-center text-center">
                            <Link
                                href="#features"
                                className="text-2xl font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#testimonials"
                                className="text-2xl font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="#pricing"
                                className="text-2xl font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                Pricing
                            </Link>

                            <div className="w-20 h-px bg-border my-2" />

                            <div className="flex flex-col gap-4 w-full max-w-xs">
                                <AnimatedButton href="/login" variant="secondary" className="w-full justify-center h-12 text-lg">
                                    Log in
                                </AnimatedButton>
                                <AnimatedButton href="/login" className="w-full justify-center h-12 text-lg">
                                    Get Started
                                </AnimatedButton>
                            </div>
                            <div className="mt-8 text-xs text-muted-foreground opacity-50">v2.5 (Beta)</div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
