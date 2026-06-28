import React from 'react';

const ShimmerStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes shimmer {
      0% { transform: translateX(-150%); }
      50% { transform: translateX(150%); }
      100% { transform: translateX(150%); }
    }
    .shimmer {
      position: relative;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.03);
    }
    .shimmer::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(250, 204, 21, 0.08) 30%,
        rgba(250, 204, 21, 0.15) 50%,
        rgba(250, 204, 21, 0.08) 70%,
        transparent 100%
      );
      animation: shimmer 2s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    .shimmer-fast::after {
      animation-duration: 1.5s;
    }
    .shimmer-delayed::after {
      animation-delay: 0.5s;
    }
    .premium-border {
      border: 1px solid rgba(250, 204, 21, 0.1);
    }
  `}} />
);

export const SectionSkeleton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 bg-[#050B14] ${className}`}>
    <ShimmerStyles />
    <div className="max-w-[1400px] mx-auto px-6">
      {children}
    </div>
  </section>
);

export const HeroSkeleton = () => (
  <div className="w-full h-screen bg-[#050B14] flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
    <ShimmerStyles />
    
    {/* Animated background gradient pulse */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent animate-pulse" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] animate-pulse" />
    
    <div className="w-full max-w-5xl space-y-8 flex flex-col items-center relative z-10 mt-10">
      {/* Badge */}
      <div className="h-8 w-64 rounded-full shimmer premium-border" />
      
      {/* Main Title */}
      <div className="h-16 md:h-24 w-full md:w-3/4 rounded-2xl shimmer shimmer-fast premium-border" />
      <div className="h-16 md:h-24 w-4/5 md:w-2/3 rounded-2xl shimmer shimmer-delayed premium-border" />
      
      {/* Subtitle */}
      <div className="h-20 w-11/12 md:w-3/4 rounded-xl mt-6 shimmer premium-border" />
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <div className="h-14 w-full sm:w-48 rounded-full shimmer shimmer-fast premium-border border-yellow-500/20" />
        <div className="h-14 w-full sm:w-48 rounded-full shimmer shimmer-delayed premium-border border-blue-500/20" />
      </div>
    </div>
  </div>
);

export const FeaturesSkeleton = () => (
  <section className="py-12 bg-[#0a1425] border-y border-white/5 relative overflow-hidden">
    <ShimmerStyles />
    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] premium-border group relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/5 transition-colors"></div>
            <div className={`w-14 h-14 rounded-full shimmer shrink-0 border border-yellow-500/20`} style={{ animationDelay: `${i * 0.1}s` }} />
            <div className="space-y-3 flex-1">
              <div className="h-4 rounded w-3/4 shimmer" style={{ animationDelay: `${i * 0.15}s` }} />
              <div className="h-3 rounded w-1/2 shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GenericGridSkeleton = () => (
  <SectionSkeleton>
    <div className="flex flex-col items-center mb-16 space-y-5">
      <div className="h-5 w-40 rounded-full shimmer border border-yellow-500/20" />
      <div className="h-14 w-72 md:w-[500px] rounded-2xl shimmer premium-border" />
      <div className="h-4 w-56 md:w-[400px] rounded-full shimmer mt-4" />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white/[0.02] backdrop-blur-sm rounded-3xl premium-border p-6 h-[420px] flex flex-col relative overflow-hidden">
          <div className="w-full h-48 rounded-2xl mb-6 shimmer" style={{ animationDelay: `${i * 0.1}s` }} />
          <div className="h-7 w-3/4 rounded-lg mb-5 shimmer" style={{ animationDelay: `${i * 0.15}s` }} />
          <div className="space-y-3 mb-8">
            <div className="h-3 w-full rounded shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
            <div className="h-3 w-full rounded shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
            <div className="h-3 w-4/5 rounded shimmer" style={{ animationDelay: `${i * 0.2}s` }} />
          </div>
          <div className="mt-auto h-12 w-36 rounded-full shimmer border border-yellow-500/20" style={{ animationDelay: `${i * 0.25}s` }} />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const SplitSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="space-y-6">
        <div className="h-6 w-40 rounded-full shimmer border border-yellow-500/20" />
        <div className="h-16 w-full rounded-2xl shimmer premium-border" />
        <div className="h-16 w-4/5 rounded-2xl shimmer premium-border" />
        <div className="space-y-4 pt-6">
          <div className="h-4 w-full rounded shimmer" />
          <div className="h-4 w-full rounded shimmer" />
          <div className="h-4 w-5/6 rounded shimmer" />
          <div className="h-4 w-2/3 rounded shimmer" />
        </div>
        
        <div className="grid grid-cols-2 gap-6 pt-8">
          <div className="h-32 rounded-3xl shimmer premium-border" />
          <div className="h-32 rounded-3xl shimmer premium-border" />
        </div>
        
        <div className="pt-8">
          <div className="h-14 w-48 rounded-full shimmer border border-yellow-500/30" />
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-500/5 blur-[50px] rounded-full animate-pulse" />
        <div className="h-[400px] lg:h-[600px] w-full rounded-[2.5rem] shimmer premium-border shadow-2xl" />
      </div>
    </div>
  </SectionSkeleton>
);
