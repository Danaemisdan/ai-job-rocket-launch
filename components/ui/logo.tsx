"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("w-8 h-8", className)}
            {...props}
        >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" className="text-blue-600" fill="currentColor" opacity="0.2" stroke="none" />
            <path d="M12 22v-8" className="text-white" stroke="currentColor" />
            <path d="M2 12l10-5 10 5" className="text-blue-500" stroke="currentColor" strokeWidth="2.5" />
            <path d="M12 7L2.5 12 12 17 21.5 12 12 7z" className="text-white" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    )
}

export function BrandLogo({ className }: { className?: string }) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)" />
            <path d="M20 10L28.6603 25H11.3397L20 10Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#1E40AF" />
                </linearGradient>
            </defs>
        </svg>
    )
}
