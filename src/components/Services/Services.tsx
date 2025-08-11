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

  const mainServices = [
    {
      id: "executive",
      icon: <Search className="w-12 h-12" />,
      title: "Executive Search",
      subtitle: "Leadership Recruitment Excellence",
      description:
        "Strategic C-suite and senior management recruitment across industries with proven track record of placing top-tier executives.",
      features: [
        "C-Suite Executive Placement",
        "Board Member Search",
        "Senior Management Roles",
        "Succession Planning",
        "Leadership Assessment",
        "Executive Coaching Support",
      ],
      process: [
        "Requirement Analysis & Strategy",
        "Market Mapping & Research",
        "Candidate Sourcing & Screening",
        "Assessment & Interviews",
        "Final Selection & Negotiation",
        "Onboarding Support",
      ],
    },
    {
      id: "talent",
      icon: <Users className="w-12 h-12" />,
      title: "Talent Acquisition",
      subtitle: "Comprehensive Recruitment Solutions",
      description:
        "End-to-end recruitment services from entry-level to specialized professional roles with focus on cultural fit and long-term success.",
      features: [
        "Permanent Staffing",
        "Volume Recruitment",
        "Niche Skill Sourcing",
        "Campus Recruitment",
        "Technical Hiring",
        "Cultural Fit Assessment",
      ],
      process: [
        "Job Analysis & Profiling",
        "Multi-Channel Sourcing",
        "Screening & Shortlisting",
        "Interview Coordination",
        "Reference & Background Checks",
        "Offer Management",
      ],
    },
    {
      id: "consulting",
      icon: <Building className="w-12 h-12" />,
      title: "HR Consulting",
      subtitle: "Strategic HR Transformation",
      description:
        "Comprehensive HR strategy development, organizational restructuring, and workforce optimization to drive business growth.",
      features: [
        "HR Strategy Development",
        "Organizational Design",
        "Performance Management",
        "Compensation & Benefits",
        "HR Policy Framework",
        "Change Management",
      ],
      process: [
        "Current State Assessment",
        "Gap Analysis & Strategy",
        "Solution Design",
        "Implementation Planning",
        "Change Management",
        "Performance Monitoring",
      ],
    },
    {
      id: "staffing",
      icon: <Target className="w-12 h-12" />,
      title: "Staffing Solutions",
      subtitle: "Flexible Workforce Management",
      description:
        "Flexible staffing models including contract, temporary, and project-based placements to meet dynamic business needs.",
      features: [
        "Contract Staffing",
        "Temporary Workforce",
        "Project-Based Teams",
        "Seasonal Hiring",
        "Skill-Based Deployment",
        "Workforce Analytics",
      ],
      process: [
        "Resource Planning",
        "Talent Pool Development",
        "Quick Deployment",
        "Performance Tracking",
        "Contract Management",
        "Scalability Support",
      ],
    },
  ];

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
    "Information Technology",
    "Financial Services",
    "Healthcare & Life Sciences",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Consulting",
    "Real Estate",
    "Media & Entertainment",
    "Automotive",
    "Telecommunications",
    "Pharmaceuticals",
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Excellence",
      description:
        "12+ years of successful placements across diverse industries and roles.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description:
        "Extensive network of professionals and industry connections worldwide.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidentiality",
      description:
        "Strict confidentiality protocols ensuring complete discretion in all engagements.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results-Driven",
      description:
        "Focused on delivering measurable results that drive business success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative pb-32 pt-48 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive HR solutions designed to transform your organization's
            talent strategy and drive sustainable growth through strategic
            workforce management.
          </p>
        </div>
      </section>

      <HRServicesPage />

      {/* Additional Services */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              ADDITIONAL SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support services to complement our core offerings
              and provide end-to-end HR solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-blue-600 mb-6 group-hover:text-[#F1B53E] group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
                <div className="font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
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
              We combine industry expertise with innovative methodologies to
              deliver exceptional results that drive business success.
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
