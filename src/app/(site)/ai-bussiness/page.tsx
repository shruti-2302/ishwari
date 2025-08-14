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
  TrendingUp,
  Shield,
  Zap,
  Image,
  Briefcase,
  Heart,
  Building,
  ClosedCaption,
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
          <IndustriesSection />
          <CtaSection />
        </div>
      </main>
    </div>
  );
};

// --- Service Card Component (Updated Link) ---
const ServiceCard = ({ service }) => {
  // Use the iconMap to get the correct icon component
  const Icon = iconMap[service.icon] || BrainCircuit; // Fallback icon

  return (
    // The link now points to the dynamic page using the service's _id
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
        {/* Note: The field is renamed from shortDescription to subtitle to match your schema */}
        <p className="text-gray-900 mb-4 h-20">{service.subtitle}</p>
        <span className="font-semibold text-blue-600 flex items-center gap-2 group-hover:text-[#F1B53E] transition-colors duration-300">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

// --- Grid View, Why Choose Us, Industries, and CTA Sections (remain largely the same) ---
// (Your existing components for ServicesGridView, WhyChooseUsSection, etc., can be placed here)

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

// These components are included for completeness. No changes are needed in them.
const whyChooseUsPoints = [
  {
    icon: TrendingUp,
    title: "Drive Growth",
    description:
      "Leverage AI to unlock new revenue streams and scale your operations efficiently.",
  },
  {
    icon: Shield,
    title: "Enhance Security",
    description:
      "Implement robust, AI-driven security measures to protect your data and assets.",
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description:
      "Automate repetitive tasks and optimize workflows to increase productivity.",
  },
];

const industries = [
  { icon: Briefcase, name: "Finance & Banking" },
  { icon: Heart, name: "Healthcare" },
  { icon: Building, name: "Real Estate" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Users, name: "Retail & E-commerce" },
  { icon: BrainCircuit, name: "Technology" },
];

const WhyChooseUsSection = () => (
  <section className="py-20 md:py-32 bg-white rounded-lg shadow-lg border border-gray-200">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-5 text-blue-600">
          Why Choose Our AI?
        </h2>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto leading-relaxed">
          We deliver tangible business value through cutting-edge, reliable, and
          scalable AI solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {whyChooseUsPoints.map((point) => (
          <div key={point.title} className="p-6">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6">
              <point.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {point.title}
            </h3>
            <p className="text-gray-900">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IndustriesSection = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-5 text-blue-600">
          Industries We Serve
        </h2>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto leading-relaxed">
          Our AI solutions are tailored to meet the unique challenges and
          opportunities of various sectors.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all duration-300"
          >
            <industry.icon className="w-10 h-10 text-blue-600 mx-auto mb-4 group-hover:text-[#F1B53E] transition-colors duration-300" />
            <h4 className="font-semibold text-gray-700">{industry.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-20 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Transform Your Business?
      </h2>
      <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
        Let's discuss how Createishwari's AI solutions can help you achieve your
        goals. Schedule a free consultation with our experts today.
      </p>
      <button className="px-10 py-4 bg-[#F1B53E] text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
        Request a Free Consultation
      </button>
    </div>
  </section>
);

export default AiBusinessPage;
