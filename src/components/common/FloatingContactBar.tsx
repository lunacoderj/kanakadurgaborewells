'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { QuoteModal } from '../QuoteModal';
import { motion } from 'framer-motion';

export const FloatingContactBar = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  
  const contacts = [
    {
      id: 'call',
      icon: <Phone size={22} />,
      label: 'Call Now',
      href: 'tel:+919876543210',
      color: 'from-amber-400 to-orange-500',
      glowColor: 'rgba(249, 115, 22, 0.4)', // orange-500
      borderColor: 'border-orange-500/50'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle size={22} />,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210?text=Hi%20Kanakadurga,%20I%20need%20borewell%20services.',
      color: 'from-emerald-400 to-green-600',
      glowColor: 'rgba(16, 185, 129, 0.4)', // emerald-500
      borderColor: 'border-emerald-500/50',
      target: '_blank'
    },
    {
      id: 'quote',
      icon: <FileText size={22} />,
      label: 'Get Quote',
      action: () => setQuoteModalOpen(true),
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6, 182, 212, 0.4)', // cyan-500
      borderColor: 'border-cyan-500/50'
    }
  ];

  // Floating animation variants
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: i * 0.4 // Stagger the floating effect
      }
    })
  };

  return (
    <>
      {/* Desktop Floating Sidebar - Expandable on Hover */}
      <div className="hidden md:flex flex-col gap-4 fixed top-1/2 -translate-y-1/2 right-6 z-50">
        {contacts.map((contact, index) => {
          const content = (
            <motion.div 
              custom={index}
              variants={floatingVariants}
              initial="animate"
              animate="animate"
              whileHover={{ scale: 1.05, x: -10 }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative flex items-center h-14 bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10
                transition-all duration-500 ease-out rounded-full cursor-pointer
                w-14 hover:w-48 overflow-hidden
              `}
            >
              {/* Dynamic Glow via Inline Style for reliable rendering */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: contact.glowColor }}
              />

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className={`w-14 min-w-[56px] h-full flex items-center justify-center relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300`}>
                <div className="absolute inset-0 bg-white/5 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                <motion.div 
                  className="group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                >
                  {contact.icon}
                </motion.div>
              </div>
              
              {/* Text Container */}
              <div className="whitespace-nowrap font-bold text-white tracking-wide opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-10 relative">
                {contact.label}
              </div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 border ${contact.borderColor} rounded-full opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500`} />
            </motion.div>
          );

          if (contact.href) {
            return (
              <a 
                key={contact.id} 
                href={contact.href} 
                target={contact.target}
                rel={contact.target ? "noopener noreferrer" : undefined}
                className="outline-none block"
              >
                {content}
              </a>
            );
          }

          return (
            <button key={contact.id} onClick={contact.action} className="outline-none block w-full text-left">
              {content}
            </button>
          );
        })}
      </div>

      {/* Mobile Floating Pill (Replaces the basic bottom bar) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-[#0a0f1c]/90 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex justify-between items-center shadow-2xl relative"
        >
          
          {contacts.map((contact, index) => {
            const isCenter = index === 1; // Middle button (WhatsApp)

            const content = (
              <div className="flex flex-col items-center justify-center group relative w-full h-full">
                {/* Center Button Glow */}
                {isCenter && (
                   <motion.div 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute inset-0 blur-xl rounded-full" 
                     style={{ backgroundColor: contact.glowColor }}
                   />
                )}
                
                <motion.div 
                  whileTap={{ scale: 0.9 }}
                  className={`
                    flex items-center justify-center rounded-full transition-all duration-300 relative z-10
                    ${isCenter 
                      ? `w-14 h-14 -translate-y-5 border-4 border-[#0a0f1c] bg-gradient-to-tr ${contact.color} shadow-[0_10px_25px_rgba(0,0,0,0.5)]` 
                      : 'w-10 h-10 bg-white/5'}
                  `}
                >
                  <motion.div 
                    animate={isCenter ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={isCenter ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
                    className={`${isCenter ? 'text-white' : 'text-cyan-400 group-hover:text-cyan-300'}`}
                  >
                    {React.cloneElement(contact.icon as React.ReactElement<any>, { size: isCenter ? 24 : 20 })}
                  </motion.div>
                </motion.div>
                
                {/* Text for non-center buttons */}
                {!isCenter && (
                  <span className={`text-[9px] font-bold tracking-wider text-gray-500 mt-1 uppercase absolute -bottom-4`}>
                    {contact.label.split(' ')[0]}
                  </span>
                )}
              </div>
            );

            if (contact.href) {
              return (
                <a 
                  key={contact.id} 
                  href={contact.href} 
                  target={contact.target}
                  rel={contact.target ? "noopener noreferrer" : undefined}
                  className="flex-1 flex justify-center items-center relative z-10"
                >
                  {content}
                </a>
              );
            }

            return (
              <button key={contact.id} onClick={contact.action} className="flex-1 flex justify-center items-center relative z-10">
                {content}
              </button>
            );
          })}
        </motion.div>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
