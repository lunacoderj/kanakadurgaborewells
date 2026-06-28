'use client';

import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Target, Droplets, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[850px] flex flex-col justify-center overflow-hidden bg-[#050B14]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        >
          <source src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/hero_combined.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Glow Orbs & Grid */}
        <div className="absolute inset-0 bg-[url('https://gf2wtazfdibnozca.public.blob.vercel-storage.com/grid.svg')] opacity-[0.03] bg-repeat bg-[length:40px_40px]"></div>
        
        {/* Deep Vignette / Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/40 to-[#050B14] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/90 via-transparent to-[#050B14]/90 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-6 w-full flex-grow flex flex-col justify-center pt-20">
        <div className="max-w-4xl relative">
          
          {/* Elegant Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md shadow-2xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-[0.2em] uppercase">
              Premium Engineering Since 2009
            </span>
          </motion.div>
          
          {/* Main Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.1] mb-8 tracking-tight"
          >
            Unearthing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#FCEABB] to-brand-gold font-bold inline-block mt-2 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Nature's Source.
            </span>
          </motion.h1>
          
          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light tracking-wide"
          >
            Delivering absolute precision in borewell drilling and water resource management. We merge advanced technology with decades of expertise to secure your water independence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <Link 
              href="/contact"
              className="group relative w-full sm:w-auto bg-brand-gold text-brand-navy px-9 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#e6c762] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <a 
              href="tel:07998998889" 
              className="group w-full sm:w-auto bg-transparent border border-white/20 text-white px-9 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:border-brand-gold hover:bg-brand-gold/5 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              079989 98889
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats - Ultra Sleek Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-6 left-0 right-0 z-40 hidden md:block"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl leading-none mb-1 tracking-tight">15+</div>
                <div className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.15em]">Years Excellence</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <Target className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl leading-none mb-1 tracking-tight">1000+</div>
                <div className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.15em]">Projects Delivered</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <Droplets className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl leading-none mb-1 tracking-tight">98%</div>
                <div className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.15em]">Success Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-8">
              <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                <ThumbsUp className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl leading-none mb-1 tracking-tight">100%</div>
                <div className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.15em]">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

