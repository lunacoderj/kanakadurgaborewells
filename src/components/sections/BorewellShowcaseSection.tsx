'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Zap } from 'lucide-react';

export const BorewellShowcaseSection = () => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6 text-sm font-bold text-blue-600 tracking-widest uppercase"
          >
            <Zap className="w-4 h-4" />
            Our Fleet
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0a1425] mb-6 tracking-tight"
          >
            High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Borewell Rigs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Equipped with state-of-the-art sensory technology and extreme-depth drilling capabilities, our heavy machinery is ready for any terrain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Rig 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-[2.5rem] overflow-hidden bg-[#0a1425] shadow-2xl border border-gray-200"
          >
            {/* Skeleton Loading Overlay */}
            {!img1Loaded && (
              <div className="absolute inset-0 bg-[#0a1425] z-0 flex flex-col justify-end p-6 md:p-8">
                <div className="absolute inset-0 bg-slate-800/50 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="h-6 w-24 bg-white/10 rounded-full mb-4 animate-pulse"></div>
                  <div className="h-8 w-64 bg-white/10 rounded-lg mb-3 animate-pulse"></div>
                  <div className="h-4 w-full max-w-md bg-white/10 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-4 w-2/3 max-w-xs bg-white/10 rounded-lg animate-pulse"></div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1425] via-[#0a1425]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <Image 
              src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/borewell_rig_1.png" 
              alt="Kanakadurga High-Performance Rig" 
              width={1200}
              height={800}
              onLoad={() => setImg1Loaded(true)}
              className={`w-full h-auto object-contain group-hover:scale-105 transition-all duration-1000 ease-in-out relative z-0 ${img1Loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
            />
            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ${img1Loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3 shadow-lg">Model X-Pro</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 drop-shadow-md">Heavy Duty Sensor Rig</h3>
              <p className="text-gray-200 font-medium drop-shadow-sm text-sm md:text-base">Capable of penetrating rocky terrain with extreme precision and high-speed deployment.</p>
            </div>
          </motion.div>

          {/* Rig 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative group rounded-[2.5rem] overflow-hidden bg-[#0a1425] shadow-2xl border border-gray-200"
          >
            {/* Skeleton Loading Overlay */}
            {!img2Loaded && (
              <div className="absolute inset-0 bg-[#0a1425] z-0 flex flex-col justify-end p-6 md:p-8">
                <div className="absolute inset-0 bg-slate-800/50 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="h-6 w-24 bg-white/10 rounded-full mb-4 animate-pulse"></div>
                  <div className="h-8 w-64 bg-white/10 rounded-lg mb-3 animate-pulse"></div>
                  <div className="h-4 w-full max-w-md bg-white/10 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-4 w-2/3 max-w-xs bg-white/10 rounded-lg animate-pulse"></div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1425] via-[#0a1425]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            <Image 
              src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/borewell_rig_2.png" 
              alt="Kanakadurga Precision Rig" 
              width={1200}
              height={800}
              onLoad={() => setImg2Loaded(true)}
              className={`w-full h-auto object-contain group-hover:scale-105 transition-all duration-1000 ease-in-out relative z-0 ${img2Loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`} 
            />
            <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ${img2Loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3 shadow-lg">Advanced Fleet</div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 drop-shadow-md">Ultra-Fast Deployment Unit</h3>
              <p className="text-gray-200 font-medium drop-shadow-sm text-sm md:text-base">Designed for immediate mobilization and rapid completion of large-scale operations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
