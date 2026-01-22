
import React from 'react';
import { Plane, Globe, FileText, Luggage, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, delay: number }> = ({ icon, title, desc, delay }) => (
  <Reveal delay={delay} y={40}>
    <div className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-500 flex flex-col h-full">
      <div className="w-14 h-14 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed flex-grow">{desc}</p>
      <div className="mt-8 pt-6 border-t border-gray-50">
        <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
          Learn more
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </Reveal>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-7 h-7" />,
      title: "Air ticket booking",
      desc: "Instant booking for domestic and international flights. We find the best routes and competitive prices with full post-booking support.",
      delay: 0.1
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Visa processing",
      desc: "End-to-end visa assistance. We help with documentation, application filing, and embassy appointment scheduling for all major countries.",
      delay: 0.2
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Travel guidance",
      desc: "Professional documentation support, itinerary planning, and travel insurance advice to ensure a smooth, worry-free journey.",
      delay: 0.3
    },
    {
      icon: <Luggage className="w-7 h-7" />,
      title: "Group tour coordination",
      desc: "Specialized logistics for groups. Tailored coordination for corporate retreats, family reunions, or educational tours.",
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Our Travel Services 🧳✈️</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Reliable, office-based travel solutions tailored for individual and corporate needs. We handle the complexity, you enjoy the destination.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
