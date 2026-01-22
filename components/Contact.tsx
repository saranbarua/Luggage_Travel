
import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Let's plan your <span className="text-indigo-600">next journey</span>.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 text-lg mb-12">
                Questions about visas or flight availability? Our team is ready to assist you. 
                Visit our office for a face-to-face consultation.
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.2} y={10}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Our Office</h4>
                    <p className="text-gray-500">123 Travel Avenue, Suite 400, Downtown Core</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3} y={10}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-500">support@luggagetravel.com</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4} y={10}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="tel:+1234567890" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a href="https://wa.me/1234567890" className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all">
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Thank you for reaching out. One of our travel consultants will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                      <select className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all bg-white appearance-none">
                        <option>Air Ticket Booking</option>
                        <option>Visa Processing</option>
                        <option>Travel Documentation</option>
                        <option>Group Tours</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your travel plans..." 
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all group active:scale-95"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
