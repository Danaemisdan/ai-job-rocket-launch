"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo, useState, useEffect } from "react"
import { AnimatedButton } from "./animated-button"
import { ArrowRight } from "lucide-react"

export function NightModeSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [starsLayer1, setStarsLayer1] = useState<any[]>([])
    const [starsLayer2, setStarsLayer2] = useState<any[]>([])
    const [starsLayer3, setStarsLayer3] = useState<any[]>([])

    // Generate stars only on client side to avoid hydration mismatch
    useEffect(() => {
        const generate = (count: number, config: { topRange: [number, number], sizeRange: [number, number], durationRange: [number, number] }) =>
            Array.from({ length: count }, (_, i) => ({
                id: i,
                top: Math.random() * (config.topRange[1] - config.topRange[0]) + config.topRange[0],
                left: Math.random() * 100,
                size: Math.random() < 0.8 ? config.sizeRange[0] : config.sizeRange[1],
                duration: Math.random() * (config.durationRange[1] - config.durationRange[0]) + config.durationRange[0],
                delay: Math.random() * 2,
            }))

        setStarsLayer1(generate(60, { topRange: [-10, 110], sizeRange: [1, 2], durationRange: [2, 5] }))
        setStarsLayer2(generate(40, { topRange: [20, 140], sizeRange: [1, 2.5], durationRange: [1, 3] }))
        setStarsLayer3(generate(15, { topRange: [40, 160], sizeRange: [1, 1], durationRange: [2, 5] }))
    }, [])

    // Track scroll through this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Background darkness overlay opacity
    const overlayOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.75, 0.9], [0, 1, 1, 0])

    // Stars fade in/out and Blur out on exit
    const starsOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.75, 0.9], [0, 1, 1, 0])
    const starsBlur = useTransform(scrollYProgress, [0.75, 0.9], [0, 4])

    // Parallax Effects
    const starsY = useTransform(scrollYProgress, [0, 1], [0, -150])
    const stars2Y = useTransform(scrollYProgress, [0, 1], [0, -300])
    const stars3Y = useTransform(scrollYProgress, [0, 1], [0, -450])

    // Moon animation 
    const moonY = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [150, 0, 0, -200])
    const pathLength = useTransform(scrollYProgress, [0.25, 0.45, 0.65, 0.85], [0, 1, 1, 0])

    const contentOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [0, 1, 1, 0])
    const contentY = useTransform(scrollYProgress, [0.3, 0.45, 0.65, 0.8], [30, 0, 0, -30])

    return (
        <section ref={containerRef} className="relative h-[150vh] z-20">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Dark Background Overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-[#0a0a0f] z-0 pointer-events-none"
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center text-center">

                    {/* Moon & Stars Graphic */}
                    <div className="w-full h-64 md:h-96 relative flex items-center justify-center mb-8">
                        {/* Stars Background - Layer 1 (Slow, Small, Many) */}
                        <motion.div
                            style={{ opacity: starsOpacity, y: starsY, filter: useTransform(starsBlur, (v) => `blur(${v}px)`) }}
                            className="absolute inset-0 z-0"
                        >
                            {starsLayer1.map((star) => (
                                <motion.div
                                    key={`star-1-${star.id}`}
                                    className="absolute bg-white rounded-full"
                                    style={{
                                        top: `${star.top}%`,
                                        left: `${star.left}%`,
                                        width: `${star.size}px`,
                                        height: `${star.size}px`,
                                        boxShadow: "0 0 2px rgba(255,255,255,0.8)"
                                    }}
                                    animate={{
                                        opacity: [0.2, 0.8, 0.2],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{
                                        duration: star.duration,
                                        repeat: Infinity,
                                        delay: star.delay,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Stars Background - Layer 2 (Medium, Parallax) */}
                        <motion.div
                            style={{ opacity: starsOpacity, y: stars2Y, filter: useTransform(starsBlur, (v) => `blur(${v}px)`) }}
                            className="absolute inset-0 z-0"
                        >
                            {starsLayer2.map((star) => (
                                <motion.div
                                    key={`star-2-${star.id}`}
                                    className="absolute bg-blue-50 rounded-full"
                                    style={{
                                        top: `${star.top}%`,
                                        left: `${star.left}%`,
                                        width: `${star.size}px`,
                                        height: `${star.size}px`,
                                        boxShadow: "0 0 4px rgba(255,255,255,0.6)"
                                    }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [0.9, 1.5, 0.9]
                                    }}
                                    transition={{
                                        duration: star.duration,
                                        repeat: Infinity,
                                        delay: star.delay,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Stars Background - Layer 3 (Fast, Flares/Glow) */}
                        <motion.div
                            style={{ opacity: starsOpacity, y: stars3Y, filter: useTransform(starsBlur, (v) => `blur(${v}px)`) }}
                            className="absolute inset-0 z-0"
                        >
                            {starsLayer3.map((star) => (
                                <motion.div
                                    key={`star-3-${star.id}`}
                                    className="absolute flex items-center justify-center"
                                    style={{
                                        top: `${star.top}%`,
                                        left: `${star.left}%`,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1, 0.5],
                                        rotate: [0, 45, 90]
                                    }}
                                    transition={{
                                        duration: star.duration,
                                        repeat: Infinity,
                                        delay: star.delay * 2,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {/* Cross Flare Shape */}
                                    <div className="w-[1px] h-3 bg-white/80 absolute shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    <div className="w-3 h-[1px] bg-white/80 absolute shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Pencil Drawn Moon */}
                        <motion.svg
                            style={{ y: moonY }}
                            viewBox="0 0 200 200"
                            className="w-64 h-64 md:w-80 md:h-80 text-white fill-transparent stroke-current stroke-2 z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            {/* Moon Shape */}
                            <motion.path
                                d="M100,20 A80,80 0 1,1 100,180 A60,60 0 1,0 100,20 Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ pathLength }}
                            />
                            {/* Crater details */}
                            <motion.path
                                d="M110,60 A10,10 0 1,1 110,80 A10,10 0 1,1 110,60"
                                strokeLinecap="round"
                                style={{ pathLength, strokeDasharray: "4 4" }}
                                transition={{ delay: 0.2 }}
                            />
                            <motion.path
                                d="M140,100 A15,15 0 1,0 140,130 A15,15 0 1,0 140,100"
                                strokeLinecap="round"
                                style={{ pathLength, strokeDasharray: "3 6" }}
                                transition={{ delay: 0.3 }}
                            />
                            {/* Sleeping Zzzs */}
                            <motion.path
                                d="M160,50 L180,50 L160,70 L180,70"
                                strokeWidth="3"
                                style={{ pathLength }}
                                className="opacity-80"
                                transition={{ delay: 0.4 }}
                            />
                            <motion.path
                                d="M185,20 L195,20 L185,30 L195,30"
                                strokeWidth="2"
                                style={{ pathLength }}
                                className="opacity-60"
                                transition={{ delay: 0.5 }}
                            />
                        </motion.svg>
                    </div>

                    <motion.div
                        style={{ opacity: contentOpacity, y: contentY }}
                        className="space-y-6 relative z-10"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight pb-2">
                            We apply to thousands of jobs while you sleep.
                        </h2>

                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            JobFinder AI works 24/7 while you rest—scanning thousands of job boards and autofilling applications so you never miss an opportunity.
                        </p>

                        <div className="pt-8 flex justify-center">
                            <AnimatedButton href="/signup" className="min-w-[200px] h-14 text-lg">
                                Start Applying <ArrowRight className="ml-2 w-5 h-5" />
                            </AnimatedButton>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
