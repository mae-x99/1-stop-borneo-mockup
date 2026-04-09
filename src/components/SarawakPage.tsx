import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Leaf, Mountain, Waves, Map } from 'lucide-react';

export function SarawakPage() {
  // Grouping the flat list of destinations into logical categories for a better editorial layout
  const regions = [
    {
      name: "National Parks & Reserves",
      icon: <Leaf className="w-5 h-5" />,
      image: "https://picsum.photos/seed/sarawak-parks-clean/800/1000",
      desc: "Explore Sarawak's vast protected areas, home to rare wildlife, ancient rainforests, and the iconic Rafflesia flower.",
      destinations: [
        "Bako National Park", "Batang Ai’ National Park", "Bukit Lima Nature Reserve",
        "Gunung Buda National Park", "Gunung Gading National Park", "Gunung Lesung National Park", 
        "Kubah National Park"
      ]
    },
    {
      name: "Mountains, Hills & Caves",
      icon: <Mountain className="w-5 h-5" />,
      image: "https://picsum.photos/seed/sarawak-mountains-clean/800/1000",
      desc: "Discover dramatic limestone karsts, sacred cave temples, and breathtaking highland viewpoints.",
      destinations: [
        "Bao Ling Shan Cave Temple", "Batu Lawi", "Batu Selabat Hills", 
        "Bukit Gondol", "Fairy Cave"
      ]
    },
    {
      name: "Eco-Tourism & Nature Spots",
      icon: <Compass className="w-5 h-5" />,
      image: "https://picsum.photos/seed/sarawak-eco-clean/800/1000",
      desc: "Immerse yourself in community-led conservation areas, majestic waterfalls, and sustainable highland agriculture.",
      destinations: [
        "Ba’kelalan", "Baraam Peace Park", "Bengoh Dam", 
        "Borneo Happy Farm", "Julan Waterfall Usun Apau"
      ]
    }
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="Sarawak.jpg" 
            alt="Sarawak Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container-custom relative z-10 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/90 font-bold text-xs uppercase tracking-[0.5em] mb-6 block drop-shadow-md">Explore The Region</span>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-none tracking-tight drop-shadow-xl">Sarawak</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-32 bg-gradient-to-b from-white to-[#f8fcf9]">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif text-brand-header leading-relaxed mb-8"
          >
            Sarawak is the largest state of Malaysia; however, it remains significantly under-visited, particularly in terms of its <span className="italic text-brand-highlight">National Parks</span> and islands.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-header/60 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Despite this, Sarawak offers some of the most adventurous experiences in Southeast Asia for travelers, with many off-the-beaten-track destinations waiting to be explored. This guidebook highlights accessible and stunning spots like Tanjung Datu, Long Banga’s coffee park, Ba’kelalan, and Twinhill Maludam, encouraging you to discover the hidden wonders of Sarawak.
          </motion.p>
        </div>
      </section>

      {/* Regions - Alternating Editorial Layout */}
      <section className="py-32 bg-[#f8fcf9]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Directory</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-header">
              Sarawak Destinations
            </h2>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col gap-32">
            {regions.map((region, index) => (
              <motion.div 
                key={region.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img 
                      src={region.image} 
                      alt={region.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-header/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-brand-header/10 flex items-center justify-center text-brand-highlight bg-white shadow-sm shrink-0">
                      {region.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-header">{region.name}</h2>
                  </div>
                  
                  <p className="text-brand-header/70 text-lg mb-10 font-light leading-relaxed">
                    {region.desc}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {region.destinations.map((dest, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-white border border-brand-header/10 text-brand-header/80 text-xs font-medium rounded-full hover:border-brand-highlight hover:text-brand-highlight transition-colors cursor-default shadow-sm"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
