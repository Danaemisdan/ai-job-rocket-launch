"use client"

import * as React from "react"
import { BadgeCheck } from "lucide-react"
import NumberFlow from "@number-flow/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/animated-button"
import { Card } from "@/components/ui/card"

export interface PricingTier {
    name: string
    price: Record<string, number | string>
    description: string
    features: string[]
    cta: string
    highlighted?: boolean
    popular?: boolean
}

interface PricingCardProps {
    tier: PricingTier
    paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
    const price = tier.price[paymentFrequency]
    const isHighlighted = tier.highlighted
    const isPopular = tier.popular

    return (
        <Card
            className={cn(
                "relative flex flex-col gap-8 overflow-hidden p-6 transition-all duration-300",
                isHighlighted
                    ? "bg-zinc-900 text-white shadow-2xl scale-105 z-10 border-zinc-800"
                    : "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700",
                isPopular && "ring-2 ring-blue-500"
            )}
        >
            {/* {isHighlighted && <HighlightedBackground />}  <-- User asked to remove the 'weird grid pattern' */}

            <div className="flex justify-between items-start">
                <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
                    {tier.name}
                </h2>
                {isPopular && (
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20">
                        Most Popular
                    </Badge>
                )}
            </div>

            <div className="relative h-12">
                {typeof price === "number" ? (
                    <>
                        <NumberFlow
                            format={{
                                style: "currency",
                                currency: "USD",
                                trailingZeroDisplay: "stripIfInteger",
                            }}
                            value={price}
                            className="text-4xl font-medium"
                        />
                        <p className="-mt-2 text-xs text-muted-foreground opacity-80">
                            Per month/user
                        </p>
                    </>
                ) : (
                    <h1 className="text-4xl font-medium">{price}</h1>
                )}
            </div>

            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-medium opacity-90">{tier.description}</h3>
                <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                        <li
                            key={index}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium",
                                isHighlighted ? "text-zinc-300" : "text-zinc-500"
                            )}
                        >
                            <BadgeCheck className={cn("h-4 w-4", isHighlighted ? "text-blue-400" : "text-blue-500")} />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-2">
                <AnimatedButton
                    href="/login"
                    className="w-full"
                    variant={isHighlighted ? "primary" : "secondary"}
                >
                    {tier.cta}
                </AnimatedButton>
            </div>
        </Card>
    )
}

// Removing the Grid Background component as per user feedback ("Why does one of them have grid pattern")
