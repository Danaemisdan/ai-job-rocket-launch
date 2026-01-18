import Link from "next/link"
import { Bot, Home, LayoutDashboard, Settings, FileText, Briefcase, PlusCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col h-auto md:h-screen sticky top-0">
                <div className="flex h-14 items-center border-b border-border/40 px-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                        <span className="text-primary">Jobfinder</span> AI
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-4">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary bg-primary/10 transition-all hover:text-primary">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link href="/dashboard/jobs" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50">
                            <Briefcase className="h-4 w-4" />
                            Jobs
                        </Link>
                        <Link href="/dashboard/resumes" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50">
                            <FileText className="h-4 w-4" />
                            Resumes
                        </Link>
                        <Link href="/dashboard/assistant" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50">
                            <Bot className="h-4 w-4" />
                            AI Assistant
                        </Link>
                        <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/50">
                            <Settings className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4 border-t border-border/40">
                    <Link href="/">
                        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-destructive">
                            <LogOut className="h-4 w-4" /> Log out
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b border-border/40 bg-background/95 backdrop-blur px-6 lg:h-[60px]">
                    <div className="w-full flex-1">
                        <h1 className="text-lg font-semibold">Dashboard</h1>
                    </div>
                    <Button size="sm" className="hidden md:flex gap-2">
                        <PlusCircle className="h-4 w-4" /> New Application
                    </Button>
                </header>
                <div className="flex-1 p-4 md:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
