import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Mountain, Trees, Shield, Sparkles, Compass } from 'lucide-react';

export function KotaBeludPage() {
  const [activeSection, setActiveSection] = useState('highlights');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const sections = ['highlights', 'heritage', 'explore'];
      const scrollPosition = window.scrollY + 200;

      let currentSection = sections[0];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isScrollingRef.current = true;
      setActiveSection(id);
      
      const rect = element.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY;
      
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const articles = [
    {
      title: "Kota Belud Overview",
      category: "District Guide",
      image: "/Sabah.jpg",
      excerpt: "The 'Cowboy Town of the East', famous for its Sunday market (Tamu) and gateway to Mantanani Islands.",
      link: "#"
    },
    {
      title: "Kinabalu Park Sayap",
      category: "Conservation Trip",
      image: "/Kinabalu-Park-Sayap-1.jpg",
      excerpt: "Discover an off-the-beaten-path adventure hosted by a welcoming Dusun-ethnic family. Explore montane birds, frogs, and insects.",
      link: "#kinabalu-park-sayap"
    },
    {
      title: "Bajau Horsemen Culture",
      category: "Cultural Heritage",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/KotaBelud_Sabah_-TownView-01.jpg",
      excerpt: "Immerse yourself in the vibrant traditions of the Sama-Bajau people, renowned for their expert horsemanship and colorful parang swords.",
      link: "#"
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans selection:bg-brand-moss/20 selection:text-brand-header relative overflow-clip">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0A2515 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-moss/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-moss/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-12 z-10 w-full">
        <div className="container-custom relative z-10 w-full">
          <motion.div 
            className="w-full relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden min-h-[75vh] flex flex-col justify-between shadow-2xl group ring-1 ring-black/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Background Image & Effects */}
            <div className="absolute inset-0 z-0 bg-[#0A1A10]">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KotaBelud_Sabah_Rice-Padi-06.jpg" 
                 alt="Kota Belud Rice Paddies" 
                 className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.08] transition-transform duration-[6s] ease-out origin-center opacity-90 mix-blend-screen"
               />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0A1A10]/95 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-moss/50 via-transparent to-[#C1FF72]/10 z-10 mix-blend-multiply opacity-80 pointer-events-none"></div>

            {/* Inner Decorative Border */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] md:rounded-[3.5rem] z-30 pointer-events-none m-4 md:m-6 hidden md:block"></div>

            {/* Top Content */}
            <div className="relative z-20 pt-8 sm:pt-14 px-6 sm:px-14 flex justify-between items-start w-full">
               <motion.div
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6, duration: 0.8 }}
               >
                 <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C1FF72] animate-pulse relative">
                       <span className="absolute inset-0 rounded-full bg-[#C1FF72] animate-ping opacity-50"></span>
                    </span> 
                    Sabah, Malaysia
                 </div>
               </motion.div>
               <motion.div
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 0.8 }}
                 className="hidden lg:flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                     <Compass className="w-4 h-4 text-white/80" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5">District Area</span>
                     <span className="text-white font-mono text-xs tracking-wider">1,386 KM²</span>
                   </div>
                 </div>
                 <div className="h-6 w-px bg-white/10"></div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                     <MapPin className="w-4 h-4 text-white/80" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5">Coordinates</span>
                     <span className="text-white font-mono text-xs tracking-wider">6° 21' N</span>
                   </div>
                 </div>
               </motion.div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 p-6 sm:p-10 md:p-16 lg:px-20 lg:py-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mt-auto">
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                >
                  <h1 className="text-[12vw] font-serif text-white mb-4 lg:mb-0 tracking-tighter leading-[0.85] drop-shadow-2xl flex flex-col">
                    <span className="font-light text-white/90 translate-x-1 sm:translate-x-2 lg:translate-x-4">Kota</span> 
                    <span className="italic font-medium text-white pl-[8%] sm:pl-[5%] md:pl-[12%] drop-shadow-2xl flex items-center gap-6 relative">
                      Belud 
                      {/* Decorative elements around the text */}
                      <span className="inline-flex items-center gap-6 ml-2 hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <span className="w-16 h-px bg-[#C1FF72]/50"></span>
                        <Sparkles className="w-8 h-8 text-[#C1FF72]/80" />
                      </span>
                    </span>
                  </h1>
                </motion.div>
              </div>

              <motion.div 
                className="w-full lg:max-w-sm shrink-0 border-l border-white/20 pl-5 sm:pl-6 lg:pl-10 relative lg:-mb-2 backdrop-blur-sm py-4 mt-2 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <div className="absolute top-0 -left-[1px] w-[2px] h-12 lg:h-16 bg-gradient-to-b from-[#C1FF72] to-transparent"></div>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 font-light leading-relaxed m-0 text-shadow-md">
                  The 'Cowboy Town of the East', where majestic mountain views meet vibrant cultural heritage.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center gap-3 sm:gap-4 text-white/70 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase group/btn cursor-pointer hover:text-white transition-colors w-fit">
                  <span>Explore District</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#C1FF72] group-hover/btn:text-[#0A1A10] group-hover/btn:border-[#C1FF72] transition-all transform group-hover/btn:translate-x-2">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Layout containing Sidebar and Sections */}
      <div className="relative">
        
        {/* Floating Sidebar Layer */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none hidden lg:block z-40">
          <div className="container-custom h-full">
            <div className="max-w-7xl mx-auto flex h-full gap-12 lg:gap-20">
              {/* Sidebar */}
              <aside className="w-56 shrink-0 pointer-events-auto h-full">
                <div className="sticky top-32 pt-24 pb-12 w-full">
                  <div className="mb-5 relative flex items-center">
                    <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-brand-moss ring-4 ring-brand-moss/20 z-10"></div>
                    <span className="pl-5 text-sm font-bold text-brand-header m-0">On This Page</span>
                  </div>
                  <nav className="flex flex-col relative before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:bg-brand-header/5">
                    {[
                      { id: 'highlights', label: 'Highlights' },
                      { id: 'heritage', label: 'The Heritage' },
                      { id: 'explore', label: 'Related Articles' },
                    ].map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`text-sm font-medium transition-all py-3 pl-5 relative outline-none flex items-center ${
                            isActive
                              ? 'text-brand-moss'
                              : 'text-brand-header/50 hover:text-brand-moss hover:bg-brand-moss/5'
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeNavIndicator"
                              className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-moss z-10"
                              initial={false}
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                          <span className={`transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`}>
                            {item.label}
                          </span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </aside>
              {/* Empty Space tracking content */}
              <div className="flex-1 min-w-0 h-full"></div>
            </div>
          </div>
        </div>

        {/* District Facts / Highlights */}
        <section id="highlights" className="py-24 z-10 relative bg-[#f4f7f5]">
          <div className="container-custom scroll-mt-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Spacer on desktop */}
              <div className="lg:w-56 shrink-0 hidden lg:block"></div>
              
              {/* Content Box */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col justify-between items-start mb-12 gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-12 h-px bg-brand-highlight/50"></span>
                      <span className="text-brand-highlight/80 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">Curated Details</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-header tracking-tighter leading-[1.1] m-0">
                      District <span className="italic font-light">Highlights</span>
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                  
                  {/* Spotlight Item - Spans 8 cols */}
                  <motion.div 
                    className="lg:col-span-8 bg-[#0A1A10] text-white rounded-[2rem] lg:rounded-[3rem] shadow-2xl relative overflow-hidden group flex flex-col justify-end min-h-[400px] lg:min-h-[480px] p-8 sm:p-10 xl:p-12 border border-brand-moss/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none group-hover:scale-105 group-hover:opacity-70 transition-all duration-[2s] ease-out">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KotaBelud_Sabah_Rice-Padi-06.jpg" alt="Background" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A10] via-[#0A1A10]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A10]/80 via-transparent to-transparent"></div>

              <div className="relative z-10 flex flex-col items-start max-w-2xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
                  <Trees className="w-3.5 h-3.5 text-[#C1FF72]" /> Conservation Area
                </div>
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-5 tracking-tighter text-white leading-[1]">Kinabalu<br/><span className="italic font-light text-white/90">Ecology</span></h4>
                <p className="text-white/80 leading-relaxed font-light text-base md:text-lg m-0 max-w-lg">
                  Lying at the foothills of the majestic Mount Kinabalu, the district is a gateway to diverse flora and some of the region's most breathtaking scenic plains.
                </p>
                <div className="mt-8 sm:mt-10 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#C1FF72] group-hover:text-[#0A1A10] group-hover:border-[#C1FF72] transition-colors cursor-pointer">
                  <ChevronRight className="w-5 h-5 transition-transform" />
                </div>
              </div>
            </motion.div>
            
            <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4 lg:gap-6">
              {/* Secondary Item 1 */}
              <motion.div 
                className="flex-1 bg-brand-light p-6 sm:p-8 xl:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-brand-moss/10 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[220px] lg:min-h-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#143220]/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#143220]/10 transition-colors duration-700 pointer-events-none"></div>
                 
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border border-brand-moss/10 text-brand-moss shadow-sm group-hover:scale-110 transition-transform duration-500 relative z-10">
                   <Shield className="w-5 h-5" />
                 </div>
                 
                 <div className="relative z-10">
                   <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-moss/50 mb-2">Culture</div>
                   <h4 className="text-2xl lg:text-3xl font-serif text-brand-header mb-2 tracking-tight leading-none">Bajau Heritage</h4>
                   <p className="text-brand-header/70 leading-relaxed font-light text-sm md:text-base m-0">The heartland of the Sama-Bajau people, renowned globally as expert equestrians.</p>
                 </div>
              </motion.div>
              
              {/* Secondary Item 2 */}
              <motion.div 
                className="flex-1 bg-white p-6 sm:p-8 xl:p-10 rounded-[2rem] lg:rounded-[2.5rem] border border-brand-moss/10 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between min-h-[220px] lg:min-h-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-moss/5 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2 group-hover:bg-brand-moss/10 transition-colors duration-700 pointer-events-none"></div>

                 <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center mb-6 border border-brand-moss/5 text-brand-header relative z-10 group-hover:-rotate-12 transition-transform duration-500">
                   <Mountain className="w-5 h-5" />
                 </div>

                 <div className="relative z-10">
                   <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-moss/50 mb-2">Geography</div>
                   <h4 className="text-2xl lg:text-3xl font-serif text-brand-header mb-2 tracking-tight leading-none">Majestic Peaks</h4>
                   <p className="text-brand-header/70 leading-relaxed font-light text-sm md:text-base m-0">Stunning untamed nature in the pristine, lesser-explored corners of the district.</p>
                 </div>
              </motion.div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* District Story / Content */}
      <section id="heritage" className="py-24 z-10 relative bg-white overflow-clip scroll-mt-28">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Spacer on desktop */}
            <div className="lg:w-56 shrink-0 hidden lg:block"></div>
            
            {/* Content Box */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <motion.div 
                    className="prose prose-lg md:prose-xl prose-stone max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-px bg-brand-highlight"></span>
                  <span className="text-brand-highlight font-bold tracking-[0.2em] uppercase text-[10px]">The Heritage</span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-header mb-10 leading-tight tracking-tight">
                  Where The Mountains Meet The Sea
                </h3>

                <p className="text-brand-header/80 leading-relaxed font-light mb-8 text-lg">
                  Kota Belud is a charming district on the west coast of Sabah, Malaysia. Known colloquially as the "Cowboy Town of the East", it is the cultural heartland of the Bajau people, who are renowned for their equestrian skills, vibrant traditions, and colorful customs.
                </p>
                <p className="text-brand-header/80 leading-relaxed font-light mb-8 text-lg">
                  Every Sunday, the town comes alive with its famous <strong>Tamu</strong>, a bustling open-air market where locals from the hills and the coast gather to trade fresh produce, traditional handicrafts, and local delicacies. It is a vibrant display of the district's diverse communities.
                </p>
                
                <blockquote className="my-14 pl-8 border-l-4 border-brand-moss py-2 bg-gradient-to-r from-brand-moss/5 to-transparent rounded-r-2xl pr-4">
                  <p className="text-2xl md:text-3xl font-serif text-brand-header italic leading-relaxed m-0 text-brand-header/90">
                    "A vibrant tapestry of cultures woven together beneath the watchful shadow of Mount Kinabalu."
                  </p>
                </blockquote>

                <p className="text-brand-header/80 leading-relaxed font-light mb-8 text-lg">
                  Beyond its cultural heritage, Kota Belud serves as a crucial gateway to some of Sabah's most breathtaking natural wonders. To the west lie the pristine waters of the Mantanani Islands, and to the east, the awe-inspiring slopes of Mount Kinabalu and the Crocker Range. With a growing focus on rural tourism and community-led conservation, Kota Belud offers travelers an authentic glimpse into the harmonious blend of nature and ancient tradition.
                </p>
              </motion.div>
            </div>

            {/* Right Gallery/Sticky Sidebar */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 grid grid-cols-2 gap-4">
                <motion.div 
                  className="col-span-2 rounded-[2rem] overflow-hidden shadow-lg h-64 md:h-80 relative group bg-brand-moss/5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/KotaBelud_Sabah_PasarTani-04.jpg" alt="Sunday Tamu Market in Kota Belud" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-header/10 mix-blend-overlay"></div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-brand-header uppercase tracking-wider shadow-sm z-20">Tamu Market</div>
                </motion.div>
                
                <motion.div 
                  className="rounded-[2rem] overflow-hidden rounded-tr-none rounded-bl-none shadow-lg h-48 md:h-64 relative group bg-brand-moss/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KotaBelud_Sabah_Rice-Padi-06.jpg" alt="Scenic Rice Paddies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-brand-header uppercase tracking-wider shadow-sm z-20">Paddy Fields</div>
                </motion.div>
                
                <motion.div 
                  className="rounded-[2rem] overflow-hidden rounded-tl-none rounded-br-none shadow-lg h-48 md:h-64 relative group bg-brand-moss/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/KotaBelud_Sabah_-TownView-01.jpg" alt="Kota Belud Town View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-brand-header uppercase tracking-wider shadow-sm z-20">Town View</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* Main Content / Related Articles */}
      <section id="explore" className="py-24 z-10 relative bg-[#f0f4f1] border-t border-[#143220]/10 scroll-mt-28">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#143220]/5 to-transparent pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Spacer on desktop */}
            <div className="lg:w-56 shrink-0 hidden lg:block"></div>
            
            {/* Content Box */}
            <div className="flex-1 min-w-0">
              <motion.div 
                className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-16 h-px bg-brand-highlight/40"></span>
                <span className="text-brand-highlight font-bold tracking-[0.3em] uppercase text-xs">Curated Reads</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-header tracking-tighter m-0 leading-[1.1]">
                Related <span className="italic font-light text-[#143220]">Articles</span>
              </h2>
            </div>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <motion.a 
                key={index}
                href={article.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#143220]/10 no-underline h-full"
              >
                <div className="h-[240px] md:h-[280px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0A1A10]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-[#143220] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Compass className="w-4 h-4 text-[#143220]/50" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#143220]/50">{article.category}</span>
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-brand-header mb-4 group-hover:text-[#143220] transition-colors m-0 tracking-tight leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-brand-header/70 leading-relaxed shrink m-0 font-light text-base line-clamp-3 mb-8">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center text-brand-header font-bold text-xs tracking-[0.2em] uppercase group-hover:text-[#143220] transition-colors mt-auto w-fit">
                    Read 
                    <div className="ml-3 w-8 h-8 rounded-full bg-[#143220]/5 flex items-center justify-center group-hover:bg-[#143220] group-hover:text-white group-hover:scale-110 transition-all duration-500 border border-[#143220]/10">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          </div>
        </div>
        </div>
      </section>
      </div>
    </div>
  );
}

