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
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              CORE SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized HR solutions tailored to meet your organization's
              unique needs and objectives.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service) => (
              <button
                key={service._id}
                onClick={() => setActiveTab(service._id)}
                className={`px-8 py-4 font-semibold transition-all duration-300 border-2 rounded-md transform hover:scale-105 ${
                  activeTab === service._id
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {activeService && (
            <div
              key={activeService._id}
              className="grid lg:grid-cols-2 gap-16 items-start animate-fade-in"
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-blue-600">
                    {ICONS[activeService.icon] || ICONS.Default}
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-blue-600 mb-2">
                      {activeService.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      {activeService.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  {activeService.description.substring(0, 200)}...
                </p>
                <div className="mb-12">
                  <h4 className="text-2xl font-bold text-blue-600 mb-6">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeService.features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <button
                  onClick={() => handleLearnMore(activeService._id)}
                  className="px-10 py-4 bg-[#F1B53E] text-white font-bold text-lg rounded-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </button>
              </div>
              <div className="bg-gray-50 p-10 border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-colors duration-300">
                <h4 className="text-2xl font-bold text-blue-600 mb-8">
                  Our Process
                </h4>
                <div className="w-16 h-1 bg-[#F1B53E] mb-8"></div>
                <div className="space-y-6">
                  {activeService.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-[#F1B53E] transition-colors duration-300">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-600 mb-1">
                          {step}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
