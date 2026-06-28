'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MapPin, Droplets, ArrowDownToLine, Phone } from 'lucide-react';
import { projectsData } from '@/lib/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-950 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white rounded-full font-bold hover:bg-blue-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Pre-fill WhatsApp message
  const whatsappMessage = encodeURIComponent(`Hello, I saw your project '${project.title}' on your website and I am interested in your services.`);
  const whatsappUrl = `https://wa.me/917998998889?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen relative bg-blue-950 selection:bg-yellow-500/30">
      {/* Full-Screen Background Image with Premium Gradient Overlay */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/70 to-blue-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-24 px-6 min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto w-full">
          
          {/* Back Button */}
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 group transition-colors"
          >
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-sm transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium tracking-wide">Back to Portfolio</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Title & Description */}
            <div className="lg:col-span-7">
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-md mb-6">
                <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase">
                  {project.category} Project
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mb-10 font-light">
                {project.description}
              </p>

              {/* Action Button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-blue-950 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] group"
              >
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                Get Service Now
              </a>
            </div>

            {/* Right Column: Glassmorphic Info Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  Project Details
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-wider">Location</div>
                      <div className="text-white font-bold text-lg">{project.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300">
                      <ArrowDownToLine className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-wider">Depth Reached</div>
                      <div className="text-white font-bold text-lg">{project.depth}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium mb-1 uppercase tracking-wider">Water Yield</div>
                      <div className="text-white font-bold text-lg">{project.yield}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-950/40 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-white font-bold mb-4">Key Highlights</h4>
                  <ul className="space-y-3">
                    {project.infoPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-blue-100">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
