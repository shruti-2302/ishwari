import React from "react";
import { Target, Award, Shield, Eye, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Driving Innovation, Delivering Results
          </h2>
          <div className="w-24 h-1 bg-[#F1B53E] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Creatishwari Solutions, we are more than just a tech company. We
            are your strategic partners in digital transformation, dedicated to
            turning your ambitious ideas into powerful, market-ready solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image on the left */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
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
              Founded on the principle of **"Growth is Life,"** we leverage
              cutting-edge technology and deep industry expertise to solve
              complex challenges. Our team of passionate innovators,
              strategists, and developers work collaboratively to build
              scalable, secure, and intelligent systems that give you a
              competitive edge.
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
                    We align our technology solutions with your long-term
                    business objectives for sustainable growth.
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
                    Our deep understanding of market dynamics ensures we deliver
                    relevant and impactful solutions.
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
                    We build long-term relationships based on transparency,
                    trust, and exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Vision and Mission Section --- */}
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
                To be a globally recognized leader in digital innovation,
                empowering businesses to achieve unprecedented growth and
                success in the digital era. We envision a future where
                technology seamlessly integrates with business strategy to
                create limitless possibilities.
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
                To deliver exceptional, tailor-made technology solutions that
                drive tangible results. We are committed to building lasting
                partnerships with our clients through innovation, integrity, and
                a relentless focus on quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        {/* --- End Vision and Mission Section --- */}

        {/* Stats Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                12+
              </h4>
              <p className="text-gray-500 font-medium">Years of Innovation</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                500+
              </h4>
              <p className="text-gray-500 font-medium">Projects Delivered</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                100+
              </h4>
              <p className="text-gray-500 font-medium">Expert Team</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
                50+
              </h4>
              <p className="text-gray-500 font-medium">Industries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
