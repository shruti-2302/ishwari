"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Briefcase,
  Phone,
  Home,
  Award,
  Target,
  Globe,
  Zap,
  TrendingUp,
  Shield,
  Heart,
  Building,
  Clock,
  Mail,
  MapPin,
  ChevronDown,
  Eye,
  Search,
  Calendar,
  UserCheck,
  FileText,
  BarChart3,
  Settings,
  Lightbulb,
  PieChart,
  Handshake,
  Clock4,
  Filter,
  DollarSign,
  Bookmark,
  ExternalLink,
  Loader2,
} from "lucide-react";
import RecruitmentProcessSection from "./RecuiretmentProcess";
import CryptoJS from "crypto-js"; // Fixed import

// =======================================================================
//  Apply Modal Component
//  (MODIFIED TO INCLUDE CLOUDINARY FILE UPLOAD)
// =======================================================================
const ApplyModal = ({ job, isOpen, onClose }) => {
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [uploadMethod, setUploadMethod] = useState("upload"); // 'upload' or 'link'
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeUrlInput, setResumeUrlInput] = useState(""); // For the link option

  // --- Submission State ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // --- Cloudinary Config ---
  const CLOUDINARY_CLOUD_NAME = "djrguuop0";
  const CLOUDINARY_API_KEY = "127415549331812";
  const CLOUDINARY_API_SECRET = "EJ32ODLtRSNUaK4b4wnIqO5xpa8"; // Replace with your actual secret

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Optional: Add file type/size validation here
      setResumeFile(file);
      setError(null); // Clear previous errors
    }
  };

  // Reset form when modal is newly opened
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setUploadMethod("upload");
      setResumeFile(null);
      setResumeUrlInput("");
      setIsSubmitting(false);
      setError(null);
      setSuccess(false);
    }
  }, [isOpen, job]);

  if (!isOpen || !job) return null;

  // --- FIXED FUNCTION for signed uploads ---
  const uploadResumeToCloudinary = async () => {
    if (!resumeFile) return null;

    // Generate the signature using CryptoJS
    const timestamp = Math.round(new Date().getTime() / 1000);
    const stringToSign = `timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = CryptoJS.SHA1(stringToSign).toString(); // Fixed SHA1 usage

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
        // Provide more detailed error from Cloudinary if available
        throw new Error(
          data.error?.message || "Cloudinary signed upload failed."
        );
      }
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // --- Validation ---
    if (uploadMethod === "upload" && !resumeFile) {
      setError("Please select a resume file to upload.");
      return;
    }
    if (uploadMethod === "link" && !resumeUrlInput) {
      setError("Please provide a link to your resume.");
      return;
    }
    // Simple URL validation
    if (uploadMethod === "link") {
      try {
        new URL(resumeUrlInput);
      } catch (_) {
        setError("Please enter a valid URL.");
        return;
      }
    }

    setIsSubmitting(true);
    let resumeLink = "";

    try {
      // Step 1: Handle the resume - upload or get the link
      if (uploadMethod === "upload") {
        resumeLink = await uploadResumeToCloudinary();
      } else {
        resumeLink = resumeUrlInput;
      }

      if (!resumeLink) {
        // This case would be hit if upload fails.
        throw new Error("Could not get resume URL.");
      }

      // Step 2: Submit the application to your backend
      const applicationData = {
        ...formData,
        resumeLink, // The URL from Cloudinary or user input
        jobId: job._id,
      };

      const response = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit application.");
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000); // Close modal after 2 seconds on success
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render Logic ---
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative transform transition-all scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">Apply for</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {job.title}
        </h3>

        {success ? (
          <div className="text-center py-10">
            <p className="text-xl text-green-600 font-semibold">
              ✅ Application Sent!
            </p>
            <p className="text-gray-600 mt-2">
              We've received your application and will be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="gap-4 grid md:grid-cols-2">
            {/* --- Personal Info Inputs --- */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 col-span-2 focus:ring-blue-500"
            />

            {/* --- Resume Section --- */}
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50 col-span-2">
              <h4 className="font-semibold text-gray-800 mb-3">
                Your Resume/CV
              </h4>
              <div className="flex items-center gap-4 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="uploadMethod"
                    value="upload"
                    checked={uploadMethod === "upload"}
                    onChange={() => setUploadMethod("upload")}
                    className="w-4 h-4 text-blue-600"
                  />
                  Upload File
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="uploadMethod"
                    value="link"
                    checked={uploadMethod === "link"}
                    onChange={() => setUploadMethod("link")}
                    className="w-4 h-4 text-blue-600"
                  />
                  Provide Link
                </label>
              </div>
              {uploadMethod === "upload" ? (
                <div>
                  <input
                    type="file"
                    name="resumeFile"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx" // Specify accepted file types
                    required={uploadMethod === "upload"}
                    className="w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                  />
                  {resumeFile && (
                    <p className="text-xs text-gray-600 mt-1">
                      Selected: {resumeFile.name}
                    </p>
                  )}
                </div>
              ) : (
                <input
                  type="url"
                  name="resumeLink"
                  placeholder="https://your-resume-link.com"
                  required={uploadMethod === "link"}
                  value={resumeUrlInput}
                  onChange={(e) => setResumeUrlInput(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>

            {/* --- Cover Letter --- */}
            <textarea
              name="message"
              placeholder="Cover Letter or Message (Optional)"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border col-span-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* --- Error & Submit Button --- */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 col-span-2 bg-[#F1B53E] text-white font-bold rounded-md hover:bg-yellow-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              )}
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// =======================================================================
//  Main Jobs Page Component (Unchanged)
// =======================================================================
const JobsPage = () => {
  // --- State Management ---
  const [jobs, setJobs] = useState([]); // State for API-fetched jobs
  const [isLoading, setIsLoading] = useState(true); // Loading state for jobs
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter States
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Debounce search input to avoid excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // --- API Data Fetching ---
  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    const params = new URLSearchParams();

    // Use debounced term for the API call
    if (debouncedSearchTerm) params.append("search", debouncedSearchTerm);
    if (selectedLocation !== "all") params.append("location", selectedLocation);
    if (selectedExperience !== "all")
      params.append("experience", selectedExperience);
    if (activeFilter !== "all") params.append("category", activeFilter);

    try {
      const response = await fetch(`/api/jobs?${params.toString()}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      setJobs([]); // Clear jobs on error
    } finally {
      setIsLoading(false);
    }
  }, [activeFilter, debouncedSearchTerm, selectedLocation, selectedExperience]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]); // Re-run effect when fetchJobs dependencies change

  // --- Event Handlers ---
  const handleSearchClick = () => {
    // This function can now be used for an explicit button click if needed,
    // but the debounced useEffect handles live searching automatically.
    fetchJobs();
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleSaveJob = (jobId) => {
    console.log(`Save job ${jobId}`);
    // Future logic to save job to user profile could go here
  };

  // --- Static Data ---
  const jobCategories = [
    { id: "all", name: "All Jobs", count: 47 },
    { id: "executive", name: "Executive", count: 12 },
    { id: "technology", name: "Technology", count: 15 },
    { id: "finance", name: "Finance", count: 8 },
    { id: "healthcare", name: "Healthcare", count: 6 },
    { id: "consulting", name: "Consulting", count: 6 },
  ];

  const locations = [
    { id: "all", name: "All Locations" },
    { id: "mumbai", name: "Mumbai" },
    { id: "delhi", name: "Delhi NCR" },
    { id: "bangalore", name: "Bangalore" },
    { id: "pune", name: "Pune" },
    { id: "hyderabad", name: "Hyderabad" },
    { id: "remote", name: "Remote" },
  ];

  const experienceLevels = [
    { id: "all", name: "All Experience" },
    { id: "entry", name: "0-2 years" },
    { id: "mid", name: "3-5 years" },
    { id: "senior", name: "6-10 years" },
    { id: "executive", name: "10+ years" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black  leading-tight">
            CAREER OPPORTUNITIES
          </h1>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover exceptional career opportunities with leading organizations
            across industries. Find your perfect match and take the next step in
            your professional journey.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-none p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-black text-lg focus:outline-none"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-12 pr-8 py-4 text-black text-lg focus:outline-none appearance-none bg-white border-l border-gray-200 min-w-48"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
              <button
                onClick={handleSearchClick}
                className="px-8 py-4 bg-[#F1B53E] text-white font-bold hover:bg-yellow-500 transition-all duration-300"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>
      <RecruitmentProcessSection />
      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white border-2 border-gray-200 p-8 sticky top-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-blue-600">Filters</h3>
                  <div className="w-12 h-1 bg-[#F1B53E]"></div>
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="lg:hidden"
                  >
                    <Filter className="w-6 h-6 text-blue-600" />
                  </button>
                </div>

                <div
                  className={`space-y-8 ${
                    isFilterOpen ? "block" : "hidden lg:block"
                  }`}
                >
                  {/* Experience Level */}
                  <div>
                    <h4 className="font-bold text-blue-600 mb-4">
                      Experience Level
                    </h4>
                    <div className="space-y-3">
                      {experienceLevels.map((level) => (
                        <label
                          key={level.id}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="experience"
                            value={level.id}
                            checked={selectedExperience === level.id}
                            onChange={(e) =>
                              setSelectedExperience(e.target.value)
                            }
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                            {level.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-blue-600">
                  {isLoading ? "Searching..." : `${jobs.length} Jobs Found`}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-gray-900">Sort by:</span>
                  <select className="border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-600 text-blue-600">
                    <option>Most Recent</option>
                    <option>Salary: High to Low</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center h-96">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                </div>
              ) : jobs.length > 0 ? (
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <div
                      key={job._id} // Use _id from MongoDB
                      className="group bg-white border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-blue-600 group-hover:text-blue-800">
                                  {job.title}
                                </h3>
                                {job.urgent && (
                                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                                    URGENT
                                  </span>
                                )}
                              </div>
                              <div className="text-lg font-semibold text-gray-900 mb-2">
                                {job.company}
                              </div>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-[#F1B53E]" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-[#F1B53E]" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4 text-[#F1B53E]" />
                                  <span>{job.salary}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-[#F1B53E]" />
                                  <span>{job.posted}</span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => handleSaveJob(job._id)}
                              className="p-2 text-gray-400 hover:text-[#F1B53E] transition-colors"
                              aria-label="Save job"
                            >
                              <Bookmark className="w-5 h-5" />
                            </button>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-6">
                            {job.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-blue-600 mb-3">
                              Key Requirements:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {job.requirements.map((req, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                  <span className="text-gray-900 text-sm">
                                    {req}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-blue-600 mb-3">
                              Benefits:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full border border-blue-200"
                                >
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:w-48 flex-shrink-0 flex flex-col gap-3">
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="px-6 py-3 bg-[#F1B53E] text-white font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-6 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    No Jobs Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search filters to find what you're
                    looking for.
                  </p>
                </div>
              )}

              {/* Load More */}
              {!isLoading && jobs.length > 0 && (
                <div className="text-center mt-12">
                  <button className="px-12 py-4 border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Load More Jobs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============== NEW SECTION START ============== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Our Services for Job Seekers
          </h2>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            With our vision “to be the client’s preferred strategic partner in
            talent acquisition and the candidate’s trusted guide in career
            progression,” we deliver comprehensive talent management solutions
            that connect organizations with exceptional human capital and
            individuals with meaningful career opportunities.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We empower professionals to discover their potential, enhance their
            skills, and excel in their chosen industries. Backed by our research
            and delivery centers across the globe, we possess the expertise and
            capacity to provide solutions that are both globally aligned and
            locally relevant—ensuring value, precision, and lasting impact for
            every stakeholder we serve.
          </p>
        </div>
      </section>
      {/* ============== NEW SECTION END ============== */}

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                50+
              </div>
              <div className="text-gray-900 font-medium">Active Jobs</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                20+
              </div>
              <div className="text-gray-900 font-medium">Partner Companies</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                95%
              </div>
              <div className="text-gray-900 font-medium">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                24h
              </div>
              <div className="text-gray-900 font-medium">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Integration */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        job={selectedJob}
      />
    </div>
  );
};

export default JobsPage;
function SHA1(stringToSign: string) {
  throw new Error("Function not implemented.");
}
