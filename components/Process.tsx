
import React from 'react';
import { Reveal } from './Reveal';

const Process: React.FC = () => {
  const steps = [
    { title: "Contact us", desc: "Reach out via phone, WhatsApp, or our online form." },
    { title: "Share requirements", desc: "Detail your destination, dates, and documentation needs." },
    { title: "Verification & guidance", desc: "We audit your documents and provide a clear roadmap." },
    { title: "Booking / Processing", desc: "Our team handles the heavy lifting with official channels." },
    { title: "Confirmation & support", desc: "Receive your documents with post-service assistance." }
  ];

  return (
    <section id="process" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple Process Timeline</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-400 max-w-xl mx-auto">
              How we work together from the first hello to the final confirmation.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 hidden lg:block -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={0.1 * idx} y={20}>
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start group">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mb-6 border-4 border-gray-900 relative z-20 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
