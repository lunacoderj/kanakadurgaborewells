'use client';

import React, { useRef } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = window.innerWidth < 640 ? window.innerWidth * 0.85 : 350 + 24; // Card width + gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      id: 1,
      text: "Excellent service! They completed the borewell drilling in our apartment complex very professionally. The team was punctual and left the site clean.",
      author: "Rajesh Kumar",
      location: "Visakhapatnam",
      rating: 5,
    },
    {
      id: 2,
      text: "Very impressed with their advanced machinery. They found water at a good depth where others had failed. Highly recommend Kanakadurga Borewells.",
      author: "Srinivas Rao",
      location: "Anakapalle",
      rating: 5,
    },
    {
      id: 3,
      text: "Quick response and transparent pricing. The pump installation was done perfectly. We haven't faced any water issues since.",
      author: "Lakshmi Narayana",
      location: "Bheemili",
      rating: 5,
    },
    {
      id: 4,
      text: "Best borewell service in the region. We hired them for our 10-acre farm, and they delivered exactly as promised.",
      author: "Venkata Reddy",
      location: "Vizianagaram",
      rating: 5,
    },
    {
      id: 5,
      text: "Professional, knowledgeable, and reliable. The cleaning service restored our old borewell's yield significantly.",
      author: "Praveen Varma",
      location: "Gajuwaka",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-[#0a192f] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left: Reviews Carousel */}
          <div className="w-full lg:w-2/3 overflow-hidden">
            <h2 className="text-sm md:text-base font-bold text-yellow-500 mb-2 uppercase tracking-widest">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <h3 className="text-3xl md:text-5xl font-black">
                Trusted by 1000+ Happy Clients
              </h3>
            </div>
            
            <div className="relative group w-full">
              {/* Navigation Controls (Left/Right Centered with Glow) */}
              <button 
                onClick={() => scroll('left')}
                aria-label="Scroll left to see previous reviews"
                className="absolute left-2 md:left-4 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 border border-yellow-500/30 backdrop-blur-md flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 -ml-1" />
              </button>
              <button 
                onClick={() => scroll('right')}
                aria-label="Scroll right to see more reviews"
                className="absolute right-2 md:right-4 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 border border-yellow-500/30 backdrop-blur-md flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 ml-1" />
              </button>

              {/* Horizontal Scrollable Container */}
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar px-2" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {reviews.map((review) => (
                  <div 
                    key={review.id} 
                    className="snap-start shrink-0 w-[85vw] sm:w-[350px] bg-white text-gray-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic leading-relaxed">
                        "{review.text}"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-lg">{review.author}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Google Reviews Summary */}
          <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-center">
              <h4 className="text-2xl font-bold mb-4">Google Reviews</h4>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-5xl font-black text-yellow-400">5.0</span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 font-medium">Based on 250+ reviews</p>
              
              <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg mb-8 font-medium">
                We are available for projects across India. Contact us for the best borewell solutions.
              </p>
              
              <Link 
                href="/reviews"
                className="inline-flex items-center justify-center w-full gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-colors shadow-[0_5px_15px_rgba(250,204,21,0.3)]"
              >
                VIEW ALL REVIEWS
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};
