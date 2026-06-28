'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Phone, User, MapPin, ChevronDown, Send, Zap, ShieldCheck, Clock } from 'lucide-react';

export const CtaSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: "New Quote Request (CTA)"
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsSubmitting(false);
        }, 3000);
      } else {
        console.error("Failed to submit form");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-32 bg-[#020617] text-white overflow-hidden" id="contact">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Animated Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 mb-6 text-sm font-bold text-cyan-400 tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <Zap className="w-4 h-4 fill-cyan-400" />
                INITIATE CONTACT
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Ready to start your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  drilling project?
                </span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Connect with our command center. Request a free estimate today and our technical experts will deploy a solution tailored to your exact geological requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Guaranteed", desc: "No hidden costs, full transparency" },
                { icon: Clock, title: "24/7 Deployment", desc: "Rapid response teams on standby" }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-5 rounded-2xl flex gap-4 items-start"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100">{feature.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form - Futuristic Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ perspective: 1000 }}
            className="relative w-full max-w-md mx-auto lg:ml-auto"
          >
            {/* Decorative outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 rounded-[2rem] blur-xl opacity-30 animate-pulse" />
            
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2rem] shadow-2xl overflow-hidden">
              {/* Internal top highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="py-20 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                      <Send className="text-green-400 w-10 h-10 ml-1" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Transmission<br/>Successful</h3>
                    <p className="text-slate-400">Our specialists will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-white mb-2">Secure a Quote</h3>
                      <p className="text-slate-400 text-sm">Enter your project parameters below.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input 
                          name="name"
                          type="text" 
                          placeholder="Commandant Name" 
                          className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                          required
                        />
                      </div>

                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input 
                          name="phone"
                          type="tel" 
                          placeholder="Secure Comm Link (Phone)" 
                          className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                          required
                        />
                      </div>

                      <div className="relative group">
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none group-focus-within:text-cyan-400 transition-colors" />
                        <select 
                          name="service"
                          className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-4 pr-12 py-4 appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-slate-900 text-slate-500">Select Operation Type</option>
                          <option value="drilling" className="bg-slate-900">Borewell Drilling</option>
                          <option value="cleaning" className="bg-slate-900">Borewell Cleaning</option>
                          <option value="repair" className="bg-slate-900">Borewell Repair</option>
                          <option value="pump" className="bg-slate-900">Pump Installation</option>
                        </select>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg py-4 rounded-xl mt-4 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-widest disabled:opacity-70"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>TRANSMITTING...</span>
                        </div>
                      ) : (
                        "INITIALIZE QUOTE"
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
