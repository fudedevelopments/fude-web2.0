// ─── FAQ Data ─────────────────────────────────────────────────────────────────
// Centralized question & answer data used for:
//   1. FAQPage structured data (rich results in Google search)
//   2. Rendering FAQ sections in UI components
//
// Usage (schema):
//   import { getFaqSchema, servicesFaq } from '@/config/faq'
//   <script type="application/ld+json">{JSON.stringify(getFaqSchema(servicesFaq))}</script>
//
// Usage (UI):
//   import { generalFaq } from '@/config/faq'
//   {generalFaq.map(item => <details>...)}

import siteConfig from '@/config/site'

export interface FaqItem {
  question: string
  answer: string
}

// ─── Schema Generator ─────────────────────────────────────────────────────────
export function getFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// ─── General / Home FAQ ───────────────────────────────────────────────────────
export const generalFaq: FaqItem[] = [
  {
    question: `What is ${siteConfig.companyName}?`,
    answer: `${siteConfig.companyName} is a leading AI-powered software development company based in ${siteConfig.address.city}, ${siteConfig.address.state}. We specialize in custom web applications, Android mobile apps, machine learning solutions, and intelligent business automation for businesses across India and worldwide.`,
  },
  {
    question: `Where is ${siteConfig.companyName} located?`,
    answer: `${siteConfig.companyName} is headquartered at ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.postalCode}, ${siteConfig.address.country}. We serve clients across Erode, Coimbatore, Tiruppur, Tamil Nadu, and India.`,
  },
  {
    question: `How can I contact ${siteConfig.companyName}?`,
    answer: `You can reach us by email at ${siteConfig.supportEmail} or call us at ${siteConfig.phone}. Our team is available Monday to Saturday, 9:00 AM – 6:00 PM IST. You can also fill out the contact form on our website for a free consultation.`,
  },
  {
    question: `What makes ${siteConfig.companyName} different from other software companies?`,
    answer: `${siteConfig.companyName} stands out with our AI-first development approach, transparent communication, affordable pricing, and end-to-end ownership of every project. Unlike typical IT vendors, we treat each client engagement as a product partnership — from discovery through long-term support.`,
  },
  {
    question: 'What types of businesses do you work with?',
    answer: `We work with startups, growing SMBs, educational institutions, and enterprise clients. Whether you need a landing page, a full SaaS platform, a mobile app, or an AI-powered analytics system, ${siteConfig.companyName} has the expertise to deliver it.`,
  },
  {
    question: 'Do you take projects from outside Tamil Nadu or India?',
    answer: `Yes. While our office is in ${siteConfig.address.city}, we work with clients across India and internationally. All project communication is handled remotely via video calls, project management tools, and email, with no compromise on quality or responsiveness.`,
  },
  {
    question: `When was ${siteConfig.companyName} founded?`,
    answer: `${siteConfig.companyName} was founded in ${siteConfig.foundingDate}. Over the years we have delivered 50+ successful projects and built a reputation as one of the best software development companies in Erode, Tamil Nadu.`,
  },
  {
    question: `Does ${siteConfig.companyName} serve Salem and Karur?`,
    answer: `Yes. ${siteConfig.companyName} actively serves businesses and institutions in Salem and Karur in addition to Erode, Coimbatore, Tiruppur, Chennai, and the rest of Tamil Nadu. We handle projects remotely and on scheduled consultation calls for clients across South India.`,
  },
  {
    question: `Which industries does ${siteConfig.companyName} work with?`,
    answer: `${siteConfig.companyName} works with schools, educational institutions, startups, retail businesses, manufacturers, healthcare providers, service companies, and growing enterprises that need modern websites, mobile apps, ERP software, AI solutions, and business automation.`,
  },
]

// ─── Services FAQ ─────────────────────────────────────────────────────────────
export const servicesFaq: FaqItem[] = [
  {
    question: `What services does ${siteConfig.companyName} offer?`,
    answer: `${siteConfig.companyName} offers a comprehensive range of services including: Web Development (React, Next.js), Android & iOS Mobile App Development (Flutter, React Native), AI & Machine Learning Solutions, Cloud Infrastructure, Backend API Development, UI/UX Design, E-commerce Development, and Business Automation. We are a one-stop technology partner.`,
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 2–4 weeks. A feature-rich web application or e-commerce platform takes 6–12 weeks depending on complexity. We follow an agile approach with weekly deliverables so you always know the project status.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'A basic mobile app (Android or iOS) takes around 4–8 weeks. A complex app with real-time features, third-party integrations, or AI capabilities can take 10–20 weeks. We provide a detailed timeline after the discovery phase.',
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We primarily use React, Next.js, TypeScript, Node.js, and TailwindCSS for frontend and full-stack web projects. For backends we use Node.js, Python (FastAPI/Django), and PostgreSQL or MongoDB for databases. We also use AWS and Vercel for deployment.',
  },
  {
    question: 'What technologies do you use for mobile app development?',
    answer: 'We use Flutter and React Native for cross-platform apps targeting both Android and iOS from a single codebase. For projects requiring native performance, we also develop platform-specific Android apps with Kotlin.',
  },
  {
    question: 'Do you provide AI and machine learning development?',
    answer: `Yes. ${siteConfig.companyName} has a dedicated AI/ML practice. We build custom recommendation engines, NLP-based chatbots, computer vision systems, predictive analytics dashboards, and intelligent business automation solutions using Python, TensorFlow, PyTorch, and LangChain.`,
  },
  {
    question: 'Can you redesign or improve my existing website or app?',
    answer: `Absolutely. We offer redesign, performance optimization, and feature-addition services for existing products. Our team can audit your current codebase, identify bottlenecks, and deliver an improved version without rebuilding from scratch when it is not necessary.`,
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: `Yes, we build custom e-commerce platforms using Next.js, Stripe, Razorpay, and modern headless commerce architectures. We can also integrate with payment gateways popular in India such as Razorpay, PayU, and UPI.`,
  },
  {
    question: 'Do you offer UI/UX design services?',
    answer: 'Yes. Our designers work in Figma to create user-centric interfaces before a single line of code is written. We deliver wireframes, high-fidelity mockups, and interactive prototypes that are validated with you before development begins.',
  },
  {
    question: 'Can you handle both design and development?',
    answer: `Yes. ${siteConfig.companyName} is a full-service digital studio. We handle product strategy, UI/UX design, frontend, backend, mobile, AI, cloud infra, and post-launch support — everything under one roof.`,
  },
]

// ─── Pricing & Process FAQ ────────────────────────────────────────────────────
export const processFaq: FaqItem[] = [
  {
    question: 'How much does it cost to build a website?',
    answer: `Pricing depends on scope, features, and complexity. A simple business website typically starts from ₹15,000–₹40,000 INR. A full web application or e-commerce platform starts from ₹60,000 INR. Contact us at ${siteConfig.supportEmail} for a free, no-obligation project estimate.`,
  },
  {
    question: 'How much does it cost to develop a mobile app?',
    answer: `Mobile app development starts from approximately ₹40,000 INR for a basic app. Apps with advanced features, real-time data, or AI integration have higher budgets. We offer flexible payment milestones tied to project deliverables.`,
  },
  {
    question: 'What is your development process?',
    answer: `Our process has five stages: 1) Discovery — we understand your goals and requirements; 2) Planning — we create a roadmap with milestones; 3) Development — agile sprints with weekly demos; 4) Testing — QA across devices and browsers; 5) Launch & Support — deployment with ongoing maintenance available.`,
  },
  {
    question: 'Do you provide a free consultation?',
    answer: `Yes. We offer a free 30-minute consultation to understand your project and provide an honest estimate. You can reach us at ${siteConfig.supportEmail} or call ${siteConfig.phone} to schedule.`,
  },
  {
    question: 'Do you sign NDAs to protect my idea?',
    answer: 'Yes. We sign a Non-Disclosure Agreement (NDA) before any detailed discussions. Your business idea and project details remain strictly confidential.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: `Yes. We offer monthly maintenance plans that include bug fixes, performance monitoring, dependency updates, and minor feature additions. We are committed to being a long-term technology partner, not just a one-time vendor.`,
  },
  {
    question: 'Will I own the source code?',
    answer: 'Yes. Upon final payment, full source code ownership and intellectual property rights are transferred to you. We use Git for version control and will hand over the complete repository along with documentation.',
  },
]

// ─── About / Company FAQ ─────────────────────────────────────────────────────
export const aboutFaq: FaqItem[] = [
  {
    question: `Is ${siteConfig.companyName} the best IT company in Erode?`,
    answer: `${siteConfig.companyName} is recognized as one of the top IT companies in ${siteConfig.address.city}, ${siteConfig.address.state}, with expertise spanning web development, mobile apps, AI solutions, and business automation. Our portfolio of 50+ successful projects and 30+ satisfied clients reflects our commitment to quality.`,
  },
  {
    question: 'How experienced is the Fude Development team?',
    answer: `Our team comprises specialists in frontend (React, Next.js), backend (Node.js, Python), mobile (Flutter, React Native), cloud engineering, and AI/ML. The company was founded in ${siteConfig.foundingDate} and every team member holds production experience delivering real-world products.`,
  },
  {
    question: 'Does Fude Development work with startups?',
    answer: `Yes. We love working with early-stage startups. We offer MVP development packages tailored to lean budgets — helping founders validate ideas quickly with a production-ready product, then scale as the business grows.`,
  },
  {
    question: 'Does Fude Development serve clients outside Erode?',
    answer: `Yes. We serve clients across Coimbatore, Tiruppur, Chennai, Bangalore, and international markets. Our remote-first workflow ensures seamless collaboration regardless of geography.`,
  },
  {
    question: 'Does Fude Development work with clients in Salem and Karur?',
    answer: `Yes. ${siteConfig.companyName} works with businesses, schools, and organizations in Salem and Karur for website development, mobile app development, custom software, AI solutions, and School ERP software.`,
  },
]

// ─── Smart School FAQ ─────────────────────────────────────────────────────────
export const smartSchoolFaq: FaqItem[] = [
  {
    question: 'What is the Smart School Management System by Fude Development?',
    answer: `The Smart School Management System by ${siteConfig.companyName} is an AI-powered cloud-based ERP platform that helps schools automate administration, track buses in real-time, manage student attendance and fees, enable parent-teacher communication, and deliver personalised AI-driven learning — all from a single platform.`,
  },
  {
    question: 'Does the platform support live GPS bus tracking for parents?',
    answer: 'Yes. The platform includes real-time GPS bus tracking with instant push notifications to parents when the bus is approaching their stop, when their child boards, and when the bus reaches school — ensuring complete safety and transparency.',
  },
  {
    question: 'What AI features are included in the school management system?',
    answer: 'The system includes AI syllabus-based personalised learning that adapts to each student, an AI tutor for homework help, automated report generation, AI-driven attendance alerts, and intelligent analytics dashboards for administrators and teachers.',
  },
  {
    question: 'Is this school ERP software available for schools in Erode and Tamil Nadu?',
    answer: `Yes. ${siteConfig.companyName} is headquartered in ${siteConfig.address.city}, ${siteConfig.address.state}, and the Smart School Management System is actively offered to schools across Erode, Coimbatore, Tiruppur, and the broader Tamil Nadu region, with support for schools across India.`,
  },
  {
    question: 'How quickly can a school get started with the platform?',
    answer: 'Schools can go live in days, not months. Fude Development handles the onboarding, data migration, and comprehensive staff training at no extra cost. A free 30-day trial is available with no hidden charges.',
  },
  {
    question: 'What kind of support does Fude Development provide after deployment?',
    answer: 'We provide round-the-clock (24/7) technical support along with dedicated account managers who have deep expertise in the education domain. Support is available throughout the year to ensure uninterrupted school operations.',
  },
  {
    question: 'Does the smart school system have a parent mobile app?',
    answer: "Yes. A dedicated parent mobile app (Android & iOS) provides real-time notifications for attendance, fees, homework, exam results, and live bus tracking. Parents stay connected to their child's school life at all times.",
  },
  {
    question: 'Can I manage school fees and payments digitally?',
    answer: 'Yes. The platform includes a complete fee management module supporting online payments via UPI, card, and net banking. It sends automated payment reminders, generates digital receipts, and provides a fee collection dashboard for administrators.',
  },
  {
    question: 'Which schools can use this smart school software?',
    answer: "It is designed for CBSE, ICSE, and State Board schools of any size — from 200 to 5000+ students. The platform scales with your institution and can be customised to match your school's unique workflows.",
  },
  {
    question: 'Is there a demo available for the smart school software?',
    answer: `Yes. You can request a free live demo by contacting us at ${siteConfig.supportEmail} or calling ${siteConfig.phone}. We will schedule a personalised walkthrough for your school's staff.`,
  },
  {
    question: 'Is the smart school ERP available for schools in Salem and Karur?',
    answer: `Yes. ${siteConfig.companyName} offers the Smart School Management System to schools in Salem, Karur, Erode, Coimbatore, Tiruppur, Chennai, and across Tamil Nadu. We provide onboarding, setup, training, and support for schools throughout the region.`,
  },
  {
    question: 'Does the school ERP include attendance, fees, exams, and parent communication in one platform?',
    answer: 'Yes. The platform combines attendance management, fee collection, admissions, timetable management, exam records, report cards, staff management, homework sharing, parent notifications, and live bus tracking in one unified school ERP system.',
  },
  {
    question: 'Can private schools, matric schools, and CBSE schools use this ERP software?',
    answer: 'Yes. The software is suitable for private schools, matriculation schools, CBSE schools, ICSE schools, and State Board schools. Modules can be configured based on the school workflow, class structure, transport operations, and fee process.',
  },
]

// ─── Combined (all pages) ─────────────────────────────────────────────────────
export const allFaq: FaqItem[] = [
  ...generalFaq,
  ...servicesFaq,
  ...processFaq,
  ...aboutFaq,
  ...smartSchoolFaq,
]
