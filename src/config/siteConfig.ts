export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  suitableFor: string;
  ctaText: string;
  slug: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookEdition {
  title: string;
  format: string;
  retailer: string;
  url: string; // Placeholder or verified link
  available: boolean;
}

export interface TestimonialItem {
  id: string;
  theme: string;
  quote: string;
  attribution: string;
  context: string;
  isPlaceholder: boolean;
}


export const siteConfig = {
  brand: {
    name: "Mind Matters by Anagha Sonde",
    shortName: "Mind Matters",
    tagline: "Love life, Live life",
    heroHeadline: "Come back to yourself. Discover a life that feels like yours.",
    heroSubheadline:
      "Life can leave us feeling overwhelmed, disconnected, uncertain, or caught between who we are and who we think we should be. Sometimes, all we need is a safe space to pause, reflect, and understand ourselves a little better.",
    heroParagraph2:
      "Through personalised life coaching, I offer a space for honest conversations, deeper self-awareness, and meaningful personal growth — at your own pace, and without judgment.",
    heroPledge: "Your journey. Your pace. Your space to be heard.",
    founderName: "Anagha Sonde",
    founderRole: "Life Coach & Author",
    founderCertification: "Life Coaching & Counselling certification through Achology (2020)",
    foundedYear: "2022",
    claimedClients: "Approx. 150 clients supported (to be verified before publication)",
    portraitPath: "/assets/anagha-sonde.jpg",
  },

  contact: {
    // Editable contact details - replace with verified founder details
    email: "contact@mindmattersbyanagha.com",
    displayEmail: "contact@mindmattersbyanagha.com",
    phone: "+91 (Contact available upon booking)",
    displayPhone: "Available upon confirmed booking",
    location: "Bengaluru, India & Online Worldwide",
    city: "Bengaluru",
    timezone: "Asia/Kolkata (IST)",
    availabilityNotice: "Appointments available Monday to Saturday by prior reservation.",
    social: {
      instagram: "https://instagram.com/mindmattersbyanagha", // Placeholder
      linkedin: "https://linkedin.com/in/anagha-sonde", // Placeholder
      youtube: "",
    },
  },

  sessionDetails: {
    durationMinutes: 60,
    durationDisplay: "60 minutes",
    feeAmount: 1000,
    feeCurrency: "₹",
    feeDisplay: "₹1,000",
    feeNote: "Session fee subject to confirmation before launch.",
    formats: [
      {
        id: "online",
        label: "Online Session (Google Meet / Zoom)",
        description: "Private video call from the comfort and privacy of your own space. Available globally.",
      },
      {
        id: "in-person",
        label: "In-Person Session (Bengaluru)",
        description: "Quiet, reflective, confidential space in Bengaluru. Subject to schedule availability.",
      },
    ],
    // Available appointment time slots in Asia/Kolkata timezone
    standardTimeSlots: [
      "10:00 AM - 11:00 AM",
      "11:30 AM - 12:30 PM",
      "02:30 PM - 03:30 PM",
      "04:00 PM - 05:00 PM",
      "05:30 PM - 06:30 PM",
      "07:00 PM - 08:00 PM",
    ],
    // Integration settings
    integrations: {
      isBackendConfigured: false, // Set to true once backend or webhook is connected
      bookingProvider: "direct", // 'direct' | 'calendly' | 'cal.com' | 'google-calendar'
      externalBookingUrl: "", // Provide Cal.com or Calendly link here if preferred
    },
  },

  book: {
    title: "Welcome Back to Yourself",
    author: "Anagha Sonde",
    tagline: "Sometimes, the most meaningful journey is the one that brings you back to who you are.",
    coverImage: "/assets/book-cover.svg",
    officialCoverPlaceholder: true, // replace with /assets/book-cover.jpg once supplied
    genre: "Personal Memoir / Self-Discovery",
    synopsis: [
      "What happens when life takes you away from yourself?",
      "When expectations become louder than your own voice, when rejection leaves you questioning your worth, or when uncertainty makes you wonder whether you are on the right path, it is easy to lose touch with the person you once knew yourself to be.",
      "Welcome Back to Yourself, written by Anagha Sonde, is a personal memoir about reinvention, self-discovery, and the journey of finding your way back to yourself.",
      "Through honest reflection and personal experiences, the book explores what it means to navigate life's unexpected turns, question the expectations placed upon us, and rediscover the courage to live life on our own terms.",
      "It is a reminder that you do not have to become someone else to create a meaningful life. Sometimes, the journey is about understanding yourself more deeply, making peace with your experiences, and giving yourself permission to choose your own path.",
      "This book is for anyone who has ever felt disconnected from themselves, questioned their direction, or needed a reminder that their story is still unfolding.",
    ],
    closingQuote:
      "You are allowed to begin again. You are allowed to choose yourself. And you are always allowed to find your way back.",
    themes: [
      "Self-discovery and reconnecting with yourself.",
      "Reinvention and navigating life's unexpected changes.",
      "Rejection, uncertainty, and the courage to begin again.",
      "Questioning expectations and choosing your own path.",
      "Accepting that your personal journey does not need to look like anyone else's.",
    ],
    bridgeToCoaching:
      "Writing Welcome Back to Yourself and building Mind Matters come from a shared belief: that understanding ourselves can change the way we experience life. Through my book, I invite you to reflect on the journey of finding your way back to yourself. Through life coaching, I offer a space for you to explore your own experiences, discover what matters to you, and consider how you want to move forward. Different journeys. One shared intention: to live a life that feels more truly your own.",
    editions: [
      {
        title: "Paperback Edition",
        format: "Paperback",
        retailer: "Verified Bookstore / Amazon",
        url: "#book-inquiry",
        available: true,
      },
      {
        title: "Digital / Kindle Edition",
        format: "eBook",
        retailer: "Kindle / Digital",
        url: "#book-inquiry",
        available: true,
      },
    ] as BookEdition[],
  },

  philosophy: {
    heading:
      "You don't need someone to tell you how to live. You need space to discover what living well means to you.",
    principles: [
      "Listen before offering perspectives.",
      "Understand the person, not just the problem.",
      "Ask thoughtful questions instead of making assumptions.",
      "Respect individual experiences, choices, and boundaries.",
      "Encourage reflection without judgment.",
      "Support personal responsibility and realistic action.",
      "Honour the fact that every person's journey is different.",
    ],
    coachingDefinition:
      "Life coaching is a reflective, collaborative process that helps you understand where you are, explore where you want to be, and identify what matters as you move forward. It gives you dedicated space to explore your thoughts, feelings, values, goals, choices, and challenges with the support of a coach who listens without judgment and asks questions that encourage deeper understanding.",
    coachingNature:
      "Life coaching is not about telling you how to live. It is about helping you become more conscious of your choices and more intentional about the life you want to create.",
    fourPrinciples: [
      {
        title: "Self-awareness",
        description: "Understand your thoughts, values, emotions, and recurring patterns.",
      },
      {
        title: "Clarity",
        description: "Explore what you genuinely want and what may quietly be holding you back.",
      },
      {
        title: "Confidence",
        description: "Recognise your inherent strengths and make more conscious decisions.",
      },
      {
        title: "Meaningful action",
        description: "Turn insights into realistic, sustainable steps that work for your life.",
      },
    ],
  },

  sessionJourney: [
    {
      step: 1,
      title: "We Talk",
      description: "You share what is on your mind in a private, respectful, confidential setting.",
    },
    {
      step: 2,
      title: "We Explore",
      description: "We unpack your thoughts, understand your concerns, and identify what matters most to you.",
    },
    {
      step: 3,
      title: "We Find Clarity",
      description: "Together, we explore perspectives, choices, strengths, and possibilities.",
    },
    {
      step: 4,
      title: "You Move Forward",
      description: "You decide which insights or practical next steps feel right for your life.",
    },
  ],

  mindMattersThemes: [
    {
      title: "Self-worth and self-belief",
      description: "Unraveling the inner critic and developing compassionate self-regard.",
    },
    {
      title: "Navigating uncertainty",
      description: "Finding steady ground when the future or path ahead feels unclear.",
    },
    {
      title: "Relationships and boundaries",
      description: "Communicating needs, establishing healthy boundaries, and honoring yourself.",
    },
    {
      title: "Finding your voice",
      description: "Stepping out from behind expectations to speak and live authentically.",
    },
    {
      title: "Understanding recurring patterns",
      description: "Noticing habits and loops that no longer serve you, and choosing differently.",
    },
    {
      title: "Choosing yourself without guilt",
      description: "Making peace with personal priorities without carrying heavy guilt.",
    },
    {
      title: "Redefining success and fulfilment",
      description: "Shifting from external yardsticks to what genuinely brings meaning to your days.",
    },
    {
      title: "Making peace with change",
      description: "Embracing life transitions as invitations to reconnect with what matters.",
    },
  ],

  services: [
    {
      id: "one-to-one-coaching",
      number: "01",
      title: "One-to-One Confidential Life Coaching",
      subtitle: "Personalized exploration for your unique journey",
      description:
        "A dedicated, private space to talk openly about what is happening in your life. Together, we can explore your concerns, identify patterns, understand your priorities, and work towards greater clarity.",
      suitableFor:
        "Suitable for people who want to discuss personal challenges, life transitions, relationships, boundaries, confidence, or important decisions.",
      ctaText: "Explore One-to-One Coaching",
      slug: "one-to-one-coaching",
    },
    {
      id: "motivation-and-direction",
      number: "02",
      title: "Motivation and Direction Coaching",
      subtitle: "Reconnecting with purpose when you feel stuck",
      description:
        "For moments when you feel stuck, unmotivated, uncertain, or disconnected from your goals. Explore what is getting in your way, reconnect with what matters, and identify practical steps to move forward.",
      suitableFor:
        "People navigating career plateaus, decision fatigue, lack of clarity, or feeling paralyzed by too many options.",
      ctaText: "Find Your Direction",
      slug: "motivation-and-direction",
    },
    {
      id: "self-discovery-growth",
      number: "03",
      title: "Self-Discovery and Personal Growth",
      subtitle: "Living beyond roles, expectations, and labels",
      description:
        "Understand yourself beyond the roles, expectations, and labels you carry. Explore your values, strengths, beliefs, needs, and aspirations to build a life that feels more authentic.",
      suitableFor:
        "Anyone experiencing an identity transition, questioning social scripts, or desiring deeper alignment with their core values.",
      ctaText: "Begin Your Journey",
      slug: "self-discovery-growth",
    },
    {
      id: "confidence-self-belief",
      number: "04",
      title: "Confidence and Self-Belief",
      subtitle: "Silencing self-doubt and releasing people-pleasing",
      description:
        "Explore self-doubt, fear of judgment, people-pleasing, and the pressure to meet others' expectations. Build a more compassionate understanding of yourself and make room for your own voice.",
      suitableFor:
        "Individuals who struggle with imposter syndrome, asserting boundaries, or making decisions independently of others' validation.",
      ctaText: "Reconnect With Yourself",
      slug: "confidence-self-belief",
    },
    {
      id: "relationships-boundaries",
      number: "05",
      title: "Relationships and Personal Boundaries",
      subtitle: "Clear, respectful connections with yourself and others",
      description:
        "Reflect on relationship patterns, communication, emotional needs, expectations, and boundaries. Develop a clearer understanding of what healthy, respectful connections mean to you.",
      suitableFor:
        "Those feeling drained in personal or professional relationships, struggling to say no, or navigating shifting relationship dynamics.",
      ctaText: "Let's Talk",
      slug: "relationships-boundaries",
    },
    {
      id: "life-transitions-decisions",
      number: "06",
      title: "Life Transitions and Decision-Making",
      subtitle: "Navigating crossroads with clarity and composure",
      description:
        "Navigate periods of uncertainty, change, career transitions, shifting priorities, or difficult choices with a space to reflect and consider your options.",
      suitableFor:
        "Individuals facing major career shifts, relocation, milestone birthdays, empty-nest transitions, or critical life choices.",
      ctaText: "Gain Clarity",
      slug: "life-transitions-decisions",
    },
  ] as ServiceItem[],

  faqs: [
    {
      question: "What is life coaching?",
      answer:
        "Life coaching is a reflective, collaborative process that helps you understand where you are, explore where you want to be, and identify what matters as you move forward. It is not about someone giving you advice or telling you how to live; it provides a structured, non-judgmental space to gain self-awareness and make intentional choices.",
    },
    {
      question: "Who can benefit from life coaching?",
      answer:
        "Anyone who is feeling stuck, facing a transition, seeking greater clarity in their relationships or career, wrestling with self-doubt, or simply wanting to reconnect with themselves can benefit from life coaching. You do not need to have a crisis to seek coaching — a desire to live with greater intention is reason enough.",
    },
    {
      question: "What happens during a one-to-one session?",
      answer:
        "Every 60-minute session is guided by what you wish to bring. We begin with where you are, unpack your thoughts, examine underlying beliefs or patterns, and explore perspectives. By the end of the session, you choose what insights or realistic steps you wish to take forward. It is conversational, warm, and entirely confidential.",
    },
    {
      question: "Are coaching conversations confidential?",
      answer:
        "Yes, our conversations are treated with utmost privacy and discretion. Confidentiality is respected within the standard ethical and legal boundaries, which include circumstances where there is a risk of harm to yourself or others, or where required by applicable law. No details are shared without your informed consent.",
    },
    {
      question: "Can I book an online session?",
      answer:
        "Absolutely. Online sessions are conducted via secure video call (Google Meet or Zoom) and are available to clients anywhere in India and internationally. For clients in Bengaluru, in-person sessions may also be scheduled depending on availability.",
    },
    {
      question: "How many sessions might I need?",
      answer:
        "Because each person's journey and goals are unique, there is no one-size-fits-all formula. Some clients find that a single session or a few focused discussions give them the perspective they need for a specific decision. Others choose ongoing fortnightly or monthly sessions as an anchor for sustained self-discovery and growth. We will always move at your own pace without pressure.",
    },
    {
      question: "What if I am unsure which service is right for me?",
      answer:
        "That is completely natural and very common. You can select 'Not Sure — Help Me Choose' when booking or reach out through the contact form. During our first conversation, we can discuss what is currently on your mind and naturally shape the coaching focus around your needs.",
    },
    {
      question: "Is life coaching the same as therapy or counselling?",
      answer:
        "No. Life coaching is a forward-focused, reflective process centered on personal growth, self-awareness, and decision-making. It is not psychotherapy, clinical psychological treatment, psychiatric diagnosis, or emergency mental health care. If you are experiencing severe depression, anxiety, trauma, or clinical mental health distress, we encourage consulting a qualified clinical psychologist or psychiatrist.",
    },
    {
      question: "How do I book my first session?",
      answer:
        "You can book directly using the 'Book an Appointment' form on this website. Simply select your service, choose an available date and time slot in Asia/Kolkata timezone, provide your basic contact details, and confirm. You will receive immediate booking confirmation and instructions.",
    },
  ] as FaqItem[],

  testimonialsSection: {
    heading: "Words That Matter",
    subheadline: "Every journey is different. Every conversation matters.",
    supportingText:
      "Life coaching creates space for reflection, clarity, and personal growth. Here is where client experiences can be shared with permission.",
    notice:
      "Development Preview: The cards below represent core coaching themes and are clearly labelled placeholders awaiting approved client releases. Authentic testimonials can be updated directly here once verified with client permission.",
    items: [
      {
        id: "testimonial-feeling-heard",
        theme: "Feeling Heard",
        quote:
          "Having a supportive, non-judgmental space to speak freely helped me untangle thoughts I had carried for years. For the first time in a long time, I felt genuinely listened to and understood.",
        attribution: "Client Reflection",
        context: "Space to Pause & Reflect",
        isPlaceholder: true,
      },
      {
        id: "testimonial-clarity-discovery",
        theme: "Clarity and Self-Discovery",
        quote:
          "Our sessions helped me distinguish what truly matters to me from what I thought was expected of me. Gaining that clarity brought an overwhelming sense of calm and direction.",
        attribution: "Client Reflection",
        context: "Values & Direction Coaching",
        isPlaceholder: true,
      },
      {
        id: "testimonial-confidence-forward",
        theme: "Confidence and Moving Forward",
        quote:
          "I learned to trust my own voice and stopped seeking constant external validation. I now make choices with steady confidence and practical next steps that genuinely fit my life.",
        attribution: "Client Reflection",
        context: "Self-Belief & Life Decisions",
        isPlaceholder: true,
      },
    ] as TestimonialItem[],
  },

  disclaimers: {
    coachingDisclaimer:
      "Life coaching supports personal reflection, self-awareness, and intentional decision-making. It is not a substitute for clinical medical care, psychotherapy, psychological diagnosis, or crisis mental health treatment.",
    confidentialityNotice:
      "All coaching sessions are held with high professional regard for privacy and confidentiality, subject to applicable legal exceptions and personal safety concerns.",
    pricingDisclaimer:
      "Session fees and durations listed are current as of October 2026 and are subject to confirmation at the time of final booking.",
  },
};
