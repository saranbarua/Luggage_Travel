
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Luggage Travel</span>
            </a>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Premium travel support you can trust. Direct communication, office-based service, and verified partners.
              <br/><br/>
              <span className="italic text-sm text-gray-400">"More services will be added step by step as we grow."</span>
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" className="hover:text-indigo-600 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-indigo-600 transition-colors">Why Us</a></li>
              <li><a href="#process" className="hover:text-indigo-600 transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact Details</h4>
            <ul className="space-y-4 text-gray-500">
              <li>123 Travel Avenue, Suite 400</li>
              <li>Downtown Core, City Center</li>
              <li>+1 (123) 456-7890</li>
              <li>support@luggagetravel.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Get travel tips and exclusive visa updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Luggage Travel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
