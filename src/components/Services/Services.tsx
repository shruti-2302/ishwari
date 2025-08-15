"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Shield,
  UserCheck,
  Layers,
  Monitor,
  Banknote,
  Factory,
  Stethoscope,
  ShoppingBag,
  Utensils,
  Phone,
  BookOpen,
  Car,
  MessageSquare,
  Rocket,
  Users,
  Filter,
  Search,
  Lightbulb,
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



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Understanding Client Requirements",
      description:
        "We start by consulting with clients to understand the role, required skills, company culture, and business goals.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Search,
      title: "Talent Sourcing",
      description:
        "Using our extensive database, job portals, and social networks, we identify and attract the most suitable candidates.",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Filter,
      title: "Screening & Shortlisting",
      description:
        "Our specialists review applications, conduct initial interviews, and shortlist only those who meet the exact criteria.",
      gradient: "from-purple-400 to-violet-600",
    },
    {
      icon: UserCheck,
      title: "Candidate Assessment",
      description:
        "We evaluate technical skills, soft skills, and cultural fit through tailored assessments and interviews.",
      gradient: "from-orange-400 to-amber-600",
    },
    {
      icon: Users,
      title: "Client Interviews",
      description:
        "Shortlisted candidates are presented to the client for further interviews and evaluation.",
      gradient: "from-rose-400 to-pink-600",
    },
    {
      icon: Award,
      title: "Selection & Offer Management",
      description:
        "Once a candidate is chosen, we assist in offer negotiations, ensuring a smooth transition for both parties.",
      gradient: "from-teal-400 to-cyan-600",
    },
    {
      icon: Rocket,
      title: "Onboarding Support",
      description:
        "We provide onboarding assistance to help new hires integrate quickly and effectively into their new workplace.",
      gradient: "from-indigo-400 to-blue-600",
    },
    {
      icon: MessageSquare,
      title: "Follow-Up & Feedback",
      description:
        "Post-placement, we maintain communication with both clients and candidates to ensure long-term success.",
      gradient: "from-fuchsia-400 to-pink-600",
    },
  ];

  const industries = [
    {
      title: "Information Technology & Software",
      description:
        "Software development, infrastructure, cybersecurity, data analytics, cloud computing, and BPO/KPO roles.",
      icon: Monitor,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Retail and corporate banking, investment management, risk analysis, compliance, and insurance services.",
      icon: Banknote,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Manufacturing & Engineering",
      description:
        "Production, quality control, supply chain, R&D, and process engineering.",
      icon: Factory,
      gradient: "from-purple-400 to-violet-600",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Doctors, nurses, lab technicians, pharmacists, R&D scientists, and medical administration.",
      icon: Stethoscope,
      gradient: "from-orange-400 to-amber-600",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Store operations, merchandising, logistics, customer experience, and digital commerce.",
      icon: ShoppingBag,
      gradient: "from-rose-400 to-pink-600",
    },
    {
      title: "Hospitality & Tourism",
      description:
        "Hotels, travel agencies, events, food & beverage, and luxury services.",
      icon: Utensils,
      gradient: "from-teal-400 to-cyan-600",
    },
    {
      title: "Telecommunication",
      description:
        "Network engineering, technical support, customer service, and operations.",
      icon: Phone,
      gradient: "from-indigo-400 to-blue-600",
    },
    {
      title: "EdTech & Education",
      description:
        "Teaching, academic administration, curriculum design, and corporate training.",
      icon: BookOpen,
      gradient: "from-fuchsia-400 to-pink-600",
    },
    {
      title: "Automotive",
      description:
        "Design, manufacturing, maintenance, dealership operations, and after-sales service.",
      icon: Car,
      gradient: "from-yellow-400 to-orange-600",
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
            <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
              CREATEISHAWRI SOLUTION is a global HR consulting and recruitment
              firm with over a decade of experience in delivering high-impact
              hiring solutions. Since 2024, we’ve successfully placed 2,000+
              candidates across mid, senior, and executive levels for over 300
              organizations across India, Northwestern Europe.
            </p>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
              We’re not just recruiters — we are strategic talent partners
              helping businesses build high-performing, future-ready teams.
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
            <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
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
                    <p className="text-gray-900 text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our process */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              Our Recruitment Process
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse sectors, delivering specialized
              solutions tailored to each industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
                >
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex bg-gradient-to-r ${step.gradient} p-3 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <div className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {step.title}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
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
            <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse sectors, delivering specialized
              solutions tailored to each industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer text-center"
                >
                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex bg-gradient-to-r ${industry.gradient} p-3 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <div className="font-bold text-md text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {industry.title}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      {industry.description}
                    </div>
                  </div>
                </div>
              );
            })}
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
                50+
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
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-16 leading-relaxed">
            Contact our team of experts to discuss how we can help transform
            your organization's talent strategy and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href='/contant'
             
              className="px-12 py-4 bg-[#F1B53E] text-white font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </a>
            <a href="/"
             
              className="px-12 py-4 border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default ServicesPage;
