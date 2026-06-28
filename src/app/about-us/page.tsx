'use client';

import { CheckCircle, Shield, Droplets, Target, Users, Award, Play, History, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const values = [
    {
      title: "Uncompromising Quality",
      description: "We use only the highest-grade materials and state-of-the-art hydraulic rigs for every project.",
      icon: <Award className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Scientific Approach",
      description: "Advanced hydro-geological surveys ensure we find the best water sources with pinpoint accuracy.",
      icon: <Target className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Safety First",
      description: "Strict adherence to safety protocols protects our crew, your property, and the environment.",
      icon: <Shield className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Customer Centric",
      description: "Transparent pricing, clear communication, and 100% satisfaction guaranteed.",
      icon: <Users className="w-6 h-6 text-yellow-400" />
    }
  ];

  const milestones = [
    { year: "2009", title: "Inception", desc: "Founded with a single rig and a vision for reliable water access." },
    { year: "2015", title: "Fleet Expansion", desc: "Acquired advanced high-pressure hydraulic rigs for deep drilling." },
    { year: "2019", title: "Industrial Pivot", desc: "Began servicing large-scale industrial and agricultural projects." },
    { year: "2024", title: "Industry Leaders", desc: "Recognized as a premier borewell engineering firm in the region." }
  ];

  return (
    <div className="bg-[#050B14] min-h-screen text-white pt-24 pb-32 overflow-hidden">
      {/* Hero Section with Video */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center mb-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
          >
            <source src="/videos/hero_combined.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-[#050B14]/90"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05] bg-repeat bg-[length:40px_40px]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center mt-12">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest">
              Who We Are
            </h2>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
            Pioneering Water <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">Solutions Since 2009</span>
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Content Side */}
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              More than a decade of excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">borewell engineering.</span>
            </h3>
            
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Kanakadurga Borewells & Enterprises was founded with a definitive mission: to provide reliable, efficient, and scientifically-backed ground water solutions. Whether it is a single household, a sprawling agricultural farm, or a massive industrial complex, water is life, and we take our responsibility to deliver it very seriously.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Over the past 15 years, we have grown from a local drilling contractor into one of India's most highly respected borewell engineering firms. We are equipped with state-of-the-art, high-penetration hydraulic rigs and a team of seasoned hydro-geological experts. We don't just drill holes in the ground; we engineer sustainable water extraction systems.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm group hover:border-yellow-500/50 transition-colors">
                <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform origin-left drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Years of Experience</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm group hover:border-yellow-500/50 transition-colors">
                <div className="text-5xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform origin-left drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">10k+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Successful Projects</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Side */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-10 hover:border-yellow-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                <Target className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Our Mission</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                To deliver sustainable, high-yield water extraction solutions through advanced engineering, scientific precision, and unwavering commitment to safety and environmental responsibility.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-10 hover:border-blue-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Our Vision</h4>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the undisputed leader in ground water engineering across India, pioneering new technologies and setting the industry standard for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="mb-40">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-6">See Us In Action</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Witness the power, precision, and scale of our operations.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto group cursor-pointer" onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-video border border-white/20 shadow-2xl bg-black">
              <video 
                autoPlay={isVideoPlaying} 
                loop 
                muted={!isVideoPlaying} 
                playsInline 
                controls={isVideoPlaying}
                className={`w-full h-full object-cover transition-transform duration-1000 ${isVideoPlaying ? 'scale-100' : 'scale-105 group-hover:scale-100'}`}
              >
                <source src="/videos/hero_combined.mp4" type="video/mp4" />
              </video>
              
              {!isVideoPlaying && (
                <>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-50 rounded-full animate-pulse"></div>
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-yellow-400/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400/20 transition-all duration-500">
                        <Play className="w-10 h-10 text-yellow-400 ml-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-6">Our Core Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The principles that guide every single project we undertake.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="w-16 h-16 rounded-2xl bg-[#050B14] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300 shadow-lg relative">
                  <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Journey */}
        <div className="mb-32">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <History className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl md:text-4xl font-black">Our Journey</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none select-none">
                      {milestone.year}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                        <div className="h-px bg-gradient-to-r from-yellow-400/50 to-transparent flex-1"></div>
                      </div>
                      <div className="text-yellow-400 font-bold mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{milestone.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
