import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Leaf, Mountain, Waves } from 'lucide-react';

export function SabahPage() {
  const regions = [
    {
      name: "Kudat",
      icon: <Waves className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kudat-beach-clean/800/1000",
      desc: "Pristine beaches and the northernmost tip of Borneo. A serene escape known for its crystal-clear waters and dramatic coastlines.",
      destinations: [
        "Banggi Island", "Balambangan Island", "Bak Bak Island", "Gumantung Hill",
        "Kalampunian Beach", "Kelambu Beach", "Patanunan Island", "Supirak Island",
        "Tanjung Manawali", "Tindakon Dazang Beach"
      ]
    },
    {
      name: "West Coast",
      icon: <Mountain className="w-5 h-5" />,
      image: "https://picsum.photos/seed/kinabalu-mountain-clean/800/1000",
      desc: "Home to the majestic Mount Kinabalu and vibrant capital. Experience the perfect blend of alpine adventures and coastal city life.",
      destinations: [
        "Kinabalu Park (KNP)", "Aura Montoria", "Big Fin, Kota Belud", "Borneo Orchad House",
        "Lupa Masa / Borneo Herpetology Camp", "Dolibung Waterfall", "Inobong", "Kiomsom",
        "KK Wetland", "Maragang Hill", "Mantanani Island", "Mahua",
        "Mengalum Island", "Mesilau Substation", "Mount Alab", "Mount Wakid",
        "Mount Tambuyukon", "Mount Nambuyukon", "Murug-Turug Ecotourism", "Poring Hot Spring",
        "Rasa Ria", "Rafflesia Information Centre", "Serinsim Substation", "Swine Hill",
        "Tanjung Aru", "Tegudon Tourism Village", "Tunku Abdul Rahman Park"
      ]
    },
    {
      name: "Interior",
      icon: <Leaf className="w-5 h-5" />,
      image: "https://picsum.photos/seed/borneo-forest-clean/800/1000",
      desc: "Deep rainforests, hidden valleys, and rich cultural heritage. Journey into the heart of Sabah's untouched wilderness.",
      destinations: [
        "Batu Luang", "Bukit Bendera", "Deramakot", "Imbak Canyon", "Kawang Forest Lodge",
        "Kepungitan", "Klias Forest Reserve", "Klias River", "Kuala Penyu", "Kun-Kun River",
        "Long Pasia", "Melalap Station", "Minduk Sirung", "Mount Minodtuhan", "Mount Trusmadi",
        "Pulau Tiga", "Salt Trail", "Sabah Agriculture Park", "Sipitang", "Tenom", "Telupid",
        "Tawai Rainforest Camp", "Ulu Senagang Substation", "Ulu Membakut Substation", "Utan Rainforest Lodge"
      ]
    },
    {
      name: "Sandakan",
      icon: <Compass className="w-5 h-5" />,
      image: "https://picsum.photos/seed/sandakan-wildlife-clean/800/1000",
      desc: "The gateway to Borneo's incredible wildlife sanctuaries. Encounter orangutans, sun bears, and diverse ecosystems.",
      destinations: [
        "Bakkugaan Kecil Island", "Berhala Island", "Bukit Piton", "Borneo Rainforest Lodge",
        "Danum", "Danum Valley Field Centre", "Gomantong Cave", "INFAPRO", "Kawag Nature Lodge",
        "Kinabatangan", "Lankayan Island", "Libaran Island", "Mount Silam",
        "Rainforest Discovery Centre (RDC)", "Selingan Island", "Sepilok Orangutan Rehabilitation Centre",
        "Sun Bear Conservation Centre", "Taliwas", "Tabin", "Tambisan Island", "Terusan Sugut"
      ]
    },
    {
      name: "Tawau",
      icon: <MapPin className="w-5 h-5" />,
      image: "https://picsum.photos/seed/tawau-hills-clean/800/1000",
      desc: "Lush hills, cocoa plantations, and gateway to diving havens. A unique mix of agricultural heritage and marine exploration.",
      destinations: [
        "Tawau Hills Park", "Andrassy Hills (Bukit TV)", "Batu Punggul, Sapulut",
        "Columnar Bassalt Rock", "Ficus Ecological Trip", "INIKEA", "Kalabakan Road",
        "Maliau Basin", "Mount Wullersforf", "Plant4BorneoElephants", "Sebatik Island",
        "Tawau Mangrove Cruise", "Tinagat Hills", "Tech Guan Cocoa Village"
      ]
    }
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Sabah.jpg" 
            alt="Sabah Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container-custom relative z-10 text-center mt-20">
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
            Borneo’s top destination for wildlife and nature lovers. Home to iconic spots like <span className="italic text-brand-highlight">Kinabalu Park</span> and the biodiverse <span className="italic text-brand-highlight">Danum Valley</span>.
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
      </section>

      {/* Regions - Alternating Editorial Layout */}
      <section className="py-32 bg-[#f8fcf9]">
        <div className="container-custom">
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
