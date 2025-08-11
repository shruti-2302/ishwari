import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-200">
              CreateIshwari
            </h2>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <p className="text-blue-100 leading-relaxed">
              We love our customers — feel free to reach out during business
              hours.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Contact</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-[#F1B53E] mt-1 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="leading-relaxed">
                  DB Pride, Talawali Chanda, Indore, MP, India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone
                  size={18}
                  className="text-[#F1B53E] group-hover:scale-110 transition-transform duration-300"
                />
                <span>+91 87709 50558</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail
                  size={18}
                  className="text-[#F1B53E] group-hover:scale-110 transition-transform duration-300"
                />
                <a
                  href="mailto:rajni@createishwari.com"
                  className="hover:text-[#F1B53E] transition-colors duration-300"
                >
                  rajni@createishwari.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Hours</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <div className="text-blue-100 space-y-2">
              <p className="leading-relaxed">
                Mon - Sat: 9:00 AM – 6:00 PM IST
              </p>
              <p className="leading-relaxed">Sunday: Closed</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Connect</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <a
              href="https://wa.me/918770950558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#F1B53E] text-white px-6 py-3 font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5 mr-2"
              />
              Message us on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-16 pt-8 border-t border-blue-400">
          <div className="text-center text-blue-100">
            <p>&copy; 2024 CreateIshwari. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
