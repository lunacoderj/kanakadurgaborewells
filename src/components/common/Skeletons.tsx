import React from 'react';

const PremiumStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes laser-scan {
      0% { transform: translateY(-100%) rotate(15deg); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateY(250%) rotate(15deg); opacity: 0; }
    }
    @keyframes breath {
      0%, 100% { transform: scale(1); filter: brightness(1); }
      50% { transform: scale(1.02); filter: brightness(1.2); }
    }
    @keyframes sonar-ring {
      0% { transform: scale(0.8); opacity: 0.8; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    
    .ultra-skeleton {
      position: relative;
      overflow: hidden;
      /* Deep space/metallic dark base */
      background: linear-gradient(135deg, rgba(10, 15, 25, 0.9) 0%, rgba(20, 30, 45, 0.8) 100%);
      border: 1px solid rgba(250, 204, 21, 0.15);
      backdrop-filter: blur(12px);
      box-shadow: 
        inset 0 0 20px rgba(0, 0, 0, 0.5),
        0 4px 30px rgba(0, 0, 0, 0.5);
    }
    
    .ultra-skeleton::before {
      content: '';
      position: absolute;
      top: -50%; left: -50%; right: -50%; bottom: -50%;
      background: linear-gradient(
        to bottom,
        transparent 30%,
        rgba(56, 189, 248, 0.15) 45%,    /* Cyan Water Glow */
        rgba(250, 204, 21, 0.6) 50%,     /* Intense Gold Laser Core */
        rgba(56, 189, 248, 0.15) 55%,
        transparent 70%
      );
      animation: laser-scan 3s infinite cubic-bezier(0.25, 0.1, 0.25, 1);
      pointer-events: none;
    }
    
    .ultra-text {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
      box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    }
    .ultra-text::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.2), transparent);
      animation: laser-scan 2s infinite linear;
      transform: skewX(-20deg);
    }

    .sonar-circle {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgba(250, 204, 21, 0.4);
      animation: sonar-ring 3s infinite cubic-bezier(0, 0, 0.2, 1);
    }
  `}} />
);

export const SectionSkeleton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 bg-[#02050A] relative overflow-hidden ${className}`}>
    <PremiumStyles />
    {/* Subtle Background Glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
    
    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
      {children}
    </div>
  </section>
);

export const HeroSkeleton = () => (
  <div className="w-full h-screen bg-[#02050A] flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
    <PremiumStyles />
    
    {/* Sonar Effect Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
      <div className="sonar-circle inset-0" />
      <div className="sonar-circle inset-0" style={{ animationDelay: '1s' }} />
      <div className="sonar-circle inset-0" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-yellow-500/10 blur-[50px] rounded-full" />
    </div>
    
    <div className="w-full max-w-5xl space-y-8 flex flex-col items-center relative z-10 mt-10">
      {/* Badge */}
      <div className="h-8 w-64 rounded-full ultra-skeleton" />
      
      {/* Main Title */}
      <div className="h-16 md:h-24 w-full md:w-3/4 rounded-3xl ultra-skeleton" style={{ animationDelay: '0.1s' }} />
      <div className="h-16 md:h-24 w-4/5 md:w-2/3 rounded-3xl ultra-skeleton" style={{ animationDelay: '0.2s' }} />
      
      {/* Subtitle */}
      <div className="h-20 w-11/12 md:w-3/4 rounded-2xl mt-6 ultra-skeleton" style={{ animationDelay: '0.3s' }} />
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <div className="h-14 w-full sm:w-48 rounded-full ultra-skeleton border border-yellow-500/40 shadow-[0_0_20px_rgba(250,204,21,0.2)]" />
        <div className="h-14 w-full sm:w-48 rounded-full ultra-skeleton border border-blue-400/30" />
      </div>
    </div>
  </div>
);

export const FeaturesSkeleton = () => (
  <section className="py-12 bg-gradient-to-r from-[#02050A] via-[#08101F] to-[#02050A] border-y border-white/5 relative overflow-hidden">
    <PremiumStyles />
    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-5 p-6 rounded-3xl ultra-skeleton transition-all duration-500 hover:scale-105" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-16 h-16 rounded-full ultra-text shrink-0 flex items-center justify-center border border-yellow-500/20 bg-black/40">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 blur-md" />
            </div>
            <div className="space-y-3 flex-1">
              <div className="h-4 rounded-md w-3/4 ultra-text" />
              <div className="h-3 rounded-md w-1/2 ultra-text opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GenericGridSkeleton = () => (
  <SectionSkeleton>
    <div className="flex flex-col items-center mb-16 space-y-6">
      <div className="h-6 w-48 rounded-full ultra-skeleton border border-yellow-500/30" />
      <div className="h-16 w-72 md:w-[600px] rounded-3xl ultra-skeleton" />
      <div className="h-4 w-56 md:w-[400px] rounded-full ultra-text opacity-50" />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="ultra-skeleton rounded-[2rem] p-7 h-[460px] flex flex-col relative group" style={{ animationDelay: `${i * 0.15}s` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-full h-56 rounded-2xl mb-8 bg-black/40 border border-white/5 relative overflow-hidden">
             {/* Inner image placeholder pulse */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute inset-0 ultra-text opacity-30" />
          </div>
          <div className="h-8 w-3/4 rounded-xl mb-6 ultra-text" />
          <div className="space-y-4 mb-8">
            <div className="h-3 w-full rounded-md ultra-text opacity-60" />
            <div className="h-3 w-full rounded-md ultra-text opacity-60" />
            <div className="h-3 w-4/5 rounded-md ultra-text opacity-60" />
          </div>
          <div className="mt-auto h-12 w-40 rounded-full ultra-skeleton border border-yellow-500/20" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const SplitSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="space-y-8">
        <div className="h-8 w-48 rounded-full ultra-skeleton border border-yellow-500/30" />
        <div className="space-y-4">
          <div className="h-16 w-full rounded-3xl ultra-skeleton" />
          <div className="h-16 w-5/6 rounded-3xl ultra-skeleton" />
        </div>
        <div className="space-y-5 pt-4">
          <div className="h-4 w-full rounded-md ultra-text opacity-70" />
          <div className="h-4 w-full rounded-md ultra-text opacity-70" />
          <div className="h-4 w-5/6 rounded-md ultra-text opacity-70" />
        </div>
        
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="h-36 rounded-[2rem] ultra-skeleton bg-black/30 border border-white/5 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-yellow-500/10 blur-xl" />
          </div>
          <div className="h-36 rounded-[2rem] ultra-skeleton bg-black/30 border border-white/5 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-blue-500/10 blur-xl" />
          </div>
        </div>
        
        <div className="pt-6">
          <div className="h-16 w-56 rounded-full ultra-skeleton border border-yellow-500/40 shadow-[0_0_30px_rgba(250,204,21,0.15)]" />
        </div>
      </div>
      
      <div className="relative">
        {/* Massive glowing orb behind the image placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-yellow-500/20 to-blue-500/20 blur-[80px] rounded-full animate-pulse" />
        <div className="h-[500px] lg:h-[700px] w-full rounded-[3rem] ultra-skeleton shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
      </div>
    </div>
  </SectionSkeleton>
);
