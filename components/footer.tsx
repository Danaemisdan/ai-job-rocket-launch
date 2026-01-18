"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight">
                                Jobfinder <span className="text-blue-600">AI</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                            The world's most advanced AI job search agent. Automate your applications, optimize your resume, and land your dream job while you sleep.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/login" className="hover:text-primary transition-colors">Log in</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground font-medium">
                        &copy; 2026 Jobfinder AI. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
