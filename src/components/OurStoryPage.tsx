import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Users, Phone, MapPin, Info } from 'lucide-react';

export function OurStoryPage() {
  const objectives = [
    {
      title: "Education",
      desc: "School workshops and flora/fauna research",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Enrichment of Habitat",
      desc: "Planting wildlife’s favourite food in reforestation sites",
      icon: <LeafIcon />
    },
    {
      title: "Enforcement",
      desc: "Reducing hunting pressures through creative practices",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Economy",
      desc: "Developing conservation tourism products for local job creation and supporting the local economy, including 1StopBorneo Wildlife.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const advisors = [
    {
      region: "Sabah",
      contacts: [
        { name: "Ray", phone: "+6016 8310 383" },
        { name: "Ronald", phone: "+6012 4152 680" },
        { name: "Shavez", phone: "+6012 8248 052" }
      ]
    },
    {
      region: "Sarawak",
      contacts: [
        { name: "Nicole", phone: "+6016 8313 299" },
        { name: "Shavez", phone: "+6012 8248 052" }
      ]
    },
    {
      region: "Brunei",
      contacts: [
        { name: "Shavez", phone: "+6012 8248 052" }
      ]
    },
    {
      region: "Kalimantan",
      contacts: [
        { name: "Zain", phone: "+62 821 5300 0270" }
      ]
    }
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="Rainforest.jpg" 
            alt="Borneo Conservation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/90 font-bold text-xs uppercase tracking-[0.5em] mb-6 block drop-shadow-md">About Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-none tracking-tight drop-shadow-xl">Our Story & Mission</h1>
          </motion.div>
        </div>
      </section>      {/* Masterclass Editorial Layout for About Us & Inclusivity */}
      <section className="bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Subtle Organic Wave/River Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full text-emerald-500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" width="15" height="15" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.4"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#dots)" />
</svg>
          {/* Radial mask to fade out the pattern at the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,0.9)_100%)]"></div>
          {/* Vertical mask to blend with surrounding sections */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
        </div>
       
        {/* 1. About Us Segment */}
        <div className="py-24 relative">
          <div className="container-custom max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Big Typographic Statement */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 w-full pr-4"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-brand-highlight"></div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">Founded 2012</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-slate-800 tracking-tight leading-[0.95] mb-8">
                  About <br/><span className="text-emerald-700 italic pl-8">1StopBorneo.</span>
                </h2>
                
                <p className="text-xl md:text-xl font-light text-slate-600 leading-snug pl-8 border-l-2 border-emerald-100">
                  1StopBorneo Guide exists because of the work done by 1StopBorneo Wildlife, a conservation group based on Borneo Island.
                </p>
              </motion.div>

              {/* Right Column: Visual / Structured Text Block */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="lg:w-1/2 w-full"
              >
                <div className="bg-[#f8fcf9] p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-emerald-100">
                  {/* Decorative corner accent */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 space-y-8 text-slate-600 font-light text-lg leading-relaxed">
                    <p>
                      We specialise in <strong className="text-emerald-800 font-medium">reforestation</strong> by planting wildlife favourites such as ficus fruits and creating corridors in collaboration with plantations. 
                    </p>
                    <p>
                      We are also creating sustainable long-term <strong className="text-emerald-800 font-medium">wildlife tourism projects</strong> for the local community and give hunters an alternative livelihood.
                    </p>
                    
                    <div className="pt-8 border-t border-emerald-100 flex flex-wrap gap-12">
                      <div>
                        <span className="block text-5xl font-serif text-emerald-800 tracking-tight leading-none mb-2">250+</span>
                        <span className="text-xs uppercase tracking-[0.1em] font-semibold text-emerald-600/70">Animals Rescued</span>
                      </div>
                      <div>
                        <span className="block text-5xl font-serif text-emerald-800 tracking-tight leading-none mb-2">300+</span>
                        <span className="text-xs uppercase tracking-[0.1em] font-semibold text-emerald-600/70">Workshops Held</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>

        {/* 2. Everyone Is Welcome Segment */}
        <div className="pb-24 relative">
          
          {/* Luminous Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-rose-200/20 rounded-full blur-[100px] pointer-events-none" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
          
          <div className="container-custom max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] p-[3px] group"
            >
              {/* Actual Content Container */}
            <div className="rounded-[calc(3.5rem-3px)] relative overflow-hidden">
              <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                
                {/* Rainbow Flag */}
                <svg className="mx-auto block" xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 0 64 64" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">

                <path fill="#ed4c5c" d="M52.382 5.075C40.137 3.203 24.137 28.036 9.213 20.497c-.582-1.575-1.143-3.158-1.725-4.73C25.077 19.105 33.07-2.995 50.658.345c.584 1.572 1.14 3.156 1.724 4.73">
                </path>

                <path fill="#ff8736" d="M54.105 9.804C43.762 7.786 22.512 31.453 10.938 25.227c-.585-1.573-1.14-3.157-1.725-4.73C26.802 23.835 34.794 1.734 52.382 5.075c.584 1.572 1.14 3.156 1.723 4.729">
                </path>

                <path fill="#ffce31" d="M55.83 14.535C45.762 12.744 27.086 38.25 12.662 29.957c-.585-1.573-1.142-3.157-1.725-4.73C28.525 28.566 36.52 6.467 54.105 9.805c.585 1.574 1.142 3.157 1.725 4.73">
                </path>

                <path fill="#83bf4f" d="M57.556 19.265c-9.711-1.521-31.086 25.813-43.171 15.422c-.584-1.572-1.139-3.157-1.723-4.73c17.585 3.341 25.579-18.762 43.168-15.422c.583 1.573 1.142 3.156 1.726 4.73">
                </path>

                <path fill="#275fd9" d="M59.278 23.995C48.22 22.161 28.595 50.453 16.109 39.418c-.584-1.574-1.144-3.156-1.725-4.73c17.588 3.338 25.582-18.761 43.171-15.422c.583 1.573 1.141 3.155 1.723 4.729">
                </path>

                <path fill="#9028e0" d="M61 28.726c-17.583-3.34-25.579 18.761-43.166 15.421c-.584-1.572-1.142-3.156-1.725-4.729c17.588 3.338 25.581-18.762 43.169-15.423c.583 1.575 1.142 3.158 1.722 4.731">
                </path>

                <g fill="#3e4347">

                  <circle cx="5.168" cy="13.336" r="2.168">
                  </circle>

                  <path d="M7.04 14.49l-2.56.929L22.186 64h2.896z">
                  </path>

                  <path d="M3.688 15.602l4.076-1.48l.37 1.017l-4.077 1.48z">
                  </path>

                </g>

                </svg>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-800 tracking-tight leading-[1.1] mb-8">
                  Everyone is <span className="italic relative whitespace-nowrap">
                    welcome here.
                    <svg className="absolute -bottom-3 left-0 w-full h-4 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="url(#rainbowGradient)" strokeWidth="4" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fb7185" />
                          <stop offset="50%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h2>
                
                <p className="text-xl font-light text-slate-600 leading-relaxed mt-12 max-w-3xl mx-auto">
                  Borneo is a stunningly beautiful and varied Island and its population wherever and whenever you meet them are generally very welcoming to LGBTQ+ travelers.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative">
                {/* Center Divider for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
                
                {/* Information Column 1 */}
                <div className="space-y-6 text-slate-600 font-light text-[17px] leading-relaxed md:pr-4">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    </div>
                    <h4 className="font-serif text-3xl text-slate-800">Ease of Travel</h4>
                  </div>
                  <p>
                    It is very easy to get around especially in Sabah, Sarawak and Brunei. Places like Kota Kinabalu, Kuching, Sepilok, Kinabatangan and Semporna are very used to tourism which adds to the rich tapestry of life. 
                  </p>
                  <p>
                    Travelling around is easy and public transport links are reliable, ensuring a seamless and enjoyable experience.
                  </p>
                </div>

                {/* Information Column 2 */}
                <div className="space-y-6 text-slate-600 font-light text-[17px] leading-relaxed md:pl-4">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                      <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    </div>
                    <h4 className="font-serif text-3xl text-slate-800">Good to Know</h4>
                  </div>
                  <p>
                    Kalimantan and Brunei are a bit more conservative but they still welcome everyone and are well used to visitors from all walks of life.
                  </p>
                  <div className="relative bg-white p-6 rounded-r-2xl italic text-[15px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] mt-6">

                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 via-yellow-400 via-green-400 to-blue-500 rounded-l-2xl"></div>

                  <div className="pl-4">
                    "Visitors to these places should be respectful of the populace and to their cultural differences as one should wherever you travel to in the world."
                  </div>

                </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Objective Section */}
      <section className="py-32 bg-brand-header text-white relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="container-custom max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">The 4E Framework</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Our Objective</h2>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Conserve rainforests by practising a holistic approach to environmental stewardship and community empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/[0.03] border border-white/5 p-10 lg:p-14 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-highlight/20 flex items-center justify-center text-brand-highlight mb-8 group-hover:scale-110 group-hover:bg-brand-highlight/30 transition-all duration-500">
                    {obj.icon}
                  </div>
                  <h3 className="text-3xl font-serif mb-4 text-white">
                    {obj.title}
                  </h3>
                  <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
                    {obj.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Borneo Travel Advisors Section */}
      <section className="py-32 bg-[#f8fcf9]">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-header mb-6">Borneo Travel Advisors</h2>
            <p className="text-brand-header/70 text-lg font-light leading-relaxed">
              If you are looking for experts on all things Borneo, the following are individuals who are active participants of 1StopBorneo Guide and other Borneo travel groups. They possess extensive knowledge about various travel destinations within Borneo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advisors.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg border border-brand-header/5"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-header/10">
                  <MapPin className="w-5 h-5 text-brand-highlight" />
                  <h3 className="text-2xl font-serif text-brand-header">{region.region}</h3>
                </div>
                <div className="space-y-4">
                  {region.contacts.map((contact, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-brand-header">{contact.name}</span>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-brand-header/60 hover:text-brand-highlight transition-colors text-sm">
                        <Phone className="w-3.5 h-3.5" />
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-highlight/10 border border-brand-highlight/20 p-8 rounded-2xl text-center max-w-4xl mx-auto"
          >
            <p className="text-brand-header/80 text-sm md:text-base font-medium leading-relaxed">
              Do note that these individuals receive numerous inquiries daily. It is advisable to communicate in concise bullet points or brief audio messages as opposed to lengthy texts. As this initiative is charitable in nature, your patience is appreciated.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Simple leaf icon since we used it above
function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}
