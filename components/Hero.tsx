
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, ShieldCheck, Map } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-40" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-30" 
        />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verified & Office-Based Service
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Travel made <span className="text-indigo-600">simple</span>. Support you can <span className="text-indigo-600">trust</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
              Air tickets, visa processing, and travel documentation—professional office-based support with direct, human communication.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                Get Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-semibold hover:border-gray-900 transition-all"
              >
                See Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                <span className="text-sm font-medium">Ticketing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-medium">Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                <span className="text-sm font-medium">Guidance</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Element for Hero */}
        <div className="hidden lg:block relative">
          <Reveal delay={0.4} y={50}>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 bg-white p-4 group">
               <img 
                src="https://picsum.photos/seed/travel/800/1000" 
                alt="Modern Travel" 
                className="rounded-[2rem] w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl font-medium">Luggage Travel Office</p>
                  <p className="text-white/80 text-sm">Downtown Financial Hub</p>
               </div>
            </div>
          </Reveal>
          {/* Decorative floating stats/cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-900">100% Secure</span>
            </div>
            <p className="text-xs text-gray-500">All data processed through verified bank-grade channels.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
