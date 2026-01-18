"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { Tab } from "@/components/ui/pricing-tab"

const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

const TIERS: PricingTier[] = [
    {
        name: "Starter",
        price: { monthly: 0, yearly: 0 },
        description: "Perfect for testing the waters.",
        features: [
            "5 automated applications/day",
            "Basic resume scanning",
            "Email support",
            "Job tracking dashboard"
        ],
        cta: "Get Started"
    },
    {
        name: "Standard",
        price: { monthly: 29, yearly: 290 },
        description: "For serious job seekers.",
        features: [
            "50 automated applications/day",
            "Advanced ATS keyword optimization",
            "Cover letter generation",
            "Priority email support",
            "Weekly performance report"
        ],
        cta: "Get Started"
    },
    {
        name: "Pro",
        price: { monthly: 49, yearly: 490 },
        description: "The ultimate career accelerator.",
        features: [
            "Unlimited automated applications",
            "Human-level resume rewriting",
            "Auto-followup emails",
            "LinkedIn profile optimization",
            "24/7 Priority support",
            "Interview prep chatbot"
        ],
        cta: "Get Started",
        highlighted: true,
        popular: true
    },
    {
        name: "Enterprise",
        price: { monthly: 199, yearly: 1990 },
        description: "For agencies and power users.",
        features: [
            "Manage multiple profiles",
            "API Access",
            "Dedicated account manager",
            "Custom integration support",
            "White-label reports"
        ],
        cta: "Contact Sales"
    }
]

export function PricingSection() {
    const [selectedFrequency, setSelectedFrequency] = React.useState(PAYMENT_FREQUENCIES[0])

    return (
        <section className="flex flex-col items-center gap-10 py-24 relative overflow-hidden">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

            <div className="space-y-7 text-center relative z-10 px-4">
                <div className="space-y-4">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground">Choose the plan that fits your career goals. Cancel anytime.</p>
                </div>
                <div className="mx-auto flex w-fit rounded-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-1">
                    {PAYMENT_FREQUENCIES.map((freq) => (
                        <Tab
                            key={freq}
                            text={freq}
                            selected={selectedFrequency === freq}
                            setSelected={setSelectedFrequency}
                            discount={freq === "yearly"}
                        />
                    ))}
                </div>
            </div>

            <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4 px-4 relative z-10">
                {TIERS.map((tier) => (
                    <PricingCard
                        key={tier.name}
                        tier={tier}
                        paymentFrequency={selectedFrequency}
                    />
                ))}
            </div>
        </section>
    )
}
