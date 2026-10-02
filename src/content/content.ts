import type { Lang } from '../styles/style';

type Item = { title: string; text: string };

export type Content = {
  nav: {
    about: string;
    service: string;
    process: string;
    fee: string;
    faq: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
  };
  brand: { name: string; tagline: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    trust: string[];
    primaryCta: string;
    secondaryCta: string;
    photoAlt: string;
    photoName: string;
    photoRole: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  service: { eyebrow: string; title: string; intro: string; items: (Item & { hint: string })[] };
  process: { eyebrow: string; title: string; intro: string; steps: Item[] };
  details: {
    eyebrow: string;
    title: string;
    intro: string;
    listTitle: string;
    items: { label: string; optional?: boolean }[];
    optionalTag: string;
    note: string;
  };
  fee: {
    eyebrow: string;
    title: string;
    price: string;
    priceUnit: string;
    steps: string[];
    description: string;
    cta: string;
    whatsappLabel: string;
  };
  why: { eyebrow: string; title: string; intro: string; items: Item[] };
  experience: {
    eyebrow: string;
    title: string;
    text: string;
    stats: { value: string; label: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; place: string }[];
  };
  faq: { eyebrow: string; title: string; intro: string; items: { q: string; a: string }[] };
  finalCta: { title: string; text: string; cta: string };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    whatsappLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hours: string;
    locationLabel: string;
    location: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      dob: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      note: string;
      greeting: string;
    };
  };
  footer: {
    about: string;
    linksTitle: string;
    contactTitle: string;
    rights: string;
  };
};

// Experience figures and testimonials are sample copy — replace them with
// verified numbers and genuine client feedback before publishing.
export const content: Record<Lang, Content> = {
  en: {
    nav: {
      about: 'About',
      service: 'Services',
      process: 'Process',
      fee: 'Fee',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book a Consultation',
      menu: 'Open menu',
      close: 'Close menu',
    },
    brand: { name: 'Arun Numerology', tagline: 'Baby Name Consultation' },
    hero: {
      eyebrow: 'Baby name numerology consultation',
      title: 'A meaningful name, thoughtfully aligned with your child’s birth details.',
      subtitle:
        'Personal, one-to-one guidance that brings together numerology, your baby’s birth details and your family’s preferences — so the name you choose feels right today and for a lifetime.',
      trust: [
        'One-to-one personal consultation',
        'Available in Tamil and English',
        'Guidance until you finalise the name',
      ],
      primaryCta: 'Book a Consultation',
      secondaryCta: 'See how it works',
      photoAlt: 'Portrait of Arun, numerology consultant',
      photoName: 'Arun',
      photoRole: 'Numerology Consultant · Baby Name Specialist',
    },
    about: {
      eyebrow: 'About',
      title: 'Careful guidance for one of your family’s most important decisions',
      paragraphs: [
        'I’m Arun. I help parents choose the right name for their baby — personally, from start to finish.',
        'I study your baby’s birth details, listen to your family’s wishes, and explain every name I suggest.',
      ],
      highlights: [
        'Personal consultation — never outsourced',
        'Clear explanations, not jargon',
        'Respect for family traditions and preferences',
      ],
    },
    service: {
      eyebrow: 'Services',
      title: 'Our Services',
      intro: 'Since 1993 — meaningful, lucky names and dates for every important beginning.',
      items: [
        {
          hint: 'New Arrival',
          title: 'Baby Names',
          text: 'Meaningful names based on birth date, time, place and star — with a lucky name number.',
        },
        {
          hint: 'Growth & Prosperity',
          title: 'Business & Company Names',
          text: 'A name for your shop, company or brand, aligned with a favourable number.',
        },
        {
          hint: 'Housewarming',
          title: 'New Home Names',
          text: 'An auspicious, fitting name for your new house.',
        },
        {
          hint: 'Auspicious Start',
          title: 'Wedding Date Selection',
          text: 'An auspicious wedding date chosen through numerology.',
        },
        {
          hint: 'Check & Correct',
          title: 'Name Check & Correction',
          text: 'We check your present name. If it needs a change, we correct it into a lucky one — if it’s already good, no change.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How the consultation works',
      intro: 'A simple, well-defined process — handled entirely over WhatsApp, wherever you are.',
      steps: [
        {
          title: 'Reach out on WhatsApp',
          text: 'Send a message to introduce yourself and share what you are looking for.',
        },
        {
          title: 'Share birth details',
          text: 'Provide your baby’s birth details and any name preferences your family has.',
        },
        {
          title: 'Analysis and shortlist',
          text: 'The details are studied carefully and a personalised shortlist of names is prepared.',
        },
        {
          title: 'Finalise with confidence',
          text: 'We discuss the options together and refine until you have chosen the right name.',
        },
      ],
    },
    details: {
      eyebrow: 'Details required',
      title: 'What to keep ready',
      intro:
        'Accurate details lead to an accurate analysis. Please have the following information ready when you contact us.',
      listTitle: 'Information needed',
      items: [
        { label: 'Baby’s date of birth' },
        { label: 'Exact time of birth' },
        { label: 'Place of birth' },
        { label: 'Father’s and mother’s names' },
        { label: 'Preferred starting letters or names in mind', optional: true },
        { label: 'Family naming customs or preferences', optional: true },
      ],
      optionalTag: 'Optional',
      note: 'Expecting your baby? You are welcome to reach out in advance — the analysis begins once the birth details are available.',
    },
    fee: {
      eyebrow: 'Fee',
      title: 'Consultation Fee',
      price: '₹3,000',
      priceUnit: 'per consultation',
      steps: ['Speak with us', 'Make the payment', 'Get your personalised consultation'],
      description:
        'To get started, contact us on WhatsApp. After discussing your requirements, make the payment of ₹3,000 and send the payment screenshot on WhatsApp. Your personalised baby name consultation will then begin.',
      cta: 'Speak With Us on WhatsApp',
      whatsappLabel: 'WhatsApp',
    },
    why: {
      eyebrow: 'Why choose us',
      title: 'A considered approach, built on trust',
      intro: 'Families choose us for the care, clarity and personal attention given to every consultation.',
      items: [
        {
          title: 'Personal attention',
          text: 'Every consultation is handled personally, with time taken to understand your family.',
        },
        {
          title: 'Grounded in tradition',
          text: 'Recommendations follow established numerology principles, applied with care and consistency.',
        },
        {
          title: 'Clear reasoning',
          text: 'You receive the reasoning behind each name, so you understand exactly why it is suitable.',
        },
        {
          title: 'Your preferences respected',
          text: 'Family customs, preferred sounds and meanings are always part of the recommendation.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Trusted by families in India and abroad',
      text: 'Years of focused practice in baby name numerology have given us a deep understanding of what parents look for — a name that is balanced, meaningful and easy to live with.',
      stats: [
        { value: '10+', label: 'Years of practice' },
        { value: '3,000+', label: 'Families guided' },
        { value: '12+', label: 'Countries served' },
        { value: '2', label: 'Languages — Tamil & English' },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What parents say',
      items: [
        {
          quote:
            'Arun took the time to understand what we wanted and explained every suggestion clearly. We finalised our daughter’s name with complete confidence.',
          name: 'Priya & Karthik',
          place: 'Chennai',
        },
        {
          quote:
            'We already had a name in mind. A small spelling change was suggested with a clear explanation, and it felt right immediately.',
          name: 'Divya Ramesh',
          place: 'Coimbatore',
        },
        {
          quote:
            'Living abroad, we were worried about the process. Everything was handled smoothly over WhatsApp, and the guidance was thoughtful and patient.',
          name: 'Senthil & Meena',
          place: 'Singapore',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      intro: 'If your question is not answered here, simply send us a message on WhatsApp.',
      items: [
        {
          q: 'How is the consultation conducted?',
          a: 'The entire consultation takes place over WhatsApp — through messages and, where helpful, a call. You can consult from anywhere in the world.',
        },
        {
          q: 'How long does it take to receive the name suggestions?',
          a: 'Once the payment and birth details are received, the personalised shortlist is usually shared within two to three working days.',
        },
        {
          q: 'We already have a name in mind. Can you check it?',
          a: 'Yes. The name will be analysed against your baby’s birth details, and if needed, a refined spelling or suitable alternatives will be suggested.',
        },
        {
          q: 'Can I consult before my baby is born?',
          a: 'You are welcome to contact us in advance. The detailed analysis begins once the exact date, time and place of birth are known.',
        },
        {
          q: 'Do you suggest names in both Tamil and English?',
          a: 'Yes. Names can be suggested in Tamil, Sanskrit-origin or modern styles, with English spellings, based on your family’s preference.',
        },
        {
          q: 'How do I make the payment?',
          a: 'After an initial discussion on WhatsApp, you can make the payment of ₹3,000 and share the payment screenshot on WhatsApp. The consultation begins after that.',
        },
      ],
    },
    finalCta: {
      title: 'Begin your baby’s naming journey with clarity',
      text: 'Send us a message on WhatsApp to discuss your requirements. We will guide you through every step.',
      cta: 'Speak With Us on WhatsApp',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      intro: 'WhatsApp is the quickest way to reach us. You can also use the form to start a conversation with your details pre-filled.',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Phone',
      hoursLabel: 'Consultation hours',
      hours: 'Monday – Saturday, 9:00 AM – 8:00 PM IST',
      locationLabel: 'Location',
      location: 'Tamil Nadu, India · Consultations available worldwide',
      form: {
        title: 'Send an enquiry',
        name: 'Your name',
        namePlaceholder: 'e.g. Priya Karthik',
        dob: 'Baby’s date of birth (if known)',
        message: 'Message',
        messagePlaceholder: 'Share any details or questions you have',
        submit: 'Continue on WhatsApp',
        note: 'Your message will open in WhatsApp, ready to send.',
        greeting: 'Hello, I would like to enquire about a baby name consultation.',
      },
    },
    footer: {
      about: 'Personal baby name numerology consultations in Tamil and English, for families in India and abroad.',
      linksTitle: 'Quick links',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
  },

  ta: {
    nav: {
      about: 'அறிமுகம்',
      service: 'சேவைகள்',
      process: 'செயல்முறை',
      fee: 'கட்டணம்',
      faq: 'கேள்விகள்',
      contact: 'தொடர்பு',
      cta: 'ஆலோசனை பெற',
      menu: 'மெனுவைத் திற',
      close: 'மெனுவை மூடு',
    },
    brand: { name: 'அருண் நியூமராலஜி', tagline: 'குழந்தை பெயர் ஆலோசனை' },
    hero: {
      eyebrow: 'குழந்தை பெயர் எண் கணித ஆலோசனை',
      title: 'உங்கள் குழந்தையின் பிறப்பு விவரங்களுக்கு ஏற்ற, அர்த்தமுள்ள பெயர்.',
      subtitle:
        'எண் கணிதம், குழந்தையின் பிறப்பு விவரங்கள் மற்றும் உங்கள் குடும்பத்தின் விருப்பங்கள் — இவை அனைத்தையும் இணைத்து வழங்கப்படும் தனிப்பட்ட ஆலோசனை. நீங்கள் தேர்ந்தெடுக்கும் பெயர் இன்றும் என்றும் பொருத்தமாக அமையும்.',
      trust: [
        'நேரடி, தனிப்பட்ட ஆலோசனை',
        'தமிழ் மற்றும் ஆங்கிலத்தில்',
        'பெயர் உறுதியாகும் வரை வழிகாட்டுதல்',
      ],
      primaryCta: 'ஆலோசனை பெற',
      secondaryCta: 'செயல்முறையைப் பாருங்கள்',
      photoAlt: 'எண் கணித ஆலோசகர் அருண் அவர்களின் புகைப்படம்',
      photoName: 'அருண்',
      photoRole: 'எண் கணித ஆலோசகர் · குழந்தை பெயர் நிபுணர்',
    },
    about: {
      eyebrow: 'அறிமுகம்',
      title: 'உங்கள் குடும்பத்தின் முக்கியமான முடிவுக்கு, கவனமான வழிகாட்டுதல்',
      paragraphs: [
        'நான் அருண். உங்கள் குழந்தைக்குச் சரியான பெயரைத் தேர்ந்தெடுக்க, தொடக்கம் முதல் இறுதி வரை நானே நேரடியாக உதவுகிறேன்.',
        'பிறப்பு விவரங்களை ஆய்வு செய்து, உங்கள் விருப்பங்களைக் கேட்டு, ஒவ்வொரு பெயருக்கான காரணத்தையும் விளக்குகிறேன்.',
      ],
      highlights: [
        'நேரடித் தனிப்பட்ட ஆலோசனை',
        'எளிய, தெளிவான விளக்கங்கள்',
        'குடும்ப மரபுகளுக்கும் விருப்பங்களுக்கும் மதிப்பு',
      ],
    },
    service: {
      eyebrow: 'சேவைகள்',
      title: 'எங்கள் சேவைகள்',
      intro: '1993 முதல் — வாழ்வின் ஒவ்வொரு முக்கியத் தொடக்கத்திற்கும் அர்த்தமுள்ள, அதிர்ஷ்ட பெயர்களும் தேதிகளும்.',
      items: [
        {
          hint: 'புதிய வரவு',
          title: 'குழந்தை பெயர்கள்',
          text: 'பிறந்த தேதி, நேரம், இடம், நட்சத்திரம் அடிப்படையில் — அதிர்ஷ்ட எண்ணுடன் அர்த்தமுள்ள பெயர்.',
        },
        {
          hint: 'வளர்ச்சி & வளம்',
          title: 'நிறுவன பெயர்கள்',
          text: 'உங்கள் கடை, நிறுவனம் அல்லது பிராண்டுக்கு அதிர்ஷ்ட எண்ணுடன் பொருந்தும் பெயர்.',
        },
        {
          hint: 'புதுமனை புகுவிழா',
          title: 'புதிய வீட்டிற்கான பெயர்கள்',
          text: 'உங்கள் புதிய வீட்டிற்கு மங்களகரமான, பொருத்தமான பெயர்.',
        },
        {
          hint: 'சுப தொடக்கம்',
          title: 'திருமண தேதி அமைத்தல்',
          text: 'எண் கணிதப்படி சுபமான திருமண தேதி.',
        },
        {
          hint: 'சரிபார்ப்பு & திருத்தம்',
          title: 'பெயர் சரிபார்ப்பு & திருத்தம்',
          text: 'உங்கள் தற்போதைய பெயரைச் சரிபார்க்கிறோம். மாற்றம் தேவைப்பட்டால் அதிர்ஷ்ட பெயராகத் திருத்துகிறோம் — பெயர் ஏற்கனவே நன்றாக இருந்தால் மாற்றம் இல்லை.',
        },
      ],
    },
    process: {
      eyebrow: 'செயல்முறை',
      title: 'ஆலோசனை எவ்வாறு நடைபெறுகிறது',
      intro: 'எளிய, தெளிவான செயல்முறை — நீங்கள் எங்கிருந்தாலும் முழுவதும் WhatsApp வழியாகவே.',
      steps: [
        {
          title: 'WhatsApp-இல் தொடர்பு கொள்ளுங்கள்',
          text: 'உங்களை அறிமுகப்படுத்தி, உங்கள் தேவையைப் பற்றி ஒரு செய்தி அனுப்புங்கள்.',
        },
        {
          title: 'பிறப்பு விவரங்களைப் பகிருங்கள்',
          text: 'குழந்தையின் பிறப்பு விவரங்களையும் குடும்பத்தின் பெயர் விருப்பங்களையும் பகிருங்கள்.',
        },
        {
          title: 'ஆய்வு மற்றும் பட்டியல்',
          text: 'விவரங்கள் கவனமாக ஆய்வு செய்யப்பட்டு, உங்களுக்கான தனிப்பட்ட பெயர் பட்டியல் தயாரிக்கப்படும்.',
        },
        {
          title: 'நம்பிக்கையுடன் உறுதி செய்யுங்கள்',
          text: 'பரிந்துரைகளை இணைந்து கலந்தாலோசித்து, சரியான பெயரைத் தேர்ந்தெடுக்கும் வரை மெருகேற்றுவோம்.',
        },
      ],
    },
    details: {
      eyebrow: 'தேவையான விவரங்கள்',
      title: 'தயாராக வைத்திருக்க வேண்டியவை',
      intro:
        'துல்லியமான விவரங்களே துல்லியமான ஆய்வுக்கு அடிப்படை. எங்களைத் தொடர்பு கொள்ளும்போது பின்வரும் தகவல்களைத் தயாராக வைத்திருங்கள்.',
      listTitle: 'தேவையான தகவல்கள்',
      items: [
        { label: 'குழந்தையின் பிறந்த தேதி' },
        { label: 'சரியான பிறந்த நேரம்' },
        { label: 'பிறந்த இடம்' },
        { label: 'தந்தை மற்றும் தாயின் பெயர்கள்' },
        { label: 'விரும்பும் முதல் எழுத்துகள் அல்லது மனதில் உள்ள பெயர்கள்', optional: true },
        { label: 'குடும்பப் பெயர் மரபுகள் அல்லது விருப்பங்கள்', optional: true },
      ],
      optionalTag: 'விருப்பத்தேர்வு',
      note: 'குழந்தையின் வருகையை எதிர்பார்க்கிறீர்களா? முன்கூட்டியே தொடர்பு கொள்ளலாம் — பிறப்பு விவரங்கள் கிடைத்ததும் ஆய்வு தொடங்கும்.',
    },
    fee: {
      eyebrow: 'கட்டணம்',
      title: 'ஆலோசனைக் கட்டணம்',
      price: '₹3,000',
      priceUnit: 'ஒரு ஆலோசனைக்கு',
      steps: ['எங்களுடன் பேசுங்கள்', 'கட்டணம் செலுத்துங்கள்', 'உங்களுக்கான தனிப்பட்ட ஆலோசனையைப் பெறுங்கள்'],
      description:
        'தொடங்க, WhatsApp-இல் எங்களைத் தொடர்பு கொள்ளுங்கள். உங்கள் தேவைகளைப் பற்றிக் கலந்துரையாடிய பிறகு, ₹3,000 கட்டணத்தைச் செலுத்தி, பணம் செலுத்திய ஸ்கிரீன்ஷாட்டை WhatsApp-இல் அனுப்புங்கள். அதன் பின் உங்கள் குழந்தைக்கான தனிப்பட்ட பெயர் ஆலோசனை தொடங்கும்.',
      cta: 'WhatsApp-இல் எங்களுடன் பேசுங்கள்',
      whatsappLabel: 'WhatsApp',
    },
    why: {
      eyebrow: 'ஏன் எங்களை',
      title: 'நம்பிக்கையின் அடிப்படையிலான கவனமான அணுகுமுறை',
      intro: 'ஒவ்வொரு ஆலோசனையிலும் காட்டப்படும் அக்கறை, தெளிவு மற்றும் தனிப்பட்ட கவனத்திற்காகக் குடும்பங்கள் எங்களைத் தேர்ந்தெடுக்கின்றன.',
      items: [
        {
          title: 'தனிப்பட்ட கவனம்',
          text: 'ஒவ்வொரு ஆலோசனையும் நேரடியாகக் கவனிக்கப்படுகிறது; உங்கள் குடும்பத்தைப் புரிந்துகொள்ள நேரம் ஒதுக்கப்படுகிறது.',
        },
        {
          title: 'மரபின் அடிப்படையில்',
          text: 'பரிந்துரைகள் நிலைநாட்டப்பட்ட எண் கணித நெறிமுறைகளை அக்கறையுடனும் சீராகவும் பின்பற்றுகின்றன.',
        },
        {
          title: 'தெளிவான காரணங்கள்',
          text: 'ஒவ்வொரு பெயரும் ஏன் பொருத்தமானது என்பதற்கான விளக்கம் உங்களுக்கு வழங்கப்படும்.',
        },
        {
          title: 'உங்கள் விருப்பங்களுக்கு மதிப்பு',
          text: 'குடும்ப மரபுகள், விரும்பும் ஒலிகள் மற்றும் பொருள் — இவை எப்போதும் பரிந்துரையின் ஒரு பகுதி.',
        },
      ],
    },
    experience: {
      eyebrow: 'அனுபவம்',
      title: 'இந்தியாவிலும் வெளிநாடுகளிலும் உள்ள குடும்பங்களின் நம்பிக்கை',
      text: 'குழந்தை பெயர் எண் கணிதத்தில் பல ஆண்டுகளாகக் கவனம் செலுத்தி வருவதால், பெற்றோர் எதிர்பார்ப்பதை ஆழமாகப் புரிந்துகொண்டுள்ளோம் — சமநிலையான, அர்த்தமுள்ள, வாழ்நாள் முழுவதும் பொருந்தும் பெயர்.',
      stats: [
        { value: '10+', label: 'ஆண்டுகள் அனுபவம்' },
        { value: '3,000+', label: 'குடும்பங்களுக்கு வழிகாட்டுதல்' },
        { value: '12+', label: 'நாடுகளில் உள்ளோருக்குச் சேவை' },
        { value: '2', label: 'மொழிகள் — தமிழ் & ஆங்கிலம்' },
      ],
    },
    testimonials: {
      eyebrow: 'கருத்துகள்',
      title: 'பெற்றோரின் அனுபவங்கள்',
      items: [
        {
          quote:
            'எங்கள் விருப்பத்தைப் புரிந்துகொள்ள அருண் அவர்கள் நேரம் ஒதுக்கினார்; ஒவ்வொரு பரிந்துரையையும் தெளிவாக விளக்கினார். எங்கள் மகளின் பெயரை முழு நம்பிக்கையுடன் உறுதி செய்தோம்.',
          name: 'பிரியா & கார்த்திக்',
          place: 'சென்னை',
        },
        {
          quote:
            'எங்கள் மனதில் ஏற்கனவே ஒரு பெயர் இருந்தது. தெளிவான விளக்கத்துடன் சிறிய எழுத்துக்கூட்டல் மாற்றம் பரிந்துரைக்கப்பட்டது; உடனே சரியாக உணர்ந்தோம்.',
          name: 'திவ்யா ரமேஷ்',
          place: 'கோயம்புத்தூர்',
        },
        {
          quote:
            'வெளிநாட்டில் இருப்பதால் செயல்முறை பற்றிக் கவலைப்பட்டோம். அனைத்தும் WhatsApp வழியாகச் சுமுகமாக நடந்தது; வழிகாட்டுதல் பொறுமையாகவும் சிந்தனையுடனும் இருந்தது.',
          name: 'செந்தில் & மீனா',
          place: 'சிங்கப்பூர்',
        },
      ],
    },
    faq: {
      eyebrow: 'கேள்விகள்',
      title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      intro: 'உங்கள் கேள்விக்கு இங்கு பதில் இல்லையெனில், WhatsApp-இல் ஒரு செய்தி அனுப்புங்கள்.',
      items: [
        {
          q: 'ஆலோசனை எவ்வாறு நடைபெறும்?',
          a: 'முழு ஆலோசனையும் WhatsApp வழியாக — செய்திகள் மூலமாகவும், தேவைப்பட்டால் அழைப்பு மூலமாகவும் — நடைபெறும். உலகின் எந்தப் பகுதியிலிருந்தும் ஆலோசனை பெறலாம்.',
        },
        {
          q: 'பெயர் பரிந்துரைகளைப் பெற எவ்வளவு நாட்கள் ஆகும்?',
          a: 'கட்டணமும் பிறப்பு விவரங்களும் கிடைத்த பிறகு, பொதுவாக இரண்டு முதல் மூன்று வேலை நாட்களுக்குள் தனிப்பட்ட பெயர் பட்டியல் பகிரப்படும்.',
        },
        {
          q: 'எங்கள் மனதில் ஏற்கனவே ஒரு பெயர் உள்ளது. அதைச் சரிபார்க்க முடியுமா?',
          a: 'ஆம். குழந்தையின் பிறப்பு விவரங்களுடன் அந்தப் பெயர் ஆய்வு செய்யப்படும்; தேவைப்பட்டால் திருத்திய எழுத்துக்கூட்டல் அல்லது பொருத்தமான மாற்றுப் பெயர்கள் பரிந்துரைக்கப்படும்.',
        },
        {
          q: 'குழந்தை பிறப்பதற்கு முன்பே ஆலோசனை பெறலாமா?',
          a: 'முன்கூட்டியே தொடர்பு கொள்ளலாம். சரியான பிறந்த தேதி, நேரம் மற்றும் இடம் தெரிந்த பிறகு விரிவான ஆய்வு தொடங்கும்.',
        },
        {
          q: 'தமிழ் மற்றும் ஆங்கிலப் பெயர்கள் இரண்டையும் பரிந்துரைப்பீர்களா?',
          a: 'ஆம். உங்கள் குடும்ப விருப்பத்தின்படி தூய தமிழ், சமஸ்கிருத மூலம் அல்லது நவீனப் பெயர்கள், ஆங்கில எழுத்துக்கூட்டலுடன் பரிந்துரைக்கப்படும்.',
        },
        {
          q: 'கட்டணத்தை எவ்வாறு செலுத்துவது?',
          a: 'WhatsApp-இல் முதற்கட்டக் கலந்துரையாடலுக்குப் பிறகு, ₹3,000 கட்டணத்தைச் செலுத்தி, பணம் செலுத்திய ஸ்கிரீன்ஷாட்டை WhatsApp-இல் பகிருங்கள். அதன் பின் ஆலோசனை தொடங்கும்.',
        },
      ],
    },
    finalCta: {
      title: 'உங்கள் குழந்தையின் பெயர் தேர்வைத் தெளிவுடன் தொடங்குங்கள்',
      text: 'உங்கள் தேவைகளைப் பற்றிப் பேச WhatsApp-இல் ஒரு செய்தி அனுப்புங்கள். ஒவ்வொரு படியிலும் நாங்கள் வழிகாட்டுவோம்.',
      cta: 'WhatsApp-இல் எங்களுடன் பேசுங்கள்',
    },
    contact: {
      eyebrow: 'தொடர்பு',
      title: 'எங்களைத் தொடர்பு கொள்ள',
      intro: 'எங்களை விரைவாகத் தொடர்பு கொள்ள WhatsApp சிறந்த வழி. உங்கள் விவரங்களுடன் உரையாடலைத் தொடங்க கீழே உள்ள படிவத்தையும் பயன்படுத்தலாம்.',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'தொலைபேசி',
      hoursLabel: 'ஆலோசனை நேரம்',
      hours: 'திங்கள் – சனி, காலை 9:00 – இரவு 8:00 (IST)',
      locationLabel: 'இருப்பிடம்',
      location: 'தமிழ்நாடு, இந்தியா · உலகெங்கும் ஆலோசனை',
      form: {
        title: 'விசாரணை அனுப்ப',
        name: 'உங்கள் பெயர்',
        namePlaceholder: 'எ.கா. பிரியா கார்த்திக்',
        dob: 'குழந்தையின் பிறந்த தேதி (தெரிந்தால்)',
        message: 'செய்தி',
        messagePlaceholder: 'உங்கள் விவரங்கள் அல்லது கேள்விகளைப் பகிருங்கள்',
        submit: 'WhatsApp-இல் தொடரவும்',
        note: 'உங்கள் செய்தி WhatsApp-இல் அனுப்பத் தயாராகத் திறக்கும்.',
        greeting: 'வணக்கம், குழந்தை பெயர் ஆலோசனை பற்றி அறிய விரும்புகிறேன்.',
      },
    },
    footer: {
      about: 'இந்தியாவிலும் வெளிநாடுகளிலும் உள்ள குடும்பங்களுக்கு, தமிழ் மற்றும் ஆங்கிலத்தில் தனிப்பட்ட குழந்தை பெயர் எண் கணித ஆலோசனை.',
      linksTitle: 'விரைவு இணைப்புகள்',
      contactTitle: 'தொடர்பு',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};
