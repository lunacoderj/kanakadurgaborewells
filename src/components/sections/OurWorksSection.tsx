'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work1.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work2.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work3.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work5.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work6.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work7.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work8.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/work9.mp4',
  'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/workatoffice.mp4'
];

export const OurWorksSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = window.innerWidth * 0.6; // scroll by 60% of viewport
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#050B14] relative overflow-hidden">
      
      {/* Background Watermark */}
      <h2 className="absolute top-10 left-10 text-[8rem] font-black text-white/[0.03] uppercase tracking-tighter whitespace-nowrap hidden lg:block pointer-events-none select-none z-0">
        Field Operations
      </h2>

      {/* Premium Header Content */}
      <div className="px-6 md:px-16 lg:px-32 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Featured Works</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Experience our dedication to precision and excellence through a curated visual journey of our most challenging and rewarding borewell field operations.
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 group shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 group shadow-lg"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="mt-16 md:mt-4 w-full">
        {/* Scrollable Row */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide items-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {videos.map((src, i) => (
            <div 
              key={i} 
              className="snap-center shrink-0 h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative"
            >
              <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 pointer-events-none z-10" />
              <video 
                src={src} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-auto h-full rounded-[2rem] pointer-events-none select-none" 
              />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
};
