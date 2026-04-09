import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Leaf, Mountain, Waves, Map } from 'lucide-react';

export function KalimantanPage() {
  // Grouping the flat list of destinations into logical categories for a better editorial layout
  const regions = [
    {
      name: "National Parks & Reserves",
      icon: <Leaf className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kalimantan-parks-clean/800/1000",
      desc: "Pristine rainforests and crucial sanctuaries for orangutans, sun bears, and endemic flora.",
      destinations: [
        "Betung Kerihun National Park", "Gunung Palung National Park", "Kutai National Park", 
        "Sungai Wain Protection Forest", "Tahura Sultan Adam Mandiangin", "Tanjung Puting", 
        "Samboja Lestari", "Kawasan Wisata Pendidikan Lingkungan Hidup (KWPLH)"
      ]
    },
    {
      name: "Islands & Coastal Wonders",
      icon: <Waves className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kalimantan-islands-clean/800/1000",
      desc: "Crystal clear waters, stingless jellyfish lakes, and vibrant marine biodiversity along the coast.",
      destinations: [
        "Curiak Island", "Derawan Beach", "Kakaban Island", "Karimata Island", 
        "Maratua Beach", "Sangalaki Island", "Temaju Island"
      ]
    },
    {
      name: "Mountains, Hills & Caves",
      icon: <Mountain className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kalimantan-mountains-clean/800/1000",
      desc: "Ancient karst formations, deep cave systems, and challenging peaks for the adventurous soul.",
      destinations: [
        "Bangkirai Hills", "Berau Cave", "Liang Bangkai Cave", "Meratus", 
        "Meratus Limestone Karst", "Mount Besar", "Mount Halau-halau"
      ]
    },
    {
      name: "Cities & Rivers",
      icon: <Map className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kalimantan-rivers-clean/800/1000",
      desc: "Bustling floating markets and the lifeblood waterways that connect the Bornean interior.",
      destinations: [
        "Banjarmasin", "Mahakam River", "Tarakan"
      ]
    }
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Kalimantan.jpg" 
            alt="Kalimantan Landscape" 
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
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-none tracking-tight drop-shadow-xl">Kalimantan</h1>
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
            Kalimantan, a region of Indonesia, occupies <span className="italic text-brand-highlight">70% of the island of Borneo</span>, which it shares with Malaysia and Brunei.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-header/60 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            The region is subdivided into five provinces: Central Kalimantan, North Kalimantan, East Kalimantan, South Kalimantan, and West Kalimantan. Despite its extensive area, this book regrettably focuses on a limited selection of destinations within Kalimantan, constrained by logistical, financial, and time limitations.
          </motion.p>
        </div>
      </section>

      {/* Regions - Alternating Editorial Layout */}
      <section className="py-32 bg-[#f8fcf9]">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Directory</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-header">
              Kalimantan Destinations
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
