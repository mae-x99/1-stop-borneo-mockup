import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-light min-h-screen py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-moss/5 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] rounded-full bg-brand-highlight/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-brand-header mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-header/60 max-w-2xl mx-auto text-lg"
          >
            Have questions about our conservation trips, the E-Book, or want to collaborate? 
            Send us a message and our team will get back to you shortly.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-header/5 flex flex-col"
          >
            <h3 className="text-3xl font-serif text-brand-header mb-8">Send an Inquiry</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-moss/10 border border-brand-moss/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center flex-grow"
              >
                <div className="w-16 h-16 bg-brand-moss/20 rounded-full flex items-center justify-center mb-4 text-brand-moss">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-brand-header mb-2">Message Sent!</h4>
                <p className="text-brand-header/70">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/60 ml-4">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-brand-light/50 border border-brand-header/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand-highlight focus:bg-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/60 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-brand-light/50 border border-brand-header/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand-highlight focus:bg-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/60 ml-4">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-brand-light/50 border border-brand-header/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-brand-highlight focus:bg-white transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2 flex-grow flex flex-col">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/60 ml-4 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required
                    className="w-full flex-grow bg-brand-light/50 border border-brand-header/10 rounded-[2rem] px-6 py-4 text-sm focus:outline-none focus:border-brand-highlight focus:bg-white transition-all resize-none min-h-[200px]"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-header text-white rounded-full py-4 font-bold text-xs tracking-[0.2em] hover:bg-brand-highlight transition-colors flex items-center justify-center gap-2 group mt-auto"
                >
                  SEND MESSAGE
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Find Us / Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-[#1a4731] via-[#2a6647] to-[#0d291b] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-[#1a4731]/40 border border-white/10 relative overflow-hidden group/card">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover/card:scale-110 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-600/20 rounded-full blur-3xl -ml-10 -mb-10 transition-transform duration-700 group-hover/card:scale-110 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-10 text-white drop-shadow-md tracking-wide">Contact Information</h3>
                
                <div className="space-y-8">
                  <a href="mailto:info@1stopborneo.com" className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#1a4731]" />
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">Email Us</div>
                      <div className="text-base font-medium">info@1stopborneo.com</div>
                    </div>
                  </a>
                  
                  <a href="tel:+60123456789" className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#1a4731]" />
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">Call Us</div>
                      <div className="text-base font-medium">+60 12-345 6789</div>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 mt-1">
                      <MapPin className="w-5 h-5 text-[#1a4731]" />
                    </div>
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-1">Location</div>
                      <div className="text-base font-medium leading-relaxed">
                        1StopBorneo Wildlife, Tawau, Sabah, Malaysia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-brand-header/5">
              <h3 className="text-2xl font-serif text-brand-header mb-2">Find Us Online</h3>
              <p className="text-brand-header/60 text-sm mb-8">Follow our journey and stay updated with our latest conservation efforts.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-brand-light/50 hover:bg-brand-header hover:text-white transition-all group border border-brand-header/5">
                  <Facebook className="w-8 h-8 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Facebook</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-brand-light/50 hover:bg-brand-header hover:text-white transition-all group border border-brand-header/5">
                  <Instagram className="w-8 h-8 text-[#E4405F] group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
