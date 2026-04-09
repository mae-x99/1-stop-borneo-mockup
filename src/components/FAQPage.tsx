import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can we travel from Sandakan back to KK, and what is the cost of a private ride for four people?",
      a: "Travel options include express bus (approx. 6-7 hours) or domestic flight (45 mins). Private rides for four people typically range from RM 400-600 depending on the vehicle type and season."
    },
    {
      q: "How can I book ferry tickets online from Tawau to Tarakan or Nunukan?",
      a: "Ferry tickets can be booked through official port agents or local travel platforms. Ensure you have a valid passport and fulfill the visa requirements for Indonesia/Malaysia before booking."
    },
    {
      q: "What public transport options are available from Sabah to Sarawak?",
      a: "The most common public transport is the long-distance bus service from Kota Kinabalu to Kuching, which passes through Brunei. Alternatively, MASwings provides regional flights connecting major towns."
    },
    {
      q: "I plan to travel by bus from KK to Kuching via BSB. What documents do I need?",
      a: "You will need a valid passport with at least 6 months validity. Brunei immigration requires proof of entry and exit (tickets). It is possible to buy separate tickets, but having them pre-booked is recommended for smoother border crossing."
    }
  ];

  return (
    <div className="bg-[#fafcfb] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1A4731 0, #1A4731 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6"
            >
              Help Center
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-brand-header"
            >
              Frequently Asked Questions
            </motion.h1>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                key={i}
                className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${
                  activeFaq === i ? 'border-brand-highlight shadow-xl' : 'border-brand-header/5'
                }`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className="font-serif text-xl pr-8 text-brand-header">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    activeFaq === i ? 'bg-brand-highlight border-brand-highlight text-white rotate-180' : 'border-brand-header/10 text-brand-header'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-brand-header/60 leading-relaxed font-light border-t border-brand-header/5 pt-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-brand-header/60 mb-6">Still have questions? We're here to help.</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-header text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-highlight transition-colors group">
              CONTACT US <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
