"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Send,
  Mail,
  MapPin,
  Phone,
  AlertCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
} from "lucide-react";

// Define interfaces for our data structures for type safety
interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface ContactMethod {
  icon: keyof typeof iconComponents; // Use keyof to map string to component
  title: string;
  description: string;
  action: string;
  value: string;
  available: string;
}

interface SocialLink {
  icon: keyof typeof iconComponents;
  name: string;
  url: string;
}

interface ContactInfo {
  officeLocations: OfficeLocation[];
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
}

// Map icon names from the database to actual Lucide components
const iconComponents = {
  Phone: Phone,
  Mail: Mail,
  Calendar: Calendar,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube,
  MapPin: MapPin, // Added for office locations
};

const ContactPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  // State for submission status (submitting, success, error)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // State to hold data fetched from the API
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    officeLocations: [],
    contactMethods: [],
    socialLinks: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch contact info from the API when the component mounts
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) {
          throw new Error("Failed to fetch contact info");
        }
        const { contacts } = await res.json();
        console.log(contacts);
        // Assuming the API returns one document with all info
        if (contacts) {
          setContactInfo(contacts[0]);
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with a real API call
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status on new submission

    try {
      const res = await fetch("/api/contact/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Something went wrong.");
      }

      setSubmitStatus("success");
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error: any) {
      console.error("Form Submission Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "career", label: "Career" },
    { value: "support", label: "Technical Support" },
  ];

  // Helper to render icons dynamically
  const renderIcon = (
    iconName: keyof typeof iconComponents | undefined,
    className: string
  ) => {
    if (!iconName) return null;
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-4 text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className={`relative pt-48 py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            GET IN TOUCH
          </h1>

          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-12"></div>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-16">
            Ready to take your career to the next level or find the perfect
            talent for your organization? Let's start the conversation today.
          </p>

          {/* Quick Contact Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                24h
              </div>

              <div className="text-blue-200 text-sm">Response Time</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>

              <div className="text-blue-200 text-sm">Placements Made</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>

              <div className="text-blue-200 text-sm">Client Satisfaction</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>

              <div className="text-blue-200 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Dynamically Rendered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-600">
              WAYS TO CONNECT
            </h2>
            <div className="w-20 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 md:p-8 p-4 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F1B53E] transition-colors duration-300">
                  {renderIcon(method.icon, "w-8 h-8")}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-900 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="text-lg font-semibold text-blue-600 mb-2 text-wrap break-words">
                  {method.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-8">
                Send Us a Message
              </h2>
              <div className="w-16 h-1 bg-[#F1B53E] mb-8"></div>

              {/* Dynamic submission status messages */}
              {submitStatus === "success" && (
                <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-400 text-green-800">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">
                      Message sent! We'll be in touch soon.
                    </span>
                  </div>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-800">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6" />
                    <span className="font-semibold">
                      An error occurred. Please try again.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Email Address *"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Phone Number"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Company"
                  />
                </div>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Subject *"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your Message *"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#F1B53E] text-white font-bold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact & Social Info - Dynamically Rendered */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6">
                  Our Offices
                </h3>
                <div className="w-16 h-1 bg-[#F1B53E] mb-6"></div>
                <div className="space-y-6">
                  {contactInfo.officeLocations.map((office, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600 text-lg">
                          {office.city}
                        </div>
                        <div className="text-gray-900">{office.address}</div>
                        <div className="text-sm text-gray-500">
                          {office.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6">
                  Follow Us
                </h3>
                <div className="w-16 h-1 bg-[#F1B53E] mb-6"></div>
                <div className="flex gap-4">
                  {contactInfo.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-12 h-12 bg-gray-100 hover:bg-blue-600 text-gray-900 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      {renderIcon(social.icon, "w-5 h-5")}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
