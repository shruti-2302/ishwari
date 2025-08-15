"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  BrainCircuit,
  Bot,
  ArrowLeft,
  Mic,
  Languages,
  Film,
  Database,
  Users,
  Phone,
  Loader2, // Added for loading state
} from "lucide-react";

// --- Icon Mapping ---
// This map converts the icon name string from your database to the actual component.
const iconMap = {
  Mic,
  Languages,
  Film,
  Database,
  Users,
  Phone,
  BrainCircuit,
  Bot,
};

const ServiceDetailPage = ({ params }) => {
  const router = useRouter();
  const path = usePathname();

  // --- State Management ---
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching ---
  useEffect(() => {
    const id = path.split("/")[2];
    if (!id) return;

    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/services/aibusiness/${id}`);

        if (!res.ok) {
          throw new Error("Service not found");
        }

        const data = await res.json();
        setService(data.service);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [path]); // Effect runs when the 'id' parameter changes

  // --- Conditional Rendering ---

  // 1. Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
      </div>
    );
  }

  // 2. Error or Not Found State
  if (error || !service) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {error || "Could not find the requested service."}
        </h2>
        <Link
          href="/ai-bussiness"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-[#F1B53E] transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to All Services
        </Link>
      </div>
    );
  }

  // Get the correct icon component from the map
  const ServiceIcon = iconMap[service.icon] || BrainCircuit;

  // 3. Success State: Render the page with fetched data
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative pb-32 pt-48 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full inline-block mb-6">
            <ServiceIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      <main className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <button
            onClick={() => router.push("/ai-bussiness")}
            className="flex items-center gap-2 text-blue-600 font-semibold mb-12 hover:text-[#F1B53E] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Services
          </button>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Column: Description & Features */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Service Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  {service.fullDescription}
                </p>
                <h3 className="text-2xl font-bold text-blue-600 mt-6">
                  DataType We Collect
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.dataType.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mt-6">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-blue-600 mt-6">
                  Our Process
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {service.process.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailPage;
