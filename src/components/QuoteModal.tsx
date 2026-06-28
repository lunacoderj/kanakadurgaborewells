'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap } from 'lucide-react';
import { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const whatsappNumber = "917998998889"; // Adjust this to your actual WhatsApp number

    const text = `*New Quote Request*
*Name:* ${name}
*Phone:* ${phone}
*Service Required:* ${service || 'Not specified'}
*Details:* ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Show success animation briefly before redirecting
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onClose();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0b1120]/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] border border-blue-50"
            >
              {/* Premium Top Glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400" />
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                    <Zap size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Fast Response</span>
                  </div>
                  <h2 className="text-3xl font-black text-blue-950 mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-slate-500">
                    Get an instant estimate for your drilling and borewell needs.
                  </p>
                </div>

                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Send className="text-green-500 w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Sent!</h3>
                    <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all outline-none text-slate-800"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all outline-none text-slate-800"
                          placeholder="+91"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Service Type</label>
                      <select name="service" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all outline-none text-slate-800 appearance-none">
                        <option value="">Select a service...</option>
                        <option value="drilling">Borewell Drilling</option>
                        <option value="cleaning">Borewell Cleaning</option>
                        <option value="pump">Pump Installation</option>
                        <option value="other">Other Service</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Project Details</label>
                      <textarea 
                        required
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all outline-none text-slate-800 resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          GET ESTIMATE NOW
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
