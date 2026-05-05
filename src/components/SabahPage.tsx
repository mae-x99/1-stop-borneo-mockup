import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Leaf, Mountain, Waves } from 'lucide-react';
import SabahMap from './SabahMap';

export function SabahPage() {
  const destinations = [
    { districtId: "beaufort", title: "Beaufort", category: "Central & Interior", image: "https://picsum.photos/seed/beaufort-sabah/800/600", excerpt: "Famous for its authentic Padas river white water rafting and the historic Beaufort railway station." },
    { districtId: "beluran", title: "Beluran", category: "East Coast & Wildlife", image: "https://picsum.photos/seed/beluran/800/600", excerpt: "A serene coastal district famous for giant river prawns and unspoiled riverine ecosystems." },
    { districtId: "kalabakan", title: "Kalabakan", category: "South East & Marine", image: "https://picsum.photos/seed/kalabakan/800/600", excerpt: "A lush, newly established district known for historical sites and deep rainforest explorations." },
    { districtId: "keningau", title: "Keningau", category: "Central & Interior", image: "https://picsum.photos/seed/keningau/800/600", excerpt: "The largest town in the Interior Division, celebrated for the Oath Stone and rich agricultural heritage." },
    { districtId: "kinabatangan", title: "Kinabatangan", category: "East Coast & Wildlife", image: "https://picsum.photos/seed/kinabatangan/800/600", excerpt: "World-renowned for the Kinabatangan River, offering the best wildlife viewing in Southeast Asia." },
    { districtId: "kinabalu-park-sayap", title: "Kinabalu Park Sayap", category: "West Coast & Islands", image: "https://picsum.photos/seed/sayap2/800/600", excerpt: "Discover an off-the-beaten-path adventure hosted by a welcoming Dusun-ethnic family. Explore montane birds, frogs, and insects.", link: "#kinabalu-park-sayap" },
    { districtId: "kota-belud", title: "Kota Belud", category: "West Coast & Islands", image: "https://picsum.photos/seed/kotabelud/800/600", excerpt: "The 'Cowboy Town of the East', famous for its Sunday market (Tamu) and gateway to Mantanani Islands." },
    { districtId: "kota-kinabalu", title: "Kota Kinabalu", category: "West Coast & Islands", image: "https://picsum.photos/seed/kk/800/600", excerpt: "The vibrant state capital, blending bustling markets, stunning coastal sunsets, and rich heritage." },
    { districtId: "kota-marudu", title: "Kota Marudu", category: "Northern Region", image: "https://picsum.photos/seed/kotamarudu/800/600", excerpt: "An agricultural hub featuring the incredible Sorinsim Waterfall and majestic Mount Tambuyukon." },
    { districtId: "kuala-penyu", title: "Kuala Penyu", category: "Central & Interior", image: "https://picsum.photos/seed/kualapenyu/800/600", excerpt: "Known for the serene Tempurung Beach and as the gateway to the beautiful Pulau Tiga (Survivor Island)." },
    { districtId: "kudat", title: "Kudat", category: "Northern Region", image: "https://picsum.photos/seed/kudat/800/600", excerpt: "Home to the Rungus people, the spectacular Tip of Borneo, and pristine northern beaches." },
    { districtId: "kunak", title: "Kunak", category: "South East & Marine", image: "https://picsum.photos/seed/kunak/800/600", excerpt: "A hidden gem offering mud volcanoes, Madai Caves, and thriving palm oil estates." },
    { districtId: "lahad-datu", title: "Lahad Datu", category: "South East & Marine", image: "https://picsum.photos/seed/lahaddatu/800/600", excerpt: "Gateway to the pristine Danum Valley Conservation Area and the wildlife-rich Tabin Wildlife Reserve." },
    { districtId: "nabawan", title: "Nabawan", category: "Central & Interior", image: "https://picsum.photos/seed/nabawan/800/600", excerpt: "A deeply traditional Murut heartland offering spectacular river journeys and rainforest scenery." },
    { districtId: "papar", title: "Papar", category: "West Coast & Islands", image: "https://picsum.photos/seed/papar/800/600", excerpt: "The 'Rice Bowl' of the West Coast, known for traditional markets and the scenic Papar River." },
    { districtId: "penampang", title: "Penampang", category: "West Coast & Islands", image: "https://picsum.photos/seed/penampang/800/600", excerpt: "The heart of Kadazan culture, home to the Monsopiad Cultural Village and vibrant local cuisine." },
    { districtId: "pitas", title: "Pitas", category: "Northern Region", image: "https://picsum.photos/seed/pitas/800/600", excerpt: "A tranquil district bordered by the Sulu and South China Seas, rich in mangrove formations." },
    { districtId: "putatan", title: "Putatan", category: "West Coast & Islands", image: "https://picsum.photos/seed/putatan/800/600", excerpt: "A bustling coastal district known for its diverse culinary scene and proximity to the state capital." },
    { districtId: "ranau", title: "Ranau", category: "West Coast & Islands", image: "https://picsum.photos/seed/ranau/800/600", excerpt: "The mountainous home of Mount Kinabalu, Poring Hot Springs, and the Kundasang war memorial." },
    { districtId: "sandakan", title: "Sandakan", category: "East Coast & Wildlife", image: "https://picsum.photos/seed/sandakan/800/600", excerpt: "The former capital, a gateway to Bornean sun bears, orangutan sanctuaries, and vast history." },
    { districtId: "semporna", title: "Semporna", category: "South East & Marine", image: "https://picsum.photos/seed/semporna/800/600", excerpt: "The oceanic paradise acting as the launchpad for world-class diving at Sipadan and Mabul." },
    { districtId: "sipitang", title: "Sipitang", category: "Central & Interior", image: "https://picsum.photos/seed/sipitang/800/600", excerpt: "Sabah's southernmost district, bordering Sarawak, famous for its esplanade and the local satay." },
    { districtId: "tambunan", title: "Tambunan", category: "Central & Interior", image: "https://picsum.photos/seed/tambunan/800/600", excerpt: "A terraced valley encircled by hills, celebrated for the Rafflesia reserve and Mahua Waterfall." },
    { districtId: "tawau", title: "Tawau", category: "South East & Marine", image: "https://picsum.photos/seed/tawau/800/600", excerpt: "A diverse hub featuring the towering trees of Tawau Hills Park and rich volcanic soils." },
    { districtId: "telupid", title: "Telupid", category: "East Coast & Wildlife", image: "https://picsum.photos/seed/telupid/800/600", excerpt: "Located in the heart of Sabah, surrounded by deep forests and serving as an important transit town." },
    { districtId: "tenom", title: "Tenom", category: "Central & Interior", image: "https://picsum.photos/seed/tenom/800/600", excerpt: "Sabah's coffee capital, home to the Sabah Agricultural Park and the Murut Cultural Centre." },
    { districtId: "tongod", title: "Tongod", category: "East Coast & Wildlife", image: "https://picsum.photos/seed/tongod/800/600", excerpt: "The largest district in Sabah, located in the deep interior with immense biodiversity and wildlife." },
    { districtId: "tuaran", title: "Tuaran", category: "West Coast & Islands", image: "https://picsum.photos/seed/tuaran/800/600", excerpt: "Famous for the 9-story Chinese pagoda, Mengkabong water village, and iconic Tuaran noodles." },
  ];

  const categories = [
    { name: "Northern Region", icon: <Waves className="w-4 h-4" /> },
    { name: "West Coast & Islands", icon: <Mountain className="w-4 h-4" /> },
    { name: "Central & Interior", icon: <Leaf className="w-4 h-4" /> },
    { name: "East Coast & Wildlife", icon: <Compass className="w-4 h-4" /> },
    { name: "South East & Marine", icon: <MapPin className="w-4 h-4" /> }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeDistrictId, setActiveDistrictId] = React.useState<string | null>(null);
  
  const gridRef = React.useRef<HTMLElement>(null);
  
  const handleMapDistrictClick = (districtId: string) => {
    // Find category for this district
    const dest = destinations.find(d => d.districtId === districtId);
    if (dest) {
      setActiveCategory(dest.category);
    }
    setActiveDistrictId(districtId);
    setSearchQuery(''); // clear search to ensure it is visible

    // Scroll to the grid
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setActiveDistrictId(null);
  };

  const filteredDestinations = destinations.filter(dest => {
    if (activeDistrictId && dest.districtId !== activeDistrictId) return false;
    if (activeCategory !== 'All' && dest.category !== activeCategory && !activeDistrictId) return false;
    
    if (searchQuery) {
      const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dest.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
    }
    
    return true;
  });

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="Sabah.jpg" 
            alt="Sabah Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/90 font-bold text-xs uppercase tracking-[0.5em] mb-6 block drop-shadow-md">Explore The Region</span>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 leading-none tracking-tight drop-shadow-xl">Sabah</h1>
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
            Borneo’s top destination for wildlife and nature lovers. Home to iconic spots like <span className="italic text-brand-highlight">Kinabalu Park Sayap</span> and the biodiverse <span className="italic text-brand-highlight">Tawau Hills Park</span>.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-header/60 text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Visitors can explore lush rainforests, see orangutans in the wild, and spot proboscis monkeys along the Kinabatangan River. Sabah also features stunning islands like Sipadan and Mabul, known for vibrant marine life. With rich biodiversity and immersive experiences, Sabah is a must-visit for nature seekers.
          </motion.p>
        </div>

        <div className="">
          <SabahMap 
            onDistrictClick={handleMapDistrictClick} 
            activeDistrict={activeDistrictId} 
          />
        </div>
      </section>

      {/* Sabah Destinations Grid Layout */}
      <section ref={gridRef} className="py-24 bg-[#f8fcf9] scroll-mt-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] text-center font-bold uppercase tracking-[0.3em] rounded-full mb-6">Directory</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-header">
              Sabah Destinations
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sidebar / Regions */}
            <div className="w-full lg:w-1/4 shrink-0">
              <div className="sticky top-32">
                <div className="relative mb-10">
                  <input 
                    type="text" 
                    placeholder="Search destinations..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-brand-header/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-brand-header placeholder-brand-header/30 focus:outline-none focus:border-brand-highlight/50 focus:ring-1 focus:ring-brand-highlight/50 transition-all shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-header/30 border-2 border-current rounded-full"></div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header/60 shrink-0">Explore by Region</h3>
                  <div className="h-px bg-brand-header/10 w-full"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleCategoryClick('All')}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all text-sm font-medium ${
                      activeCategory === 'All' && !activeDistrictId
                        ? 'bg-brand-header text-white shadow-md' 
                        : 'text-brand-header/70 hover:bg-white hover:text-brand-header hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-current rounded-sm"></div>
                      All Regions
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                      activeCategory === 'All' && !activeDistrictId ? 'bg-white/20' : 'bg-brand-header/5'
                    }`}>
                      {destinations.length}
                    </span>
                  </button>
                  
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.name;
                    const catDests = destinations.filter(d => d.category === cat.name);
                    
                    return (
                      <div key={cat.name} className="flex flex-col gap-1">
                        <button
                          onClick={() => handleCategoryClick(cat.name)}
                          className={`flex items-center justify-between p-3 rounded-xl transition-all text-sm font-medium ${
                            isActive && !activeDistrictId
                              ? 'bg-brand-header text-white shadow-md' 
                              : 'text-brand-header/70 hover:bg-white hover:text-brand-header hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {cat.icon}
                            {cat.name}
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                            isActive && !activeDistrictId ? 'bg-white/20' : 'bg-brand-header/5'
                          }`}>
                            {catDests.length}
                          </span>
                        </button>
                        
                        {isActive && (
                          <div className="flex flex-col pl-11 pr-2 py-2 gap-1 relative before:absolute before:left-[1.35rem] before:top-2 before:bottom-2 before:w-[1px] before:bg-brand-header/10">
                            {catDests.map(d => (
                              <button
                                key={d.districtId}
                                onClick={() => handleMapDistrictClick(d.districtId)}
                                className={`text-left text-xs py-2 transition-colors relative ${
                                  activeDistrictId === d.districtId 
                                    ? 'text-brand-highlight font-bold' 
                                    : 'text-brand-header/50 hover:text-brand-header'
                                }`}
                              >
                                {activeDistrictId === d.districtId && (
                                  <span className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-highlight" />
                                )}
                                {d.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-10 flex items-end justify-between border-b border-brand-header/10 pb-6">
                <div>
                  {activeDistrictId ? (
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-3xl font-serif text-brand-header">{destinations.find(d => d.districtId === activeDistrictId)?.title}</h2>
                      <button 
                        onClick={() => setActiveDistrictId(null)}
                        className="px-3 py-1 bg-brand-header/5 hover:bg-brand-header/10 text-brand-header text-xs rounded-full transition-colors"
                      >
                        Clear selection
                      </button>
                    </div>
                  ) : (
                    <h2 className="text-3xl font-serif text-brand-header mb-2">{activeCategory === 'All' ? 'All Districts' : activeCategory}</h2>
                  )}
                  <p className="text-brand-header/50 text-sm">Showing {filteredDestinations.length} district{filteredDestinations.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDestinations.map((dest, index) => {
                  const CardWrapper = (dest as any).link ? motion.a : motion.article;
                  const wrapperProps = (dest as any).link ? { href: (dest as any).link } : {};
                  return (
                  <CardWrapper
                    key={dest.title}
                    {...wrapperProps as any}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-brand-header/5 transition-all duration-500 group flex flex-col ${(dest as any).link ? 'cursor-pointer block' : ''}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={dest.image} 
                        alt={dest.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-brand-header text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                          {dest.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-brand-header/40 text-xs font-medium mb-4">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {dest.category}</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif text-brand-header mb-4 group-hover:text-brand-highlight transition-colors leading-snug">
                        {dest.title}
                      </h3>
                      
                      <p className="text-brand-header/60 text-sm leading-relaxed mb-8 flex-grow">
                        {dest.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-header/5">
                        <span className="text-xs font-bold text-brand-header/80">Explore location</span>
                        <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-header group-hover:bg-brand-highlight group-hover:text-white transition-colors">
                          <Compass className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                  );
                })}
              </div>

              {filteredDestinations.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[2rem] border border-brand-header/5">
                  <MapPin className="w-12 h-12 text-brand-header/20 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-brand-header mb-2">No destinations found</h3>
                  <p className="text-brand-header/50 text-sm">Try adjusting your search criteria.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
