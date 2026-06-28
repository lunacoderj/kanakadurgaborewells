'use client';

import { useState } from 'react';
import { ShieldCheck, Clock, TrendingUp, Droplets, Medal, CheckCircle2 } from 'lucide-react';
import { ImageWithLoader } from '@/components/common/ImageWithLoader';

export const WhyChooseUsSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="py-24 bg-[#0a1425] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a1425] to-[#0a1425] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm md:text-base font-bold text-yellow-500 mb-3 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-yellow-500"></span>
            WHY CHOOSE US?
            <span className="w-8 h-[2px] bg-yellow-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            We Don't Just Drill, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">We Deliver Results.</span>
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Main Showcase (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://gf2wtazfdibnozca.public.blob.vercel-storage.com/why-choose-us-rig.jpg')", backgroundColor: "#1e293b" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1425] via-[#0a1425]/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-[#0a1425] px-4 py-2 rounded-full font-bold text-sm mb-4 tracking-wide shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                <Medal className="w-4 h-4" /> Established 2009
              </div>
              <h4 className="text-3xl font-black text-white mb-2">A Legacy of Excellence</h4>
              <p className="text-gray-300 font-medium">With over 15 years in the industry, we bring unmatched expertise, modern machinery, and a commitment to resolving your water needs efficiently.</p>
            </div>
          </div>

          {/* Stat 1 */}
          <div className="relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-center items-center text-center group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h5 className="text-4xl font-black text-white mb-2">1500+</h5>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Projects Completed</p>
          </div>

          {/* Stat 2 */}
          <div className="relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-center items-center text-center group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-8 h-8 text-yellow-400" />
            </div>
            <h5 className="text-4xl font-black text-white mb-2">100%</h5>
            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">Success Guarantee</p>
          </div>

            <div className="md:col-span-2 lg:col-span-2 relative rounded-3xl p-8 bg-gradient-to-br from-blue-900/40 to-transparent border border-blue-500/30 backdrop-blur-md flex flex-col justify-center overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              <h4 className="text-2xl font-bold text-white mb-6 relative z-10">Advanced Technology & Trained Manpower</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {['Modern Sensor Rigs', 'High-Pressure Compressors', 'Expert Geologists', 'Certified Operators'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique Logo Video Showcase */}
            <div className="md:col-span-3 lg:col-span-4 row-span-2 relative rounded-3xl p-1 group overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.15)] mt-4">
              {/* Animated glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 opacity-30 blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              
              {/* Main Video Container */}
              <div className="absolute inset-[2px] rounded-[1.4rem] overflow-hidden bg-[#080E17] z-10 flex items-center justify-center">
                 
                 {/* Cinematic Loading Animation */}
                 {!isVideoLoaded && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080E17] z-20">
                     <div className="relative flex items-center justify-center mb-6">
                       <div className="w-16 h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
                       <div className="absolute w-10 h-10 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
                       <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                     </div>
                     <p className="text-yellow-500/60 text-[10px] uppercase tracking-[0.3em] font-semibold animate-pulse">
                       Loading Brand
                     </p>
                   </div>
                 )}

                 <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover md:object-contain transition-all duration-1000 bg-black ${isVideoLoaded ? 'opacity-80 group-hover:scale-105 group-hover:opacity-100' : 'opacity-0'}`}
                  >
                    <source src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/logovideo.mp4" type="video/mp4" />
                 </video>
                 
                 {/* Aesthetic Overlays */}
                 <div className="absolute inset-0 bg-[url('https://gf2wtazfdibnozca.public.blob.vercel-storage.com/grid.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                 
                 {/* UI Elements overlay */}
                 <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <h4 className="text-3xl md:text-5xl font-black text-white mb-3 drop-shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">Kanakadurga Enterprises</h4>
                    <div className="w-16 h-1.5 bg-yellow-500 rounded-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 delay-300 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                 </div>

                 <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(250,204,21,1)]"></div>
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Premium Brand</span>
                 </div>
              </div>
            </div>

          </div>

        {/* Transparent Business Practices Grid */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Transparent & Professional</h4>
            <p className="text-gray-400">Clear quotations, proper billing, and professional documentation for every client.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/visitingcard.jpeg', label: 'Professional Contact' },
              { src: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/pomplet.jpeg', label: 'Detailed Services' },
              { src: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/quatation.jpeg', label: 'Clear Quotations' },
              { src: 'https://gf2wtazfdibnozca.public.blob.vercel-storage.com/bill.jpeg', label: 'Transparent Billing' }
            ].map((doc, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden group aspect-[3/4] border border-white/10 hover:border-yellow-500/50 transition-colors">
                <ImageWithLoader 
                  src={doc.src} 
                  alt={doc.label} 
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-white font-medium text-sm drop-shadow-md">{doc.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
