import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, AlertCircle, ArrowLeft } from 'lucide-react';

import { siteConfig } from '../config/siteConfig';
import { GoldLine, GoldBadge } from '../components/GoldMotif';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F8F5EF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <GoldBadge>Legal & Ethical Commitments</GoldBadge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#171615]">
            Privacy Policy & Professional Boundaries
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#B49A6A]">
            Mind Matters by Anagha Sonde
          </p>
          <GoldLine />
          <p className="text-xs text-[#706B65]">
            Last updated: October 2026 • Valid for online visitors and coaching clients
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-xl border border-[#E8D8C6] text-sm sm:text-base text-[#706B65] leading-relaxed shadow-xs">
          
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B49A6A]" />
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              At <strong>Mind Matters by Anagha Sonde</strong> ("we", "us", or "our"), we respect your personal boundaries and privacy. This Privacy Policy details what information we collect when you use this website, submit an enquiry, or schedule a life coaching session, why we collect it, how it is handled, and your rights concerning your personal information.
            </p>
          </section>

          {/* Section 2: Information Collected */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615]">
              2. Information We Collect
            </h2>
            <p>
              We only collect information directly provided by you through our enquiry and appointment scheduling forms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Identifiers:</strong> Your full name, email address, and optional phone number.</li>
              <li><strong>Coaching Preferences:</strong> Selected coaching area (e.g. One-to-One, Life Transitions), preferred session format (Online or In-Person Bengaluru), and preferred date and time slot.</li>
              <li><strong>Voluntary Disclosures:</strong> Short optional notes or context you choose to provide in the message field.</li>
            </ul>
            <p className="text-xs italic bg-[#F8F5EF] p-3 rounded border border-[#E8D8C6]">
              <strong>Note on Sensitive Information:</strong> We strongly request that you do not submit sensitive psychological trauma histories, medical diagnoses, passwords, or financial payment credentials through website forms. Deep exploration of your journey is reserved for confidential one-to-one dialogue.
            </p>
          </section>

          {/* Section 3: Why and How Information is Used */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615]">
              3. Purpose and Legal Basis for Processing
            </h2>
            <p>
              Your information is processed strictly for legitimate communication and service coordination:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>To respond to your questions and discuss whether life coaching is appropriate for your situation.</li>
              <li>To schedule, confirm, reschedule, or cancel one-to-one coaching appointments.</li>
              <li>To deliver calendar invitations and video conference links (Google Meet or Zoom).</li>
            </ul>
            <p>
              We do not sell, rent, lease, or monetize your contact information or personal data under any circumstances.
            </p>
          </section>

          {/* Section 4: Data Retention & Deletion */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615]">
              4. Data Storage, Retention & Deletion Requests
            </h2>
            <p>
              Form submissions and appointment coordination notes are stored with reasonable security controls and accessed solely by Anagha Sonde. Information is retained only as long as necessary to maintain the client communication relationship or comply with legal requirements.
            </p>
            <p>
              <strong>Your Right to Deletion:</strong> You have the right at any time to request a summary of the data we hold regarding you or to request the deletion or correction of your contact details by emailing{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#171615] font-semibold underline hover:text-[#B49A6A]">
                {siteConfig.contact.email}
              </a>
              . Requests are processed within 14 business days.
            </p>
          </section>

          {/* Section 5: Limits of Confidentiality & Legal Boundaries */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B49A6A]" />
              5. Confidentiality & Ethical Boundaries
            </h2>
            <p>
              All conversations during life coaching sessions are treated with strict professional discretion. However, in accordance with professional ethics and legal standards, we do not make absolute confidentiality promises. Confidentiality may be limited under the following specific circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Where there is an imminent risk of severe harm or danger to you or another person.</li>
              <li>Where disclosure is mandated by applicable law, court subpoena, or statutory authorities.</li>
              <li>Where disclosures involve child abuse, elder abuse, or vulnerable adult exploitation.</li>
            </ul>
          </section>

          {/* Section 6: Non-Medical & Non-Psychotherapy Notice */}
          <section className="space-y-3 p-5 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-950">
            <h2 className="font-serif text-lg font-bold flex items-center gap-2 text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-700" />
              6. Professional Scope & Healthcare Disclaimer
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>Life coaching is not therapy:</strong> The life coaching services offered through Mind Matters by Anagha Sonde are aimed at self-discovery, emotional awareness, values clarification, and personal development. Life coaching is <strong>not</strong> a substitute for professional mental healthcare, clinical psychotherapy, psychoanalysis, psychiatric evaluation, or medical diagnosis.
            </p>
            <p className="text-xs leading-relaxed">
              If you are currently experiencing acute mental health distress, severe depression, suicidal ideation, or trauma requiring clinical attention, please seek immediate guidance from a certified mental health professional, clinical psychologist, or your local emergency medical services.
            </p>
          </section>

          {/* Section 7: Third-Party Tools & Cookies */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#171615]">
              7. Third-Party Services
            </h2>
            <p>
              Depending on your session format, communications may be facilitated via third-party providers such as Google (Google Meet / Workspace) or Zoom. These providers have their own independent privacy terms. This website does not use tracking or behavioral advertising cookies.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section className="space-y-3 pt-4 border-t border-[#E8D8C6]">
            <h2 className="font-serif text-xl font-bold text-[#171615]">
              8. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions about this policy or your personal data, please contact:
            </p>
            <p className="text-sm font-semibold text-[#171615]">
              Anagha Sonde • Mind Matters<br />
              Bengaluru, India<br />
              Email:{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#B49A6A] hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171615] hover:text-[#B49A6A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
