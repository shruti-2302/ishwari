"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Briefcase,
  Phone,
  Home,
  Award,
  Target,
  Globe,
  Zap,
  TrendingUp,
  Shield,
  Heart,
  Building,
  Clock,
  Mail,
  MapPin,
  ChevronDown,
  Eye,
  Search,
  Calendar,
  UserCheck,
  FileText,
  BarChart3,
  Settings,
  Lightbulb,
  PieChart,
  Handshake,
  Clock4,
  Layers,
} from "lucide-react";
import HRServicesPage from "./HrServices";

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("executive");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceClick = () => {
    console.log("Navigate to Services");
  };

  const handleJobsClick = () => {
    console.log("Navigate to Jobs");
  };

  const handleContactClick = () => {
    console.log("Navigate to Contact");
  };

  const handleHomeClick = () => {
    console.log("Navigate to Home");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "HR Analytics",
      description:
        "Data-driven insights for strategic HR decision making and workforce optimization.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Compliance Management",
      description:
        "Ensuring adherence to labor laws and regulatory requirements across jurisdictions.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Training & Development",
      description:
        "Customized learning solutions to enhance employee skills and organizational capabilities.",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Organizational Assessment",
      description:
        "Comprehensive evaluation of organizational health and workforce effectiveness.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Merger & Acquisition Support",
      description:
        "HR due diligence and integration support for mergers and acquisitions.",
    },
    {
      icon: <Clock4 className="w-8 h-8" />,
      title: "Interim Management",
      description:
        "Temporary executive placement for critical roles during transitions or projects.",
    },
  ];
  const industries = [
    {
      title: "Information Technology & Software",
      description:
        "Software development, infrastructure, cybersecurity, data analytics, cloud computing, and BPO/KPO roles.",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Retail and corporate banking, investment management, risk analysis, compliance, and insurance services.",
    },
    {
      title: "Manufacturing & Engineering",
      description:
        "Production, quality control, supply chain, R&D, and process engineering.",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Doctors, nurses, lab technicians, pharmacists, R&D scientists, and medical administration.",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Store operations, merchandising, logistics, customer experience, and digital commerce.",
    },
    {
      title: "Hospitality & Tourism",
      description:
        "Hotels, travel agencies, events, food & beverage, and luxury services.",
    },
    {
      title: "Telecommunication",
      description:
        "Network engineering, technical support, customer service, and operations.",
    },
    {
      title: "EdTech & Education",
      description:
        "Teaching, academic administration, curriculum design, and corporate training.",
    },
    {
      title: "Automotive",
      description:
        "Design, manufacturing, maintenance, dealership operations, and after-sales service.",
    },
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description:
        "Years of experience across diverse global markets enable us to understand industry-specific demands and deliver tailored workforce solutions.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality-Driven Approach",
      description:
        "We prioritize skill, efficiency, and cultural fit, ensuring that every placement contributes to long-term organizational success.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Talent Network",
      description:
        "Access to a vast pool of skilled professionals from different regions, ready to meet your business requirements.",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Career-Focused Support",
      description:
        "For job seekers, we provide not just opportunities but also guidance, helping them grow professionally and personally.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethics & Transparency",
      description:
        "Our processes are built on trust, honesty, and mutual respect, fostering lasting relationships with clients and candidates.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Scalable Solutions",
      description:
        "Whether you’re a startup or a multinational corporation, we customize our services to match your size, scope, and goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative pb-32 pt-48 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight">
            CreateIshwari Solutions
          </h1>
          <h5 className="mb-4">
            “Empowering Organizations with Top-Tier Talent”
          </h5>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            “A results-driven HR recruitment agency delivering exceptional hires
            through precision, process, and deep industry insight.”
          </p>
        </div>
      </section>

      <section className="py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              CREATEISHWARI SOLUTIONS
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CREATEISHAWRI SOLUTION is a global HR consulting and recruitment
              firm with over a decade of experience in delivering high-impact
              hiring solutions. Since 2024, we’ve successfully placed 2,000+
              candidates across mid, senior, and executive levels for over 300
              organizations across India, Northwestern Europe. We’re not just
              recruiters — we are strategic talent partners helping businesses
              build high-performing, future-ready teams.
            </p>
          </div>
        </div>
        <HRServicesPage />
      </section>
      {/* Why Choose Our Services */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              WHY CHOOSE OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CreateIshawri Solutions, we go beyond traditional recruitment
              and outsourcing — we build partnerships that fuel growth. Our
              commitment lies in connecting the right talent with the right
              opportunity, ensuring that both businesses and individuals thrive
              in today’s fast-changing world. Here’s why businesses and
              professionals trust us:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 p-10 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="text-blue-600 group-hover:text-[#F1B53E] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              INDUSTRIES WE SERVE
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse sectors, delivering specialized
              solutions tailored to each industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gray-50 border-2 border-gray-200 p-6 text-center hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <div className="font-semibold mb-2">{industry.title}</div>
                <div className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                  {industry.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-blue-200 font-medium">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                30
              </div>
              <div className="text-blue-200 font-medium">Days Avg. Closure</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-blue-200 font-medium">Active Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-blue-200 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-blue-600">
            READY TO GET STARTED?
          </h2>
          <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Contact our team of experts to discuss how we can help transform
            your organization's talent strategy and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              onClick={handleContactClick}
              className="px-12 py-4 bg-[#F1B53E] text-white font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </button>
            <button
              onClick={handleHomeClick}
              className="px-12 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default ServicesPage;
