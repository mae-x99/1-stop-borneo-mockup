import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Users, Phone, MapPin } from 'lucide-react';

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
      <section className="relative h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Rainforest.jpg" 
            alt="Borneo Conservation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container-custom relative z-10 text-center mt-20">
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

      {/* About Us Section */}
      <section className="py-32 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-header mb-8">About Us</h2>
            <p className="text-brand-header/70 text-lg md:text-xl leading-relaxed font-light text-left md:text-center">
              1StopBorneo Guide exists because of the work done by <strong className="text-brand-header font-medium">1StopBorneo Wildlife</strong>, a conservation group based on Borneo Island that was established in 2012. We specialise in reforestation by planting wildlife favourites such as ficus fruits and creating corridors in collaboration with plantations. 
              <br/><br/>
              We have successfully rescued over 250 animals such as pangolins and pythons, and organised over 300 educational workshops and exhibitions. We are also creating sustainable long-term wildlife tourism projects for the local community and give hunters an alternative livelihood.
            </p>
          </motion.div>
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
