"use client";

import { cn } from "@/lib/utils";
import { FileText, ShieldCheck, Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// --- Sub-components for Complex Animations (CLEAN VERSION) ---

function PencilCircleAnimation() {
    return (
        <div className="relative flex items-center justify-center w-40 h-40">
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2" // Thinner, crisper line
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            </svg>
            <span className="text-4xl font-bold text-white tracking-tighter z-10">100%</span>
        </div>
    );
}

function ATSScanAnimation() {
    return (
        <div className="relative w-32 h-40 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col items-center pt-8">
            {/* Document Lines - Subtle */}
            <div className="w-20 h-2 bg-zinc-800 rounded-full mb-3" />
            <div className="w-24 h-2 bg-zinc-800 rounded-full mb-3" />
            <div className="w-22 h-2 bg-zinc-800 rounded-full mb-3" />
            <div className="w-16 h-2 bg-zinc-800 rounded-full mb-3" />
            <div className="w-20 h-2 bg-zinc-800 rounded-full" />

            {/* Scan Line - Crisper, less glow */}
            <motion.div
                className="absolute top-0 w-full h-[1px] bg-green-400"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />

            {/* Checkmark - Clean pop */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, times: [0.4, 0.5, 0.6], repeat: Infinity }}
            >
                <div className="bg-green-500 p-2 rounded-full text-white shadow-sm">
                    <Check className="w-6 h-6" />
                </div>
            </motion.div>
        </div>
    );
}

function OscillatingChartAnimation() {
    return (
        <div className="w-full h-32 flex items-end justify-center gap-3 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "w-4 rounded-t-sm",
                        i === 3 ? "bg-blue-600" : "bg-zinc-800"
                    )}
                    animate={{
                        height: ["20%", "80%", "20%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
}

function SpamShieldAnimation() {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Clean Radar Sweep */}
            <div className="absolute inset-0 border border-zinc-800 rounded-full overflow-hidden">
                <motion.div
                    className="w-1/2 h-1/2 bg-gradient-to-br from-transparent to-zinc-700/30 absolute top-0 right-0 origin-bottom-left"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
            </div>
            {/* Shield - Solid */}
            <div className="relative z-10 bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                <ShieldCheck className="w-10 h-10 text-white" />
            </div>

            {/* Particles - Minimal dots */}
            {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-red-500 rounded-full"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: Math.cos(deg * (Math.PI / 180)) * 60,
                        y: Math.sin(deg * (Math.PI / 180)) * 60
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.4
                    }}
                    style={{ top: "50%", left: "50%" }}
                />
            ))}
        </div>
    )
}

function MessageBubblesAnimation() {
    const messages = [
        { initial: "HR", name: "Sarah (Recruiter)", text: "Your resume looks perfect!", time: "2m" },
        { initial: "G", name: "Google", text: "Interview: Frontend Engineer", time: "15m" },
        { initial: "S", name: "Stripe", text: "Application received", time: "1h" }
    ];

    return (
        <div className="w-full max-w-sm space-y-3 overflow-hidden h-[180px] relative" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>

            <motion.div
                animate={{ y: [0, -100] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                className="space-y-4"
            >
                {[...messages, ...messages].map((msg, i) => (
                    <div key={i} className="flex items-start gap-3 bg-zinc-900 p-3 rounded-2xl border border-zinc-800">
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0">
                            {msg.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-xs font-bold text-white truncate">{msg.name}</span>
                                <span className="text-[10px] text-zinc-500">{msg.time}</span>
                            </div>
                            <p className="text-xs text-zinc-400 truncate">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}


export function Features() {
    return (
        <section id="features" className="container py-24 md:py-32 max-w-7xl mx-auto px-4">
            <div className="mx-auto max-w-[58rem] text-center mb-16 space-y-4">
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                    Everything you need to <span className="text-primary">get hired</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Jobfinder AI replaces your entire job search stack.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Cards - Removed Glows, kept solid dark bg */}
                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
                    <div className="mb-6">
                        <PencilCircleAnimation />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Fully Automated</h3>
                    <p className="text-zinc-500 text-sm max-w-[220px]">
                        Set it and forget it. We apply while you sleep.
                    </p>
                </div>

                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
                    <div className="mb-6">
                        <ATSScanAnimation />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">ATS Optimized</h3>
                    <p className="text-zinc-500 text-sm max-w-[220px]">
                        Keywords tailored for every job description.
                    </p>
                </div>

                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex flex-col items-center justify-center min-h-[320px]">
                    <OscillatingChartAnimation />
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Faster than Human</h3>
                        <p className="text-zinc-500 text-sm max-w-[220px]">
                            Apply to 1000s of roles in minutes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex items-center justify-between min-h-[250px]">
                    <div className="relative z-10 max-w-[200px]">
                        <h3 className="text-xl font-bold text-white mb-2">Zero Spam</h3>
                        <p className="text-zinc-500 text-sm">
                            We verify every listing to ensure it's real.
                        </p>
                    </div>
                    <div className="mr-8">
                        <SpamShieldAnimation />
                    </div>
                </div>

                <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex items-center min-h-[250px]">
                    <div className="w-full grid grid-cols-2 gap-4 items-center">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Real Results</h3>
                            <p className="text-zinc-500 text-sm">
                                Track every interview landed directly.
                            </p>
                        </div>
                        <MessageBubblesAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
}
