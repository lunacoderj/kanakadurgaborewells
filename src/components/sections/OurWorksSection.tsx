'use client';

import React, { useRef, useEffect, useState } from 'react';
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

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="snap-center shrink-0 h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] group relative bg-[#050B14]"
    >
      <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 pointer-events-none z-20" />
      
      {/* Cinematic Circle Loading Animation */}
      {isInView && !isVideoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080E17] z-0 rounded-[2rem]">
          <div className="relative flex items-center justify-center mb-6">
            {/* Outer Gold Spinner */}
            <div className="w-16 h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
            {/* Inner Cyan Spinner */}
            <div className="absolute w-10 h-10 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
            {/* Core dot */}
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <p className="text-yellow-500/60 text-[10px] uppercase tracking-[0.3em] font-semibold animate-pulse">
            Loading Feed
          </p>
        </div>
      )}

      <video 
        ref={videoRef}
        src={isInView ? src : undefined} 
        onCanPlay={() => setIsVideoLoaded(true)}
        preload="none"
        muted 
        loop 
        playsInline 
        className={`w-auto h-full rounded-[2rem] pointer-events-none select-none relative z-10 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
  );
};

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
      </div>

      <div className="mt-16 md:mt-4 w-full relative group">
        
        {/* Navigation Controls (Left/Right Centered with Glow) */}
        <button 
          onClick={() => scroll('left')}
          aria-label="Scroll left to see previous works"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/40 border border-yellow-500/30 backdrop-blur-md flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-8 h-8 -ml-1" />
        </button>
        <button 
          onClick={() => scroll('right')}
          aria-label="Scroll right to see more works"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/40 border border-yellow-500/30 backdrop-blur-md flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-8 h-8 ml-1" />
        </button>

        {/* Scrollable Row */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide items-center px-4 md:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {videos.map((src, i) => (
            <VideoCard key={i} src={src} />
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
