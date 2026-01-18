"use client"

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

const notes = [
    {
        step: "1",
        title: "Upload Resume",
        description: "AI reads your experience instantly",
        subtitle: "Drop your resume and we'll extract everything",
        numberColor: "text-blue-500",
        rotation: -3,
    },
    {
        step: "2",
        title: "Set Preferences",
        description: "Tell us your dream job",
        subtitle: "Location, salary, remote — you name it",
        numberColor: "text-purple-500",
        rotation: 2,
    },
    {
        step: "3",
        title: "Auto-Apply",
        description: "We apply to 1000s for you",
        subtitle: "Sit back while AI handles everything",
        numberColor: "text-emerald-500",
        rotation: -2,
    },
    {
        step: "",
        title: "You're Hired!",
        description: "",
        subtitle: "",
        numberColor: "",
        rotation: 1,
        isSpecial: true,
    },
]

export function NotebookSteps() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hasLaunchedConfetti, setHasLaunchedConfetti] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Confetti launcher
    const launchConfetti = useCallback(() => {
        if (hasLaunchedConfetti) return
        setHasLaunchedConfetti(true)

        // Launch confetti from both sides
        const duration = 3000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 }

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now()
            if (timeLeft <= 0) {
                return clearInterval(interval)
            }
            const particleCount = 50 * (timeLeft / duration)

            // Left side
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#3b82f6', '#a855f7', '#6366f1', '#f59e0b', '#10b981']
            })
            // Right side
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#3b82f6', '#a855f7', '#6366f1', '#f59e0b', '#10b981']
            })
        }, 250)
    }, [hasLaunchedConfetti])

    // Monitor scroll progress to trigger confetti at the right moment
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Trigger confetti just before 4th note starts appearing (0.68)
        if (latest >= 0.68 && !hasLaunchedConfetti) {
            launchConfetti()
        }
    })

    // Title Animation Sequence:
    // 0.1 - 0.15: Fade in & Move to center
    // 0.15 - 0.25: Stay centered, CLEAR and readable
    // 0.25 - 0.9: Blur out & dim as notes appear
    // 0.9 - 1.0: Fade out & Move up
    const titleY = useTransform(scrollYProgress, [0.1, 0.15, 0.9, 1], [100, 0, 0, -100])
    const titleOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.9, 1], [0, 1, 1, 0.3, 0])
    const titleBlur = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.9, 1], [10, 0, 0, 8, 10])
    const titleScale = useTransform(scrollYProgress, [0.1, 0.15, 0.9, 1], [0.9, 1, 1, 1.1])

    // Notes Sequence - 4 notes now, compressed timeline
    // Note 1: 0.25 - 0.40
    const note1Y = useTransform(scrollYProgress, [0.25, 0.32, 0.40], [150, 0, -600])
    const note1Opacity = useTransform(scrollYProgress, [0.25, 0.28, 0.36, 0.40], [0, 1, 1, 0])
    const note1Blur = useTransform(scrollYProgress, [0.25, 0.28, 0.36, 0.40], [15, 0, 0, 15])
    const note1Scale = useTransform(scrollYProgress, [0.25, 0.32, 0.40], [0.85, 1, 1.15])
    const note1Rotate = useTransform(scrollYProgress, [0.25, 0.32, 0.40], [-3, -3, -15])

    // Note 2: 0.40 - 0.55
    const note2Y = useTransform(scrollYProgress, [0.40, 0.47, 0.55], [150, 0, -600])
    const note2Opacity = useTransform(scrollYProgress, [0.40, 0.43, 0.51, 0.55], [0, 1, 1, 0])
    const note2Blur = useTransform(scrollYProgress, [0.40, 0.43, 0.51, 0.55], [15, 0, 0, 15])
    const note2Scale = useTransform(scrollYProgress, [0.40, 0.47, 0.55], [0.85, 1, 1.15])
    const note2Rotate = useTransform(scrollYProgress, [0.40, 0.47, 0.55], [2, 2, 12])

    // Note 3: 0.55 - 0.70
    const note3Y = useTransform(scrollYProgress, [0.55, 0.62, 0.70], [150, 0, -600])
    const note3Opacity = useTransform(scrollYProgress, [0.55, 0.58, 0.66, 0.70], [0, 1, 1, 0])
    const note3Blur = useTransform(scrollYProgress, [0.55, 0.58, 0.66, 0.70], [15, 0, 0, 15])
    const note3Scale = useTransform(scrollYProgress, [0.55, 0.62, 0.70], [0.85, 1, 1.15])
    const note3Rotate = useTransform(scrollYProgress, [0.55, 0.62, 0.70], [-2, -2, -12])

    // Note 4 (Special "You're Hired!"): 0.70 - 0.95 (stays longer!)
    const note4Y = useTransform(scrollYProgress, [0.70, 0.80, 0.98], [150, 0, -600])
    const note4Opacity = useTransform(scrollYProgress, [0.70, 0.75, 0.93, 0.98], [0, 1, 1, 0])
    const note4Blur = useTransform(scrollYProgress, [0.70, 0.75, 0.93, 0.98], [15, 0, 0, 15])
    const note4Scale = useTransform(scrollYProgress, [0.70, 0.80, 0.98], [0.85, 1, 1.15])
    const note4Rotate = useTransform(scrollYProgress, [0.70, 0.80, 0.98], [1, 1, 8])

    const noteAnimations = [
        { y: note1Y, opacity: note1Opacity, blur: note1Blur, scale: note1Scale, rotate: note1Rotate },
        { y: note2Y, opacity: note2Opacity, blur: note2Blur, scale: note2Scale, rotate: note2Rotate },
        { y: note3Y, opacity: note3Opacity, blur: note3Blur, scale: note3Scale, rotate: note3Rotate },
        { y: note4Y, opacity: note4Opacity, blur: note4Blur, scale: note4Scale, rotate: note4Rotate },
    ]

    return (
        <section
            ref={containerRef}
            className="relative min-h-[250vh] bg-transparent"
        >
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden relative z-10 pointer-events-none">

                {/* Background Title - Lower Z-Index */}
                <motion.h2
                    style={{
                        y: titleY,
                        opacity: titleOpacity,
                        filter: useTransform(titleBlur, (v) => `blur(${v}px)`),
                        scale: titleScale,
                        zIndex: 0
                    }}
                    className="text-4xl md:text-6xl font-bold text-center px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
                >
                    3 Steps to Get <br />
                    <span className="text-6xl md:text-8xl text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#a855f7,#6366f1,#3b82f6)] bg-[length:200%_100%] animate-shimmer leading-tight block mt-2">
                        Hired
                    </span>
                </motion.h2>

                {/* Sticky Notes - Higher Z-Index to overlap title */}
                <div className="relative w-full max-w-lg md:max-w-xl h-72 md:h-80 z-20">
                    {notes.map((note, i) => (
                        <motion.div
                            key={i}
                            style={{
                                y: noteAnimations[i].y,
                                opacity: noteAnimations[i].opacity,
                                rotate: noteAnimations[i].rotate,
                                scale: noteAnimations[i].scale,
                                filter: useTransform(noteAnimations[i].blur, (v) => `blur(${v}px)`)
                            }}
                            className="absolute inset-0 mx-4"
                        >
                            <div className={`relative w-full h-full rounded-lg shadow-2xl overflow-hidden border ${(note as any).isSpecial
                                ? 'bg-white dark:bg-zinc-100 border-zinc-200 flex items-center justify-center'
                                : 'bg-white dark:bg-zinc-100 border-zinc-200 p-8 md:p-10'
                                }`}>

                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                                                        linear-gradient(to bottom, #000 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px'
                                    }}
                                />

                                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-zinc-200/60 to-transparent" />
                                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-zinc-200/50 to-transparent" />

                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 shadow-sm rounded-sm bg-yellow-200/90" />

                                {(note as any).isSpecial ? (
                                    /* Special "You're Hired!" note - centered with shimmer, normal weight */
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#a855f7,#6366f1,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-center">
                                        You're Hired!
                                    </h3>
                                ) : (
                                    /* Regular notes */
                                    <>
                                        <span className={`absolute top-4 right-6 text-6xl md:text-7xl font-black ${note.numberColor}`}>
                                            {note.step}
                                        </span>

                                        <div className="relative mt-6 space-y-3">
                                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">
                                                {note.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-zinc-700">
                                                {note.description}
                                            </p>
                                            <p className="text-base md:text-lg text-zinc-500">
                                                {note.subtitle}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
