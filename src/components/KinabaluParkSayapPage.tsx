import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Clock, Calendar, Tent, Home, Phone, Mail, ChevronRight, CheckCircle2, Navigation, Coffee, Star, Sparkles, Map, Info, Compass, HeartHandshake, Sun
} from 'lucide-react';

export function KinabaluParkSayapPage() {
  const [activeItinerary, setActiveItinerary] = useState('3d2n');

  return (
    <div className="bg-[#f2f7f4] min-h-screen selection:bg-brand-highlight/20 selection:text-brand-header font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img 
            src="Kinabalu-Park-Sayap.jpg" 
            alt="Kinabalu Park Sayap" 
            className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_30s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <a href="#sabah" className="inline-flex items-center gap-2 text-white hover:text-white transition-all mb-10 text-xs font-bold tracking-[0.2em] uppercase group">
               <span className="w-8 h-px bg-white group-hover:bg-white group-hover:w-12 transition-all"></span>
               Back to Sabah Regions
            </a>
            <br />
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-block px-4 py-2 bg-brand-highlight text-[#091b12] text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-brand-highlight/20">
                Conservation Trip
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                <Clock className="w-3 h-3" />
                3-4 Days
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                <MapPin className="w-3 h-3" />
                Kota Belud
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
              Kinabalu Park <br/>
              <span className="italic text-brand-highlight pr-4">Sayap</span>
            </h1>
            <p className="text-white/80 text-xl md:text-xl font-light max-w-2xl leading-relaxed border-l-2 border-brand-highlight pl-6 py-2">
              Discover an off-the-beaten-path adventure hosted by a welcoming Dusun-ethnic family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Article Body */}
            <div className="prose prose-lg md:prose-xl max-w-none text-brand-header/80">
                <p className="text-2xl md:text-2xl leading-relaxed mb-8 font-serif text-brand-header">
                  Discover an off-the-beaten-path adventure at another location of Mount Kinabalu accessible through the charming town of Kota Belud, about three hours from Kota Kinabalu. Your stay will be hosted by a welcoming Dusun-ethnic family at a local homestay, offering a genuine cultural experience.
                </p>
                <p className="text-2xl md:text-2xl leading-relaxed mb-8 font-serif text-brand-header">
                  We will travel by 4x4 vehicle to explore the many trails on Kinabalu Park, where the true stars of the journey await—fascinating montane birds, frogs, and insects. This unique community-based tourism experience offers a closer connection to nature and the local way of life.
                </p>

                {/* Engaging Info Box */}
                <div className="my-16 relative">
                  <div className="absolute inset-0 bg-brand-header/5 rounded-[2rem] -rotate-1 scale-[1.01] transform-gpu transition-transform hover:rotate-0 hover:scale-100 duration-700 ease-out hidden md:block"></div>
                  <div className="bg-white rounded-[2rem] p-5 md:p-8 border border-brand-header/5 shadow-lg shadow-brand-header/5 relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                    <div className="w-full md:w-5/12 relative group">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative">
                           <div className="absolute inset-0 bg-brand-header/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                           <img 
                              src="https://picsum.photos/seed/sayap-village-compact/800/600" 
                              alt="Sayap Village" 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                              referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-2 md:-right-6 bg-[#f8fcf9] p-3 md:p-4 rounded-xl border border-brand-header/5 shadow-lg max-w-[160px] z-20 group-hover:-translate-y-1 transition-transform duration-500">
                           <div className="w-8 h-8 rounded-full bg-red-300/60 border border-red-400/50 flex items-center justify-center mb-2">
                             <HeartHandshake className="w-4 h-4 text-red-700/60" />
                           </div>
                           <p className="text-[10px] md:text-xs text-brand-header/90 font-medium leading-tight">Directly supporting the local community</p>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 mt-4 md:mt-0 relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-12 h-[1.6px] bg-brand-highlight"></span>
                        <span className="text-brand-highlight font-bold tracking-[0.2em] uppercase text-[10px]">Community Base</span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-brand-header mb-4 tracking-tight leading-tight">
                        Experience local living in Sayap Village
                      </h3>
                      <p className="text-brand-header/70 text-sm md:text-base leading-relaxed mb-6 font-light max-w-lg">
                        Staying in Sayap Village offers a truly immersive escape. Just <span className="font-medium text-brand-header">4 to 5km</span> from the national park, this peaceful settlement is your gateway to the heart of Bornean nature.
                      </p>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                         <div className="flex items-center gap-2 text-xs md:text-sm text-brand-header/80"><div className="w-5 h-5 rounded-full bg-[#f8fcf9] border border-brand-header/5 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-brand-highlight" /></div> Local Guides</div>
                         <div className="flex items-center gap-2 text-xs md:text-sm text-brand-header/80"><div className="w-5 h-5 rounded-full bg-[#f8fcf9] border border-brand-header/5 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-brand-highlight" /></div> Authentic Meals</div>
                         <div className="flex items-center gap-2 text-xs md:text-sm text-brand-header/80"><div className="w-5 h-5 rounded-full bg-[#f8fcf9] border border-brand-header/5 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-brand-highlight" /></div> Conservation Focus</div>
                         <div className="flex items-center gap-2 text-xs md:text-sm text-brand-header/80"><div className="w-5 h-5 rounded-full bg-[#f8fcf9] border border-brand-header/5 flex items-center justify-center shrink-0"><CheckCircle2 className="w-3 h-3 text-brand-highlight" /></div> Direct Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div className="mb-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 min-h-[400px]">
                    <div className="col-span-2 lg:col-span-2 aspect-[4/3] lg:aspect-auto rounded-[2rem] overflow-hidden shadow-sm group relative border border-brand-header/5">
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                      <img src="https://picsum.photos/seed/sayap1/1000/1200" alt="Wildlife" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                        <span className="text-[10px] font-bold tracking-widest uppercase mb-1.5 block text-brand-highlight">Wildlife</span>
                        <span className="font-serif text-3xl">Endemic Species</span>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-2 grid grid-rows-2 gap-4 md:gap-6">
                      <div className="rounded-[2rem] overflow-hidden shadow-sm group relative border border-brand-header/5 min-h-[200px]">
                         <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-[2s]"></div>
                         <img src="https://picsum.photos/seed/sayap2/1000/600" alt="Homestay detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" referrerPolicy="no-referrer" />
                         <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                           <span className="font-serif text-2xl">Local Living</span>
                         </div>
                      </div>
                      <div className="rounded-[2rem] overflow-hidden shadow-sm group relative border border-brand-header/5 min-h-[200px]">
                         <div className="absolute inset-0 bg-brand-highlight/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-[2s]"></div>
                         <img src="https://picsum.photos/seed/sayap3/1000/600" alt="Nature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" referrerPolicy="no-referrer" />
                         <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                           <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                             <MapPin className="w-6 h-6" />
                           </div>
                         </div>
                      </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
                  {/* How to get there */}
                  <div className="lg:col-span-7 bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-brand-moss/30 transition-all duration-500 rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-moss/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/10 transition-colors duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-[1.25rem] bg-brand-moss/10 flex items-center justify-center border border-brand-moss/20 group-hover:bg-brand-moss/20 transition-colors shadow-sm rotate-3 group-hover:rotate-6">
                          <Navigation className="w-5 h-5 text-brand-moss" />
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-brand-header m-0 tracking-tight">
                          How to get there
                        </h3>
                      </div>
                      
                      <div className="space-y-8 mb-6">
                        <div className="flex gap-4 md:gap-5 group/item">
                          <div className="w-12 h-12 shrink-0 rounded-[1rem] bg-white border border-brand-moss/10 group-hover/item:border-brand-moss/30 group-hover/item:shadow-md flex items-center justify-center shadow-sm transition-all duration-300 group-hover/item:-translate-y-1">
                             <Map className="w-5 h-5 text-brand-header/50 group-hover/item:text-brand-moss transition-colors" />
                          </div>
                          <div>
                            <span className="font-bold block mb-1.5 tracking-wider uppercase text-[10px] text-brand-moss group-hover/item:text-[#14432b] transition-colors">Self drive</span>
                            <span className="leading-relaxed block text-brand-header/70 text-sm font-light">Rent a car in Kota Kinabalu and use Google Maps to navigate to Sayap Village via Kota Belud.</span>
                          </div>
                        </div>
                        <div className="flex gap-4 md:gap-5 group/item">
                          <div className="w-12 h-12 shrink-0 rounded-[1rem] bg-white border border-brand-moss/10 group-hover/item:border-brand-moss/30 group-hover/item:shadow-md flex items-center justify-center shadow-sm transition-all duration-300 group-hover/item:-translate-y-1">
                             <Compass className="w-5 h-5 text-brand-header/50 group-hover/item:text-brand-moss transition-colors" />
                          </div>
                          <div>
                            <span className="font-bold block mb-1.5 tracking-wider uppercase text-[10px] text-brand-moss group-hover/item:text-[#14432b] transition-colors">Public transport</span>
                            <span className="leading-relaxed block text-brand-header/70 text-sm font-light">Take a bus from Padang Merdeka in Kota Kinabalu to Kota Belud, where local drivers can pick you up.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-brand-moss/10 relative z-10 shadow-sm group-hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-moss m-0 flex items-center gap-2 bg-brand-moss/5 px-3 py-1.5 rounded-full">
                          <Phone className="w-3 h-3" />
                          Driver Contacts
                        </span>
                        <span className="text-[9px] text-brand-header/40 uppercase tracking-widest font-bold">WhatsApp Available</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-moss/10 flex items-center justify-center shrink-0">
                              <Phone className="w-3.5 h-3.5 text-brand-moss" />
                            </div>
                            <div>
                              <div className="text-brand-header/80 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">Dsing <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div></div>
                              <div className="font-mono text-brand-moss font-medium md:text-sm text-xs">+6013 5283 477</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-moss/10 flex items-center justify-center shrink-0">
                              <Phone className="w-3.5 h-3.5 text-brand-moss" />
                            </div>
                            <div>
                              <div className="text-brand-header/80 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">Van Driver <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div></div>
                              <div className="font-mono text-brand-moss font-medium md:text-sm text-xs">+6013 5726 557</div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-moss/10 flex items-center justify-center shrink-0">
                              <Phone className="w-3.5 h-3.5 text-brand-moss" />
                            </div>
                            <div>
                              <div className="text-brand-header/80 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">Obon <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div></div>
                              <div className="font-mono text-brand-moss font-medium md:text-sm text-xs">+6013 3221 254</div>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Best Time */}
                    <div className="bg-gradient-to-br from-[#f2f7f4] to-white p-6 md:p-8 rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-brand-moss/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-center border border-brand-moss/10 group">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-moss/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/10 transition-colors duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-[1.25rem] bg-brand-moss/10 flex items-center justify-center border border-brand-moss/20 group-hover:bg-brand-moss/20 transition-colors shadow-sm rotate-3 group-hover:rotate-6">
                            <Calendar className="w-5 h-5 text-brand-moss" />
                          </div>
                          <h3 className="font-serif text-3xl md:text-3xl mb-0 text-brand-header tracking-tight">
                            Best time to visit
                          </h3>
                        </div>
                        <p className="text-brand-header/70 text-sm mb-4 leading-relaxed font-light">The dry season offers the best conditions for jungle trekking, exploring the Kemantis waterfall, and clear weather.</p>
                        <div className="flex justify-between items-center px-4 py-3 bg-white rounded-[1rem] border border-brand-moss/10 shadow-sm group-hover:border-brand-moss/20 transition-colors w-full">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-moss/5 flex items-center justify-center shrink-0">
                              <Sun className="w-4 h-4 text-brand-moss" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-brand-header/50 text-[9px] font-bold uppercase tracking-widest mb-0.5">Season</span>
                              <span className="font-serif text-brand-header font-medium text-base leading-none">Dry</span>
                            </div>
                          </div>
                          <div className="w-px h-8 bg-brand-moss/10"></div>
                          <div className="flex gap-3 items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-moss/5 flex items-center justify-center shrink-0">
                              <Calendar className="w-4 h-4 text-brand-moss" />
                            </div>
                            <div className="flex flex-col pr-2">
                              <span className="text-brand-header/50 text-[9px] font-bold uppercase tracking-widest mb-0.5">Months</span>
                              <span className="font-serif text-brand-header font-medium text-base leading-none">Apr — Oct</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div className="bg-gradient-to-br from-[#f2f7f4] to-white p-6 md:p-8 rounded-[2rem] shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-brand-moss/30 transition-all duration-500 relative overflow-hidden flex-1 flex flex-col justify-center border border-brand-moss/10 group">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-moss/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/10 transition-colors duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-[1.25rem] bg-brand-moss/10 flex items-center justify-center border border-brand-moss/20 group-hover:bg-brand-moss/20 transition-colors shadow-sm -rotate-3 group-hover:-rotate-6">
                            <Tent className="w-5 h-5 text-brand-moss" />
                          </div>
                          <h3 className="font-serif text-3xl md:text-3xl text-brand-header m-0 tracking-tight">
                            Accommodation
                          </h3>
                        </div>
                        <p className="text-brand-header/70 text-sm mb-4 leading-relaxed font-light">Stay at Sayap Homestay managed by <strong className="text-brand-moss font-medium">1StopBorneo Wildlife</strong>. Shared baths included.</p>
                        
                        <div className="flex flex-wrap gap-2">
                           <span className="px-3 py-1.5 bg-brand-header/5 border border-brand-header/10 rounded-xl text-xs tracking-wide text-brand-header/80 font-medium">Twin</span>
                           <span className="px-3 py-1.5 bg-brand-header/5 border border-brand-header/10 rounded-xl text-xs tracking-wide text-brand-header/80 font-medium">Economy</span>
                           <span className="px-3 py-1.5 bg-brand-header/5 border border-brand-header/10 rounded-xl text-xs tracking-wide text-brand-header/80 font-medium">Deluxe</span>
                           <span className="px-3 py-1.5 bg-brand-header/5 border border-brand-header/10 rounded-xl text-xs tracking-wide text-brand-header/80 font-medium">Bunk</span>
                           <span className="px-3 py-1.5 bg-brand-header/5 border border-brand-header/10 rounded-xl text-xs tracking-wide text-brand-header/80 font-medium">Double Room</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-px bg-brand-highlight"></span>
                        <span className="text-brand-highlight font-bold tracking-[0.2em] uppercase text-[10px]">Activities</span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-serif m-0 mb-3 tracking-tight">
                        Things To Do
                      </h2>
                    </div>

                    <p className="text-brand-header/60 text-base max-w-md m-0 md:ml-auto md:text-right flex items-center h-full">
                      Experience the lush biodiversity of Kinabalu Park through immersive, guided activities.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="group rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 transition-all duration-500 relative flex flex-col">
                      <div className="relative z-10 p-6 md:p-8 text-brand-header flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-[1rem] bg-white border border-brand-header/5 flex items-center justify-center text-brand-moss mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-sm">
                            <MapPin className="w-5 h-5 drop-shadow-sm" />
                          </div>
                          <h4 className="font-serif text-2xl mb-2 m-0">Night Walks</h4>
                          <p className="text-brand-header/70 text-sm leading-relaxed m-0 font-light mb-6">Spot nocturnal species like the Kinabalu horned frog and glowing fungi with 1StopBorneo.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                             <Clock className="w-3 h-3" /> 2-3 Hours
                           </span>
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 border border-brand-header/10 text-brand-header/80 text-[10px] font-bold uppercase tracking-widest rounded-full">
                             Easy
                           </span>
                        </div>
                      </div>
                    </div>

                    <div className="group rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 transition-all duration-500 relative flex flex-col">
                      <div className="relative z-10 p-6 md:p-8 text-brand-header flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-[1rem] bg-white border border-brand-header/5 flex items-center justify-center text-brand-moss mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-sm">
                            <Navigation className="w-5 h-5" />
                          </div>
                          <h4 className="font-serif text-2xl m-0 mb-2">Minodtuhan Hike</h4>
                          <p className="text-brand-header/70 text-sm leading-relaxed m-0 font-light mb-6">A challenging 12km hike up Mount Minodtuhan (2,345m) for breathtaking views and rare pitcher plants.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                             Challenging
                           </span>
                        </div>
                      </div>
                    </div>

                    <div className="group rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 transition-all duration-500 relative flex flex-col">
                      <div className="relative z-10 p-6 md:p-8 text-brand-header flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-[1rem] bg-white border border-brand-header/5 flex items-center justify-center text-brand-moss mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-sm">
                            <Tent className="w-5 h-5" />
                          </div>
                          <h4 className="font-serif text-2xl m-0 mb-2">Jungle Camping</h4>
                          <p className="text-brand-header/70 text-sm leading-relaxed m-0 font-light mb-6">Scenic campsite that can get chilly due to the elevation. Perfect for true nature lovers seeking silence.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-header border border-brand-header/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                             Overnight
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-brand-header">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="w-12 h-px bg-brand-highlight"></span>
                        <span className="text-brand-highlight font-bold tracking-[0.2em] uppercase text-[10px]">Schedule</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif m-0 mb-3 tracking-tight">Sample Itineraries</h2>
                      <p className="text-brand-header/60 m-0 text-xs font-light">1StopBorneo Conservation Group Packages.</p>
                    </div>
                    <div className="flex bg-[#f8fcf9] p-1.5 rounded-full shadow-inner border border-brand-header/5 shrink-0 relative">
                      <button 
                        onClick={() => setActiveItinerary('3d2n')}
                        className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${activeItinerary === '3d2n' ? 'text-white' : 'text-brand-header/50 hover:text-brand-header hover:bg-brand-moss/5'}`}
                      >
                        3D 2N
                        {activeItinerary === '3d2n' && (
                          <motion.div layoutId="activeItinerary" className="absolute inset-0 bg-brand-header rounded-full shadow-md -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                        )}
                      </button>
                      <button 
                        onClick={() => setActiveItinerary('4d3n')}
                        className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-500 flex items-center ${activeItinerary === '4d3n' ? 'text-white' : 'text-brand-header/50 hover:text-brand-header hover:bg-brand-moss/5'}`}
                      >
                        4D 3N
                        <div className={`overflow-hidden transition-all duration-500 flex items-center ${activeItinerary === '4d3n' ? 'w-3 ml-2 opacity-100' : 'w-0 ml-0 opacity-0'}`}>
                          <Star className="w-3 h-3 shrink-0 fill-[#FFEA6C] text-[#FFEA6C]"/>
                        </div>
                        {activeItinerary === '4d3n' && (
                          <motion.div layoutId="activeItinerary" className="absolute inset-0 bg-brand-header rounded-full shadow-md -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {activeItinerary === '3d2n' && (
                        <motion.div 
                          key="3d2n"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8"
                        >
                          {/* Day 1 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="text-white font-black tracking-widest uppercase text-[10px] mb-4 inline-flex px-3 py-1 bg-gradient-to-r from-brand-moss to-[#14432b] rounded-full shadow-md self-start group-hover:scale-105 transition-transform">Day 1</div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">Arrival & Night Walk</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Clock className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Arrival at Kota Belud town before/after lunch</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Home className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Pick up from town, check in, free & easy</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Dinner at the homestay</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Compass className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Night walk with ranger to spot nocturnal wildlife</span>
                              </li>
                            </ul>
                          </div>

                          {/* Day 2 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="text-white font-black tracking-widest uppercase text-[10px] mb-4 inline-flex px-3 py-1 bg-gradient-to-r from-brand-moss to-[#14432b] rounded-full shadow-md self-start group-hover:scale-105 transition-transform">Day 2</div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">Forest Exploration</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Breakfast before trekking</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Map className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Day trek & visit Ficus nursery</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Sun className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Lunch & Free time to relax</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Dinner (Option for extra night walk)</span>
                              </li>
                            </ul>
                          </div>

                          {/* Day 3 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full relative z-10">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="text-white font-black tracking-widest uppercase text-[10px] mb-4 inline-flex px-3 py-1 bg-gradient-to-r from-brand-moss to-[#14432b] rounded-full shadow-md self-start group-hover:scale-105 transition-transform">Day 3</div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">Departure</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Breakfast</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Sun className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Free & easy time to pack and relax</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Navigation className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Return transport to Kota Belud town</span>
                              </li>
                              <li className="flex gap-4 text-brand-moss font-medium text-xs md:text-sm pt-4 border-t border-brand-header/5 group/item">
                                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Trip ends</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {activeItinerary === '4d3n' && (
                        <motion.div 
                          key="4d3n"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8"
                        >
                          {/* Day 1 & 2 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="text-white font-black tracking-widest uppercase text-[10px] mb-4 inline-flex px-3 py-1 bg-gradient-to-r from-brand-moss to-[#14432b] rounded-full shadow-md self-start group-hover:scale-105 transition-transform">Day 1 & 2</div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">Arrival & Forest Trek</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item bg-brand-moss/5 p-4 rounded-xl mb-6">
                                <Info className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                                <span className="leading-relaxed font-medium">Includes the same immersive forest exploration schedule as the 3D2N itinerary.</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <CheckCircle2 className="w-5 h-5 text-brand-moss/40 shrink-0 group-hover/item:text-brand-moss transition-colors" />
                                <span className="leading-relaxed font-light">Night spot walk</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <CheckCircle2 className="w-5 h-5 text-brand-moss/40 shrink-0 group-hover/item:text-brand-moss transition-colors" />
                                <span className="leading-relaxed font-light">Ficus nursery & Day trek</span>
                              </li>
                            </ul>
                          </div>

                          {/* Day 3 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full relative z-10">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="flex items-center gap-2 mb-4 self-start relative z-10">
                                <div className="text-white font-black tracking-widest uppercase text-[10px] inline-flex px-3 py-1 rounded-full shadow-md bg-gradient-to-r from-brand-moss to-[#14432b] group-hover:scale-105 transition-transform">Day 3</div>
                                <div className="bg-brand-moss/20 p-1.5 rounded-full">
                                  <Sparkles className="w-3 h-3 text-brand-moss" />
                                </div>
                              </div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">The Mountain Experience</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-moss/50 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Breakfast</span>
                              </li>
                              <li className="flex gap-4 text-brand-header text-xs md:text-sm font-medium group/item py-2">
                                <Map className="w-5 h-5 text-brand-moss shrink-0 group-hover/item:scale-110 transition-transform mt-0.5" />
                                <span className="leading-relaxed">Option to hike Mount Minodtuhan (2,345m)</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-moss/50 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Dinner at lodge</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Tent className="w-5 h-5 text-brand-moss/50 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Option to camp overnight at Kinabalu Park</span>
                              </li>
                            </ul>
                          </div>

                          {/* Day 4 */}
                          <div className="bg-gradient-to-br from-[#f2f7f4] to-white border border-brand-moss/10 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-brand-moss/30 rounded-[2rem] p-6 lg:p-7 relative overflow-hidden group transition-all duration-500 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-moss/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-moss/15 transition-colors duration-500"></div>
                            <div className="flex flex-col lg:min-h-[120px] relative z-10">
                              <div className="text-white font-black tracking-widest uppercase text-[10px] mb-4 inline-flex px-3 py-1 bg-gradient-to-r from-brand-moss to-[#14432b] rounded-full shadow-md self-start group-hover:scale-105 transition-transform">Day 4</div>
                              <h5 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-header mb-6 leading-tight group-hover:text-brand-moss transition-colors duration-300">Departure</h5>
                            </div>
                            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Sun className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Free & easy morning</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Coffee className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Breakfast</span>
                              </li>
                              <li className="flex gap-4 text-brand-header/80 text-xs md:text-sm group/item">
                                <Navigation className="w-5 h-5 text-brand-header/20 shrink-0 group-hover/item:text-brand-moss transition-colors mt-0.5" />
                                <span className="leading-relaxed font-light">Return transport to Kota Belud town</span>
                              </li>
                              <li className="flex gap-4 text-brand-moss font-medium text-xs md:text-sm pt-4 border-t border-brand-header/5 group/item">
                                <CheckCircle2 className="w-5 h-5 text-brand-moss shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Trip ends</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Trip Includes Box */}
                <div className="bg-brand-header text-white rounded-[2.5rem] p-8 md:p-10 mt-12 mb-16 shadow-lg relative overflow-hidden border border-[#a7f3d0]/20 group">
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Included Items */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-[1rem] bg-[#a7f3d0]/10 flex items-center justify-center border border-[#a7f3d0]/20">
                           <CheckCircle2 className="w-5 h-5 text-[#a7f3d0]" />
                        </div>
                        <h4 className="font-serif text-3xl md:text-3xl m-0 tracking-tight text-white">What's Included</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { title: "Main Meals", desc: "Breakfast, lunch & dinner", icon: Coffee },
                          { title: "Community Guide", desc: "Local 1StopBorneo experts", icon: HeartHandshake },
                          { title: "Transportation", desc: "From Kota Belud town", icon: Navigation },
                          { title: "Nature Walks", desc: "Guided day & night treks", icon: Compass },
                          { title: "National Park", desc: "Entrance & access fees", icon: MapPin },
                          { title: "Conservation", desc: "Directly funds local efforts", icon: Sparkles },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                             <div className="w-10 h-10 rounded-xl bg-[#a7f3d0]/10 flex items-center justify-center shrink-0 border border-[#a7f3d0]/20">
                                <item.icon className="w-5 h-5 text-[#a7f3d0]" />
                             </div>
                             <div>
                               <span className="block text-white font-bold text-[13px] leading-tight mb-1">{item.title}</span>
                               <span className="text-white/60 text-[11px] font-medium leading-tight">{item.desc}</span>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Highlights & Notice */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-white/10 lg:pl-10">
                      <div>
                        <p className="text-[10px] font-bold text-[#FFEA6C] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <Star className="w-4 h-4 fill-[#FFEA6C]" /> Highlights
                        </p>
                        <ul className="space-y-4">
                          {[
                            'Tranquil trails, few visitors', 
                            'Jungle night walks', 
                            'Mountain waterfalls & river', 
                            'Mount Minodtuhan hike options', 
                            'Unique montane flora & fauna'
                          ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-white/80 items-start">
                              <span className="text-[#a7f3d0] text-sm mt-0.5 shrink-0"><CheckCircle2 className="w-4 h-4" /></span>
                              <span className="text-[12px] font-light leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-start gap-4 p-5 bg-white rounded-2xl mt-auto shadow-sm">
                         <Info className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                         <div>
                           <p className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] mb-1">Not Included</p>
                           <p className="text-[12px] text-brand-header/80 leading-relaxed m-0 font-medium pr-2">Personal expenses, flights, travel insurance, and items not explicitly listed above are not included.</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Box (Compact Banner Style) */}
                <div className="mt-16 bg-[#eef7f1] rounded-[2rem] p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 border border-brand-header/10 group hover:border-brand-header/20 transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
                  
                  <div className="flex-1 relative z-10 w-full">
                    <div className="flex items-center gap-5 mb-5 border-b border-brand-header/10 pb-5">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-header border border-brand-header/5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-3xl md:text-4xl text-brand-header m-0 tracking-tight">Ready to book?</h4>
                    </div>
                    <p className="text-brand-header/70 text-base leading-relaxed m-0 max-w-lg font-light mb-8">
                      Get in touch with 1StopBorneo Wildlife to book your conservation package and arrange your adventure today.
                    </p>
                    <a href="mailto:1stopborneo@gmail.com" className="inline-flex items-center gap-4 py-3.5 px-6 bg-brand-header hover:bg-[#0b2418] text-white rounded-xl transition-all duration-300 group/btn no-underline font-bold text-sm shadow-md hover:shadow-xl">
                      1stopborneo@gmail.com
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  </div>
                  
                  <div className="w-full md:w-auto md:min-w-[320px] relative z-10 shrink-0">
                    <div className="bg-white p-6 lg:p-8 rounded-[1.5rem] border border-brand-header/5 shadow-sm">
                      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-header/10">
                        <div className="w-10 h-10 bg-[#eef7f1] rounded-xl flex items-center justify-center border border-brand-header/5 shadow-inner">
                          <Phone className="w-4 h-4 text-brand-header" />
                        </div>
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-brand-header/80">Call / WhatsApp</span>
                      </div>
                      <ul className="space-y-4 text-sm text-brand-header/90 font-mono m-0 p-0 list-none">
                        <li className="flex justify-between items-center group/item"><span className="text-brand-header/50 font-sans font-medium uppercase text-[11px] tracking-wider transition-colors group-hover/item:text-brand-header">Chun</span> <span>+6014 5504 734</span></li>
                        <li className="flex justify-between items-center group/item"><span className="text-brand-header/50 font-sans font-medium uppercase text-[11px] tracking-wider transition-colors group-hover/item:text-brand-header">Shavez</span> <span className="text-brand-header font-bold bg-brand-header/5 px-2.5 py-1 rounded-md border border-brand-header/10">+6012 8208 052</span></li>
                        <li className="flex justify-between items-center group/item"><span className="text-brand-header/50 font-sans font-medium uppercase text-[11px] tracking-wider transition-colors group-hover/item:text-brand-header">Yulinda</span> <span>+6013 8548 704</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

          </div>
        </div>
      </section>
    </div>
  );
}
