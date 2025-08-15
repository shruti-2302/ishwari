"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Briefcase,
  Search,
  Menu,
  X,
  Rocket,
  LayoutGrid,
  ArrowRight,
  Building2,
  BrainCircuit,
  Users,
  Zap,
  Library,
  Mail,
  Phone,
  Megaphone,
  Code,
  Cloud,
} from "lucide-react";
import AboutSection from "@/components/About/About";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items tailored for a solutions company
  const navItems = [
    { href: "#about", label: "About Us", icon: Building2 },
    { href: "#services", label: "Services", icon: Zap },
    { href: "#solutions", label: "AI Solutions", icon: BrainCircuit },
    { href: "#portfolio", label: "Our Work", icon: LayoutGrid },
    { href: "#careers", label: "Careers", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <main className="bg-gray-900">
      {/* Hero Section with Integrated Header */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat  "
        // style={{
        //   backgroundImage:
        //     "url('https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg')",
        // }}
      >
        <img
          src={
            "https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
          }
          className="absolute z-0 inset-0 h-full w-full object-cover opacity-50"
        />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white container mx-auto px-6">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              Createishwari Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl">
              Intelligent Services for a Smarter Business Future
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="ai-bussiness"
                className="inline-block bg-[#F1B53E] text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center"
              >
                Ai Business
              </a>
              <a
                href="hr-services"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:-translate-y-1 text-center"
              >
                Hr Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
    </main>
  );
};

export default HomePage;
