import React from 'react';

export const SectionSkeleton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 md:py-24 bg-gray-50/50 animate-pulse ${className}`}>
    <div className="max-w-[1400px] mx-auto px-6">
      {children}
    </div>
  </section>
);

export const HeroSkeleton = () => (
  <div className="w-full h-screen bg-[#050B14] animate-pulse flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
    <div className="w-full max-w-5xl space-y-8 flex flex-col items-center relative z-10 mt-10">
      {/* Badge */}
      <div className="h-8 w-64 bg-gray-800 rounded-full" />
      
      {/* Main Title */}
      <div className="h-16 md:h-24 w-full md:w-3/4 bg-gray-800 rounded-2xl" />
      <div className="h-16 md:h-24 w-4/5 md:w-2/3 bg-gray-800 rounded-2xl" />
      
      {/* Subtitle */}
      <div className="h-20 w-11/12 md:w-3/4 bg-gray-800/50 rounded-xl mt-6" />
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <div className="h-14 w-full sm:w-48 bg-gray-700 rounded-full" />
        <div className="h-14 w-full sm:w-48 bg-gray-800 rounded-full" />
      </div>
    </div>
  </div>
);

export const FeaturesSkeleton = () => (
  <section className="py-12 bg-white animate-pulse border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-50">
            <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GenericGridSkeleton = () => (
  <SectionSkeleton>
    <div className="flex flex-col items-center mb-16 space-y-4">
      {/* Section Header */}
      <div className="h-5 w-32 bg-gray-200 rounded-full" />
      <div className="h-12 w-64 md:w-[400px] bg-gray-300 rounded-xl" />
      <div className="h-4 w-48 md:w-[300px] bg-gray-200 rounded-full mt-4" />
    </div>
    
    {/* Grid Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 h-[420px] flex flex-col">
          <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6" />
          <div className="h-6 w-3/4 bg-gray-300 rounded mb-4" />
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-4/5 bg-gray-200 rounded" />
          </div>
          <div className="mt-auto h-12 w-32 bg-gray-200 rounded-full" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const SplitSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Content Side */}
      <div className="space-y-6">
        <div className="h-5 w-32 bg-gray-200 rounded-full" />
        <div className="h-14 w-full bg-gray-300 rounded-xl" />
        <div className="h-14 w-4/5 bg-gray-300 rounded-xl" />
        <div className="space-y-3 pt-6">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        
        {/* Features/Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="h-28 bg-gray-200 rounded-2xl" />
          <div className="h-28 bg-gray-200 rounded-2xl" />
        </div>
        
        <div className="pt-6">
          <div className="h-14 w-40 bg-gray-300 rounded-full" />
        </div>
      </div>
      
      {/* Image/Visual Side */}
      <div className="h-[400px] lg:h-[600px] w-full bg-gray-200 rounded-[2rem]" />
    </div>
  </SectionSkeleton>
);
