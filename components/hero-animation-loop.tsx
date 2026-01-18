"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function HeroAnimationLoop() {
    const [currentStage, setCurrentStage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStage((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {currentStage === 0 && (
                <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-6 text-center w-full"
                >
                    {/* Big SVG Drawing */}
                    <div className="h-48 w-48 flex items-center justify-center bg-muted/20 rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-24 h-24 text-foreground/80">
                            <motion.path
                                d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>
                    {/* Value Prop Text */}
                    <div className="space-y-2 max-w-lg">
                        <h3 className="text-2xl font-bold">Applications on Autopilot</h3>
                        <p className="text-lg text-muted-foreground">
                            "JobFinder AI automatically applies to 1,000s of relevant jobs for you while you sleep, ensuring you never miss an opportunity."
                        </p>
                    </div>
                </motion.div>
            )}

            {currentStage === 1 && (
                <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-6 text-center w-full"
                >
                    <div className="h-48 w-48 flex items-center justify-center bg-muted/20 rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-24 h-24 text-foreground/80">
                            <motion.path
                                d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-20"
                            />
                            <motion.circle
                                cx="12" cy="12" r="4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M12 8v8M8 12h8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            />
                        </svg>
                    </div>
                    <div className="space-y-2 max-w-lg">
                        <h3 className="text-2xl font-bold">Smart AI Matching</h3>
                        <p className="text-lg text-muted-foreground">
                            "Our advanced AI analyzes your profile and tailors every application to pass ATS filters and impress recruiters instantly."
                        </p>
                    </div>
                </motion.div>
            )}

            {currentStage === 2 && (
                <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-6 text-center w-full"
                >
                    <div className="h-48 w-48 flex items-center justify-center bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-24 h-24 text-foreground/80">
                            {/* Document/Offer Letter icon */}
                            <motion.path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M14 2v6h6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                            />
                            {/* Checkmark inside document */}
                            <motion.path
                                d="M9 15l2 2 4-4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                            />
                        </svg>
                    </div>
                    <div className="space-y-2 max-w-lg">
                        <h3 className="text-2xl font-bold">Land Your Dream Job</h3>
                        <p className="text-lg text-muted-foreground">
                            "Get placed fast and start your new career. From application to offer letter, we automate the entire journey for you."
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
