import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, User } from 'lucide-react';

const authors = [
  {
    id: 'chun-xing-wong',
    name: 'Chun Xing Wong',
    image: '/author/author-1.jpg',
    bio: 'A passionate wildlife photographer and conservationist dedicated to capturing the unseen beauty of Borneo\'s rainforests.',
    contributions: 'Pages 12-15: The Hidden Flora of Kinabalu, Pages 40-42: Macro Photography Guide'
  },
  {
    id: 'yulinda-wahyuni',
    name: 'Yulinda Wahyuni',
    image: '/author/author-2.jpg',
    bio: 'An expert in local indigenous cultures, Yulinda brings stories of the communities living in harmony with nature.',
    contributions: 'Pages 22-28: Voices of the Forest, Page 55: Traditional Handicrafts'
  },
  {
    id: 'mala-adi',
    name: 'Mala & Adi',
    image: '/author/author-3.jpg',
    bio: 'A dynamic duo specializing in marine biology and coastal conservation around the islands of Sabah.',
    contributions: 'Pages 30-35: The Coral Triangle, Pages 60-62: Sipadan Dive Guide'
  },
  {
    id: 'chrislyn-mujan',
    name: 'Chrislyn Mujan',
    image: '/author/author-4.jpg',
    bio: 'Environmental journalist covering the impact of climate change on Borneo\'s unique ecosystems.',
    contributions: 'Pages 18-21: Climate Challenges, Page 70: Future of the Rainforest'
  },
  {
    id: 'elvinis-gunong',
    name: 'Elvinis Gunong',
    image: '/author/author-5.jpg',
    bio: 'Botanist and researcher focusing on the medicinal plants used by traditional healers in Sarawak.',
    contributions: 'Pages 45-50: Healing Leaves, Page 82: Botanical Index'
  },
  {
    id: 'farid-farhan',
    name: 'Farid Farhan',
    image: '/author/author-6.jpg',
    bio: 'Wildlife tracker and guide with over 20 years of experience navigating the deep jungles of Kalimantan.',
    contributions: 'Pages 36-39: Tracking the Orangutan, Pages 75-78: Survival Skills'
  },
  {
    id: 'chua-yan-ping',
    name: 'Chua Yan Ping',
    image: '/author/author-7.jpg',
    bio: 'Avian enthusiast and ornithologist who has documented over 300 bird species across the island.',
    contributions: 'Pages 51-54: Wings of Wonder, Page 85: Birdwatching Hotspots'
  },
  {
    id: 'nathaline-ping',
    name: 'Nathaline Ping',
    image: '/author/author-8.jpg',
    bio: 'Conservation educator working with schools to inspire the next generation of environmental stewards.',
    contributions: 'Pages 63-66: Youth in Conservation, Page 90: Educational Resources'
  },
  {
    id: 'richard-thomas',
    name: 'Richard Thomas',
    image: '/author/author-9.jpg',
    bio: 'Adventure photographer and filmmaker capturing the adrenaline-pumping landscapes of Borneo.',
    contributions: 'Pages 8-11: The Pinnacles of Mulu, Pages 95-100: Visual Journey'
  },
  {
    id: 'darrysie-salapan',
    name: 'Darrysie Salapan',
    image: '/author/author-10.jpg',
    bio: 'Herpetologist fascinated by the diverse reptiles and amphibians thriving in the Bornean undergrowth.',
    contributions: 'Pages 29-32: Slithering Wonders, Page 88: Amphibian Night Walks'
  }
];

export function AuthorsPage() {
  const [selectedAuthor, setSelectedAuthor] = useState<typeof authors[0] | null>(null);

  return (
    <div className="bg-brand-light min-h-screen py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand-moss/5 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[30%] rounded-full bg-brand-highlight/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brand-header/5 text-brand-highlight text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-6"
          >
            Meet The Contributors
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-brand-header mb-6"
          >
            Our Authors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-header/60 max-w-2xl mx-auto text-lg font-light"
          >
            Discover the passionate individuals behind the Borneo Nature Travel Guide. 
            Each author brings their unique expertise and love for Borneo's incredible ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedAuthor(author)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-brand-header/5 cursor-pointer group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-header/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-serif text-2xl mb-1">{author.name}</h3>
                  <div className="w-8 h-1 bg-brand-highlight rounded-full transition-all duration-500 group-hover:w-16" />
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
              className="fixed inset-0 bg-brand-header/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-[2rem] shadow-2xl z-[101] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedAuthor(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-brand-header transition-colors"
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
                
                <h2 className="text-4xl md:text-5xl font-serif text-brand-header mb-6">
                  {selectedAuthor.name}
                </h2>
                
                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header/40 mb-3">About</h4>
                  <p className="text-brand-header/70 leading-relaxed text-lg">
                    {selectedAuthor.bio}
                  </p>
                </div>
                
                <div className="bg-brand-sand p-6 rounded-2xl border border-brand-header/5">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-brand-highlight" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-header">E-Book Contributions</h4>
                  </div>
                  <p className="text-brand-header/80 font-medium">
                    {selectedAuthor.contributions}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
