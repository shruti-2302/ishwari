import { Mail, MapPin, Phone, User } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-200">
              CreateIshwari Solutions
            </h2>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <p className="text-blue-100 leading-relaxed text-sm">
              We love our customers — feel free to reach out during business
              hours.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Contact</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-[#F1B53E] mt-1" />
                <span>DB Pride, Talawali Chanda, Indore, MP, India</span>
              </li>
              <li className="flex items-start gap-3 group">
                <User size={16} className="text-[#F1B53E] mt-1" />
                <span>Rajni Mandloi</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#F1B53E]" />
                <span>+91 87709 50558</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#F1B53E]" />
                <a
                  href="mailto:rajni@createishwari.com"
                  className="hover:text-[#F1B53E]"
                >
                  rajni@createishwari.com
                </a>
              </li>
            </ul>
          </div>

          {/* HR Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">HR Contact</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-[#F1B53E] mt-1" />
                <span>DB Pride, Talawali Chanda, Indore, MP, India</span>
              </li>
              <li className="flex items-start gap-3 group">
                <User size={16} className="text-[#F1B53E] mt-1" />
                <span>Rekha Sen</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#F1B53E]" />
                <span>+91 96445 66667</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#F1B53E]" />
                <a
                  href="mailto:rekha@createishwari.com"
                  className="hover:text-[#F1B53E]"
                >
                  rekha@createishwari.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-200">Hours</h3>
            <div className="w-12 h-1 bg-[#F1B53E] mb-4"></div>
            <div className="text-blue-100 text-sm space-y-1 mb-4">
              <p>Mon - Sat: 9:00 AM – 6:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
            <a
              href="https://wa.me/918770950558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#F1B53E] text-white px-4 py-2 text-sm font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-4 h-4 mr-2"
              />
              Message us
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-4 border-t border-blue-400 text-center text-blue-100 text-sm">
          <p>&copy; 2024 CreateIshwari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
