"use client"

import { cn } from "@/lib/utils"
import React from "react"
import Link from "next/link"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    href?: string
    variant?: "primary" | "secondary"
}

export function AnimatedButton({
    children,
    className,
    href,
    variant = "primary",
    onClick,
    ...props
}: AnimatedButtonProps) {
    const isPrimary = variant === "primary"

    // Base classes for the inner content
    const contentClasses = cn(
        "relative w-full text-center transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 z-10",
        isPrimary
            ? "text-white group-hover:text-blue-600"
            : "text-zinc-900 group-hover:text-white"
    )

    // sweep classes
    const sweepClasses = cn(
        "w-64 h-64 rounded rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0",
        isPrimary
            ? "bg-white"
            : "bg-blue-600"
    )

    const containerClasses = cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all rounded-lg group cursor-pointer",
        isPrimary
            ? "bg-blue-600 outline outline-1 outline-blue-600 shadow-lg shadow-blue-600/30"
            : "bg-white outline outline-1 outline-zinc-200 hover:outline-blue-600",
        className
    )

    if (href) {
        return (
            <Link href={href} className={containerClasses}>
                <span className={sweepClasses} />
                <span className={contentClasses}>
                    {children}
                </span>
            </Link>
        )
    }

    return (
        <button
            onClick={onClick}
            className={containerClasses}
            {...props}
        >
            <span className={sweepClasses} />
            <span className={contentClasses}>
                {children}
            </span>
        </button>
    )
}
