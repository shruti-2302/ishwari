import React, { useState } from "react";
import {
  Eye,
  Rocket,
  Globe,
  Cpu,
  PhoneCall,
  Globe2,
  Users,
  Lightbulb,
  Star,
  Zap,
  Heart,
  Target,
  Award,
  Sparkles,
} from "lucide-react";

const AboutSection = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <section id="about" className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Createishwari Solutions
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            "Your One-Stop Business Solution"
          </h3>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Createishwari Solutions offers a wide range of services including
            transcription, translation, subtitle services, data collection,
            recruitment, import & export and BPO/call center solutions. Our team
            specializes in delivering customized solutions to meet the diverse
            needs of our clients.
          </p>
        </div>

        <div
          className={`grid gap-12 lg:gap-16 ${
            isAboutExpanded ? "md:grid-cols-1" : "md:grid-cols-2 items-center"
          }`}
        >
          {/* Content on the left */}
          <div className="order-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              About CreateIshwari Solutions
            </h3>
            <p className="text-gray-700 mb-8 leading-loose">
              Createishwari Solutions is a dynamic, data-driven technology
              startup founded in 2024 and headquartered in Indore, Madhya
              Pradesh. We specialize in advanced artificial intelligence
              solutions, end-to-end recruitment services, and offer
              comprehensive BPO and call center operations as well as import and
              export. Our customized, high-impact offerings cater to a wide
              range of industries and client needs, delivering innovative
              solutions that drive growth and operational excellence.{" "}
              <b>
                Our core expertise lies in building high-quality labeled
                datasets
              </b>{" "}
              and developing proprietary tools that power cutting-edge AI
              applications such as speech recognition, face recognition, and
              optical character recognition (OCR).
            </p>

            {isAboutExpanded && (
              <>
                <p className="text-gray-700 mb-8 leading-loose">
                  Our services also include translation, transcription, subtitle
                  creation, image annotation, and video annotation. By not only
                  collecting and curating data but also leveraging proprietary
                  technologies to process it, we provide scalable, robust
                  solutions that significantly enhance AI performance across
                  sectors. translation, transcription, subtitle creation, image
                  annotation, and video annotation. By not only collecting and
                  curating data but also leveraging proprietary technologies to
                  process it, we provide scalable, robust solutions that
                  significantly enhance AI performance across sectors.
                </p>
                <p className="text-gray-700 mb-8 leading-loose"></p>
                <p className="text-gray-700 mb-8 leading-loose">
                  <b> Recruitment services</b> cover all profiles and industries
                  globally — from entry-level positions to senior leadership
                  roles. Using data-driven methodologies, we ensure precise,
                  efficient hiring that aligns perfectly with our clients'
                  unique needs. globally — from entry-level positions to senior
                  leadership roles. Using data-driven methodologies, we ensure
                  precise, efficient hiring that aligns perfectly with our
                  clients' unique needs.
                  <br />
                  Driven by a customer-first philosophy, Createishwari Solutions
                  is committed to empowering organizations through impactful AI
                  technologies and tailored talent acquisition, helping
                  businesses automate processes, improve operational
                  performance, and build high-performing teams. Driven by a
                  customer-first philosophy, Createishwari Solutions is
                  committed to empowering organizations through impactful AI
                  technologies and tailored talent acquisition, helping
                  businesses automate processes, improve operational
                  performance, and build high-performing teams.
                </p>
              </>
            )}

            <button
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-200"
            >
              {isAboutExpanded ? "Read Less" : "Read More"}
              <span className="ml-1">{isAboutExpanded ? "↑" : "↓"}</span>
            </button>
          </div>

          {/* Image on the right - only shows when content is collapsed */}
          {!isAboutExpanded && (
            <div className="order-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=870&auto=format&fit=crop"
                alt="Our Team collaborating on a project"
                className="rounded-lg shadow-2xl w-full h-[70vh] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400/e2e8f0/4a5568?text=Our+Team";
                }}
              />
            </div>
          )}
        </div>

        {/* Enhanced Vision and Mission */}
        <div className="mt-16 md:mt-24 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-yellow-50/50 rounded-3xl -z-10"></div>

          <div className="pt-8 mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black  text-blue-600 mb-4">
                Our Vision & Mission
              </h2>
              <div className="w-32 h-1 bg-[#F1B53E] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-yellow-200">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    To become a trusted global partner in AI and talent
                    solutions, enabling businesses to unlock their full
                    potential through intelligent systems and exceptional human
                    capital.
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 text-yellow-200 opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    To deliver innovative AI technologies and comprehensive
                    recruitment services that empower organizations to optimize
                    operations, harness quality data, and build high-performing
                    teams—driving efficiency, accuracy, and growth across all
                    sectors.
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 text-blue-200 opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-12 lg:gap-16 ${
            isStoryExpanded ? "md:grid-cols-1" : "md:grid-cols-2 items-center"
          }`}
        >
          {/* Content on the left */}
          <div className="order-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-6 mt-10">
              Our Story
            </h3>
            <p className="text-gray-900 mb-8 leading-loose">
              In <b>August 2024</b>, amidst an era of rapid technological
              transformation, visionary entrepreneur <b>Rajni Mandloi</b> saw a
              deeper need in the world of Artificial Intelligence—not just for
              smarter tools, but for stronger foundations.
            </p>
            <p className="text-gray-900 mb-8 leading-loose">
              While many raced to build the next big AI breakthrough, Rajni
              recognized that true innovation starts with the{" "}
              <b>
                quality of data, the right people, and streamlined processes.
              </b>{" "}
              With just a handful of data scientists and a small coworking desk
              in <b>Indore, Madhya Pradesh</b>, she founded{" "}
              <b>Createishwari Solutions</b>—a company built to power AI from
              the ground up.
            </p>

            {isStoryExpanded && (
              <>
                <p className="text-gray-900 mb-8 leading-loose">
                  From day one, Createishwari was more than a tech startup. It
                  became a multi-dimensional solutions provider, offering:
                </p>

                <ul className="list-disc pl-8 text-gray-900 mb-8 leading-loose">
                  <li>
                    <b>High-impact AI data services</b> — human-verified
                    datasets, proprietary tools, and advanced labeling for
                    speech, facial recognition, OCR, image/video annotation,
                    transcription, and translation.
                    <b>High-impact AI data services</b> — human-verified
                    datasets, proprietary tools, and advanced labeling for
                    speech, facial recognition, OCR, image/video annotation,
                    transcription, and translation.
                  </li>
                  <li>
                    <b>AI-driven recruitment solutions</b> — connecting
                    businesses with the right talent, from entry-level
                    specialists to senior executives.
                    <b>AI-driven recruitment solutions</b> — connecting
                    businesses with the right talent, from entry-level
                    specialists to senior executives.
                  </li>
                  <li>
                    <b>BPO &amp; call center operations</b> — delivering
                    responsive, scalable, multilingual customer support.
                    <b>BPO &amp; call center operations</b> — delivering
                    responsive, scalable, multilingual customer support.
                  </li>
                  <li>
                    <b>Import-export services</b> — managing logistics,
                    compliance, and global trade for seamless cross-border
                    operations.
                    <b>Import-export services</b> — managing logistics,
                    compliance, and global trade for seamless cross-border
                    operations.
                  </li>
                </ul>
                <p className="text-gray-900 mb-8 leading-loose">
                  In just <b>one year</b>, Createishwari has grown from a small
                  startup into a<b> next-gen innovation hub</b>, bridging AI,
                  talent, operations, and global commerce under one visionary
                  umbrella.
                </p>
              </>
            )}

            <button
              onClick={() => setIsStoryExpanded(!isStoryExpanded)}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors duration-200 mb-8"
            >
              {isStoryExpanded ? "Read Less" : "Read More"}
              <span className="ml-1">{isStoryExpanded ? "↑" : "↓"}</span>
            
            </button>
          </div>

          {/* Image on the right - only shows when content is collapsed */}
          {!isStoryExpanded && (
            <div className="order-2">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?_gl=1*1u9dlxc*_ga*MjY3ODk0MTY5LjE3NTUwNzQ0NDI.*_ga_8JE65Q40S6*czE3NTUwNzQ0NDIkbzEkZzEkdDE3NTUwNzQ0NDUkajU3JGwwJGgw"
                alt="Our Team collaborating on a project"
                className="rounded-lg shadow-2xl w-full h-[70vh] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400/e2e8f0/4a5568?text=Our+Team";
                }}
              />
            </div>
          )}
        </div>

        {/* Enhanced The Road Ahead Section */}
        <div className="mt-16 md:mt-24 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl -z-10"></div>

          <div className="pt-8 pb-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black  text-blue-600 mb-6">
                The Road Ahead
              </h3>
              <div className="w-32 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 font-semibold">
                As we enter our second year in{" "}
                <span className="font-bold">August 2025</span>, we're focused
                on:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Expanding globally",
                  desc: "across North America, Europe, the Middle East, and Southeast Asia.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-50 to-cyan-50",
                },
                {
                  icon: Cpu,
                  title: "Advancing AI platforms",
                  desc: "with real-time model feedback, smarter data labeling, and AI-driven quality assurance.",
                  color: "from-purple-500 to-indigo-500",
                  bgColor: "from-purple-50 to-indigo-50",
                },
                {
                  icon: PhoneCall,
                  title: "Scaling BPO services",
                  desc: "with multilingual AI-powered support teams.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-50 to-emerald-50",
                },
                {
                  icon: Globe2,
                  title: "Optimizing import-export",
                  desc: "through AI-enabled logistics and compliance automation.",
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-50 to-red-50",
                },
                {
                  icon: Users,
                  title: "Revolutionizing recruitment",
                  desc: "with predictive hiring tools and a global talent marketplace.",
                  color: "from-pink-500 to-rose-500",
                  bgColor: "from-pink-50 to-rose-50",
                },
                {
                  icon: Lightbulb,
                  title: "Driving sustainable impact",
                  desc: "by adopting green tech, creating jobs in underserved regions, and supporting digital literacy.",
                  color: "from-yellow-500 to-amber-500",
                  bgColor: "from-yellow-50 to-amber-50",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${item.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-white`}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Our Values Section */}
        <div className="mt-16 md:mt-24 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-gray-50 to-zinc-50 rounded-3xl -z-10"></div>

          <div className="pt-8 pb-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black  text-blue-600 mb-6">
                Our Values
              </h3>
              <div className="w-32 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Createishwari
                Solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Quality Above All",
                  desc: "Impeccable data and top-tier talent, every time.",
                  gradient: "from-blue-400 to-blue-600",
                  bg: "from-blue-50 to-indigo-50",
                  icon: Award,
                },
                {
                  title: "Integrity & Transparency",
                  desc: "Honest, ethical practices in all we do.",
                  gradient: "from-green-400 to-emerald-600",
                  bg: "from-green-50 to-emerald-50",
                  icon: Heart,
                },
                {
                  title: "Innovation & Growth",
                  desc: "Continuously pushing technological boundaries.",
                  gradient: "from-purple-400 to-violet-600",
                  bg: "from-purple-50 to-violet-50",
                  icon: Zap,
                },
                {
                  title: "Customer-Centric Approach",
                  desc: "Tailoring solutions to each client's unique needs.",
                  gradient: "from-orange-400 to-amber-600",
                  bg: "from-orange-50 to-amber-50",
                  icon: Target,
                },
                {
                  title: "Collaboration & Respect",
                  desc: "Valuing diversity, teamwork, and empathy.",
                  gradient: "from-rose-400 to-pink-600",
                  bg: "from-rose-50 to-pink-50",
                  icon: Users,
                },
                {
                  title: "Global Mindset",
                  desc: "Operating beyond borders with cultural intelligence.",
                  gradient: "from-teal-400 to-cyan-600",
                  bg: "from-teal-50 to-cyan-50",
                  icon: Globe,
                },
                {
                  title: "Accountability & Excellence",
                  desc: "Delivering results with professionalism.",
                  gradient: "from-indigo-400 to-blue-600",
                  bg: "from-indigo-50 to-blue-50",
                  icon: Star,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${
                    value.bg
                  } p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-white ${
                    index === 6 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  {/* Animated background overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex bg-gradient-to-r ${value.gradient} p-3 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Closing Statement */}
            <div className="relative bg-blue-600 text-white p-10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Animated background elements */}

              <div className="relative z-10 text-center">
                <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  <b>Createishwari Solutions</b> stands where AI meets human
                  intelligence, where technology fuels opportunity, and where
                  services are designed to create <b>real-world impact</b>.
                </p>
                <p className="text-2xl md:text-3xl font-black mb-4 text-white">
                  The journey has just begun. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                2024
              </h4>
              <p className="text-gray-500 font-medium">Founded</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                4+
              </h4>
              <p className="text-gray-500 font-medium">Global Teams</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                10+
              </h4>
              <p className="text-gray-500 font-medium">AI Technologies</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                100%
              </h4>
              <p className="text-gray-500 font-medium">Customer Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
