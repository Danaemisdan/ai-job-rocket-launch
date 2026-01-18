"use client"

import { Check, X, Minus } from "lucide-react"

const comparisonFeatures = [
    {
        name: "Speed",
        manual: "1 app / hour",
        other: "50 apps / day",
        jobfinder: "Unlimited"
    },
    {
        name: "Automation",
        manual: "0% (Manual)",
        other: "50% (Semi-Auto)",
        jobfinder: "100% (Fully Auto)"
    },
    {
        name: "Tailoring",
        manual: "Generic Resume",
        other: "Basic Keywords",
        jobfinder: "Deep AI Rewrite"
    },
    {
        name: "Effort",
        manual: "High Burnout",
        other: "Requires Supervision",
        jobfinder: "Zero Touch"
    },
    {
        name: "Response Rate",
        manual: "< 1%",
        other: "~ 5%",
        jobfinder: "Top 10%"
    }
]

export function ComparisonSection() {
    return (
        <section className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-950/50">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                        Why choose <span className="text-primary">Jobfinder AI?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        The unfair advantage for your career.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-card shadow-xl ring-1 ring-zinc-900/5">
                    {/* Header */}
                    <div className="grid grid-cols-4 bg-zinc-50/80 dark:bg-zinc-900/80 p-6 font-bold text-muted-foreground border-b border-zinc-100 dark:border-zinc-800 backdrop-blur-sm">
                        <div className="text-sm md:text-base uppercase tracking-wider pl-2">Feature</div>
                        <div className="text-center text-sm md:text-base uppercase tracking-wider">Manual</div>
                        <div className="text-center text-sm md:text-base uppercase tracking-wider">Other AI</div>
                        <div className="text-center text-primary text-sm md:text-base uppercase tracking-wider">JobFinder AI</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {comparisonFeatures.map((feature, i) => (
                            <div key={i} className="grid grid-cols-4 p-6 items-center hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors">
                                <div className="font-semibold text-foreground pl-2">{feature.name}</div>

                                {/* Manual */}
                                <div className="text-center text-muted-foreground flex flex-col items-center gap-2">
                                    <X className="w-6 h-6 text-red-500/50" />
                                    <span className="text-sm md:text-base">{feature.manual}</span>
                                </div>

                                {/* Other AI */}
                                <div className="text-center text-muted-foreground flex flex-col items-center gap-2">
                                    <Minus className="w-6 h-6 text-orange-500/50" />
                                    <span className="text-sm md:text-base">{feature.other}</span>
                                </div>

                                {/* JobFinder */}
                                <div className="text-center flex flex-col items-center gap-2 font-bold text-foreground">
                                    <div className="bg-green-500/10 p-1.5 rounded-full text-green-600 shadow-sm shadow-green-500/20">
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm md:text-base">{feature.jobfinder}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
