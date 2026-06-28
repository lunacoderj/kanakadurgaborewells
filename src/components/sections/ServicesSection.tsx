'use client';

import { Droplets, Settings, Wrench, Sprout, Building2, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Borewell Drilling',
      description: 'Expert drilling services with advanced hydraulic rigs for maximum water yield in any terrain.',
      icon: <Droplets className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/borewell-drilling.jpg',
      link: '/services#drilling',
      colSpan: 'md:col-span-2 lg:col-span-2',
      rowSpan: 'md:row-span-1 lg:row-span-2'
    },
    {
      title: 'Borewell Cleaning',
      description: 'High-pressure air compressor cleaning to restore water yield and remove blockages.',
      icon: <Settings className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/borewell-cleaning.jpg',
      link: '/services#cleaning',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      title: 'Borewell Repair',
      description: 'Comprehensive repair and maintenance services to fix any borewell issues efficiently.',
      icon: <RefreshCw className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/borewell-repair.jpg',
      link: '/services#repair',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      title: 'Pump Installation',
      description: 'Professional selection and installation of high-efficiency submersible pumps.',
      icon: <Wrench className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/pump-installation.jpg',
      link: '/services#pump-installation',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      title: 'Agricultural Borewells',
      description: 'High-capacity borewells tailored for irrigation and farming needs.',
      icon: <Sprout className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/agricultural-borewells.jpg',
      link: '/services#agricultural',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      title: 'Commercial & Industrial',
      description: 'Heavy-duty drilling and water management solutions for large-scale operations.',
      icon: <Building2 className="w-6 h-6 text-yellow-400 group-hover:text-blue-950 transition-colors duration-300" />,
      image: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/industrial-borewells.jpg',
      link: '/services#industrial',
      colSpan: 'md:col-span-2 lg:col-span-1',
      rowSpan: 'row-span-1'
    }
  ];

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-500 to-transparent"></div>
              <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest">
                Premium Services
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Complete Borewell <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">Solutions</span>
            </h3>
          </div>
          
          <div className="max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed">
              We deliver end-to-end, high-performance borewell services tailored for residential, commercial, and industrial requirements using state-of-the-art technology.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={index} 
              className={`group block relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${service.colSpan} ${service.rowSpan}`}
            >
              {/* Image Background (Parallax Effect) */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Glassmorphic Border/Base (placed on top of image but transparent inside) */}
              <div className="absolute inset-0 bg-transparent border border-white/10 group-hover:border-yellow-400/30 transition-colors duration-500 z-10"></div>

              {/* Card Content */}
              <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                {/* Top: Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Bottom: Text & Action */}
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-md">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Subtle Action Link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-white tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-yellow-400">Explore</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-yellow-400/20 to-transparent blur-sm"></div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

