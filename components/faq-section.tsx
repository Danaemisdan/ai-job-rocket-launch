"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950" id="faq">
            <div className="container px-4 mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                        Common Questions about <span className="text-primary">JobFinder AI</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about the future of job hunting.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <AccordionTrigger className="text-lg font-semibold">What is JobFinder AI and how does it automate job applications?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            JobFinder AI is an advanced <strong>AI Job Search Agent</strong> that completely automates the process of finding and applying for jobs. Unlike manual searching, our AI proactively scans thousands of listings across major platforms (LinkedIn, Indeed, Glassdoor), filters them by your specific preferences, and submits tailored applications on your behalf. It uses Large Language Models (LLMs) to rewrite your resume and generate unique cover letters for every single application, ensuring maximum compatibility with Applicant Tracking Systems (ATS).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <AccordionTrigger className="text-lg font-semibold">Is JobFinder AI safe to use with my personal data?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            Yes. Security is our top priority. JobFinder AI runs securely and your personal data (resume, contact info) is only used for the strict purpose of submitting job applications. We do not sell your data to third parties. Our <strong>automated job application</strong> process mimics human behavior to ensure your accounts remain safe and unflagged on all platforms.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <AccordionTrigger className="text-lg font-semibold">Can I use JobFinder AI for UI/UX Design and Software Engineering jobs?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            Absolutely. JobFinder AI is highly effective for specialized roles such as <strong>UI Jobs</strong>, <strong>Software Engineering</strong>, <strong>Product Management</strong>, and <strong>Data Science</strong>. You can configure specific keywords (e.g., "React", "Figma", "Python") to target exactly the roles you want. Our AI understands role-specific nuances, ensuring your resume highlights the right skills for the specific job description.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <AccordionTrigger className="text-lg font-semibold">Does JobFinder AI work better than manual applying?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            Statistically, yes. The average job seeker applies to 1-2 jobs per hour. <strong>JobFinder AI</strong> can apply to hundreds while you sleep. By playing the numbers game with high-quality, AI-tailored applications, you exponentially increase your chances of getting noticed. Our users typically see a 5x increase in interview requests within the first week of using our <strong>AI job applier</strong>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                        <AccordionTrigger className="text-lg font-semibold">What makes JobFinder AI the best AI for job searching?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                            Unlike generic bots, JobFinder AI uses state-of-the-art <strong>LLM optimization</strong> (similar to ChatGPT and Gemini) to understand context. It doesn't just spam; it "reads" the job description and customizes your application to match. Whether you are looking for remote work, hybrid roles, or specific tech stacks, our <strong>Job Applying AI</strong> adapts to your needs, making it the most powerful tool in your career arsenal.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
