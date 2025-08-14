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
} from "lucide-react";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/#about", label: "About", icon: Building2 },
    { href: "ai-bussiness", label: "AI Business", icon: BrainCircuit },
    { href: "hr-services", label: "HR Services", icon: Users },
    { href: "jobs", label: "Apply for Jobs", icon: Briefcase },
    { href: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="bg-gray-900 text-white relative font-sans">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full z-50 bg-black/60 text-white">
        <div className="w-full px-6 flex items-center gap-8 lg:gap-16">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center space-x-2 py-2"
          >
            {/* Using a placeholder for the logo as the path might not be available */}
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-24 w-auto"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/150x50/000000/FFFFFF?text=Logo";
              }}
            />
          </Link>

          <div className="w-full">
            {/* Top Row of Navbar */}
            <div className="flex items-center justify-between py-2 border-b border-white border-opacity-30">
              <div className="flex items-center space-x-6">
                {/* Announcement/Ticker - Hidden on small screens */}
                <div className="hidden lg:flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full">
                    <Megaphone className="w-4 h-4 text-white" />
                    <span className="text-white font-medium">
                      Now Hiring: AI Engineers
                    </span>
                  </div>
                  {/* <div className="text-gray-300 flex items-center space-x-4">
                    <a
                      href="mailto:rajni@createishwari.com"
                      className="flex items-center space-x-1 hover:text-[#F1B53E]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>rajni@createishwari.com</span>
                    </a>
                    <span className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>+91 87709 50558</span>
                    </span>
                  </div> */}
                </div>
              </div>

              <div className="flex items-center ">
                {/* Quick Actions - Hidden on medium screens and below */}
                <div className="hidden md:flex items-center  gap-4 text-sm">
                  <a
                    href="jobs"
                    className="flex items-center space-x-1 hover:text-[#F1B53E] transition-colors duration-300"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>Apply Now</span>
                  </a>

                  <a
                    href="contact"
                    className="bg-gradient-to-r from-[#F1B53E] to-yellow-500 hover:from-yellow-500 hover:to-[#F1B53E] text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none hover:text-[#F1B53E] transition-colors duration-300 p-2"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Main Navigation - Hidden on medium screens and below */}
            <div className="hidden md:flex items-center justify-between py-3">
              <nav className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative group hover:text-[#F1B53E] transition-colors duration-300 text-sm font-medium"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F1B53E] group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </nav>

              {/* Search Bar */}
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-2 pr-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F1B53E] focus:border-transparent transition-all duration-300 w-48"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-lg border-t border-white border-opacity-20 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="container mx-auto px-6 py-6">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg px-4 py-3 pr-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F1B53E]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#F1B53E]" />
                    <span className="text-white font-medium">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <hr className="my-4 border-white border-opacity-20" />

            {/* Mobile Quick Actions */}
            <div className="space-y-3">
              <a
                href="jobs"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                <span>Apply Now</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#F1B53E] to-yellow-500 hover:from-yellow-500 hover:to-[#F1B53E] text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
