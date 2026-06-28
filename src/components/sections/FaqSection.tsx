'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What areas do you provide borewell services in?',
    answer: 'We provide comprehensive borewell drilling and maintenance services across all of India. Our fleet is equipped to handle projects in diverse geographical locations.',
  },
  {
    question: 'How long does it typically take to drill a new borewell?',
    answer: 'The duration depends on the required depth and geological conditions. On average, standard residential or agricultural borewells can be drilled within 1-2 days, while deep industrial wells might take a bit longer.',
  },
  {
    question: 'Do you offer groundwater surveying before drilling?',
    answer: 'Yes, we conduct scientific groundwater exploration using advanced geological and hydrological survey techniques to identify the most promising spots for high water yield before drilling.',
  },
  {
    question: 'Can you retrieve a motor or pump stuck in an old borewell?',
    answer: 'Absolutely. We specialize in stuck motor retrieval. We have the necessary specialized tools and heavy-duty equipment to safely remove stuck pumps and pipes from existing borewells.',
  },
  {
    question: 'How often should a borewell be cleaned or flushed?',
    answer: 'We generally recommend cleaning or flushing a borewell every 3 to 5 years, or if you notice a drop in water yield, muddy water, or foul smell. Regular maintenance extends the life of the borewell.',
  },
  {
    question: 'How is the cost of drilling a borewell calculated?',
    answer: 'The cost is primarily determined by the depth of drilling (per foot basis), the type of soil/rock, and the amount/type of casing pipe required (PVC or MS). Contact us for a customized quote based on your location.',
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 relative overflow-hidden bg-[#020617] border-t border-cyan-900/30">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
              <HelpCircle className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Find answers to common questions about our borewell drilling, maintenance, and repair services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-cyan-900/10 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                    : 'bg-[#0f172a]/50 border-cyan-900/30 hover:border-cyan-500/30 hover:bg-[#0f172a]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? 'text-cyan-400' : 'text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-800 text-gray-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
