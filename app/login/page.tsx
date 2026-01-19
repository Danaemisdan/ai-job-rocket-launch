"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Sparkles, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const SECRET_CODE = "WWMN-0921-T4Y7-0I8O"

export default function BetaAccessPage() {
    const [code, setCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(false)

        // Simulate network delay for "hacking" effect
        await new Promise(resolve => setTimeout(resolve, 800))

        if (code === SECRET_CODE) {
            router.push("/dashboard")
        } else {
            setError(true)
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#09090b] flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8 space-y-2 flex flex-col items-center">
                    <div className="flex items-center justify-center mb-6 scale-125">
                        <span className="font-semibold text-3xl tracking-tight text-white">Jobfinder</span>
                        <span className="font-bold text-3xl text-blue-500 ml-1">AI</span>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Beta Access
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Enter Access Code</h1>
                    <p className="text-zinc-500">This is a private beta. Enter your invite code to continue.</p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="code" className="text-zinc-400 font-medium">Invitation Code</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                                <Input
                                    id="code"
                                    value={code}
                                    onChange={(e) => {
                                        setCode(e.target.value)
                                        setError(false)
                                    }}
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    className={cn(
                                        "bg-black/50 border-zinc-800 text-white pl-10 h-12 font-mono tracking-widest transition-all",
                                        "focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
                                        error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                                    )}
                                    autoComplete="off"
                                    autoCorrect="off"
                                />
                            </div>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-sm text-red-400 mt-1 pl-1"
                                >
                                    Invalid access code. Please try again.
                                </motion.p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 bg-white text-black hover:bg-zinc-200 transition-colors font-medium relative group overflow-hidden"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Unlock Access <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-zinc-600">
                            Authorized personnel only. <br />
                            JobFinder AI &copy; 2026
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
