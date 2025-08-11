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
} from "lucide-react";
import Link from "next/link";

const HomeSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceClick = () => {
    console.log("Navigate to Services");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-suite and senior management positions across industries.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Acquisition",
      description:
        "Comprehensive recruitment solutions from entry-level to specialized professional roles.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Consulting",
      description:
        "HR strategy development, organizational restructuring, and workforce optimization.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Staffing Solutions",
      description:
        "Flexible staffing models including permanent, contract, and project-based placements.",
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
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center flex">
          <div className=" flex flex-col  items-center justify-center text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              ELEVATE YOUR
              <br />
              <span className="text-blue-200">WORKFORCE</span>
            </h1>
            <div className="w-24 h-1 bg-[#F1B53E] mb-8"></div>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Strategic HR solutions and executive search services that
              transform organizations and unlock human potential across
              industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href={"services"}
                className="px-12 py-4 bg-[#F1B53E] text-white font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Our Services
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </Link>
              <Link
                href={"jobs"}
                className="px-12 py-4 border-2 border-[#F1B53E] text-[#F1B53E] font-bold text-lg hover:bg-[#F1B53E] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                12+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Expert Team
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Placements
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium text-lg">
                Industries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-blue-600">
              OUR SERVICES
            </h2>
            <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive HR solutions designed to meet your organization's
              unique needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-2 border-gray-200 p-10 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="text-blue-600 group-hover:text-[#F1B53E] group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-blue-600">
              INDUSTRIES WE SERVE
            </h2>
            <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse sectors, delivering specialized
              recruitment solutions tailored to each industry's unique
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 p-6 text-center hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-lg font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-blue-600">
              WHY CHOOSE US
            </h2>
            <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine deep industry expertise with innovative recruitment
              methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="group text-center border-2 border-gray-200 p-10 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Industry Expertise
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Deep understanding of market dynamics and industry-specific
                requirements across all sectors.
              </p>
            </div>

            <div className="group text-center border-2 border-gray-200 p-10 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Strategic Approach
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Data-driven methodologies that align talent acquisition with
                your long-term business objectives.
              </p>
            </div>

            <div className="group text-center border-2 border-gray-200 p-10 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Trusted Partnership
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Long-term relationships built on trust, transparency, and
                consistent delivery of exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            READY TO TRANSFORM
            <br />
            <span className="text-blue-200">YOUR ORGANIZATION?</span>
          </h2>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-12"></div>
          <p className="text-2xl md:text-3xl mb-16 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Partner with us to unlock your organization's full potential through
            strategic talent acquisition and HR excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              href={"services"}
              className="px-16 py-6 bg-[#F1B53E] text-white font-black text-xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 inline-block ml-2" />
            </Link>
            <Link
              href={"contact"}
              className="px-16 py-6 border-2 border-[#F1B53E] text-[#F1B53E] font-black text-xl hover:bg-[#F1B53E] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-blue-600">
              GET IN TOUCH
            </h2>
            <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your HR needs? Contact our team of experts today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Call Us</h3>
              <p className="text-gray-600 text-lg">+91 8770950558</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Email Us
              </h3>
              <p className="text-gray-600 text-lg">rajni@createishwari.com</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 border-2 border-blue-600 mx-auto mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <MapPin className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Visit Us
              </h3>
              <p className="text-gray-600 text-lg">
                DB Pride, Talawali Chanda, Indore, Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
