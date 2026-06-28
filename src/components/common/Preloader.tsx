'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Fast loading simulation for the preloader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setLoading(false);
              document.body.style.overflow = '';
            }, 800);
          }, 2000); // Wait 2s to let logo video play 
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#050B14] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out`}
      style={{ 
        opacity: fadeOut ? 0 : 1, 
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050B14] to-[#050B14] pointer-events-none" />

      {/* Video Container with unique styling */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">
        {/* Decorative Rings */}
        <div className="absolute inset-0 rounded-full border border-yellow-500/20 animate-[ping_3s_ease-in-out_infinite]" />
        <div className="absolute inset-[-15px] md:inset-[-20px] rounded-full border border-cyan-500/10 animate-[spin_4s_linear_infinite]" />
        <div className="absolute inset-[-15px] md:inset-[-20px] rounded-full border border-t-yellow-500/30 border-r-transparent border-b-transparent border-l-transparent animate-[spin_3s_linear_infinite]" />
        
        {/* Soft Glowing aura */}
        <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full animate-pulse" />

        <div className="w-full h-full relative z-10 overflow-hidden rounded-full shadow-[0_0_30px_rgba(234,179,8,0.3)] border-2 border-yellow-500/30 bg-black flex items-center justify-center p-6">
          <Image 
            src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/logo-transparent.png" 
            alt="Logo" 
            fill 
            sizes="160px"
            className="object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
            priority
          />
        </div>
      </div>
      
      {/* Elegant minimalist progress bar */}
      <div className="w-64 md:w-80 h-[2px] bg-gray-800 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(234,179,8,0.1)] mt-4">
        <div 
          className="h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 transition-all duration-300 ease-out relative"
          style={{ width: `${Math.min(progress, 100)}%` }}
        >
        </div>
      </div>
      
      {/* Premium Text Info */}
      <div className="mt-8 flex flex-col items-center">
        <div className="text-yellow-400 font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
          Kanakadurga Borewells
        </div>
        <div className="text-gray-400 font-sans text-[10px] md:text-xs mt-3 tracking-wider uppercase font-light">
          {progress < 30 ? 'Surveying Location...' : 
           progress < 70 ? 'Preparing Equipment...' : 
           progress < 100 ? 'Initializing Drill...' : 'Ready'} {Math.min(progress, 100)}%
        </div>
      </div>
    </div>
  );
};
