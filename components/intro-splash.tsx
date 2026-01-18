"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroSplash({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(false)
    const [phase, setPhase] = useState<"logo" | "tagline" | "done">("logo")

    const playSound = (type: "up" | "down") => {
        const audio = new Audio(`/sounds/pop-${type}.mp3`)
        audio.volume = 0.5
        audio.play().catch(e => console.log("Audio play failed", e))
    }

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("jobfinder-visited")

        if (!hasVisited) {
            setShowSplash(true)
            sessionStorage.setItem("jobfinder-visited", "true")

            // Play sound for Logo immediately
            playSound("up")

            // Phase 1: Logo for 1.2s
            const logoTimer = setTimeout(() => {
                setPhase("tagline")
                // Play sound for first tagline line
                playSound("down")

                // Play sound for second tagline line (delayed slightly to match animation)
                setTimeout(() => playSound("up"), 200)
            }, 1200)

            // Phase 2: Tagline for 2.5s then done
            const taglineTimer = setTimeout(() => {
                setPhase("done")
            }, 4000)

            // Phase 3: Remove splash
            const doneTimer = setTimeout(() => {
                setShowSplash(false)
            }, 4800)

            return () => {
                clearTimeout(logoTimer)
                clearTimeout(taglineTimer)
                clearTimeout(doneTimer)
            }
        }
    }, [])

    if (!showSplash) {
        return <>{children}</>
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {phase !== "done" && (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
                    >
                        <AnimatePresence mode="wait">
                            {phase === "logo" && (
                                <motion.h1
                                    key="logo"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
                                >
                                    Jobfinder<span className="text-blue-500">AI</span>
                                </motion.h1>
                            )}

                            {phase === "tagline" && (
                                <motion.div
                                    key="tagline"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col items-center gap-2 px-6 text-center"
                                >
                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                                    >
                                        The first AI that applies to
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-500 tracking-tight"
                                    >
                                        1000s of jobs. For you.
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "done" || !showSplash ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    )
}
