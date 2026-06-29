'use client';

import { motion } from 'framer-motion';
import { MapPin, Target, Crosshair, Radar } from 'lucide-react';
import { useState } from 'react';

export const ServiceAreasSection = () => {
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

  const locations = [
    { name: 'Visakhapatnam', type: 'hq', coords: { x: '55%', y: '65%' } },
    { name: 'Anakapalle', type: 'local', coords: { x: '54%', y: '67%' } },
    { name: 'Vizianagaram', type: 'local', coords: { x: '56%', y: '63%' } },
    { name: 'Srikakulam', type: 'local', coords: { x: '58%', y: '60%' } },
    { name: 'Kakinada', type: 'local', coords: { x: '53%', y: '69%' } },
    { name: 'Rajahmundry', type: 'local', coords: { x: '51%', y: '68%' } },
    { name: 'Vijayawada', type: 'local', coords: { x: '48%', y: '72%' } },
    { name: 'Guntur', type: 'local', coords: { x: '47%', y: '74%' } },
    { name: 'Hyderabad', type: 'hub', coords: { x: '40%', y: '65%' } },
    { name: 'Telangana State', type: 'region', coords: { x: '42%', y: '60%' } },
    { name: 'Odisha State', type: 'region', coords: { x: '60%', y: '50%' } },
    { name: 'Chhattisgarh State', type: 'region', coords: { x: '50%', y: '45%' } },
    { name: 'All Over Andhra Pradesh', type: 'region', coords: { x: '50%', y: '75%' } },
    { name: 'Pan India Level Projects', type: 'national', coords: { x: '50%', y: '30%' } }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* High-tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content - Holographic Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-yellow-500/10 rounded-3xl blur-2xl -z-10" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Radar className="w-5 h-5 text-blue-600 animate-spin-slow" style={{ animationDuration: '4s' }} />
              <span className="text-sm font-bold text-blue-900 uppercase tracking-widest">Global Network</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
              Future-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Service Reach
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
              Equipped with next-generation mobilization technology, our rigs deploy instantly. From our high-tech command center in Visakhapatnam to remote pan-India sites, we monitor and execute with pinpoint precision.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {locations.map((loc, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredLoc(loc.name)}
                  onHoverEnd={() => setHoveredLoc(null)}
                  className="group relative overflow-hidden rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                  
                  <div className="p-4 flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      hoveredLoc === loc.name ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {loc.type === 'hq' ? <Target className="w-5 h-5" /> : 
                       loc.type === 'national' ? <Radar className="w-5 h-5" /> :
                       <MapPin className="w-5 h-5" />}
                    </div>
                    <span className="text-gray-800 font-bold group-hover:text-blue-950 transition-colors">
                      {loc.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image/Graphic - Futuristic Radar/Map Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative min-h-[600px] flex items-center justify-center"
          >
            {/* Holographic Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[40px] border border-white/40 shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
              
              {/* Radar Circles */}
              <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-500/10" />
              <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/20" />
              <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/30 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-500/40" />
              
              {/* Radar Sweep line */}
              <div className="absolute w-1/2 h-1 bg-gradient-to-r from-transparent to-blue-500/50 origin-left top-1/2 left-1/2 animate-[spin_4s_linear_infinite] shadow-[0_0_30px_rgba(59,130,246,0.8)]" />

              {/* Map & Nodes Container */}
              <div className="relative w-[85%] max-w-[500px] aspect-square flex items-center justify-center">
                {/* Map Base Image */}
                <img 
                  src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/india-map-graphic.png" 
                  alt="India Map"
                  className="absolute inset-0 w-full h-full object-contain opacity-40 mix-blend-multiply drop-shadow-2xl filter contrast-125 hue-rotate-15"
                />

                {/* Data Nodes */}
                {locations.map((loc, i) => {
                  const isHovered = hoveredLoc === loc.name;
                  const isHQ = loc.type === 'hq';
                  
                  return (
                    <motion.div
                      key={`node-${i}`}
                      className="absolute z-20"
                      style={{ left: loc.coords.x, top: loc.coords.y }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                    >
                      {/* Node Core */}
                      <div className="relative -translate-x-1/2 -translate-y-1/2">
                        {isHQ && (
                          <div className="absolute -inset-4 bg-yellow-400/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                        )}
                        
                        <div className={`relative w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer transition-transform duration-300 ${
                          isHovered ? 'scale-150 bg-yellow-400' : 
                          isHQ ? 'bg-yellow-500 scale-125' : 'bg-blue-500 hover:scale-125'
                        }`}
                        onMouseEnter={() => setHoveredLoc(loc.name)}
                        onMouseLeave={() => setHoveredLoc(null)}
                        />
                        
                        {/* Node Label Tooltip-style */}
                        <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md shadow-lg border border-slate-100 font-bold text-sm pointer-events-none transition-all duration-300 ${
                          isHovered || isHQ ? 'opacity-100 transform-none' : 'opacity-0 translate-y-2'
                        }`}>
                          <span className={isHQ ? 'text-yellow-600' : 'text-blue-600'}>{loc.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Tech Data Panels */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-xl z-30"
              >
                <div className="text-xs font-mono text-gray-400 mb-1">SYSTEM STATUS</div>
                <div className="flex items-center gap-2 text-green-500 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  ALL RIGS ONLINE
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-8 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-xl z-30 flex items-center gap-4"
              >
                <Crosshair className="w-8 h-8 text-blue-500 animate-[spin_10s_linear_infinite]" />
                <div>
                  <div className="text-xs font-mono text-gray-400">GPS TRACKING</div>
                  <div className="font-bold text-blue-950">Active Targeting</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
