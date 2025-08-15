import React from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Mic,
  Languages,
  Film,
  Database,
  Users,
  Phone,
  ArrowRight,
  Shield,
  Zap,
  Image,
  Briefcase,
  Heart,
  Building,
  ClosedCaption,
  CheckCircle,
  Layers,
} from "lucide-react";

// --- Icon Mapping ---
// Maps the string from the database to the actual Lucide icon component
const iconMap = {
  Mic,
  Languages,
  Film,
  Database,
  Users,
  Phone,
  ClosedCaption,
  Image,
  Briefcase,
  Heart,
  Building,
  Zap,
  BrainCircuit,
};

// --- Fetch Services Data ---
async function getServices() {
  // Replace with your actual domain in production
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/aibusiness`,
    {
      cache: "no-store", // Use 'no-store' for dynamic data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }
  const services = await res.json();

  return services.services;
}

// --- Main Page Component ---
const AiBusinessPage = async () => {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative pb-32 pt-48 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            AI Business Solutions
          </h1>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-10"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Global AI Data Services for a Smarter, Connected World
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <ServicesGridView services={services} />
          <WhyChooseUsSection />
          <CtaSection />
        </div>
      </main>
    </div>
  );
};

// --- Service Card Component (Unchanged) ---
const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || BrainCircuit; // Fallback icon

  return (
    <Link
      href={`/ai-bussiness/${service._id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative h-56">
        <img
          src={
            service.image?.startsWith("http")
              ? service.image
              : `${process.env.NEXT_PUBLIC_API_URL}${service.image}`
          }
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full group-hover:bg-[#F1B53E] transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {service.title}
        </h3>
        {/* <p className="text-gray-600 mb-4 h-20">{service.subtitle}</p> */}
        <span className="font-semibold text-blue-600 flex items-center gap-2 group-hover:text-[#F1B53E] transition-colors duration-300">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

// --- Services Grid View Component (Unchanged) ---
const ServicesGridView = ({ services }) => (
  <div className="mb-20 md:mb-32">
    <div className="text-center mb-16 md:mb-20">
      <p className="mb-16 text-lg text-gray-900  mx-auto leading-relaxed">
        With years of industry experience and a global network of data experts,
        we provide accurate and scalable solutions in data collection,
        transcription, translation, subtitle, OCR, and image annotation and —
        powering the next generation of AI technologies. Createishwari Solutions
        is a global AI enablement company helping organizations build smarter,
        faster, and more human-centric AI models. Our expert teams specialize in
        language services, visual data annotation, and scalable data collection.
        We support startups, enterprises, and research labs in achieving
        world-class accuracy with reliable, multilingual, and cost-effective
        solutions.
      </p>
      <h2 className="text-4xl md:text-5xl font-black mb-5 text-blue-600">
        Our Language Expertise
      </h2>
      <p className="mb-16 text-lg text-gray-900  mx-auto leading-relaxed">
        <b>Indian Languages:</b> Hindi, Marathi, Gujarati, Punjabi, Bengali,
        Tamil, Telugu, Kannada, Malayalam, Odia, Assamese, and more <br />
        <b> Foreign Languages:</b> English, Spanish, French, German, Italian,
        Arabic, Chinese, Japanese, Korean, Russian, Portuguese, and 30+ others
      </p>
      <h2 className="text-4xl md:text-5xl font-black mb-5 text-blue-600">
        Our AI Services
      </h2>
      <p className="text-lg text-gray-900 max-w-2xl mx-auto leading-relaxed">
        Explore our suite of AI-powered solutions designed to enhance efficiency
        and unlock new opportunities.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  </div>
);

// --- NEW "Why Choose Us" Section ---
const strengths = [
  {
    icon: Briefcase,
    title: "Proven Industry Experience",
    points: [
      "Years of handling projects for AI, technology, healthcare, automotive, legal, retail, and more.",
      "Strong portfolio of delivering multi-million-unit datasets and multilingual projects worldwide.",
    ],
    gradient: "from-blue-400 to-blue-600", // Blue
  },
  {
    icon: Users,
    title: "Experienced Project Management",
    points: [
      "Led by seasoned project managers with both technical expertise and domain understanding.",
      "Clear planning, milestone tracking, and agile delivery frameworks.",
    ],
    gradient: "from-green-400 to-emerald-600", // Green
  },
  {
    icon: Languages,
    title: "Global Network & Multi-Vendor Capability",
    points: [
      "Partnerships with verified global vendors and a curated pool of skilled freelancers in 50+ countries.",
      "Native linguists, domain specialists, and certified annotators.",
    ],
    gradient: "from-purple-400 to-violet-600", // Purple
  },
  {
    icon: CheckCircle,
    title: "Uncompromised Quality & Compliance",
    points: [
      "99%+ accuracy rates through multi-layer quality assurance.",
      "GDPR, HIPAA, and ISO-aligned processes for security and privacy.",
      "Ethically sourced data with documented consent.",
    ],
    gradient: "from-orange-400 to-amber-600", // Orange
  },
  {
    icon: Shield,
    title: "Security & Confidentiality",
    points: [
      "End-to-end encrypted file transfers and secure data storage.",
      "NDA-backed confidentiality for every client engagement.",
    ],
    gradient: "from-rose-400 to-pink-600", // Pink
  },
  {
    icon: Zap,
    title: "Timely Delivery with Scalability",
    points: [
      "Ability to handle urgent 24-hour deliveries and large-scale projects simultaneously.",
      "Resource scaling without quality compromise.",
    ],
    gradient: "from-teal-400 to-cyan-600", // Teal
  },
  {
    icon: Layers,
    title: "One Partner for Multiple Needs",
    points: [
      "Full-service capabilities: Data Collection, Annotation, Transcription, Translation, Subtitles, OCR — all under one roof.",
      "Reduced vendor management complexity for clients.",
    ],
    gradient: "from-indigo-400 to-blue-600", // Indigo
  },
];

const WhyChooseUsSection = () => (
  <section className="py-20 md:py-24 bg-white rounded-lg shadow-lg border border-gray-200 mb-20 md:mb-32">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-5 text-blue-600">
          Why Choose CreateIshwari Solutions?
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          At CreateIshwari Solutions, we are more than just a service provider —
          we are a strategic partner committed to delivering technically sound,
          timely, and secure solutions. Our success comes from deep industry
          experience, a global talent network, and robust project management
          practices that ensure every deliverable meets the highest standards of
          accuracy, compliance, and client satisfaction.
        </p>
        <p className="text-lg text-gray-600">
          We combine cutting-edge tools with human expertise to manage complex,
          multi-language, multi-format projects at scale. With a track record of
          on-time delivery, strict confidentiality policies, and rigorous
          quality controls, we give our clients the confidence to trust us with
          their most critical projects.
        </p>
      </div>

      <h3 className="text-center text-3xl font-bold text-blue-600 mb-12">
        Our Strengths at a Glance
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-white`}
          >
            {/* Animated gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${strength.gradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
            ></div>

            <div className="relative z-10">
              {/* Icon with gradient background */}
              <div
                className={`inline-flex bg-gradient-to-r ${strength.gradient} p-3 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <strength.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                {strength.title}
              </h4>

              {/* Points List */}
              <ul className="text-gray-600 text-sm leading-relaxed space-y-2 group-hover:text-gray-700 transition-colors duration-300">
                {strength.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- NEW Call-to-Action Section ---
const CtaSection = () => (
  <section className="py-14 md:py-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl shadow-xl">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
        Ready to Power Your Next AI & Language Project?
      </h2>
      <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Partner with CreateIshwari Solutions to access world-class data
        services, multilingual expertise, and cutting-edge solutions that help
        your business scale faster. From AI training datasets to transcription,
        translation, and OCR — we deliver with accuracy, speed, and compliance.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="/contant"
          className="w-full sm:w-auto px-8 py-4 bg-[#F1B53E] text-gray-900 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get Started Today
        </a>
        <a
          href="/hr-services"
          className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  </section>
);

export default AiBusinessPage;
