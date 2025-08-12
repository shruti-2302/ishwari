"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Target,
  Users,
  CalendarRange,
  UserSearch,
  UsersRound,
  GraduationCap,
  Laptop,
  Globe2,
  Wallet,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const ICONS = {
  Target: <Target size={48} />,
  Users: <Users size={48} />,
  CalendarRange: <CalendarRange size={48} />,
  UserSearch: <UserSearch size={48} />,
  UsersRound: <UsersRound size={48} />,
  GraduationCap: <GraduationCap size={48} />,
  Laptop: <Laptop size={48} />,
  Globe2: <Globe2 size={48} />,
  Wallet: <Wallet size={48} />,
  Default: <Target size={48} />, // Fallback icon
};
// --- API Call ---
const fetchServiceById = async (id) => {
  console.log(`Fetching service with ID: ${id}`);
  const response = await fetch(`/api/services/hrservices/${id}`);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to fetch service details.");
  }
  // The API returns the service object directly in the 'data' property
  return result.data;
};

export default function ServiceDetailPage() {
  const path = usePathname();
  const id = path.split("/")[2];
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id);
    // Only fetch data if the id is available in the router query
    if (id) {
      const loadServiceDetails = async () => {
        try {
          setLoading(true);
          const data = await fetchServiceById(id);
          setService(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      loadServiceDetails();
    }
  }, [id]); // Re-run the effect if the id changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Service Details...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }
  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        Service not found.
      </div>
    );
  }

  return (
    <main>
      <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 animate-fade-in">
            <button
              onClick={() => router.push("/hr-services")} // Navigate back to the main list
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Services
            </button>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-blue-600">
                {ICONS[service.icon] || ICONS.Default}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  {service.subtitle}
                </p>
              </div>
            </div>

            <div className="w-20 h-1 bg-[#F1B53E] mb-8"></div>

            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-6">
                  Key Features
                </h4>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-blue-600 rounded-r-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-6">
                  Our Process
                </h4>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-lg text-gray-800">
                          {step}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
