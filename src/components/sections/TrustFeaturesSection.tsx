'use client';

import { Settings, Users, Clock, Globe } from 'lucide-react';

export const TrustFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b1120]">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Side */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              WHY THOUSANDS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                TRUST US
              </span>
            </h2>
            <h3 className="text-lg md:text-xl font-bold text-gray-300 mb-6 uppercase tracking-wider">
              Experience. Technology. Commitment.
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium">
              We bring cutting-edge technology and decades of expertise to every project. Our commitment to excellence ensures that we deliver reliable, high-yield water solutions tailored to your specific needs, on time and within budget.
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Feature 1 */}
            <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                <Settings className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Advanced Machinery</h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                State-of-the-art sensor-guided drilling rigs for precision and maximum yield extraction.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/20">
                <Users className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Skilled Manpower</h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Expert geologists, hydro-engineers, and highly experienced drilling professionals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                <Clock className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">On-Time Delivery</h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Strict adherence to project timelines and unwavering commitments to our clients.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 hover:-translate-y-2 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                <Globe className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">Pan India Services</h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                Serving residential, commercial, and industrial clients nationwide with excellence.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
