import React from "react";
import { Target, Award, Shield, Eye, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Driving AI Innovation, Delivering Results
          </h2>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2024, CreateIshwari Solutions is a data-driven technology
            start-up specializing in advanced AI solutions and end-to-end
            recruitment services. We excel in building high-quality labeled
            datasets and proprietary tools that power AI applications including
            speech recognition, face recognition, and OCR—helping organizations
            automate processes, improve performance, and create smarter user
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              Who We Are
            </h3>
            <p className="text-gray-700 mb-8 leading-loose">
              At CreateIshwari Solutions, we combine high-quality data
              collection with cutting-edge AI tools to deliver scalable,
              impactful solutions. Our proprietary technologies process and
              leverage data to boost automation, enhance security, improve
              accessibility, and enable better decision-making.
              <br />
              Alongside AI, we provide comprehensive recruitment services across
              India—covering all profiles and industries with
              data-driven talent acquisition methods. Headquartered in Indore,
              Madhya Pradesh, and supported by strategic teams across the globe,
              we manage large-scale projects with both global reach and local
              insight.
            </p>

            {/* Key Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">
                    Strategic Approach
                  </h4>
                  <p className="text-gray-600">
                    Every AI solution is crafted to meet specific client goals,
                    ensuring measurable growth and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">
                    Proven Expertise
                  </h4>
                  <p className="text-gray-600">
                    From speech and face recognition to OCR, our tools are
                    built with precision, accuracy, and industry experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">
                    Trusted Partnership
                  </h4>
                  <p className="text-gray-600">
                    Guided by our “customer-first” philosophy, we build
                    long-lasting partnerships based on trust and results.
                  </p>
                </div>
              </div>
            </div>
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
