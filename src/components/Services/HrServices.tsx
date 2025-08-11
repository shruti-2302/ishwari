import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

// --- Icon Mapping ---
const ICONS = {
  Briefcase: <Briefcase size={48} />,
  Users: <Users size={48} />,
  Zap: <Zap size={48} />,
  Default: <Briefcase size={48} />, // Fallback icon
};

// --- API Call ---
const fetchAllServices = async () => {
  console.log("Fetching all services...");
  // In a real app, you would have error handling for this fetch call
  const response = await fetch("/api/services/hrservices");
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || "Failed to fetch services");
  }
  return result.data;
};

export default function HRServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        const data = await fetchAllServices();
        setServices(data);
        // Set the first service as active by default
        if (data && data.length > 0) {
          setActiveTab(data[0]._id);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  const handleLearnMore = (id) => {
    // Navigate to the dynamic detail page for the specific service
    router.push(`/hr-services/${id}`);
  };

  const activeService = services.find((s) => s._id === activeTab);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Services...
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

  return (
    <main>
      <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <section className="py-20  ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 grid-cols-1 px-4 sm:px-6 lg:px-8">
          {activeService && (
            <div
              onClick={() => handleLearnMore(activeService._id)}
              key={activeService._id}
              className="group bg-white border-2 cursor-pointer border-gray-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-600 mb-6 group-hover:text-[#F1B53E]  transition-all duration-300">
                {ICONS[activeService.icon] || ICONS.Default}
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {activeService.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activeService.description}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
