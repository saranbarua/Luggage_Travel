
import React from 'react';
import { ShieldCheck, Eye, MapPin, MessageSquareText } from 'lucide-react';
import { Reveal } from './Reveal';

const WhyUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Verified Partners",
      desc: "We only work with trusted airlines and official embassy channels."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Accuracy & Transparency",
      desc: "No hidden fees or surprises. You'll know exactly what you're paying for."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office-Based Service",
      desc: "Physical presence means accountability. Visit us for in-person support."
    },
    {
      icon: <MessageSquareText className="w-6 h-6" />,
      title: "Direct Communication",
      desc: "No confusing bots. Speak directly with a dedicated travel consultant."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">Why travelers choose <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Luggage Travel</span></h2>
             </Reveal>
             <div className="space-y-8">
                {points.map((p, idx) => (
                  <Reveal key={idx} delay={0.1 * idx} y={20}>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {p.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{p.title}</h4>
                        <p className="text-gray-500">{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
             </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <Reveal delay={0.4} y={0}>
              <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/trust/1000/1200" 
                  alt="Customer Support" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                    <p className="text-2xl font-light italic mb-6">"Their office-based approach gave me the confidence I needed for my family's first international trip. Truly reliable."</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20" />
                      <div>
                        <p className="font-bold">Jonathan Doe</p>
                        <p className="text-white/60 text-sm">Corporate Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
