import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap size={32} className="text-blue-500" />
              <span className="text-2xl font-bold tracking-tight">TutorFlow</span>
            </div>
            <p className="text-sm leading-relaxed">
              Connecting students with the world's top educators. We make learning accessible, 
              personalized, and affordable for everyone, everywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Find a Tutor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Tutor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Group Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold">Stay Updated</h4>
            <p className="text-sm">Subscribe to get study tips and discount codes.</p>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="absolute right-2 top-1.5 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-md transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 TutorFlow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-4 opacity-50">
            {/* Simple representation of payment icons */}
            <span className="border border-gray-500 px-1 rounded">VISA</span>
            <span className="border border-gray-500 px-1 rounded">MASTER</span>
            <span className="border border-gray-500 px-1 rounded">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;