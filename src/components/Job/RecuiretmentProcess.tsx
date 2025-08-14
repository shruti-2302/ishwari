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
  Loader2,
  CheckCircle,
  UploadCloud, // For upload UI
} from "lucide-react";
import CryptoJS from "crypto-js";

const RecruitmentProcessSection = () => {
  // --- Component State ---
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [uploadMethod, setUploadMethod] = useState("upload"); // 'upload' or 'link'
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrlInput, setResumeUrlInput] = useState(""); // For the link option

  // --- Submission State ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // --- Cloudinary Config ---
  // !!! SECURITY WARNING !!!
  // Exposing your API Secret on the client-side is a major security risk.
  // Anyone can find it and misuse your Cloudinary account.
  // This logic should be moved to a secure backend API endpoint (e.g., a Next.js API route)
  // where the secret is stored as an environment variable.
  const CLOUDINARY_CLOUD_NAME = "djrguuop0"; // Replace with your cloud name
  const CLOUDINARY_API_KEY = "127415549331812"; // Replace with your API key
  const CLOUDINARY_API_SECRET = "EJ32ODLtRSNUaK4b4wnIqO5xpa8"; // <<< IMPORTANT: REPLACE WITH YOUR SECRET AND MOVE TO BACKEND

  // --- Data for the process steps ---
  const processSteps = [
    // ... (Your process steps data remains unchanged)
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("File is too large. Please upload a file smaller than 5MB.");
        setResumeFile(null);
      } else {
        setResumeFile(file);
        setError(null); // Clear previous errors
      }
    }
  };

  // --- Cloudinary Upload Function ---
  const uploadResumeToCloudinary = async () => {
    if (!resumeFile) return null;

    const timestamp = Math.round(new Date().getTime() / 1000);
    const stringToSign = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = CryptoJS.SHA1(stringToSign).toString();

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;

    const uploadData = new FormData();
    uploadData.append("file", resumeFile);
    uploadData.append("api_key", CLOUDINARY_API_KEY);
    uploadData.append("timestamp", timestamp);
    uploadData.append("signature", signature);

    try {
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: uploadData,
      });
      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error(data.error?.message || "Cloudinary upload failed.");
      }
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw err; // Re-throw to be caught by handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // --- Validation ---
    if (uploadMethod === "upload" && !resumeFile) {
      setError("Please select a resume file to upload.");
      return;
    }
    if (uploadMethod === "link" && !resumeUrlInput) {
      setError("Please provide a link to your resume.");
      return;
    }
    if (uploadMethod === "link") {
      try {
        new URL(resumeUrlInput);
      } catch (_) {
        setError("Please enter a valid URL for your resume.");
        return;
      }
    }
    if (CLOUDINARY_API_SECRET === "YOUR_API_SECRET") {
      setError(
        "Cloudinary API Secret is not configured. Please update the component."
      );
      return;
    }

    setIsSubmitting(true);
    let resumeLink = "";

    try {
      // Step 1: Handle the resume (upload file or get link)
      if (uploadMethod === "upload") {
        resumeLink = await uploadResumeToCloudinary();
      } else {
        resumeLink = resumeUrlInput;
      }

      if (!resumeLink) {
        throw new Error("Could not obtain resume URL. Please try again.");
      }

      // Step 2: Prepare final data and submit to your backend
      const finalPayload = {
        ...formData,
        resumeLink, // Add the dynamically obtained resume link
      };

      const response = await fetch("/api/jobs/apply-other", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "An unknown error occurred.");
      }

      // On success
      setSuccess(true);
      setFormData(initialFormData); // Reset text fields
      setResumeFile(null); // Reset file input
      setResumeUrlInput(""); // Reset URL input
      setUploadMethod("upload"); // Reset radio button
      setTimeout(() => setSuccess(false), 5000);
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
          {/* Left Side: Recruitment Process (Unchanged) */}
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

          {/* Right Side: Application Form (Updated) */}
          <div className="sticky top-10">
            <div className="bg-white p-8 border-2 border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                Apply Now
              </h3>
              <p className="text-gray-500 mb-8">
                Ready to take the next step? Fill out the form below.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- Personal Info Inputs --- */}
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

                {/* --- NEW: Resume Upload Section --- */}
                <div className="p-4 border border-gray-300 bg-gray-50/80 space-y-3">
                  <h4 className="font-semibold text-gray-800 text-base flex items-center">
                    <UploadCloud className="mr-2 text-gray-500" size={20} />
                    Upload Your Resume
                  </h4>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                      <input
                        type="radio"
                        name="uploadMethod"
                        value="upload"
                        checked={uploadMethod === "upload"}
                        onChange={() => setUploadMethod("upload")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      Upload File
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                      <input
                        type="radio"
                        name="uploadMethod"
                        value="link"
                        checked={uploadMethod === "link"}
                        onChange={() => setUploadMethod("link")}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      Provide Link
                    </label>
                  </div>
                  <div>
                    {uploadMethod === "upload" ? (
                      <div>
                        <input
                          type="file"
                          name="resumeFile"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx" // Specify accepted file types
                          required={uploadMethod === "upload"}
                          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                        />
                        {resumeFile && (
                          <p className="text-xs text-gray-600 mt-2">
                            Selected: {resumeFile.name}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="relative">
                        <LinkIcon
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="url"
                          name="resumeLink"
                          placeholder="Link to Your Resume (e.g., Google Drive)"
                          required={uploadMethod === "link"}
                          value={resumeUrlInput}
                          onChange={(e) => setResumeUrlInput(e.target.value)}
                          className="w-full pl-10 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* --- Description --- */}
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
