"use client";
import React, { useState } from "react";
import {
  Lightbulb,
  Search,
  Filter,
  UserCheck,
  Users,
  Award,
  Rocket,
  MessageSquare,
  User,
  Mail,
  Phone,
  Briefcase,
  Link as LinkIcon,
  FileText,
  Loader2, // For loading state
  CheckCircle, // For success state
} from "lucide-react";

const RecruitmentProcessSection = () => {
  // --- Component State ---
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    resumeLink: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // --- Data for the process steps ---
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Understanding Client Requirements",
      description:
        "We start by consulting with clients to understand the role, required skills, company culture, and business goals.",
    },
    {
      icon: Search,
      title: "Talent Sourcing",
      description:
        "Using our extensive database, job portals, and social networks, we identify and attract the most suitable candidates.",
    },
    {
      icon: Filter,
      title: "Screening & Shortlisting",
      description:
        "Our specialists review applications, conduct initial interviews, and shortlist only those who meet the exact criteria.",
    },
    {
      icon: UserCheck,
      title: "Candidate Assessment",
      description:
        "We evaluate technical skills, soft skills, and cultural fit through tailored assessments and interviews.",
    },
    {
      icon: Users,
      title: "Client Interviews",
      description:
        "Shortlisted candidates are presented to the client for further interviews and evaluation.",
    },
    {
      icon: Award,
      title: "Selection & Offer Management",
      description:
        "Once a candidate is chosen, we assist in offer negotiations, ensuring a smooth transition for both parties.",
    },
    {
      icon: Rocket,
      title: "Onboarding Support",
      description:
        "We provide onboarding assistance to help new hires integrate quickly and effectively into their new workplace.",
    },
    {
      icon: MessageSquare,
      title: "Follow-Up & Feedback",
      description:
        "Post-placement, we maintain communication with both clients and candidates to ensure long-term success.",
    },
  ];

  // --- Event Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/jobs/apply-other", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "An unknown error occurred.");
      }

      // On success
      setSuccess(true);
      setFormData(initialFormData); // Reset form
      setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Recruitment Process */}
          <div className="space-y-8">
            <div className="text-left mb-12">
              <h2 className="text-4xl font-black text-blue-600">
                Our Recruitment Process
              </h2>
              <div className="w-20 h-1.5 bg-[#F1B53E] mt-4"></div>
              <p className="mt-4 text-lg text-gray-600">
                At CreateIshawri Solutions, we follow a streamlined and
                transparent process to ensure the right talent meets the right
                opportunity.
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div
                className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-200"
                aria-hidden="true"
              ></div>

              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                    <step.icon size={20} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Application Form */}
          <div className="sticky top-10">
            <div className="bg-white p-8 border-2 border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                Apply Now
              </h3>
              <p className="text-gray-500 mb-8">
                Ready to take the next step? Fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Name */}
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Seeking for Job Title */}
                <div className="relative">
                  <Briefcase
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title You're Seeking"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Resume Link */}
                <div className="relative">
                  <LinkIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="url"
                    name="resumeLink"
                    placeholder="Link to Your Resume (e.g., Google Drive, LinkedIn)"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div className="relative">
                  <FileText
                    className="absolute left-3 top-4 text-gray-400"
                    size={20}
                  />
                  <textarea
                    name="description"
                    placeholder="Tell us about yourself (Optional)"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* --- Status Messages --- */}
                {error && <p className="text-sm text-red-600">{error}</p>}
                {success && (
                  <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3">
                    <CheckCircle size={20} />
                    <span>
                      Application submitted successfully! We'll be in touch.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#F1B53E] text-white font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcessSection;
