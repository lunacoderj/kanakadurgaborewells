'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

export const ImageWithLoader = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080E17] z-10" style={{ borderRadius: 'inherit' }}>
          <div className="relative flex items-center justify-center mb-4 md:mb-6">
            {/* Outer Gold Spinner */}
            <div className="w-10 h-10 md:w-16 md:h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
            {/* Inner Cyan Spinner */}
            <div className="absolute w-6 h-6 md:w-10 md:h-10 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
            {/* Core dot */}
            <div className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <p className="text-yellow-500/60 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-semibold animate-pulse text-center">
            Loading
          </p>
        </div>
      )}
      <Image
        {...props}
        className={`${props.className || ''} transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
      />
    </>
  );
};
