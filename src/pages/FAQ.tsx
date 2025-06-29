
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import FloatingBlobs from "@/components/landing/FloatingBlobs";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";

const FAQ = () => {
  const faqs = [
    {
      question: "What is TheJobFinderAI and how does this AI job bot automate my job applications on platforms like LinkedIn and Indeed?",
      answer: "TheJobFinderAI is a powerful AI job apply tool that uses OpenAI-powered automation to scan remote, freelance, part-time, and full-time jobs on LinkedIn, Indeed, Naukri, Glassdoor, and more—auto-filling your resume and submitting applications in one click."
    },
    {
      question: "Can I use TheJobFinderAI to apply for freelance gigs on Upwork and gig economy sites?",
      answer: "Yes. Our AI automation supports freelance jobs on Upwork, Fiverr, and other gig economy platforms—instantly matching your skills in content writing, data entry, software development, and more."
    },
    {
      question: "How does the AI ensure my LinkedIn profile and resume are optimized for ATS (Applicant Tracking System) screening?",
      answer: "TheJobFinderAI analyzes job descriptions from Monster, AngelList, and corporate career pages, then inserts relevant keywords and action verbs—ensuring ATS-friendly resumes for recruiter searches and talent acquisition."
    },
    {
      question: "Does TheJobFinderAI work with work-from-home and remote job listings on Google Jobs and Naukri?",
      answer: "Absolutely. We integrate with Google Jobs API, Naukri, and remote job boards—automating applications for work-from-home roles, remote developer positions, and virtual assistant jobs."
    },
    {
      question: "What security measures protect my personal data when auto-applying to part-time and full-time jobs?",
      answer: "TheJobFinderAI uses end-to-end encryption, secure OAuth for LinkedIn and Indeed logins, and GDPR-compliant storage—keeping your career data safe while our AI job bot handles auto-apply tasks."
    },
    {
      question: "Can hiring managers and staffing agencies use TheJobFinderAI to post jobs or source talent?",
      answer: "Currently focused on job seekers, but soon we'll add AI-powered job posting, talent acquisition dashboards, and recruiter tools for staffing agencies, improving employer branding and candidate matching."
    },
    {
      question: "How quickly can TheJobFinderAI apply to hundreds of jobs across multiple brands like Glassdoor, Monster, and AngelList?",
      answer: "In under 5 minutes, our AI job apply tool can submit hundreds of applications to Glassdoor, Monster, AngelList, LinkedIn, and Indeed—boosting your chance of interviews."
    },
    {
      question: "Does the AI support entry-level and fresher jobs, including internships and graduate trainee programs?",
      answer: "Yes. We cover entry-level positions, graduate schemes, BPO chat support, and internship postings—auto-applying to 'fresher jobs,' 'graduate programs,' and 'internships near me.'"
    },
    {
      question: "Can I pause, resume, or customize which jobs the AI applies to?",
      answer: "You have full control—filter by role (developer, content writer, data analyst), location (remote, on-site), or platform (LinkedIn, Indeed), then pause or resume the auto-apply process."
    },
    {
      question: "How does TheJobFinderAI help with resume optimization and interview preparation?",
      answer: "Our AI suggests resume tweaks with skill-based keywords, action verbs, and quantifiable achievements—plus recommends top interview questions for roles in marketing, finance, healthcare, and tech."
    },
    {
      question: "Is there a free trial and how do I upgrade to premium for priority auto-apply and dedicated ChatGPT resume editing?",
      answer: "Start with our free WhatsApp or Telegram bot trial—then upgrade for premium features like priority job matching, ChatGPT-powered resume editing, and 24/7 auto-apply on multiple job portals."
    },
    {
      question: "Which industries and job categories does TheJobFinderAI cover—from software developer to digital marketing and HR roles?",
      answer: "We cover software development, digital marketing, HR executive, sales, customer service, data entry, virtual assistant, and more—automating job applications across all major industries."
    },
    {
      question: "How does TheJobFinderAI handle application tracking and follow-up with potential employers?",
      answer: "Our AI job bot tracks all submitted applications across LinkedIn, Indeed, and Naukri—sending automated follow-ups to hiring managers and providing real-time status updates on your job search progress."
    },
    {
      question: "Can TheJobFinderAI help with career development and upskilling recommendations based on job market trends?",
      answer: "Yes. Our AI analyzes job descriptions from top companies and suggests relevant upskilling courses, certifications, and career development paths—helping you stay competitive in the job market."
    },
    {
      question: "Does TheJobFinderAI integrate with referral programs and professional networks for better job opportunities?",
      answer: "Our AI scans for referral programs on LinkedIn and company career pages, automatically connecting you with existing employees and leveraging professional networks to increase your chances of getting hired."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter relative overflow-hidden">
      <FloatingBlobs />
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-accent/30 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-text">
              Everything you need to know about TheJobFinderAI's job automation bot
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-semibold text-deep-black pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-deep-black mb-4">
              Ready to Automate Your Job Search?
            </h2>
            <p className="text-muted-text mb-8">
              Join thousands of job seekers using TheJobFinderAI to land their dream jobs faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-success hover:bg-success/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Try Now on WhatsApp
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Try Now on Telegram
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default FAQ;
