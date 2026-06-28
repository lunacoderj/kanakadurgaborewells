import type { Metadata } from "next";
import { Droplets, Settings, Wrench, Sprout, Building2, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Services | Kanakadurga Borewells",
  description: "Comprehensive borewell drilling, cleaning, and repair services.",
};

export default function ServicesPage() {
  const WHATSAPP_NUMBER = "917998998889";
  
  const services = [
    {
      id: "drilling",
      title: "Borewell Drilling",
      description: "Expert drilling services with advanced hydraulic rigs for maximum water yield in any terrain. We ensure precision and long-lasting performance.",
      icon: <Droplets className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/borewell-drilling.jpg",
      points: [
        "High-performance hydraulic rigs",
        "Expert terrain analysis",
        "Maximum water yield guarantee",
        "Fast & efficient execution"
      ]
    },
    {
      id: "cleaning",
      title: "Borewell Cleaning",
      description: "High-pressure air compressor cleaning to restore water yield and remove blockages, ensuring your borewell operates at peak efficiency.",
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/borewell-cleaning.jpg",
      points: [
        "High-pressure air flushing",
        "Silt and debris removal",
        "Yield restoration",
        "Eco-friendly process"
      ]
    },
    {
      id: "repair",
      title: "Borewell Repair",
      description: "Comprehensive repair and maintenance services to fix any borewell issues efficiently, preventing complete system failures and prolonging lifespan.",
      icon: <RefreshCw className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/borewell-repair.jpg",
      points: [
        "Motor and pump repairs",
        "Pipeline blockages fixed",
        "Electrical component troubleshooting",
        "24/7 emergency response"
      ]
    },
    {
      id: "pump-installation",
      title: "Pump Installation",
      description: "Professional selection and installation of high-efficiency submersible pumps tailored to your specific water depth and volume requirements.",
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/pump-installation.jpg",
      points: [
        "Submersible & jet pumps",
        "Energy-efficient models",
        "Expert electrical wiring",
        "Post-installation support"
      ]
    },
    {
      id: "agricultural",
      title: "Agricultural Borewells",
      description: "High-capacity borewells tailored for irrigation and farming needs, providing a reliable water source to maximize crop yields year-round.",
      icon: <Sprout className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/agricultural-borewells.jpg",
      points: [
        "Large diameter drilling",
        "Irrigation system integration",
        "Sustainable water tapping",
        "Cost-effective farming solutions"
      ]
    },
    {
      id: "industrial",
      title: "Commercial & Industrial",
      description: "Heavy-duty drilling and water management solutions for large-scale operations, ensuring uninterrupted water supply for industrial processes.",
      icon: <Building2 className="w-8 h-8 text-yellow-400" />,
      image: "/images/services/industrial-borewells.jpg",
      points: [
        "High-volume water extraction",
        "Compliance with regulations",
        "Multi-well system planning",
        "Turnkey industrial solutions"
      ]
    }
  ];

  return (
    <div className="bg-[#050B14] min-h-screen text-white pt-24 pb-32">
      
      {/* Header */}
      <div className="relative py-24 text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest">
              What We Do
            </h2>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-end borewell solutions designed to deliver unmatched reliability and performance.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-[1400px] mx-auto px-6 space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I'm interested in the ${service.title} service.`)}`;

          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center scroll-mt-32`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                {/* Decorative border glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-[#0c1322]/40 z-10 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg mb-8 text-yellow-400 transform transition-transform hover:scale-110 hover:rotate-6">
                  {service.icon}
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-md">
                  {service.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.points.map((point, ptIndex) => (
                    <div key={ptIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-gray-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-[#050B14] font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(234,179,8,0.3)]"
                  >
                    Get Service on WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
