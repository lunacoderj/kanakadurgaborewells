'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'Residential', 'Agricultural', 'Industrial'];
  
  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = window.innerWidth < 640 ? window.innerWidth * 0.85 : 450 + 24;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm md:text-base font-bold text-yellow-500 mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              OUR PROJECTS
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0a1425] leading-tight">
              Masterpieces in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Water Extraction</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                  activeTab === category 
                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Premium Carousel */}
        <div className="relative group mt-8">
          
          {/* Navigation Controls (Left/Right Centered with Glow) */}
          <button 
            onClick={() => scroll('left')}
            aria-label="Scroll left to see previous projects"
            className="absolute left-4 md:left-6 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 border border-blue-500/30 backdrop-blur-md flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 -ml-1" />
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Scroll right to see more projects"
            className="absolute right-4 md:right-6 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 border border-blue-500/30 backdrop-blur-md flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 ml-1" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden px-2 md:px-6" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className="snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-[450px] group/card relative h-[450px] md:h-[500px] rounded-[2.5rem] overflow-hidden bg-gray-100 block shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200">
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover/card:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/60 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-white font-black text-2xl md:text-3xl mb-3 drop-shadow-lg leading-tight">{project.title}</h4>
                  
                  {/* Subtle info area */}
                  <div className="text-gray-200 text-sm mb-6 flex flex-wrap gap-x-4 gap-y-2 opacity-80 font-medium">
                    <span className="flex items-center gap-1">📍 {project.location}</span>
                    <span className="flex items-center gap-1">📏 {project.depth} Depth</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto border-t border-white/20 pt-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                      Explore Project
                    </span>
                    <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-[#0b1120] group-hover/card:rotate-45 transition-transform duration-500 shadow-[0_0_20px_rgba(250,204,21,0.6)]">
                      <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Fading Edges for Premium Look */}
          <div className="absolute top-0 bottom-8 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block z-10"></div>
          <div className="absolute top-0 bottom-8 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block z-10"></div>
        </div>


      </div>
    </section>
  );
};
