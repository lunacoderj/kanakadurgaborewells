import type { Metadata } from "next";
import { Settings2, Activity, Zap, ShieldCheck, Wrench, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Equipments | Kanakadurga Borewells",
  description: "State-of-the-art drilling machinery and equipment used by Kanakadurga Borewells.",
};

export default function EquipmentsPage() {
  const WHATSAPP_NUMBER = "917998998889";
  
  const equipments = [
    { 
      id: "rig",
      title: 'Advanced Drilling Rigs', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/rig.jpg',
      icon: <Settings2 className="w-8 h-8 text-yellow-400" />,
      description: 'High-penetration hydraulic rigs capable of drilling through all geological formations with extreme precision and speed.',
      points: [
        "All-terrain mobility",
        "Deep drilling capacity",
        "Fast rock penetration",
        "Automated handling"
      ]
    },
    { 
      id: "machine",
      title: 'Borewell Machines', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/machine.jpg',
      icon: <Activity className="w-8 h-8 text-yellow-400" />,
      description: 'Robust engineering tailored for reaching deeper water tables efficiently, built to withstand continuous heavy-duty operation.',
      points: [
        "High-torque rotation",
        "Continuous operation",
        "Compact footprint",
        "Low vibration"
      ]
    },
    { 
      id: "compressor",
      title: 'Air Compressors', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/compressor.jpg',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Heavy-duty high-pressure systems ensuring continuous airflow for both intensive cleaning and rapid drilling processes.',
      points: [
        "High CFM output",
        "Fuel efficient",
        "Continuous pressure delivery",
        "Weatherproof design"
      ]
    },
    { 
      id: "vehicle",
      title: 'Support Vehicles', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/vehicle.jpg',
      icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
      description: 'Our all-terrain transport fleet ensures rapid deployment of materials, casing pipes, and crew to any remote site.',
      points: [
        "Heavy payload capacity",
        "4x4 off-road capability",
        "Winch equipped",
        "Rapid response ready"
      ]
    },
    { 
      id: "pump",
      title: 'Submersible Pumps', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/pump.jpg',
      icon: <Droplets className="w-8 h-8 text-yellow-400" />,
      description: 'High-efficiency extraction units designed for longevity and optimal water output across varying depth levels.',
      points: [
        "Corrosion-resistant steel",
        "Low power consumption",
        "High discharge rates",
        "Thermal overload protection"
      ]
    },
    { 
      id: "cleaning",
      title: 'Cleaning Equipment', 
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/cleaning.jpg',
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      description: 'Advanced flushing and desilting tools to remove blockages and restore your borewell to its peak performance.',
      points: [
        "High-pressure jets",
        "Silt extraction pumps",
        "Debris filters",
        "Non-damaging process"
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
              Premium Arsenal
            </h2>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">Extreme Depths</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We don't just drill; we conquer the earth. Our state-of-the-art hydraulic rigs and heavy-duty compressors deliver unmatched power, precision, and speed.
          </p>
        </div>
      </div>

      {/* Equipments List */}
      <div className="max-w-[1400px] mx-auto px-6 space-y-24">
        {equipments.map((eq, index) => {
          const isEven = index % 2 === 0;
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I'd like more information about your ${eq.title}.`)}`;

          return (
            <div 
              key={eq.id} 
              id={eq.id}
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
                    style={{ backgroundImage: `url(${eq.image})` }}
                  ></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg mb-8 text-yellow-400 transform transition-transform hover:scale-110 hover:rotate-6">
                  {eq.icon}
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-md">
                  {eq.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {eq.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {eq.points.map((point, ptIndex) => (
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
                    Enquire on WhatsApp
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
