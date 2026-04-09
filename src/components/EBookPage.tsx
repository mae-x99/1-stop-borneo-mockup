import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export function EBookPage() {
  return (
    <main className="py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column - Image/Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5 max-w-sm mx-auto w-full"
          >
            <div className="absolute inset-0 bg-brand-highlight/10 rounded-[2.5rem] -rotate-6 scale-105 transform origin-bottom-left transition-transform duration-500 hover:rotate-0" />
            <div className="relative bg-white p-6 rounded-[2rem] shadow-2xl border border-brand-header/5 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-highlight/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150" />
              <img 
                src="https://picsum.photos/seed/borneo-book/800/1000" 
                alt="Borneo Guidebook Cover" 
                className="w-full h-auto rounded-xl shadow-md object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 right-8 bg-white p-3 rounded-full shadow-xl text-brand-highlight animate-bounce">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 lg:col-span-7"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-brand-highlight/10 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
                Free Download
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-brand-header">
                BORNEO, 180+ DESTINATIONS GUIDE
              </h1>
              <p className="text-lg text-brand-highlight font-light italic">
                Nature Travel GUIDEBOOK: Covering Sabah, Sarawak, Kalimantan, Labuan & Brunei Darussalam
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-brand-header/10">
              <h2 className="text-2xl font-serif text-brand-header">What's So Special About This Book?</h2>
              
              <div className="space-y-6 text-brand-header/70 leading-relaxed font-light">
                <p>
                  1StopBorneo Wildlife have been blessed to have been to all these places and many others for our scientific research operations and travel purposes.
                </p>
                <p>
                  This book is a first-hand-experience from the local enthusiasts and adventurers. We know Borneo inside and out and we share our insights. We hope you will both enjoy and benefit from this book.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-6">
              <a 
                href="https://1stopborneoguide.com/stg7x92b/book/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-brand-highlight text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-brand-header transition-all shadow-xl shadow-brand-highlight/20 flex items-center gap-3 group"
              >
                VIEW BOOK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
