import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Mountain, Trees, Shield } from 'lucide-react';

export function KotaBeludPage() {
  const articles = [
    {
      title: "Kota Belud",
      category: "District Overview",
      image: "https://picsum.photos/seed/kotabelud/800/600",
      excerpt: "The 'Cowboy Town of the East', famous for its Sunday market (Tamu) and gateway to Mantanani Islands.",
      link: "#"
    },
    {
      title: "Kinabalu Park Sayap",
      category: "Conservation Trip",
      image: "https://picsum.photos/seed/sayap2/800/600",
      excerpt: "Discover an off-the-beaten-path adventure hosted by a welcoming Dusun-ethnic family. Explore montane birds, frogs, and insects.",
      link: "#kinabalu-park-sayap"
    }
  ];

  return (
    <div className="bg-[#f2f7f4] min-h-screen font-sans selection:bg-brand-highlight/20 selection:text-brand-header">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/kotabeludhero/1920/1080" 
            alt="Kota Belud" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-header via-brand-header/60 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-brand-highlight text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-white/20 shadow-xl">
              <MapPin className="w-4 h-4" /> Sabah, Malaysia
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">Kota Belud</h1>
            <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed font-light drop-shadow">
              The 'Cowboy Town of the East', where majestic mountain views meet vibrant cultural heritage and coastal wonders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-4xl font-serif text-brand-header mb-6">Explore the District</h2>
            <p className="text-lg text-brand-header/70 leading-relaxed">
              From the highest peaks of the Crocker Range to the depths of the South China Sea, Kota Belud offers a diverse array of adventures for every traveler. Discover our curated articles and guides for this beautiful region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {articles.map((article, index) => (
              <motion.a 
                key={index}
                href={article.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-header/5 no-underline block"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-header/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-brand-header text-xs font-bold tracking-wider uppercase rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <h3 className="font-serif text-2xl text-brand-header mb-4 group-hover:text-brand-highlight transition-colors m-0">
                    {article.title}
                  </h3>
                  <p className="text-brand-header/70 leading-relaxed mb-8 flex-1 m-0">
                    {article.excerpt}
                  </p>
                  <div className="inline-flex items-center text-brand-highlight font-bold text-sm tracking-widest uppercase group-hover:gap-3 transition-all">
                    Read Article <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* District Facts / Highlights */}
      <section className="py-24 bg-brand-header text-white relative flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/kotabeludpattern/1920/1080" 
            alt="Kota Belud Landscape" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-highlight/20 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-10 h-10 text-brand-highlight" />
              </div>
              <h4 className="text-xl font-serif mb-4">Mount Minodtuhan</h4>
              <p className="text-white/70 leading-relaxed">Stunning peaks and unique flora in the less-explored areas of Kinabalu Park.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-highlight/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-brand-highlight" />
              </div>
              <h4 className="text-xl font-serif mb-4">Bajau Culture</h4>
              <p className="text-white/70 leading-relaxed">Renowned for the Sama-Bajau people, expert horsemen known as the 'Cowboys of the East'.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-highlight/20 rounded-full flex items-center justify-center mb-6">
                <Trees className="w-10 h-10 text-brand-highlight" />
              </div>
              <h4 className="text-xl font-serif mb-4">Conservation</h4>
              <p className="text-white/70 leading-relaxed">Home to vibrant community-led conservation efforts protecting endemic wildlife.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
