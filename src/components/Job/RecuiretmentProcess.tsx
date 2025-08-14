"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  UserCheck,
  Users,
  ClipboardCheck,
  Handshake,
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
      icon: FileText,
      title: "Application Submission",
      description:
        "Candidates can explore open positions on our Careers page and apply directly by submitting their resume and any relevant work samples or portfolios. We encourage applicants to tailor their applications to highlight their strengths and align with the role’s requirements.",
    },
    {
      icon: Search,
      title: "Resume Screening",
      description:
        "Our recruitment team carefully reviews each application to assess qualifications, experience, and cultural fit. Shortlisted candidates are contacted via email or phone to proceed to the next step.",
    },
    {
      icon: Phone,
      title: "Initial Interview",
      description:
        "Selected applicants participate in an initial screening—typically a video or phone interview—with a member of our HR or recruitment team. This conversation focuses on understanding the candidate’s background, career goals, and initial alignment with the role.",
    },
    {
      icon: ClipboardCheck,
      title: "Technical/Skill Assessment",
      description:
        "Depending on the position, candidates may be asked to complete a technical task, case study, or assessment relevant to their area of expertise. This helps us evaluate problem-solving abilities, creativity, and technical proficiency.",
    },
    {
      icon: Users,
      title: "Panel or Departmental Interview",
      description:
        "Qualified candidates are invited to a more in-depth interview with team leads or department heads. This stage assesses both role-specific competencies and how well the candidate aligns with our collaborative work culture.",
    },
    {
      icon: UserCheck,
      title: "Final Interview & Cultural Fit Evaluation",
      description:
        "In the final round, candidates meet with senior leadership to discuss values, long-term vision, and mutual expectations. This step ensures a strong cultural fit and provides an opportunity to ask strategic questions about the company and role.",
    },
    {
      icon: Handshake,
      title: "Offer & Onboarding",
      description:
        "Successful candidates receive a formal offer outlining role details, compensation, and benefits. Once accepted, our onboarding process begins—designed to integrate new hires smoothly into the team, provide the necessary training, and set them up for success.",
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
              <p className="mt-4 text-lg text-gray-900">
                At CreateIshwari Solutions, we believe that hiring the right
                talent is key to driving innovation and delivering excellence.
                Our recruitment process is designed to be transparent, engaging,
                and efficient—ensuring a positive experience for every candidate
                while identifying individuals who align with our values and
                vision.
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
                    <p className="mt-1 text-gray-900">{step.description}</p>
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
