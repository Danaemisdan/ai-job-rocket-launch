import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, FileText, Briefcase, Calendar } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground font-medium text-green-500">
                            +12% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">
                            Scheduled for this week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8.5%</div>
                        <p className="text-xs text-muted-foreground font-medium text-green-500">
                            +2.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Credits Remaining</CardTitle>
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-muted-foreground">
                            Refills on Feb 12, 2026
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Job Matches</CardTitle>
                        <CardDescription>
                            AI-curated roles that match your profile perfectly.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: "Senior Frontend Engineer", company: "Vercel", match: "98%" },
                                { title: "Product Designer", company: "Linear", match: "95%" },
                                { title: "Full Stack Developer", company: "OpenAI", match: "92%" },
                                { title: "UX Engineer", company: "GitHub", match: "89%" },
                            ].map((job, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{job.title}</p>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-sm font-medium text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">{job.match} Match</div>
                                        <Button size="sm" variant="outline">Apply</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Application Status</CardTitle>
                        <CardDescription>
                            Track your recent applications.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { company: "Stripe", status: "Interview", date: "Today" },
                                { company: "Netflix", status: "Applied", date: "Yesterday" },
                                { company: "Airbnb", status: "Rejected", date: "2 days ago" },
                            ].map((app, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{app.company}</p>
                                        <p className="text-xs text-muted-foreground">{app.date}</p>
                                    </div>
                                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${app.status === 'Interview' ? 'bg-blue-500/10 text-blue-500' :
                                            app.status === 'Applied' ? 'bg-yellow-500/10 text-yellow-600' :
                                                'bg-red-500/10 text-red-500'
                                        }`}>
                                        {app.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
