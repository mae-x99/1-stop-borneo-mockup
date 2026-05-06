import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Clock, Calendar, Tent, Home, Phone, Mail, ChevronRight, CheckCircle2, Navigation, Coffee, Star, Sparkles, Map, Info, Compass
} from 'lucide-react';

export function KinabaluParkSayapPage() {
  const [activeItinerary, setActiveItinerary] = useState('3d2n');

  return (
    <div className="bg-[#f2f7f4] min-h-screen selection:bg-brand-highlight/20 selection:text-brand-header font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/kinabalu-sayap/1920/1080" 
            alt="Kinabalu Park Sayap" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091b12]/90 via-[#091b12]/40 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <a href="#sabah" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium tracking-wide uppercase">
               <ChevronRight className="w-4 h-4 rotate-180" />
               Back to Sabah Regions
            </a>
            <br />
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 bg-brand-highlight text-[#091b12] text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
                Conservation Trip
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                <Clock className="w-3 h-3" />
                3-4 Days
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                <MapPin className="w-3 h-3" />
                Kota Belud
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
              Kinabalu Park <br/>
              <span className="italic text-brand-highlight">Sayap</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              Discover an off-the-beaten-path adventure hosted by a welcoming Dusun-ethnic family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Article Body */}
            <div>
                <p className="text-2xl leading-relaxed mb-8 font-serif text-brand-header text-center md:text-left">
                  <span className="float-left text-7xl font-serif leading-[0.8] mr-4 text-brand-highlight">D</span>
                  iscover an off-the-beaten-path adventure at another location of Mount Kinabalu accessible through the charming town of Kota Belud, about three hours from Kota Kinabalu. Your stay will be hosted by a welcoming Dusun-ethnic family at a local homestay, offering a genuine cultural experience.
                </p>
                <p className="text-lg leading-relaxed mb-16 text-brand-header/80 text-center md:text-left">
                  We will travel by 4x4 vehicle to explore the many trails on Kinabalu Park, where the true stars of the journey await—fascinating montane birds, frogs, and insects. This unique community-based tourism experience offers a closer connection to nature and the local way of life.
                </p>

                {/* Engaging Info Box */}
                <div className="my-12 p-8 md:p-10 bg-brand-light/50 rounded-3xl border border-brand-header/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-highlight/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl text-brand-header mb-4 flex items-center gap-3">
                      <Home className="w-6 h-6 text-brand-highlight" />
                      Staying in Sayap Village
                    </h3>
                    <p className="text-brand-header/80 text-lg leading-relaxed m-0">
                      Staying in Sayap Village provides a unique and immersive experience. The national park is approximately 4 to 5km from the Sayap Village. When you take a trip with a private company, the price will be higher because you will have an experienced guide and they will ensure a memorable trip.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* How to get there */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-header/5 group hover:border-brand-highlight/30 transition-colors">
                    <h3 className="font-serif text-2xl text-brand-header mb-6 flex items-center gap-3">
                      <Navigation className="w-6 h-6 text-brand-highlight transition-transform group-hover:scale-110" />
                      How to get there
                    </h3>
                    <ul className="space-y-6 text-brand-header/70 mb-8 m-0 p-0 list-none text-base">
                      <li className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                           <Map className="w-5 h-5 text-brand-header" />
                        </div>
                        <div>
                          <span className="font-bold block text-brand-header mb-1">Self drive</span>
                          <span>Rent a car in Kota Kinabalu and use Google Maps to navigate to Sayap Village. First, head to Kota Belud, you'll find the junction that leads to Sayap.</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                           <Compass className="w-5 h-5 text-brand-header" />
                        </div>
                        <div>
                          <span className="font-bold block text-brand-header mb-1">Public transport</span>
                          <span>Take a bus from Padang Merdeka in Kota Kinabalu to Kota Belud. Once you reach Kota Belud, it is common for drivers from Sayap Village to pick up travellers.</span>
                        </div>
                      </li>
                    </ul>
                    <div className="bg-brand-header/5 p-5 rounded-2xl">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/50 mb-3 m-0">Driver Contacts</h4>
                      <ul className="space-y-2 text-sm text-brand-header/80 font-mono m-0 p-0 list-none">
                         <li className="flex justify-between items-center"><span className="text-brand-header/60">Dsing</span> <span>+6013 5283 477</span></li>
                         <li className="flex justify-between items-center"><span className="text-brand-header/60">Van Driver</span> <span>+6013 5726 557</span></li>
                         <li className="flex justify-between items-center"><span className="text-brand-header/60">Obon</span> <span>+6013 3221 254</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    {/* Best Time */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-header/5 group hover:border-brand-highlight/30 transition-colors">
                      <h3 className="font-serif text-2xl text-brand-header mb-4 flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-brand-highlight transition-transform group-hover:-rotate-12" />
                        Best time to visit
                      </h3>
                      <div className="flex items-center justify-between p-4 bg-brand-light rounded-2xl">
                        <span className="text-brand-header/70">Dry season</span>
                        <span className="font-bold text-brand-header">April to October</span>
                      </div>
                    </div>

                    {/* Accommodation */}
                    <div className="bg-brand-header p-8 rounded-3xl shadow-sm relative overflow-hidden text-white">
                      <div className="absolute -right-10 -bottom-10 opacity-10">
                        <Home className="w-48 h-48" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="font-serif text-2xl text-white mb-6 m-0 flex items-center gap-3">
                          <Home className="w-6 h-6 text-brand-highlight" />
                          Accommodation
                        </h3>
                        <p className="font-bold text-white text-base mb-6 pb-6 border-b border-white/10 m-0">Kinabalu Park Sayap Homestay with 1StopBorneo</p>
                        <p className="text-[10px] text-brand-highlight uppercase tracking-[0.2em] mb-4 m-0 font-bold">Room Choices (shared baths):</p>
                        <ul className="grid grid-cols-2 gap-3 text-sm text-white/80 m-0 p-0 list-none">
                           <li className="flex items-center gap-2 m-0"><CheckCircle2 className="w-4 h-4 text-brand-highlight" /> Twin Room</li>
                           <li className="flex items-center gap-2 m-0"><CheckCircle2 className="w-4 h-4 text-brand-highlight" /> Economy</li>
                           <li className="flex items-center gap-2 m-0"><CheckCircle2 className="w-4 h-4 text-brand-highlight" /> Deluxe</li>
                           <li className="flex items-center gap-2 m-0"><CheckCircle2 className="w-4 h-4 text-brand-highlight" /> Bunk Room</li>
                           <li className="flex items-center gap-2 m-0"><CheckCircle2 className="w-4 h-4 text-brand-highlight" /> Double Room</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-24">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="w-12 h-px bg-brand-highlight"></span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-header m-0">Things to do</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-header/5 group hover:shadow-xl hover:border-brand-highlight/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-highlight/10 transition-colors"></div>
                      <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-highlight mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <h4 className="font-serif text-2xl mb-4 text-brand-header m-0">Jungle walks</h4>
                      <p className="text-brand-header/70 text-base leading-relaxed m-0">Organised by 1StopBorneo Wildlife to spot nocturnal species like the Kinabalu horned frog.</p>
                    </div>
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-header/5 group hover:shadow-xl hover:border-brand-highlight/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden md:translate-y-6">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-highlight/10 transition-colors"></div>
                      <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-highlight mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <Navigation className="w-7 h-7" />
                      </div>
                      <h4 className="font-serif text-2xl mb-4 text-brand-header m-0">Hiking</h4>
                      <p className="text-brand-header/70 text-base leading-relaxed m-0">Option to take a 12km hike up Mount Minodtuhan for breathtaking views and rare species.</p>
                    </div>
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-header/5 group hover:shadow-xl hover:border-brand-highlight/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden md:translate-y-12">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-highlight/10 transition-colors"></div>
                      <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-highlight mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <Tent className="w-7 h-7" />
                      </div>
                      <h4 className="font-serif text-2xl mb-4 text-brand-header m-0">Camping</h4>
                      <p className="text-brand-header/70 text-base leading-relaxed m-0">Scenic campsite that can get chilly due to the elevation. Perfect for true nature lovers.</p>
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div className="mb-20">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-2 md:col-span-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
                      <img src="https://picsum.photos/seed/sayap1/800/600" alt="Wildlife" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <div className="col-span-2 md:col-span-1 space-y-4">
                      <div className="h-[calc(50%-0.5rem)] rounded-3xl overflow-hidden shadow-sm group">
                         <img src="https://picsum.photos/seed/sayap2/400/300" alt="Homestay detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      </div>
                      <div className="h-[calc(50%-0.5rem)] rounded-3xl overflow-hidden shadow-sm group">
                         <img src="https://picsum.photos/seed/sayap3/400/300" alt="Nature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-brand-header">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-serif m-0 mb-4">Sample Itineraries</h2>
                      <p className="text-brand-header/60 m-0 text-base">1StopBorneo Conservation Group Packages.</p>
                    </div>
                    <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-brand-header/5 shrink-0">
                      <button 
                        onClick={() => setActiveItinerary('3d2n')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all ${activeItinerary === '3d2n' ? 'bg-brand-header text-white shadow-md' : 'text-brand-header/50 hover:text-brand-header hover:bg-brand-light'}`}
                      >
                        3D 2N
                      </button>
                      <button 
                        onClick={() => setActiveItinerary('4d3n')}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${activeItinerary === '4d3n' ? 'bg-brand-header text-white shadow-md' : 'text-brand-header/50 hover:text-brand-header hover:bg-brand-light'}`}
                      >
                        4D 3N
                        {activeItinerary === '4d3n' && <Star className="w-3 h-3 fill-brand-highlight text-brand-highlight" />}
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
                          className="bg-white border border-brand-header/10 rounded-[2rem] overflow-hidden shadow-sm"
                        >
                          <div className="p-8 md:p-10 space-y-10">
                            <div className="relative pl-8 md:pl-10 before:absolute before:left-[11px] before:top-8 before:bottom-0 before:w-0.5 before:bg-brand-header/5">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-light border-2 border-brand-highlight flex items-center justify-center z-10 shadow-sm" />
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 1: Arrival & Night Walk</h5>
                              <ul className="text-base text-brand-header/70 space-y-3 list-disc list-inside m-0 p-0">
                                <li>Arrival at Kota Belud town before/after lunch</li>
                                <li>Pick up from town, check in, free & easy</li>
                                <li>Dinner</li>
                                <li>Night walk with ranger to spot nocturnal wildlife</li>
                              </ul>
                            </div>
                            <div className="relative pl-8 md:pl-10 before:absolute before:left-[11px] before:top-8 before:bottom-0 before:w-0.5 before:bg-brand-header/5">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-light border-2 border-brand-highlight z-10 shadow-sm" />
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 2: Forest Exploration</h5>
                              <ul className="text-base text-brand-header/70 space-y-3 list-disc list-inside m-0 p-0">
                                <li>Breakfast</li>
                                <li>Day trek & visit Ficus nursery</li>
                                <li>Lunch & Free time</li>
                                <li>Dinner (Option for extra night walk)</li>
                              </ul>
                            </div>
                            <div className="relative pl-8 md:pl-10">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-highlight border-2 border-brand-highlight z-10 shadow-sm" />
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 3: Departure</h5>
                              <ul className="text-base text-brand-header/70 space-y-3 list-disc list-inside m-0 p-0">
                                <li>Breakfast</li>
                                <li>Free & easy</li>
                                <li>Return transport to Kota Belud town</li>
                                <li>Trip ends</li>
                              </ul>
                            </div>
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
                          className="bg-white border border-brand-highlight/30 rounded-[2rem] overflow-hidden shadow-lg relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-highlight/5 to-transparent pointer-events-none" />
                          <div className="p-8 md:p-10 space-y-10 relative z-10">
                            <div className="relative pl-8 md:pl-10 before:absolute before:left-[11px] before:top-8 before:bottom-0 before:w-0.5 before:bg-brand-header/5">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-light border-2 border-brand-highlight z-10 shadow-sm" />
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 1 & 2: Arrival & Forest Trek</h5>
                              <div className="p-4 bg-white/50 border border-brand-header/5 rounded-xl text-base text-brand-header/70 italic inline-block">
                                Includes the same schedule as the 3D2N itinerary.
                              </div>
                            </div>
                            <div className="relative pl-8 md:pl-10 before:absolute before:left-[11px] before:top-8 before:bottom-0 before:w-0.5 before:bg-brand-header/5">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-light border-2 border-brand-highlight z-10 shadow-sm flex items-center justify-center">
                                <Sparkles className="w-3 h-3 text-brand-highlight" />
                              </div>
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 3: The Mountain Experience</h5>
                              <ul className="text-base text-brand-header/70 space-y-3 list-disc list-inside m-0 p-0">
                                <li>Breakfast</li>
                                <li className="text-brand-header font-medium">Option to hike Mount Minodtuhan (2,345m)</li>
                                <li>Dinner at lodge</li>
                                <li>Option to camp overnight at Kinabalu Park</li>
                              </ul>
                            </div>
                            <div className="relative pl-8 md:pl-10">
                              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-highlight border-2 border-brand-highlight z-10 shadow-sm" />
                              <h5 className="font-bold text-brand-header text-xl mb-4 m-0 font-serif">Day 4: Departure</h5>
                              <ul className="text-base text-brand-header/70 space-y-3 list-disc list-inside m-0 p-0">
                                <li>Free & easy morning</li>
                                <li>Breakfast</li>
                                <li>Return transport to Kota Belud town</li>
                                <li>Trip ends</li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Trip Includes Box */}
                <div className="bg-brand-header text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden mt-12 mb-8">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Tent className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-serif text-3xl mb-8">What's Included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      {['Main meals', 'Community guide', 'Basic transportation', 'Wildlife nature walks', 'Entrance fees', 'Conservation fees'].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/80">
                          <CheckCircle2 className="w-6 h-6 text-brand-highlight shrink-0" />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 mb-8 backdrop-blur-sm">
                      <h5 className="text-xs font-bold tracking-[0.2em] text-brand-highlight uppercase mb-6 flex items-center gap-2">
                        <Star className="w-4 h-4 fill-brand-highlight" /> Highlights
                      </h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Tranquil trails, few visitors', 'Jungle night walks', 'Mountain waterfalls', 'Mountain hike options', 'Traditional meals', 'Unique montane flora & fauna'].map((item, i) => (
                          <li key={i} className="flex gap-3 text-white/90">
                            <span className="text-brand-highlight/50 shrink-0 select-none text-xl leading-none">•</span>
                            <span className="text-base font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-black/20 rounded-2xl">
                       <Info className="w-6 h-6 text-brand-highlight shrink-0 mt-0.5" />
                       <div>
                         <p className="text-sm font-bold text-white uppercase tracking-wider mb-2">Meal Notice</p>
                         <p className="text-base text-white/70 leading-relaxed m-0">Most homestays and lodges provide local meals. Please inform them in advance of any dietary restrictions.</p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Contact Box (Full Width Editorial Style) */}
                <div className="mt-20 bg-brand-light/30 rounded-3xl p-10 md:p-14 border border-brand-header/5 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-highlight/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <div className="flex-1 relative z-10 text-center md:text-left">
                    <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-highlight mb-8 shadow-sm mx-auto md:mx-0">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-4xl text-brand-header mb-6 m-0">Ready to Book?</h4>
                    <p className="text-brand-header/70 text-lg leading-relaxed m-0">
                      Get in touch with 1StopBorneo Wildlife to book your conservation package and arrange your adventure today.
                    </p>
                  </div>
                  
                  <div className="w-full md:w-auto md:min-w-[340px] space-y-4 relative z-10">
                    <a href="mailto:1stopborneo@gmail.com" className="flex items-center justify-between p-6 bg-brand-header text-white rounded-2xl hover:bg-[#0b2418] transition-colors group/btn shadow-md no-underline">
                      <span className="text-base font-bold tracking-wide">1stopborneo@gmail.com</span>
                      <ChevronRight className="w-5 h-5 text-brand-highlight group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-header/5">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-5 pb-5 border-b border-brand-header/5">
                        <div className="p-2 bg-brand-light rounded-lg">
                          <Phone className="w-4 h-4 text-brand-header" />
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-header/80">Call / WhatsApp</span>
                      </div>
                      <ul className="space-y-4 text-sm text-brand-header font-mono m-0 p-0 list-none">
                        <li className="flex justify-between items-center"><span className="text-brand-header/50 font-sans font-medium">Chun</span> <span>+6014 5504 734</span></li>
                        <li className="flex justify-between items-center"><span className="text-brand-header/50 font-sans font-medium">Shavez</span> <span className="text-brand-highlight font-bold">+6012 8208 052</span></li>
                        <li className="flex justify-between items-center"><span className="text-brand-header/50 font-sans font-medium">Yulinda</span> <span>+6013 8548 704</span></li>
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
