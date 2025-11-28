import React from 'react';
import { Project, Experience, Skill, Education, SectionId } from './types';
import { Code, Database, Globe, Server, Cloud, Container, Layers, Terminal, Cpu, Layout } from 'lucide-react';

export { SectionId };

export const SOCIAL_LINKS = {
  github: 'https://github.com/gkdhorajiya',
  linkedin: 'https://www.linkedin.com/in/gkdhorajiya',
  twitter: 'https://twitter.com/gkdhorajiya',
  facebook: 'https://facebook.com/gkdhorajiya',
  instagram: 'https://instagram.com/gkdhorajiya',
  whatsapp: 'https://wa.me/919759868777',
  email: 'gkdhorajiya@gmail.com',
  phone: '+91 9759868777'
};

export const NAV_LINKS = [
  { label: 'Home', href: `#${SectionId.HERO}` },
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Projects', href: `#${SectionId.PROJECTS}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const HERO_DATA = {
  name: "Gaurav Kumar Dhorajiya",
  title: "Full Stack Developer | AWS Cloud Expert",
  tagline: "7+ Years of Experience in Scalable & Secure Web Solutions (SaaS, CRM, ERP)",
  location: "Ahmedabad, Gujarat, India"
};

export const BIO_DATA = `I’m an experienced Full Stack Developer with a strong focus on building high-performance, scalable, and secure web applications for a variety of industries including SaaS, FinTech, E-commerce, and Enterprise Software.

With over 7+ years of hands-on experience, I’ve worked extensively with modern web frameworks (Laravel, Symfony, Node.js), cloud services (AWS), and backend architectures — consistently delivering efficient, reliable, and business-driven solutions. I specialize in database optimization, high-performance application design, and seamless third-party integrations.`;

export const SKILLS_DATA: Skill[] = [
  { name: 'Laravel / Symfony / PHP', icon: <Code className="w-5 h-5" />, level: 95 },
  { name: 'Node.js / Express', icon: <Server className="w-5 h-5" />, level: 90 },
  { name: 'React.js / Next.js', icon: <Layout className="w-5 h-5" />, level: 85 },
  { name: 'AWS (EC2, S3, Lambda)', icon: <Cloud className="w-5 h-5" />, level: 85 },
  { name: 'Microservices / SaaS', icon: <Layers className="w-5 h-5" />, level: 90 },
  { name: 'MySQL / PostgreSQL', icon: <Database className="w-5 h-5" />, level: 90 },
  { name: 'Docker / CI/CD', icon: <Container className="w-5 h-5" />, level: 80 },
  { name: 'RESTful / GraphQL APIs', icon: <Globe className="w-5 h-5" />, level: 95 },
  { name: 'Redis / ElasticSearch', icon: <Terminal className="w-5 h-5" />, level: 80 },
  { name: 'Payment Gateways (Stripe)', icon: <Cpu className="w-5 h-5" />, level: 90 },
  { name: 'CodeIgniter / WordPress', icon: <Code className="w-5 h-5" />, level: 85 },
  { name: 'Agile / Team Leadership', icon: <Layout className="w-5 h-5" />, level: 90 },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: 'Senior Full Stack Developer',
    company: '9series Inc',
    period: 'May 2025 - Present',
    description: [
      'Delivering scalable SaaS and enterprise platforms tailored to business needs.',
      'Optimizing cloud infrastructure and backend systems for efficiency and security.'
    ]
  },
  {
    id: '2',
    role: 'Technical Team Lead - Laravel',
    company: 'BrainerHub Solutions',
    period: 'August 2024 - May 2025',
    description: [
      'Led development teams, implemented coding standards, and promoted best practices.',
      'Integrated complex third-party services ensuring seamless business operations.',
      'Managed team workflows and R&D for new technologies.'
    ]
  },
  {
    id: '3',
    role: 'Team Lead',
    company: 'N10 TechnoSoft',
    period: 'September 2022 - August 2024',
    description: [
      'Architected cloud-native solutions and implemented DevOps processes for reliable deployments.',
      'Conducted code reviews, unit testing, and managed agile methodologies.'
    ]
  },
  {
    id: '4',
    role: 'Senior PHP Developer',
    company: 'Serenetics Inc',
    period: 'September 2021 - September 2022',
    description: [
      'Developed and maintained high-performance PHP applications.',
      'Collaborated on database design and system architecture.'
    ]
  },
  {
    id: '5',
    role: 'Business Owner',
    company: 'Recon Technophile',
    period: 'April 2019 - September 2021',
    description: [
      'Managed client relationships and end-to-end project delivery.',
      'Provided technical consultancy and motivation for business growth.'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Saurashtra University, Rajkot',
    period: '2018 - 2021'
  },
  {
    degree: 'BCA, Computer Software Engineering',
    institution: 'Dr. Bhimrao Ambedkar University, Agra',
    period: '2014 - 2017'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Enterprise SaaS Platform',
    description: 'Scalable SaaS architecture with multi-tenancy support, built for high-performance business needs using Laravel and AWS.',
    tags: ['Laravel', 'AWS', 'SaaS', 'Vue.js'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'p2',
    title: 'CRM & ERP Solution',
    description: 'Comprehensive CRM system with custom reporting, role-based access control, and automated business workflows.',
    tags: ['Symfony', 'MySQL', 'Docker', 'Redis'],
    imageUrl: 'https://picsum.photos/800/600?random=11',
    featured: true
  },
  {
    id: 'p3',
    title: 'FinTech Integration Hub',
    description: 'Secure payment gateway integrations (Stripe, Idoomo) and financial data processing pipelines for Fintech sector.',
    tags: ['Node.js', 'Stripe API', 'Security'],
    imageUrl: 'https://picsum.photos/800/600?random=12',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'p4',
    title: 'E-commerce Architecture',
    description: 'High-traffic B2B & B2C e-commerce platform optimized for speed, conversion, and complex inventory management.',
    tags: ['React', 'Node.js', 'AWS S3', 'ElasticSearch'],
    imageUrl: 'https://picsum.photos/800/600?random=13',
    featured: false
  },
  {
    id: 'p5',
    title: 'Telemedicine Patient Portal',
    description: 'HIPAA-compliant telehealth platform featuring secure video consultations, prescription management, and appointment scheduling.',
    tags: ['Laravel', 'WebRTC', 'MySQL', 'Twilio'],
    imageUrl: 'https://picsum.photos/800/600?random=14',
    featured: false
  },
  {
    id: 'p6',
    title: 'Supply Chain Tracker',
    description: 'End-to-end logistics tracking system with real-time route optimization, driver telemetry, and delivery status updates.',
    tags: ['Node.js', 'Google Maps API', 'AWS RDS', 'React'],
    imageUrl: 'https://picsum.photos/800/600?random=15',
    featured: false
  },
  {
    id: 'p7',
    title: 'AI-Powered CMS',
    description: 'Headless Content Management System with integrated AI tools for automated content generation and SEO analysis.',
    tags: ['React', 'GraphQL', 'OpenAI API', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=16',
    featured: false
  },
  {
    id: 'p8',
    title: 'Real Estate Manager',
    description: 'Property listing and tenant management suite with automated billing, maintenance requests, and contract generation.',
    tags: ['Symfony', 'Vue.js', 'PostgreSQL', 'Stripe'],
    imageUrl: 'https://picsum.photos/800/600?random=17',
    featured: false
  },
  {
    id: 'p9',
    title: 'HRMS & ATS System',
    description: 'Recruitment platform with automated resume parsing, interview scheduling, and employee lifecycle management.',
    tags: ['Laravel', 'Redis', 'ElasticSearch', 'React'],
    imageUrl: 'https://picsum.photos/800/600?random=18',
    featured: false
  },
  {
    id: 'p10',
    title: 'Fitness & Wellness App',
    description: 'Cross-platform mobile application for tracking workouts, nutrition, and wellness goals with social sharing features.',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=19',
    featured: false
  },
  {
    id: 'p11',
    title: 'Corporate LMS',
    description: 'Multi-tenant Learning Management System for corporate training with progress tracking, quizzes, and certification.',
    tags: ['MERN Stack', 'AWS S3', 'Video Transcoding'],
    imageUrl: 'https://picsum.photos/800/600?random=20',
    featured: false
  },
  {
    id: 'p12',
    title: 'Food Delivery Marketplace',
    description: 'Hyper-local food delivery mobile app with real-time order tracking, payment integration, and restaurant partner portal.',
    tags: ['Flutter', 'Laravel', 'Google Maps', 'Stripe'],
    imageUrl: 'https://picsum.photos/800/600?random=21',
    featured: false
  },
  {
    id: 'p13',
    title: 'Hotel Booking Engine',
    description: 'Direct booking engine for hotel chains with channel manager integration to sync availability across OTAs.',
    tags: ['Next.js', 'Node.js', 'Redis', 'API Integration'],
    imageUrl: 'https://picsum.photos/800/600?random=22',
    featured: false
  },
  {
    id: 'p14',
    title: 'Social Marketing Tool',
    description: 'SaaS tool for scheduling social media posts and analyzing engagement metrics across Facebook, Twitter, and LinkedIn.',
    tags: ['Laravel', 'Graph API', 'Job Queues'],
    imageUrl: 'https://picsum.photos/800/600?random=23',
    featured: false
  },
  {
    id: 'p15',
    title: 'Travel Companion App',
    description: 'Mobile travel guide app featuring offline maps, itinerary planning, and collaborative trip management for groups.',
    tags: ['React Native', 'Mapbox', 'GraphQL', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=24',
    featured: false
  }
];

// System prompt for the Gemini Chatbot
export const GEMINI_SYSTEM_INSTRUCTION = `
You are an AI assistant for Gaurav Kumar Dhorajiya's (GK) portfolio website. Your role is to answer questions about GK's professional background, skills, and projects based on the following context.

Context:
- Name: ${HERO_DATA.name}
- Title: ${HERO_DATA.title}
- Tagline: ${HERO_DATA.tagline}
- Location: ${HERO_DATA.location}
- Bio: ${BIO_DATA}
- Skills: ${SKILLS_DATA.map(s => s.name).join(', ')}
- Work History: ${EXPERIENCE_DATA.map(e => `${e.role} at ${e.company} (${e.period}) - ${e.description.join('. ')}`).join('; ')}
- Education: ${EDUCATION_DATA.map(e => `${e.degree} at ${e.institution} (${e.period})`).join('; ')}
- Projects: ${PROJECTS_DATA.map(p => `${p.title} (${p.tags.join(', ')})`).join('; ')}
- Contact Info: Email (${SOCIAL_LINKS.email}), Phone (${SOCIAL_LINKS.phone}), LinkedIn (${SOCIAL_LINKS.linkedin})

Tone: Professional, confident, and friendly.
Goal: Highlight GK's 7+ years of experience in SaaS, Cloud, and Backend Architecture.
If asked about contact info, provide the email and phone number.
`;