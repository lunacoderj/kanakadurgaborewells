import { Star, Quote } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client Reviews | Kanakadurga Borewells",
  description: "See what our clients have to say about our borewell services.",
};

export default function ReviewsPage() {
  const contentItems = [
    {
      id: 1,
      text: "Excellent service! They completed the borewell drilling in our apartment complex very professionally. The team was punctual and left the site clean.",
      author: "Rajesh Kumar",
      location: "Visakhapatnam",
      rating: 5,
      date: "March 12, 2024",
      type: "review"
    },
    {
      id: 'img1',
      type: "image",
      src: "/images/services/agricultural-borewells.jpg",
      alt: "Crystal clear water gushing from newly drilled borewell"
    },
    {
      id: 2,
      text: "Very impressed with their advanced machinery. They found water at a good depth where others had failed. Highly recommend Kanakadurga Borewells.",
      author: "Srinivas Rao",
      location: "Anakapalle",
      rating: 5,
      date: "April 05, 2024",
      type: "review"
    },
    {
      id: 3,
      text: "Quick response and transparent pricing. The pump installation was done perfectly. We haven't faced any water issues since.",
      author: "Lakshmi Narayana",
      location: "Bheemili",
      rating: 5,
      date: "May 18, 2024",
      type: "review"
    },
    {
      id: 'img2',
      type: "image",
      src: "/images/services/borewell-drilling.jpg",
      alt: "Happy farmer in lush green field after successful borewell installation"
    },
    {
      id: 4,
      text: "Best borewell service in the region. We hired them for our 10-acre farm, and they delivered exactly as promised.",
      author: "Venkata Reddy",
      location: "Vizianagaram",
      rating: 5,
      date: "June 02, 2024",
      type: "review"
    },
    {
      id: 5,
      text: "Professional, knowledgeable, and reliable. The cleaning service restored our old borewell's yield significantly.",
      author: "Praveen Varma",
      location: "Gajuwaka",
      rating: 4,
      date: "January 22, 2024",
      type: "review"
    },
    {
      id: 'img3',
      type: "image",
      src: "/images/projects/proj1.png",
      alt: "Heavy duty machinery at sunset"
    },
    {
      id: 6,
      text: "They are the real experts. After 3 failed attempts by local drillers, Kanakadurga's geologists pinpointed the exact spot and we hit high-yield water.",
      author: "Suresh Babu",
      location: "Madhurawada",
      rating: 5,
      date: "July 11, 2024",
      type: "review"
    },
    {
      id: 7,
      text: "Outstanding customer service and post-installation support. They explained everything clearly and gave a solid warranty.",
      author: "Ramana Murthy",
      location: "Pendurthi",
      rating: 5,
      date: "August 29, 2024",
      type: "review"
    },
    {
      id: 'img4',
      type: "image",
      src: "/images/projects/proj2.png",
      alt: "Water splash"
    },
    {
      id: 8,
      text: "Their camera inspection service is top-notch. Identified the blockage in our existing borewell instantly and cleared it. Saved us from drilling a new one!",
      author: "Kiran Reddy",
      location: "Srikakulam",
      rating: 5,
      date: "October 14, 2024",
      type: "review"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#0a192f]">
      {/* Header Section */}
      <div className="bg-[#0b1120] py-20 text-center text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0b1120]/0 to-[#0b1120]/0 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Stories of <span className="text-yellow-400">Trust</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Hear directly from thousands of satisfied homeowners, farmers, and businesses across Andhra Pradesh who chose Kanakadurga Borewells.
          </p>
        </div>
      </div>

      {/* Masonry Grid Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {contentItems.map((item) => {
            if (item.type === 'review') {
              return (
                <div 
                  key={item.id} 
                  className="break-inside-avoid bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-colors duration-300 p-8 rounded-3xl group relative overflow-hidden"
                >
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:text-blue-500/10 transition-colors duration-500" />
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.date}</span>
                  </div>
                  
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 relative z-10">
                    "{item.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20">
                      {item.author?.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg tracking-wide">{item.author}</h4>
                      <p className="text-sm text-yellow-500 font-medium">{item.location}</p>
                    </div>
                  </div>
                </div>
              );
            }

            if (item.type === 'image') {
              return (
                <div key={item.id} className="break-inside-avoid rounded-3xl overflow-hidden relative group aspect-[4/5] shadow-2xl">
                  <Image 
                    src={item.src!} 
                    alt={item.alt!} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              );
            }

            if (item.type === 'video') {
              return (
                <div key={item.id} className="break-inside-avoid rounded-3xl overflow-hidden relative group shadow-2xl aspect-[4/5]">
                  <video 
                    src={item.src!} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
