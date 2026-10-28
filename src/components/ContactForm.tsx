import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: siteConfig.services[0].id,
    format: 'online',
    contactMethod: 'email',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please acknowledge the privacy policy to submit.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate honest submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-sm p-6 sm:p-8">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-[#C62828] flex items-center justify-center mx-auto text-[#C62828]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#111111]">
            Message Received
          </h3>
          <p className="text-sm text-[#555555] max-w-md mx-auto">
            Thank you, {formData.name}. Your enquiry has been received with discretion. Anagha will be in touch with you shortly via your preferred contact method.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: siteConfig.services[0].id,
                  format: 'online',
                  contactMethod: 'email',
                  message: '',
                  privacyConsent: false,
                });
              }}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F5F5F5] hover:bg-[#E5E5E5] rounded transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
              Let's begin with a conversation.
            </h3>
            <p className="text-sm text-[#555555] mt-1">
              You don't have to have everything figured out before reaching out. Tell me a little about what brings you here, and we can explore whether coaching feels right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-[#111111] mb-1">
                Your Name <span className="text-[#C62828]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                />
              </div>
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-[#111111] mb-1">
                Email Address <span className="text-[#C62828]">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                />
              </div>
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone (Optional) */}
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-[#111111] mb-1">
                Phone Number <span className="text-xs text-[#777777] font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91..."
                  className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                />
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label htmlFor="contact-method" className="block text-xs font-bold text-[#111111] mb-1">
                Preferred Reply Method
              </label>
              <select
                id="contact-method"
                value={formData.contactMethod}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
              >
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp / Text</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>

            {/* Coaching Focus */}
            <div>
              <label htmlFor="contact-service" className="block text-xs font-bold text-[#111111] mb-1">
                Preferred Coaching Service
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
              >
                {siteConfig.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
                <option value="not-sure">Not Sure — Help Me Choose</option>
                <option value="general-inquiry">General Question / Other</option>
              </select>
            </div>

            {/* Preferred Session Format */}
            <div>
              <label htmlFor="contact-format" className="block text-xs font-bold text-[#111111] mb-1">
                Preferred Session Format
              </label>
              <select
                id="contact-format"
                value={formData.format}
                onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
              >
                <option value="online">Online Video Session (Worldwide)</option>
                <option value="in-person">In-Person Session (Bengaluru, subject to availability)</option>
              </select>
            </div>
          </div>

          {/* Short Optional Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold text-[#111111] mb-1">
              Short Message <span className="text-xs text-[#777777] font-normal">(Optional — a brief note on what brings you here)</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Feel free to share what you hope to gain from coaching. We encourage keeping sensitive personal details for the one-to-one conversation."
                className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
              />
            </div>
          </div>

          {/* Privacy Consent */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-1 rounded text-[#C62828] focus:ring-[#C62828] border-[#CCCCCC]"
              />
              <span className="text-xs text-[#555555] leading-relaxed">
                I acknowledge the{' '}
                <a href="/privacy" target="_blank" className="text-[#111111] font-bold underline hover:text-[#C62828]">
                  Privacy Policy
                </a>{' '}
                and understand that life coaching is a reflective developmental process, not clinical psychotherapy or emergency crisis care.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="text-xs text-red-600 mt-1">{errors.privacyConsent}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-sm hover:shadow"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Confidential Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
