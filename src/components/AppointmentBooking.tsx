import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Info,
  CalendarCheck2,
  Download
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface BookingFormData {
  serviceId: string;
  format: 'online' | 'in-person';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
}

interface AppointmentBookingProps {
  initialServiceId?: string;
  className?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialServiceId,
  className = '',
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || siteConfig.services[0].id,
    format: 'online',
    date: '',
    timeSlot: '',
    fullName: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Available coaching options (7 choices as per prompt)
  const coachingServiceOptions = [
    ...siteConfig.services.map((s) => ({
      id: s.id,
      title: s.title,
      description: s.subtitle,
    })),
    {
      id: 'not-sure-help-me-choose',
      title: 'Not Sure — Help Me Choose',
      description: 'We will start with where you are and shape the session around your needs.',
    },
  ];

  // Helper to generate selectable dates (next 21 days, skipping Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 21; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0) {
        const isoString = d.toISOString().split('T')[0];
        const displayDay = d.toLocaleDateString('en-US', { weekday: 'short' });
        const displayDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        dates.push({ iso: isoString, displayDay, displayDate, fullDate: d });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleServiceChange = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, serviceId }));
    if (errors.serviceId) setErrors((prev) => ({ ...prev, serviceId: '' }));
  };

  const handleFormatChange = (format: 'online' | 'in-person') => {
    setFormData((prev) => ({ ...prev, format }));
  };

  const handleDateSelect = (dateIso: string) => {
    setFormData((prev) => ({ ...prev, date: dateIso, timeSlot: '' }));
    if (errors.date) setErrors((prev) => ({ ...prev, date: '' }));
  };

  const handleTimeSlotSelect = (timeSlot: string) => {
    setFormData((prev) => ({ ...prev, timeSlot }));
    if (errors.timeSlot) setErrors((prev) => ({ ...prev, timeSlot: '' }));
  };

  // Validation per step
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.serviceId) newErrors.serviceId = 'Please select a coaching service.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = 'Please select a preferred date.';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a preferred time slot.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Please acknowledge our privacy policy to proceed.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    } else if (currentStep === 3 && validateStep3()) {
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) {
      setCurrentStep(3);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = `MM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingReference(refCode);
      setIsSubmitting(false);
      setBookingConfirmed(true);
      setCurrentStep(5);
    }, 800);
  };

  const downloadIcsCalendar = () => {
    if (!formData.date || !formData.timeSlot) return;

    const title = `Free Clarity Call with Anagha Sonde (${selectedService?.title || 'Coaching'})`;
    const description = `Mind Matters Free Clarity Call with Anagha Sonde. Format: ${formData.format === 'online' ? 'Online Video Call' : 'In-person (Bengaluru)'}. Booking Ref: ${bookingReference}`;
    const location = formData.format === 'online' ? 'Google Meet / Zoom (Link to be shared)' : 'Bengaluru, India';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mind Matters by Anagha Sonde//Life Coaching//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `STATUS:CONFIRMED`,
      `TRANSP:OPAQUE`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `MindMatters-Session-${bookingReference || 'invite'}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedService = coachingServiceOptions.find((s) => s.id === formData.serviceId);

  return (
    <div className={`bg-white rounded-xl border border-[#E5E5E5] shadow-sm overflow-hidden ${className}`}>
      
      {/* Top Banner / Progress Indicator */}
      <div className="bg-[#111111] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#C62828]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
            Free Clarity Call
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
            {currentStep === 5 ? 'Clarity Call Scheduled' : 'Book a Free Clarity Call'}
          </h3>
        </div>
        
        {/* Step Numbers */}
        {currentStep < 5 && (
          <div className="flex items-center space-x-2 text-xs">
            {[1, 2, 3, 4].map((stepNum) => (
              <span
                key={stepNum}
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold transition-colors ${
                  stepNum === currentStep
                    ? 'bg-[#C62828] text-white'
                    : stepNum < currentStep
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-[#888888]'
                }`}
              >
                {stepNum}
              </span>
            ))}
            <span className="text-[#AAAAAA] ml-1 font-medium">Step {currentStep} of 4</span>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        
        {/* STEP 1: CHOOSE SERVICE & FORMAT */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-bold">
                Step 1: Choose Your Coaching Focus
              </h4>
              <p className="text-sm text-[#555555] mt-1">
                Select the area of your life you would like to explore together.
              </p>
            </div>

            {errors.serviceId && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded border border-red-200">
                {errors.serviceId}
              </p>
            )}

            {/* Service Selection Radio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
              {coachingServiceOptions.map((service) => {
                const isSelected = formData.serviceId === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceChange(service.id)}
                    className={`text-left p-4 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-[#C62828] bg-red-50/40 ring-1 ring-[#C62828]'
                        : 'border-[#E5E5E5] hover:border-[#C62828]/60 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <p className="font-serif text-sm font-bold text-[#111111]">
                        {service.title}
                      </p>
                      <span
                        className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                          isSelected
                            ? 'border-[#C62828] bg-[#C62828]'
                            : 'border-[#CCCCCC]'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </span>
                    </div>
                    <p className="text-xs text-[#555555] mt-1.5 line-clamp-2">
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Preferred Format */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <label className="block text-xs uppercase tracking-wider font-bold text-[#111111] mb-2.5">
                Preferred Session Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleFormatChange('online')}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    formData.format === 'online'
                      ? 'border-[#C62828] bg-red-50/40 ring-1 ring-[#C62828]'
                      : 'border-[#E5E5E5] hover:border-[#C62828]/60 bg-white'
                  }`}
                >
                  <p className="font-bold text-sm text-[#111111]">Online Session (Video Call)</p>
                  <p className="text-xs text-[#555555] mt-1">
                    Google Meet or Zoom from your private space. Available worldwide.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleFormatChange('in-person')}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    formData.format === 'in-person'
                      ? 'border-[#C62828] bg-red-50/40 ring-1 ring-[#C62828]'
                      : 'border-[#E5E5E5] hover:border-[#C62828]/60 bg-white'
                  }`}
                >
                  <p className="font-bold text-sm text-[#111111]">In-Person Session (Bengaluru)</p>
                  <p className="text-xs text-[#555555] mt-1">
                    Quiet, reflective space in Bengaluru, subject to schedule availability.
                  </p>
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-semibold rounded-sm transition-colors shadow-sm"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT DATE AND TIME */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif text-xl text-[#111111] font-bold">
                  Step 2: Select Date & Time Slot
                </h4>
                <p className="text-sm text-[#555555] mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C62828]" />
                  <span>Timezone: <strong>{siteConfig.contact.timezone}</strong></span>
                </p>
              </div>
            </div>

            {(errors.date || errors.timeSlot) && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded border border-red-200">
                {errors.date || errors.timeSlot}
              </p>
            )}

            {/* Date Picker Carousel / Grid */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#111111] mb-2.5">
                Select An Upcoming Date (Mon – Sat)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {availableDates.slice(0, 12).map((item) => {
                  const isSelected = formData.date === item.iso;
                  return (
                    <button
                      key={item.iso}
                      type="button"
                      onClick={() => handleDateSelect(item.iso)}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        isSelected
                          ? 'border-[#C62828] bg-[#111111] text-white shadow-sm ring-1 ring-[#C62828]'
                          : 'border-[#E5E5E5] hover:border-[#C62828] bg-white text-[#111111]'
                      }`}
                    >
                      <span className={`block text-[11px] font-bold uppercase ${isSelected ? 'text-[#C62828]' : 'text-[#666666]'}`}>
                        {item.displayDay}
                      </span>
                      <span className="block text-sm font-bold mt-0.5">
                        {item.displayDate}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Picker */}
            {formData.date ? (
              <div className="pt-4 border-t border-[#E5E5E5]">
                <label className="block text-xs uppercase tracking-wider font-bold text-[#111111] mb-2.5">
                  Select A Time Slot ({siteConfig.contact.timezone})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {siteConfig.sessionDetails.standardTimeSlots.map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => handleTimeSlotSelect(slot)}
                        className={`p-2.5 rounded-md border text-center text-xs font-bold transition-all ${
                          isSelected
                            ? 'border-[#C62828] bg-[#C62828] text-white shadow-xs'
                            : 'border-[#E5E5E5] hover:border-[#C62828] bg-[#F5F5F5] text-[#111111]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] text-center text-xs text-[#555555]">
                Please select a date above to view available time slots.
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#555555] hover:text-[#111111]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.date || !formData.timeSlot}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-semibold rounded-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Continue to Your Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: ENTER DETAILS */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-bold">
                Step 3: Your Contact Details
              </h4>
              <p className="text-sm text-[#555555] mt-1">
                Your contact information is used strictly to coordinate your session and send appointment confirmations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1.5">
                  Full Name <span className="text-[#C62828]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1.5">
                  Email Address <span className="text-[#C62828]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                  <input
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
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#111111] mb-1.5">
                  Phone Number <span className="text-xs text-[#777777] font-normal">(Optional — for WhatsApp/SMS reminder)</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                  />
                </div>
              </div>

              {/* Short Message (Optional) */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#111111] mb-1.5">
                  What would you like us to know before our session? <span className="text-xs text-[#777777] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#777777]" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="A brief note about what you would like to explore (you don't have to share sensitive details here; we will talk openly in our session)."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-[#E5E5E5] rounded-md bg-[#F5F5F5]/40 focus:outline-none focus:border-[#C62828] focus:ring-1 focus:ring-[#C62828]"
                  />
                </div>
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 rounded text-[#C62828] focus:ring-[#C62828] border-[#CCCCCC]"
                />
                <span className="text-xs text-[#555555] leading-relaxed">
                  I understand that my information is kept private and confidential in accordance with the{' '}
                  <a href="/privacy" target="_blank" className="text-[#111111] font-bold underline hover:text-[#C62828]">
                    Privacy Policy
                  </a>
                  . Life coaching is a reflective developmental process, not clinical psychotherapy or psychiatric care.
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-xs text-red-600 mt-1">{errors.privacyConsent}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#555555] hover:text-[#111111]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-semibold rounded-sm transition-colors shadow-sm"
              >
                <span>Review & Confirm</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW AND CONFIRM */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-xl text-[#111111] font-bold">
                Step 4: Review Your Booking Details
              </h4>
              <p className="text-sm text-[#555555] mt-1">
                Please take a moment to review your appointment summary before submitting.
              </p>
            </div>

            {/* Summary Card */}
            <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold block">
                    Selected Service
                  </span>
                  <p className="font-serif font-bold text-[#111111] mt-0.5">
                    {selectedService?.title}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold block">
                    Session Format
                  </span>
                  <p className="font-medium text-[#111111] mt-0.5">
                    {formData.format === 'online' ? 'Online Session (Google Meet / Zoom)' : 'In-Person (Bengaluru)'}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold block">
                    Date & Time
                  </span>
                  <p className="font-bold text-[#111111] mt-0.5 flex items-center gap-1.5">
                    <CalendarCheck2 className="w-4 h-4 text-[#C62828]" />
                    {formData.date} at {formData.timeSlot}
                  </p>
                  <span className="text-xs text-[#777777]">Timezone: {siteConfig.contact.timezone}</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold block">
                    Session Type
                  </span>
                  <p className="font-bold text-[#C62828] mt-0.5 text-base">
                    Free Clarity Call
                  </p>
                  <span className="text-[11px] text-[#777777]">Introductory consultation</span>
                </div>

                <div className="sm:col-span-2 pt-3 border-t border-[#E5E5E5]">
                  <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold block">
                    Your Contact
                  </span>
                  <p className="text-sm text-[#111111] font-medium mt-0.5">
                    {formData.fullName} ({formData.email}) {formData.phone ? `• ${formData.phone}` : ''}
                  </p>
                  {formData.message && (
                    <p className="text-xs text-[#555555] italic mt-1 bg-white p-2.5 rounded border border-[#E5E5E5]">
                      "{formData.message}"
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Transparent Status Note */}
            <div className="p-3.5 bg-red-50/50 rounded-lg border border-red-200 flex items-start gap-2.5 text-xs text-[#333333]">
              <Info className="w-4 h-4 shrink-0 text-[#C62828] mt-0.5" />
              <div>
                <strong>Appointment status:</strong> Submitting will record your preferred time slot and send a booking coordination request to Anagha Sonde. Your clarity call is formally scheduled upon receipt.
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#555555] hover:text-[#111111]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#C62828] hover:bg-[#8E1515] text-white text-sm font-bold rounded-sm transition-all shadow-md disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Confirming Reservation...</span>
                  </>
                ) : (
                  <>
                    <CalendarIcon className="w-4 h-4 text-white" />
                    <span>Confirm Clarity Call</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: CONFIRMATION STATE */}
        {currentStep === 5 && bookingConfirmed && (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-50 border-2 border-[#C62828] flex items-center justify-center mx-auto text-[#C62828]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#C62828] font-bold">
                Clarity Call Scheduled
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                Thank you, {formData.fullName}.
              </h4>
              <p className="text-sm text-[#555555] max-w-lg mx-auto mt-2">
                Your free clarity call request has been received. We look forward to creating a thoughtful, reflective space for you.
              </p>
            </div>

            {/* Reference & Details Badge */}
            <div className="p-5 rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-xs uppercase tracking-wider text-[#666666] font-semibold">
                  Reference Code
                </span>
                <span className="font-mono text-sm font-bold text-[#C62828] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {bookingReference}
                </span>
              </div>

              <div className="text-xs text-[#111111] space-y-1.5">
                <p>
                  <strong>Service Focus:</strong> {selectedService?.title}
                </p>
                <p>
                  <strong>Format:</strong> {formData.format === 'online' ? 'Online Video Call' : 'In-person (Bengaluru)'}
                </p>
                <p>
                  <strong>Date & Time:</strong> {formData.date} ({formData.timeSlot} {siteConfig.contact.timezone})
                </p>
              </div>
            </div>

            {/* Actions: Add to Calendar or Reset */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={downloadIcsCalendar}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C62828] hover:bg-[#8E1515] text-white text-xs font-bold rounded-sm transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Add to My Calendar (.ics)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setBookingConfirmed(false);
                  setFormData({
                    serviceId: siteConfig.services[0].id,
                    format: 'online',
                    date: '',
                    timeSlot: '',
                    fullName: '',
                    email: '',
                    phone: '',
                    message: '',
                    privacyConsent: false,
                  });
                }}
                className="px-4 py-2.5 border border-[#E5E5E5] text-xs font-semibold text-[#555555] hover:text-[#111111] hover:bg-[#F5F5F5] rounded-sm transition-colors"
              >
                Book Another Call
              </button>
            </div>

            <p className="text-[11px] text-[#777777] max-w-sm mx-auto">
              A copy of this appointment schedule is maintained. Once mail server credentials are configured in production, automatic confirmation emails will be dispatched to <strong>{formData.email}</strong>.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
