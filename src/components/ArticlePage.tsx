import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Clock, ArrowRight, BookOpen, Map, Camera, Home, Sparkles, Leaf, Star, Heart, Info } from 'lucide-react';

export function ArticlePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: "Planning & Essentials", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Destinations", icon: <Map className="w-4 h-4" /> },
    { name: "Media & Tech", icon: <Camera className="w-4 h-4" /> },
    { name: "Accommodation & Services", icon: <Home className="w-4 h-4" /> },
    { name: "Unique Experiences", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Wildlife & Nature", icon: <Leaf className="w-4 h-4" /> },
    { name: "Special Topics", icon: <Star className="w-4 h-4" /> }
  ];

  // Dummy articles representing Informative, Descriptive, and Listicle types
  const articles = [
    {
      title: "Top 10 Endemics of Borneo You Must See",
      category: "Wildlife & Nature",
      image: "https://picsum.photos/seed/borneo-endemics/800/600",
      excerpt: "Discover the unique species that can only be found on the island of Borneo, from the peculiar Proboscis Monkey to the elusive Clouded Leopard.",
      readTime: "6 min read",
      date: "Oct 12, 2025",
      author: "1StopBorneo Team"
    },
    {
      title: "The Ultimate Traveller's Tool Kit for Borneo",
      category: "Planning & Essentials",
      image: "https://picsum.photos/seed/borneo-toolkit/800/600",
      excerpt: "Everything you need to pack for a successful journey through the rainforests and cities of Borneo. Don't leave home without these essentials.",
      readTime: "8 min read",
      date: "Sep 28, 2025",
      author: "Travel Advisor"
    },
    {
      title: "Chasing Sunsets: The Magic of Kota Kinabalu's Evenings",
      category: "Unique Experiences",
      image: "https://picsum.photos/seed/kota-kinabalu-sunset/800/600",
      excerpt: "Experience the breathtaking colors of the Bornean sky as the sun dips below the South China Sea. A visual journey through the best sunset spots.",
      readTime: "4 min read",
      date: "Sep 15, 2025",
      author: "Local Guide"
    },
    {
      title: "Conservation Efforts: Protecting the Pangolin",
      category: "Special Topics",
      image: "https://picsum.photos/seed/pangolin-conservation/800/600",
      excerpt: "Learn about the ongoing initiatives to save the world's most trafficked mammal in the heart of Borneo, and how you can help.",
      readTime: "7 min read",
      date: "Aug 30, 2025",
      author: "Wildlife Rescue"
    },
    {
      title: "A Guide to the Majestic Canopy Walks of Sabah",
      category: "Unique Experiences",
      image: "https://picsum.photos/seed/canopy-walk/800/600",
      excerpt: "Walk among the treetops and experience the rainforest from a completely different perspective. Here is what to expect from Sabah's suspended bridges.",
      readTime: "5 min read",
      date: "Aug 14, 2025",
      author: "Nature Explorer"
    },
    {
      title: "5 Common Mistakes to Avoid When Visiting Kalimantan",
      category: "Planning & Essentials",
      image: "https://picsum.photos/seed/kalimantan-travel/800/600",
      excerpt: "Ensure a smooth and respectful journey through the Indonesian part of Borneo with these essential cultural and logistical tips.",
      readTime: "6 min read",
      date: "Jul 22, 2025",
      author: "Cultural Liaison"
    },
    {
      title: "Understanding the Big 4 Fig Fruits",
      category: "Wildlife & Nature",
      image: "https://picsum.photos/seed/fig-fruits/800/600",
      excerpt: "Delve into the fascinating world of Borneo's fig trees and their crucial role in sustaining the rainforest ecosystem and its inhabitants.",
      readTime: "5 min read",
      date: "Jul 05, 2025",
      author: "Botanist"
    },
    {
      title: "Woman Travel Alone: Navigating Borneo Safely",
      category: "Special Topics",
      image: "https://picsum.photos/seed/solo-travel/800/600",
      excerpt: "Empowering tips, safety advice, and personal insights for solo female travelers exploring the wonders of Sabah, Sarawak, and Brunei.",
      readTime: "9 min read",
      date: "Jun 18, 2025",
      author: "Solo Adventurer"
    },
    {
      title: "Diving into the Depths: Sipadan's Marine Life",
      category: "Destinations",
      image: "https://picsum.photos/seed/sipadan-diving/800/600",
      excerpt: "An immersive look at one of the world's top diving destinations. From swirling tornado schools of barracudas to gentle sea turtles.",
      readTime: "6 min read",
      date: "Jun 02, 2025",
      author: "Marine Biologist"
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-header/5" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-highlight/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-header/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6">Encyclopedia</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-header mb-8 leading-tight">
              The Borneo <br/><span className="italic text-brand-header/80">Chronicles</span>
            </h1>
            <p className="text-brand-header/70 text-lg font-light leading-relaxed">
              Your ultimate encyclopedia for exploring the rainforests, wildlife, and cultures of Borneo. Everything you need to know before you go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Everyone Is Welcome Here Banner (LGBTQ+ Focus - Bright & Beautiful) */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50">
        {/* Luminous Rainbow Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-300/30 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '11s' }} />
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto bg-white/60 border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden group"
          >
            {/* Rainbow Top Border */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-rose-400 via-orange-400 via-amber-400 via-emerald-400 via-sky-400 to-violet-400 opacity-100" />

            <div className="flex flex-col items-center text-center mb-16 mt-4">
              <motion.div 
                animate={{ rotate: [-5, 10, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-28 h-28 rounded-[2rem] bg-white flex items-center justify-center mb-8 shadow-2xl shadow-rose-200/60 border border-rose-50 text-7xl cursor-pointer hover:scale-110 transition-transform"
              >
                🏳️‍🌈
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 flex items-center gap-4 justify-center tracking-tight">
                Everyone Is Welcome Here
              </h2>
              {/* Vibrant Rainbow Line */}
              <div className="w-32 h-1.5 bg-gradient-to-r from-rose-400 via-amber-400 via-emerald-400 to-violet-400 mx-auto rounded-full shadow-sm"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-slate-700 font-light leading-relaxed text-lg lg:text-xl">
              <div className="space-y-8">
                <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-br first-letter:from-rose-500 first-letter:to-violet-600 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.85] first-letter:font-medium">
                  Borneo is a stunningly beautiful and varied Island and its population wherever and whenever you meet them are generally very welcoming to LGBTQ+ travelers. It is also very easy to get around especially in Sabah, Sarawak and Brunei.
                </p>
                <p>
                  The following places and cities are very used to tourism which adds to the rich tapestry of life; Kota Kinabalu, Kuching, Sepilok, Kinabatangan and Semporna. Travelling around is very easy and the public transport links reliable.
                </p>
              </div>
              <div className="space-y-6 bg-white/80 p-8 md:p-10 rounded-[2rem] border border-white shadow-lg shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 via-amber-400 to-violet-400"></div>
                <div className="flex items-start gap-5">
                  <div className="bg-violet-100 p-2.5 rounded-full shrink-0 mt-1">
                    <Info className="w-6 h-6 text-violet-600" />
                  </div>
                  <p className="text-slate-900 font-medium text-lg">
                    Kalimantan and Brunei are a bit more conservative but they still welcome everyone and are well used to visitors from all walks of life. 
                  </p>
                </div>
                <p className="pl-[4.25rem] text-slate-600 text-base">
                  That said, a note of caution must be made in respect of places not mentioned above. Visitors to these places should be respectful of the populace and to their cultural differences as one should wherever you travel to in the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sidebar / Categories */}
            <div className="w-full lg:w-1/4 shrink-0">
              <div className="sticky top-32">
                <div className="relative mb-10">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full bg-white border border-brand-header/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-brand-header placeholder-brand-header/30 focus:outline-none focus:border-brand-highlight/50 focus:ring-1 focus:ring-brand-highlight/50 transition-all shadow-sm"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-header/30" />
                </div>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header/40 mb-6">Topics</h3>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all text-sm font-medium ${
                      activeCategory === 'All' 
                        ? 'bg-brand-header text-white shadow-md' 
                        : 'text-brand-header/70 hover:bg-white hover:text-brand-header hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4" />
                      All Articles
                    </div>
                    {activeCategory === 'All' && <ChevronRight className="w-4 h-4" />}
                  </button>
                  
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all text-sm font-medium ${
                        activeCategory === cat.name 
                          ? 'bg-brand-header text-white shadow-md' 
                          : 'text-brand-header/70 hover:bg-white hover:text-brand-header hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {cat.icon}
                        {cat.name}
                      </div>
                      {activeCategory === cat.name && <ChevronRight className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Article Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-10 flex items-end justify-between border-b border-brand-header/10 pb-6">
                <div>
                  <h2 className="text-3xl font-serif text-brand-header mb-2">{activeCategory === 'All' ? 'Latest Articles' : activeCategory}</h2>
                  <p className="text-brand-header/50 text-sm">Showing {filteredArticles.length} articles</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-brand-header/5 transition-all duration-500 group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-brand-header text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-brand-header/40 text-xs font-medium mb-4">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif text-brand-header mb-4 group-hover:text-brand-highlight transition-colors leading-snug">
                        {article.title}
                      </h3>
                      
                      <p className="text-brand-header/60 text-sm leading-relaxed mb-8 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-header/5">
                        <span className="text-xs font-bold text-brand-header/80">{article.author}</span>
                        <button className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-header group-hover:bg-brand-highlight group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[2rem] border border-brand-header/5">
                  <BookOpen className="w-12 h-12 text-brand-header/20 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-brand-header mb-2">No articles found</h3>
                  <p className="text-brand-header/50 text-sm">Check back later for more content in this category.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
