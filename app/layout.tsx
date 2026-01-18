import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { IntroSplash } from "@/components/intro-splash";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JobFinder AI - The #1 AI Job Search Engine & Application Automator",
    template: "%s | JobFinder AI"
  },
  description: "Find jobs 10x faster with the world's most advanced AI Job Search Agent. Automate applications, optimize resumes with LLMs, and land UI/UX, Engineering, and Tech roles instantly.",
  keywords: ["Jobs", "Job Search", "AI Job Finder", "Automated Job Application", "UI Jobs", "Remote Jobs", "Software Engineer Jobs", "Resume Builder AI", "Find Jobs Near Me"],
  authors: [{ name: "JobFinder AI Team" }],
  creator: "JobFinder AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobfinder.ai",
    title: "JobFinder AI - Find your dream job 10x faster",
    description: "Stop applying manually. Let our AI Agent scan, filter, and apply to thousands of jobs for you while you sleep.",
    siteName: "JobFinder AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobFinder AI - The Future of Hiring",
    description: "The #1 tool to automate your job search. Join the beta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased")}>
        <IntroSplash>
          {children}
        </IntroSplash>
      </body>
    </html>
  );
}
