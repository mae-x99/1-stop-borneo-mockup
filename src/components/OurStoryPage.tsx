import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Target, Users, Phone, MapPin, Info, User, X, Compass } from 'lucide-react';

const authors = [
  {
    id: 'chun-xing-wong',
    name: 'Chun Xing Wong',
    image: 'author/author-1.jpg',
    bio: 'A passionate wildlife photographer and conservationist dedicated to capturing the unseen beauty of Borneo\'s rainforests.',
    contributions: 'Pages 12-15: The Hidden Flora of Kinabalu, Pages 40-42: Macro Photography Guide'
  },
  {
    id: 'yulinda-wahyuni',
    name: 'Yulinda Wahyuni',
    image: 'author/author-2.jpg',
    bio: 'An expert in local indigenous cultures, Yulinda brings stories of the communities living in harmony with nature.',
    contributions: 'Pages 22-28: Voices of the Forest, Page 55: Traditional Handicrafts'
  },
  {
    id: 'mala-adi',
    name: 'Mala & Adi',
    image: 'author/author-3.jpg',
    bio: 'A dynamic duo specializing in marine biology and coastal conservation around the islands of Sabah.',
    contributions: 'Pages 30-35: The Coral Triangle, Pages 60-62: Sipadan Dive Guide'
  },
  {
    id: 'chrislyn-mujan',
    name: 'Chrislyn Mujan',
    image: 'author/author-4.jpg',
    bio: 'Environmental journalist covering the impact of climate change on Borneo\'s unique ecosystems.',
    contributions: 'Pages 18-21: Climate Challenges, Page 70: Future of the Rainforest'
  },
  {
    id: 'elvinis-gunong',
    name: 'Elvinis Gunong',
    image: 'author/author-5.jpg',
    bio: 'Botanist and researcher focusing on the medicinal plants used by traditional healers in Sarawak.',
    contributions: 'Pages 45-50: Healing Leaves, Page 82: Botanical Index'
  },
  {
    id: 'farid-farhan',
    name: 'Farid Farhan',
    image: 'author/author-6.jpg',
    bio: 'Wildlife tracker and guide with over 20 years of experience navigating the deep jungles of Kalimantan.',
    contributions: 'Pages 36-39: Tracking the Orangutan, Pages 75-78: Survival Skills'
  },
  {
    id: 'chua-yan-ping',
    name: 'Chua Yan Ping',
    image: 'author/author-7.jpg',
    bio: 'Avian enthusiast and ornithologist who has documented over 300 bird species across the island.',
    contributions: 'Pages 51-54: Wings of Wonder, Page 85: Birdwatching Hotspots'
  },
  {
    id: 'nathaline-ping',
    name: 'Nathaline Ping',
    image: 'author/author-8.jpg',
    bio: 'Conservation educator working with schools to inspire the next generation of environmental stewards.',
    contributions: 'Pages 63-66: Youth in Conservation, Page 90: Educational Resources'
  },
  {
    id: 'richard-thomas',
    name: 'Richard Thomas',
    image: 'author/author-9.jpg',
    bio: 'Adventure photographer and filmmaker capturing the adrenaline-pumping landscapes of Borneo.',
    contributions: 'Pages 8-11: The Pinnacles of Mulu, Pages 95-100: Visual Journey'
  },
  {
    id: 'darrysie-salapan',
    name: 'Darrysie Salapan',
    image: 'author/author-10.jpg',
    bio: 'Herpetologist fascinated by the diverse reptiles and amphibians thriving in the Bornean undergrowth.',
    contributions: 'Pages 29-32: Slithering Wonders, Page 88: Amphibian Night Walks'
  }
];

export function OurStoryPage() {
  const [selectedAuthor, setSelectedAuthor] = useState<typeof authors[0] | null>(null);
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
      </section>      
      
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


      </section>

      {/* Our Objective Section */}
      <section className="py-20 bg-brand-header text-white relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-moss/40 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="container-custom max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-brand-highlight font-medium text-xs uppercase tracking-widest mb-3 block">The 4E Framework</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">Our Objective</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg font-light leading-relaxed max-w-lg lg:mt-6"
            >
              Conserve rainforests by practising a holistic approach to environmental stewardship and community empowerment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:-translate-y-1 group-hover:bg-brand-highlight group-hover:text-brand-header transition-all duration-300">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-serif mb-3 text-white">
                  {obj.title}
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-moss/5 blur-3xl" />
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[30%] rounded-full bg-brand-highlight/5 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6"
            >
              Meet The Contributors
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-brand-header mb-6"
            >
              Our Authors
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-header/60 text-lg font-light"
            >
              Discover the passionate individuals behind the Borneo Nature Travel Guide. 
              Each author brings their unique expertise and love for Borneo's incredible ecosystems.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {authors.map((author, index) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedAuthor(author)}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-header/5 cursor-pointer group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={author.image} 
                    alt={author.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-header/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif text-lg md:text-xl mb-1 leading-tight">{author.name}</h3>
                    <div className="w-6 h-0.5 bg-brand-highlight rounded-full transition-all duration-500 group-hover:w-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Author Details Modal */}
        <AnimatePresence>
          {selectedAuthor && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAuthor(null)}
                className="fixed inset-0 bg-brand-header/80 backdrop-blur-sm z-[100]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-[2rem] shadow-2xl z-[101] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedAuthor(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <img 
                    src={selectedAuthor.image} 
                    alt={selectedAuthor.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-5 h-5 text-brand-highlight" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header/40">Author Profile</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-header mb-6">
                    {selectedAuthor.name}
                  </h2>
                  
                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header/40 mb-3">About</h4>
                    <p className="text-brand-header/70 leading-relaxed text-base md:text-lg">
                      {selectedAuthor.bio}
                    </p>
                  </div>
                  
                  <div className="bg-brand-sand p-6 rounded-2xl border border-brand-header/5">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-5 h-5 text-brand-highlight" />
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header">E-Book Contributions</h4>
                    </div>
                    <p className="text-brand-header/80 font-medium text-sm md:text-base">
                      {selectedAuthor.contributions}
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* Borneo Travel Advisors Section */}
      <section className="py-24 bg-white relative">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="bg-[#f0f5f2] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden border border-brand-moss/10 shadow-sm">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-3xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-brand-moss/10 mx-auto mb-8 shadow-sm">
                  <Compass className="w-6 h-6 text-brand-moss" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-header mb-6 tracking-tight">Borneo Travel Advisors</h2>
                <p className="text-brand-header/70 text-lg font-light leading-relaxed">
                  If you are looking for experts on all things Borneo, the following are individuals who are active participants of 1StopBorneo Guide and other Borneo travel groups. They possess extensive knowledge about various travel destinations within Borneo.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {advisors.map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] border border-brand-moss/10 shadow-sm hover:shadow-md hover:border-brand-moss/20 transition-all duration-300 relative group"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-serif text-brand-header">{region.region}</h3>
                      <div className="w-10 h-10 rounded-full bg-brand-moss/5 flex items-center justify-center group-hover:bg-brand-moss/10 transition-colors">
                        <MapPin className="w-4 h-4 text-brand-moss" />
                      </div>
                    </div>
                    <div className="space-y-6">
                      {region.contacts.map((contact, i) => (
                        <div key={i} className="flex flex-col gap-1.5 group/contact">
                          <span className="text-[15px] font-medium text-brand-header tracking-wide">{contact.name}</span>
                          <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-brand-header/60 hover:text-brand-highlight font-mono text-sm transition-colors w-fit">
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
                className="bg-white/60 backdrop-blur-md border border-brand-moss/10 p-6 md:p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#fde68a] flex-shrink-0 flex items-center justify-center">
                  <Info className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-brand-header/80 text-[15px] leading-relaxed m-0 text-center md:text-left">
                  <strong className="text-brand-header font-semibold">Please Note:</strong> These individuals receive numerous inquiries daily. It is advisable to communicate in <strong className="font-medium text-brand-header">concise bullet points</strong> or <strong className="font-medium text-brand-header">brief audio messages</strong> as opposed to lengthy texts. As this initiative is charitable in nature, your patience is appreciated.
                </p>
              </motion.div>
            </div>
          </div>
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
