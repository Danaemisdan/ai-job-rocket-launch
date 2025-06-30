
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-deep-black mb-8">Privacy Policy</h1>
          <div className="text-muted-text text-sm mb-8">
            Last updated: January 1, 2025
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">1. Introduction</h2>
                <p className="text-muted-text leading-relaxed">
                  Welcome to The Job Finder AI ("we," "our," or "us"). We operate the website https://www.thejobfinderai.com 
                  and provide AI-powered job search automation services. This Privacy Policy explains how we collect, use, 
                  and protect your personal information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-deep-black mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 text-muted-text space-y-1">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Job preferences and career interests</li>
                      <li>Resume data and professional information</li>
                      <li>Education and work experience details</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-deep-black mb-2">Technical Information</h3>
                    <ul className="list-disc pl-6 text-muted-text space-y-1">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Usage data and website analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">3. How We Collect Information</h2>
                <ul className="list-disc pl-6 text-muted-text space-y-2">
                  <li>Through registration forms and account creation</li>
                  <li>When you upload resumes or provide job preferences</li>
                  <li>Via cookies and web analytics tools</li>
                  <li>Through your interactions with our AI chatbots</li>
                  <li>From third-party integrations (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">4. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-muted-text space-y-2">
                  <li>To provide and improve our job search automation services</li>
                  <li>To generate personalized job recommendations</li>
                  <li>To create and optimize your resume</li>
                  <li>To communicate with you about our services</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-text leading-relaxed mb-4">
                  We do not sell your personal information. We may share your data only in these limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-text space-y-2">
                  <li>With job platforms and APIs (securely and only as needed for job applications)</li>
                  <li>With service providers who help us operate our platform</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">6. Data Security</h2>
                <p className="text-muted-text leading-relaxed">
                  We implement industry-standard security measures to protect your data, including encryption, 
                  secure servers, and regular security audits. However, no system is 100% secure, and we cannot 
                  guarantee absolute security of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">7. Your Rights</h2>
                <p className="text-muted-text leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-text space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Restrict or object to data processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">8. Cookies</h2>
                <p className="text-muted-text leading-relaxed">
                  We use cookies to enhance your experience, analyze website traffic, and provide personalized content. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">9. Data Retention</h2>
                <p className="text-muted-text leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and comply 
                  with legal obligations. You can request data deletion at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">10. Contact Us</h2>
                <p className="text-muted-text leading-relaxed">
                  If you have questions about this Privacy Policy or want to exercise your rights, contact us at:
                </p>
                <div className="mt-4 text-muted-text">
                  <p>Email: support@jobfinderai.in</p>
                  <p>Address: JobFinderAI Pvt. Ltd., Connaught Place, Delhi, India</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">11. Governing Law</h2>
                <p className="text-muted-text leading-relaxed">
                  This Privacy Policy is governed by the laws of India. Any disputes will be resolved in the 
                  courts of Delhi, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-black mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-text leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes 
                  via email or website notice.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
