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
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const AboutSection = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image on the left */}
          <div className="order-2 md:order-1">
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

          {/* Content on the right */}
          <div className="order-1 md:order-2">
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
              solutions that drive growth and operational excellence.
            </p>

            {isAboutExpanded && (
              <>
                <p className="text-gray-700 mb-8 leading-loose">
                  <b>
                    Our core expertise lies in building high-quality labeled
                    datasets
                  </b>{" "}
                  and developing proprietary tools that power cutting-edge AI
                  applications such as speech recognition, face recognition, and
                  optical character recognition (OCR). Our services also include
                  translation, transcription, subtitle creation, image
                  annotation, and video annotation. By not only collecting and
                  curating data but also leveraging proprietary technologies to
                  process it, we provide scalable, robust solutions that
                  significantly enhance AI performance across sectors.
                </p>
                <p className="text-gray-700 mb-8 leading-loose">
                  <b> Recruitment services</b> cover all profiles and industries
                  globally — from entry-level positions to senior leadership
                  roles. Using data-driven methodologies, we ensure precise,
                  efficient hiring that aligns perfectly with our clients'
                  unique needs.
                  <br />
                  Driven by a customer-first philosophy, Createishwari Solutions
                  is committed to empowering organizations through impactful AI
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
              <span className="ml-1">
                {isAboutExpanded ? (
                  <ArrowUp size={20} />
                ) : (
                  <ArrowDown size={20} />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-5">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-[#F1B53E]" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted global partner in AI and talent solutions,
                enabling businesses to unlock their full potential through
                intelligent systems and exceptional human capital.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-5">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative AI technologies and comprehensive
                recruitment services that empower organizations to optimize
                operations, harness quality data, and build high-performing
                teams—driving efficiency, accuracy, and growth across all
                sectors.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content on the left */}
          <div className="order-1 md:order-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-6 mt-10">
              Our Story
            </h3>
            <p className="text-gray-700 mb-8 leading-loose">
              In <b>August 2024</b>, amidst an era of rapid technological
              transformation, visionary entrepreneur <b>Rajni Mandloi</b> saw a
              deeper need in the world of Artificial Intelligence—not just for
              smarter tools, but for stronger foundations.
            </p>
            <p className="text-gray-700 mb-8 leading-loose">
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
                <p className="text-gray-700 mb-8 leading-loose">
                  From day one, Createishwari was more than a tech startup. It
                  became a multi-dimensional solutions provider, offering:
                </p>

                <ul className="list-disc pl-8 text-gray-700 mb-8 leading-loose">
                  <li>
                    <b>High-impact AI data services</b> — human-verified
                    datasets, proprietary tools, and advanced labeling for
                    speech, facial recognition, OCR, image/video annotation,
                    transcription, and translation.
                  </li>
                  <li>
                    <b>AI-driven recruitment solutions</b> — connecting
                    businesses with the right talent, from entry-level
                    specialists to senior executives.
                  </li>
                  <li>
                    <b>BPO &amp; call center operations</b> — delivering
                    responsive, scalable, multilingual customer support.
                  </li>
                  <li>
                    <b>Import-export services</b> — managing logistics,
                    compliance, and global trade for seamless cross-border
                    operations.
                  </li>
                </ul>
                <p className="text-gray-700 mb-8 leading-loose">
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

          {/* Image on the right */}
          <div className="order-2 md:order-2 mt-8">
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
        </div>
        {/* The Road Ahead Section */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">
            The Road Ahead
          </h3>
          <p className="text-gray-700 mb-8 leading-loose">
            As we enter our second year in <b>August 2025</b>, we're focused on:
          </p>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Expanding globally</b> across North America, Europe, the
                Middle East, and Southeast Asia.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <Cpu className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Advancing AI platforms</b> with real-time model feedback,
                smarter data labeling, and AI-driven quality assurance.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <PhoneCall className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Scaling BPO services</b> with multilingual AI-powered support
                teams.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <Globe2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Optimizing import-export</b> through AI-enabled logistics and
                compliance automation.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Revolutionizing recruitment</b> with predictive hiring tools
                and a global talent marketplace.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-700">
                <b>Driving sustainable impact</b> by adopting green tech,
                creating jobs in underserved regions, and supporting digital
                literacy.
              </p>
            </li>
          </ul>
        </div>

        {/* Our Values Section */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Quality Above All
              </h4>
              <p className="text-gray-600 text-sm">
                Impeccable data and top-tier talent, every time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Integrity & Transparency
              </h4>
              <p className="text-gray-600 text-sm">
                Honest, ethical practices in all we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Innovation & Growth
              </h4>
              <p className="text-gray-600 text-sm">
                Continuously pushing technological boundaries.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Customer-Centric Approach
              </h4>
              <p className="text-gray-600 text-sm">
                Tailoring solutions to each client's unique needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Collaboration & Respect
              </h4>
              <p className="text-gray-600 text-sm">
                Valuing diversity, teamwork, and empathy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Global Mindset
              </h4>
              <p className="text-gray-600 text-sm">
                Operating beyond borders with cultural intelligence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-lg text-gray-800 mb-3">
                Accountability & Excellence
              </h4>
              <p className="text-gray-600 text-sm">
                Delivering results with professionalism.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              <b>Createishwari Solutions</b> stands where AI meets human
              intelligence, where technology fuels opportunity, and where
              services are designed to create <b>real-world impact</b>.
            </p>
            <p className="text-xl md:text-2xl font-bold">
              The journey has just begun. 🚀
            </p>
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
