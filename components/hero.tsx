"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { HeroAnimationLoop } from "@/components/hero-animation-loop";
import { AnimatedButton } from "@/components/animated-button";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center space-y-10 py-24 md:py-32 lg:py-40 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background blur-3xl" />

            <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4 px-4">
                <div data-hero-badge className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl shadow-sm">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-primary mr-2 animate-pulse"></span>
                    <span className="text-xs font-medium">New AI Model V2.0 Beta Released</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-pretty">
                    Find your dream job <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#a855f7,#6366f1,#3b82f6)] bg-[length:200%_100%] animate-shimmer">
                        10x faster with AI
                    </span>
                </h1>

                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    The all-in-one AI career co-pilot that optimizes your resume, matches you with perfect roles, and autofills applications in seconds.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                    <AnimatedButton href="/login" className="w-full sm:w-auto h-12 px-8 min-w-[160px]">
                        Start for free <ArrowRight className="h-4 w-4" />
                    </AnimatedButton>
                    <AnimatedButton href="/login" variant="secondary" className="w-full sm:w-auto h-12 px-8 min-w-[160px]">
                        <Sparkles className="h-4 w-4" /> View Demo
                    </AnimatedButton>
                </div>

                {/* Sequential Pencil Animation Loop */}
                <div className="mt-16 relative w-full max-w-5xl min-h-[450px] md:min-h-0 md:aspect-video rounded-xl border border-border/50 bg-background/50 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-background/80" />
                    {/* Restored Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] opacity-10">
                        {Array.from({ length: 200 }).map((_, i) => (
                            <div key={i} className="border-[0.5px] border-foreground" />
                        ))}
                    </div>

                    <div className="relative z-10 w-full max-w-4xl p-8 flex flex-col items-center justify-center h-full">
                        <HeroAnimationLoop />
                    </div>
                </div>
            </div>
        </section>
    );
}
