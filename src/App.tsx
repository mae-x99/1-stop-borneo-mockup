import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Info, 
  Waves, 
  Tent, 
  Trees, 
  Camera, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  X,
  Car,
  Plane,
  Home,
  Eye,
  Calendar,
  User,
  Anchor,
  Binoculars,
  Bike,
  ArrowRight,
  Search,
  Play,
  Share2,
  FileText,
  BookOpen,
  Heart,
  MessageCircle,
  Send,
  Copy,
  ListChecks,
  Quote
} from 'lucide-react';

import { EBookPage } from './components/EBookPage';
import { AuthorsPage } from './components/AuthorsPage';
import { ContactPage } from './components/ContactPage';
import { FAQPage } from './components/FAQPage';
import { SabahPage } from './components/SabahPage';
import { SarawakPage } from './components/SarawakPage';
import { KalimantanPage } from './components/KalimantanPage';
import { BruneiPage } from './components/BruneiPage';
import { OurStoryPage } from './components/OurStoryPage';
import { ArticlePage } from './components/ArticlePage';
import BorneoMap from './components/BorneoMap';

const mapRegions = [
  {
    id: 'sabah',
    name: 'Sabah',
    x: 72,
    y: 20,
    color: 'bg-amber-500',
    pins: [
      { name: 'Kinabalu Park', x: 66, y: 15 },
      { name: 'Danum Valley', x: 78, y: 23 },
      { name: 'Sipadan', x: 86, y: 28 },
      { name: 'Sepilok', x: 78, y: 17 },
    ]
  },
  {
    id: 'sarawak',
    name: 'Sarawak',
    x: 40,
    y: 40,
    color: 'bg-emerald-500',
    pins: [
      { name: 'Mulu Caves', x: 52, y: 30 },
      { name: 'Bako National Park', x: 28, y: 50 },
      { name: 'Kuching', x: 24, y: 53 },
    ]
  },
  {
    id: 'brunei',
    name: 'Brunei',
    x: 55,
    y: 23,
    color: 'bg-yellow-400',
    pins: [
      { name: 'Ulu Temburong', x: 57, y: 25 },
      { name: 'Bandar Seri Begawan', x: 54, y: 21 },
    ]
  },
  {
    id: 'kalimantan',
    name: 'Kalimantan',
    x: 50,
    y: 65,
    color: 'bg-teal-600',
    pins: [
      { name: 'Tanjung Puting', x: 35, y: 75 },
      { name: 'Derawan Islands', x: 80, y: 42 },
      { name: 'Banjarmasin', x: 52, y: 85 },
    ]
  }
];

function InteractiveBorneoMap() {
  const [hoveredRegion, setHoveredRegion] = React.useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square bg-[#e8f0eb] rounded-[3rem] overflow-hidden border border-brand-header/10 group shadow-inner">
      {/* Detailed Borneo Island Shape */}
      <svg className="absolute inset-0 w-full h-full drop-shadow-2xl p-4" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="borneo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F7942" />
            <stop offset="100%" stopColor="#1A4731" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        <path 
          d="M 25 55 L 20 53 L 15 56 L 14 62 L 16 68 L 20 74 L 28 80 L 35 83 L 45 85 L 52 90 L 58 92 L 64 88 L 68 82 L 72 75 L 76 65 L 80 55 L 83 45 L 84 38 L 82 34 L 87 31 L 88 28 L 85 25 L 82 18 L 76 12 L 72 8 L 66 11 L 62 15 L 58 19 L 55 22 L 52 25 L 48 30 L 42 36 L 36 42 L 30 48 Z" 
          fill="url(#borneo-grad)" 
          stroke="#2D6A4F" 
          strokeWidth="0.5" 
          strokeLinejoin="round"
          filter="url(#shadow)"
          className="transition-all duration-700 group-hover:scale-[1.02] origin-center"
        />
      </svg>

      {/* Connecting Lines Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <AnimatePresence>
          {mapRegions.map((region) => 
            hoveredRegion === region.id && region.pins.map((pin, i) => (
              <motion.line
                key={`line-${pin.name}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                x1={`${region.x}%`}
                y1={`${region.y}%`}
                x2={`${pin.x}%`}
                y2={`${pin.y}%`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="text-brand-dark"
              />
            ))
          )}
        </AnimatePresence>
      </svg>

      {/* Regions and Pins */}
      {mapRegions.map((region) => (
        <div key={region.id}>
          {/* Region Marker */}
          <div 
            className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <div className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-xl border-4 border-white transition-transform duration-300 ${hoveredRegion === region.id ? 'scale-110' : 'scale-100'}`}>
              <div className={`w-full h-full rounded-full ${region.color} flex items-center justify-center text-white`}>
                <MapPin className="w-5 h-5" />
              </div>
              
              {/* Pulse effect */}
              {hoveredRegion !== region.id && (
                <div className={`absolute inset-0 rounded-full ${region.color} animate-ping opacity-20`} />
              )}
              
              {/* Region Label */}
              <div className={`absolute top-full mt-3 px-4 py-1.5 bg-brand-dark text-white text-[10px] font-bold tracking-widest uppercase rounded-full whitespace-nowrap transition-all duration-300 ${hoveredRegion === region.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {region.name}
              </div>
            </div>
          </div>

          {/* Pins for this region */}
          <AnimatePresence>
            {hoveredRegion === region.id && region.pins.map((pin, i) => (
              <motion.div
                key={pin.name}
                initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute z-20 pointer-events-none"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${region.color} shadow-[0_0_15px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center`}>
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                  <div className="mt-2 px-3 py-1 bg-white/95 backdrop-blur-sm text-brand-dark text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap border border-brand-header/5">
                    {pin.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const CategoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [
    "https://picsum.photos/seed/cat1/800/600",
    "https://picsum.photos/seed/cat2/800/600",
    "https://picsum.photos/seed/cat3/800/600",
    "https://picsum.photos/seed/cat4/800/600"
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl">
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            className="w-full h-full object-cover flex-shrink-0" 
            alt={`Category ${i + 1}`} 
            referrerPolicy="no-referrer" 
          />
        ))}
      </div>
      
      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-highlight hover:scale-110 transition-all border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-brand-highlight hover:scale-110 transition-all border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = React.useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
      setIsMenuOpen(false); // Close mobile menu on navigation
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const articles = [
    {
      title: "From Myth to Memory: Two Historic Orangutan Moments in Tawau Hills Park",
      date: "November 23, 2025",
      category: "Articles",
      excerpt: "Recent evidence of orangutans in Tawau Hills Park! This including a firsthand sighting and a historic camera trap image that provides crucial data for conservation efforts...",
      image: "https://picsum.photos/seed/orangutan/800/600"
    },
    {
      title: "A Story of Ledumin Deraman: From POACHER turn Guide | PROTECTOR of Borneo’s Wildlife!",
      date: "November 22, 2025",
      category: "Articles",
      excerpt: "From poacher to protector, Ledumin Deraman’s journey is nothing short of remarkable. Once hunting wildlife illegally, he now guides visitors through Borneo’s rainforests...",
      image: "https://picsum.photos/seed/protector/800/600"
    },
    {
      title: "My Life in Tawau Hills Park: The Story of a Lady Ecologist!",
      date: "November 8, 2025",
      category: "Articles",
      excerpt: "The forest is my classroom, my home, and my inspiration! Every step reminds me why its beauty is worth protecting!",
      image: "https://picsum.photos/seed/ecologist/800/600"
    },
    {
      title: "The Founder’s Top 10 Wildlife of Borneo | 1StopBorneo Wildlife",
      date: "October 26, 2025",
      category: "Articles",
      excerpt: "Discover Borneo’s most extraordinary wildlife through the eyes of 1StopBorneo Wildlife founder Shavez Cheem: From flying frogs to ghost cats.",
      image: "https://picsum.photos/seed/wildlife/800/600"
    },
    {
      title: "Mulu Pinnacles vs. Mt. Kinabalu",
      date: "October 21, 2025",
      category: "Articles",
      excerpt: "Compare two of Borneo’s most iconic hiking adventures! Mulu Pinnacles in Sarawak and Mount Kinabalu in Sabah. Discover their unique trails...",
      image: "https://picsum.photos/seed/hiking/800/600"
    },
    {
      title: "160 WINGS OF WONDER IN TAWAU!",
      date: "October 14, 2025",
      category: "Articles",
      excerpt: "Borneo Nature Travel Guide Discover the breathtaking beauty of Tawau’s avian paradise with ‘160 Wings of Wonder.’ This guide celebrates...",
      image: "https://picsum.photos/seed/birds/800/600"
    }
  ];

  const conservationTrips = [
    {
      title: "Kinabalu Park Sayap",
      tagline: "Conservation Trip",
      description: "Be part of a unique conservation journey to Kinabalu Park – Sayap, a quiet highland escape tucked away in Kota Belud. Wake up to misty mountain views, explore mossy forests, and enjoy the peace of highland life while making a real impact.",
      image: "https://picsum.photos/seed/kinabalu/800/600"
    },
    {
      title: "Beluran Safari",
      tagline: "Protect Wildlife, Experience the Wild",
      description: "Dive into the wild heart of Sabah at the Beluran Safari Conservation Trip! This trip offers a rare chance to assist in wildlife conservation efforts in a lesser, known yet biodiversity rich region.",
      image: "https://picsum.photos/seed/safari/800/600"
    },
    {
      title: "Tawau Hills Park",
      tagline: "Explore, Conserve, and Reconnect",
      description: "Join us on an unforgettable conservation adventure to Tawau Hills Park, home to lush rainforests, Sulphur springs, and the world’s tallest tropical trees!",
      image: "https://picsum.photos/seed/tawau/800/600"
    }
  ];

  const videoRoutes = [
    { title: "Tawau To Miri Trip", duration: "00:42", image: "https://picsum.photos/seed/route1/400/225" },
    { title: "Lawa, Ba’kelalan, Miri Trip", duration: "01:15", image: "https://picsum.photos/seed/route2/400/225" },
    { title: "Sandakan Trip", duration: "00:25", image: "https://picsum.photos/seed/route3/400/225" },
    { title: "Kuching (National Park)", duration: "00:58", image: "https://picsum.photos/seed/route4/400/225" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-light text-brand-header/60 py-1.5 border-b border-brand-header/10">
        <div className="container-custom flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.25em]">
          <div className="flex items-center gap-8">
            <a href="mailto:info@1stopborneo.com" className="flex items-center gap-2 hover:text-brand-highlight transition-all duration-300 group">
              <Mail className="w-2.5 h-2.5 group-hover:scale-110 transition-transform" />
              <span className="opacity-80 group-hover:opacity-100">info@1stopborneo.com</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[8px]">Follow our journey</span>
            <div className="flex items-center gap-4 border-l border-brand-header/20 pl-5">
              <a href="#" className="hover:text-brand-highlight transition-all duration-300 hover:-translate-y-0.5"><Facebook className="w-3 h-3" /></a>
              <a href="#" className="hover:text-brand-highlight transition-all duration-300 hover:-translate-y-0.5"><Instagram className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(26,71,49,0.08)] py-2' 
          : 'bg-brand-light py-3'
      } border-b border-brand-header/[0.05]`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-4 group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://1stopborneoguide.com/stg7x92b/wp-content/uploads/2025/11/1SBW-latest-TRANSPARENT-with-white-border-scaled.png" 
                  alt="1StopBorneo Logo" 
                  className="h-8 lg:h-12 w-auto drop-shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hidden xl:block">
                <div className="text-brand-header font-bold text-xs tracking-[0.3em] leading-none mb-1">1STOPBORNEO</div>
                <div className="text-brand-highlight font-medium text-[8px] tracking-[0.4em] leading-none opacity-80">CONSERVATION GUIDE</div>
              </div>
            </a>
          </div>

          {/* Navigation & Search Container */}
          <div className="flex items-center gap-10">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.25em] text-brand-header/50">
              <a href="#" className="hover:text-brand-header transition-all duration-500 relative group py-1">
                Home
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-highlight transition-all duration-500 group-hover:w-full"></span>
              </a>
              
              {/* Destination Dropdown - Mega Style */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1.5 hover:text-brand-header transition-all duration-500 uppercase group-hover:text-brand-highlight">
                  Destination
                  <ChevronDown className="w-2.5 h-2.5 group-hover:rotate-180 transition-transform duration-500" />
                </button>
                
                <div className="absolute top-full -left-10 w-[480px] bg-white/98 backdrop-blur-2xl border border-brand-header/10 rounded-2xl shadow-[0_20px_50px_rgba(26,71,49,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-6 group-hover:translate-y-2 z-[60] overflow-hidden">
                  <div className="grid grid-cols-2 p-6 gap-2">
                    {[
                      { name: 'Sabah', desc: 'Land Below The Wind' },
                      { name: 'Sarawak', desc: 'Land of the Hornbills' },
                      { name: 'Kalimantan', desc: 'The Great Jungle' },
                      { name: 'Brunei', desc: 'Abode of Peace' }
                    ].map((item) => (
                      <a 
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`} 
                        className="flex flex-col p-4 rounded-xl hover:bg-brand-header/[0.03] transition-all group/item border border-transparent hover:border-brand-header/5"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-brand-header group-hover/item:text-brand-highlight transition-colors text-[11px] tracking-widest">{item.name}</span>
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-brand-highlight" />
                        </div>
                        <span className="text-[8px] text-brand-header/30 tracking-widest italic">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#e-book" className="hover:text-brand-header transition-all duration-500 relative group py-1">
                E-BOOK
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-highlight transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#article" className="hover:text-brand-header transition-all duration-500 relative group py-1">
                Article
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-highlight transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#authors" className="hover:text-brand-header transition-all duration-500 relative group py-1">
                Author's
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-highlight transition-all duration-500 group-hover:w-full"></span>
              </a>
              
              {/* About Us Dropdown */}
              <div className="relative group py-1">
                <button className="flex items-center gap-1.5 hover:text-brand-header transition-all duration-500 uppercase group-hover:text-brand-highlight">
                  About Us
                  <ChevronDown className="w-2.5 h-2.5 group-hover:rotate-180 transition-transform duration-500" />
                </button>
                
                <div className="absolute top-full -left-4 w-48 bg-white/98 backdrop-blur-2xl border border-brand-header/10 rounded-2xl shadow-[0_20px_50px_rgba(26,71,49,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-6 group-hover:translate-y-2 z-[60] overflow-hidden">
                  <div className="flex flex-col p-2">
                    <a 
                      href="#our-story" 
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-header/[0.03] transition-all group/item border border-transparent hover:border-brand-header/5"
                    >
                      <span className="text-brand-header group-hover/item:text-brand-highlight transition-colors text-[10px] tracking-widest uppercase">Our Story & Mission</span>
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-brand-highlight" />
                    </a>
                    <a 
                      href="#contact" 
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-header/[0.03] transition-all group/item border border-transparent hover:border-brand-header/5"
                    >
                      <span className="text-brand-header group-hover/item:text-brand-highlight transition-colors text-[10px] tracking-widest uppercase">Contact Us</span>
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-brand-highlight" />
                    </a>
                    <a 
                      href="#faq" 
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-header/[0.03] transition-all group/item border border-transparent hover:border-brand-header/5"
                    >
                      <span className="text-brand-header group-hover/item:text-brand-highlight transition-colors text-[10px] tracking-widest uppercase">FAQ</span>
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0 text-brand-highlight" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center border-l border-brand-header/10 pl-10">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="SEARCH..." 
                  className="w-32 lg:w-48 bg-transparent border-b border-brand-header/10 py-1 pl-8 pr-2 text-[9px] font-bold tracking-[0.2em] text-brand-header placeholder-brand-header/20 focus:outline-none focus:border-brand-highlight focus:w-48 lg:focus:w-64 transition-all duration-700"
                />
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-header/20 group-focus-within:text-brand-highlight transition-colors" />
              </div>
            </div>

            {/* Mobile Menu Toggle & Search */}
            <div className="flex items-center gap-4 lg:hidden">
              <button className="p-2 text-brand-header/40 hover:text-brand-highlight transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button 
                className="relative w-10 h-10 flex items-center justify-center text-brand-header group"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-5 h-4">
                  <span className={`absolute left-0 w-full h-[1.5px] bg-brand-header transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                  <span className={`absolute left-0 w-full h-[1.5px] bg-brand-header transition-all duration-300 top-2 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute left-0 w-full h-[1.5px] bg-brand-header transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-0 top-[73px] bg-white/98 backdrop-blur-3xl p-10 flex flex-col gap-8 shadow-2xl text-brand-header z-[100] overflow-y-auto"
            >
              <div className="relative w-full mb-4">
                <input 
                  type="text" 
                  placeholder="SEARCH DESTINATIONS..." 
                  className="w-full bg-brand-header/[0.03] border border-brand-header/10 rounded-2xl py-5 pl-14 pr-4 text-[10px] font-bold tracking-[0.2em] text-brand-header placeholder-brand-header/20 focus:outline-none focus:bg-brand-header/5 focus:border-brand-highlight/50 transition-all"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-header/20" />
              </div>
              
              <div className="flex flex-col gap-8">
                <a href="#" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight transition-colors border-b border-brand-header/5 pb-4">Home</a>
                
                {/* Mobile Destination Dropdown */}
                <div className="flex flex-col gap-6">
                  <button 
                    onClick={() => setIsDestDropdownOpen(!isDestDropdownOpen)}
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight text-left transition-colors border-b border-brand-header/5 pb-4"
                  >
                    Destination
                    <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isDestDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDestDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-6 pl-6 border-l border-brand-highlight/30 overflow-hidden"
                    >
                      {[
                        { name: 'Sabah', desc: 'Land Below The Wind' },
                        { name: 'Sarawak', desc: 'Land of the Hornbills' },
                        { name: 'Kalimantan', desc: 'The Great Jungle' },
                        { name: 'Brunei', desc: 'Abode of Peace' }
                      ].map((item) => (
                        <a 
                          key={item.name}
                          href={`#${item.name.toLowerCase()}`} 
                          className="flex flex-col gap-1 group"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header group-hover:text-brand-highlight transition-colors">{item.name}</span>
                          <span className="text-[8px] text-brand-header/30 lowercase tracking-widest italic">{item.desc}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>

                <a href="#e-book" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight transition-colors border-b border-brand-header/5 pb-4">E-BOOK</a>
                <a href="#article" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight transition-colors border-b border-brand-header/5 pb-4">Article</a>
                <a href="#authors" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight transition-colors border-b border-brand-header/5 pb-4">Author's</a>
                
                <div className="flex flex-col gap-6 border-b border-brand-header/5 pb-4">
                  <button 
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-highlight transition-colors"
                  >
                    About Us
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isAboutDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-6 pl-6 border-l border-brand-highlight/30 overflow-hidden"
                      >
                        <a 
                          href="#our-story" 
                          className="flex flex-col gap-1 group"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header group-hover:text-brand-highlight transition-colors">Our Story & Mission</span>
                        </a>
                        <a 
                          href="#contact" 
                          className="flex flex-col gap-1 group"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header group-hover:text-brand-highlight transition-colors">Contact Us</span>
                        </a>
                        <a 
                          href="#faq" 
                          className="flex flex-col gap-1 group"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-header group-hover:text-brand-highlight transition-colors">FAQ</span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-auto pt-10 flex items-center gap-6 border-t border-brand-header/5">
                <a href="#" className="text-brand-header/40 hover:text-brand-highlight transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-brand-header/40 hover:text-brand-highlight transition-colors"><Instagram className="w-5 h-5" /></a>
                <div className="ml-auto text-[8px] font-bold tracking-[0.3em] text-brand-header/20 uppercase">1StopBorneo Guide</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {currentHash === '#e-book' ? (
        <EBookPage />
      ) : currentHash === '#authors' ? (
        <AuthorsPage />
      ) : currentHash === '#contact' ? (
        <ContactPage />
      ) : currentHash === '#faq' ? (
        <FAQPage />
      ) : currentHash === '#our-story' ? (
        <OurStoryPage />
      ) : currentHash === '#article' ? (
        <ArticlePage />
      ) : currentHash === '#sabah' ? (
        <SabahPage />
      ) : currentHash === '#sarawak' ? (
        <SarawakPage />
      ) : currentHash === '#kalimantan' ? (
        <KalimantanPage />
      ) : currentHash === '#brunei' ? (
        <BruneiPage />
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="Mount-Kinabalu.jpg" 
            alt="Borneo Nature" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-highlight text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8 shadow-lg shadow-brand-highlight/20">
              Official Nature Guide
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white leading-[0.9] mb-10 tracking-tight">
              Borneo Nature <br />
              <span className="italic font-normal text-brand-highlight">Travel Guide</span>
            </h1>
            <div className="flex flex-wrap gap-6">
              <a href="#e-book" className="px-10 py-5 bg-brand-header text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-brand-highlight transition-all shadow-2xl shadow-brand-header/30 flex items-center gap-3 group">
                DOWNLOAD OUR E-BOOK NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-xs tracking-[0.2em] hover:bg-white/20 transition-all">
                EXPLORE DESTINATIONS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* The Borneo Map Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-light to-[#e8f0eb]">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-moss/5 blur-3xl" />
            <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-highlight/5 blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Geography & Nature</span>
                  <h2 className="text-5xl md:text-6xl font-serif leading-tight">The Borneo Map</h2>
                </div>
                <p className="text-brand-header/70 text-lg leading-relaxed font-light">
                  Borneo, the world’s third-largest island, is shared by Malaysia, Indonesia, and Brunei. 
                  It’s famed for lush rainforests, rare wildlife like orangutans, and promises rich eco-tourism and unforgettable adventures.
                </p>
              </motion.div>
            </div>

            <div className="">
              <BorneoMap/>
            </div>

          </div>
        </section>

        {/* Choose Your Destination */}
        <section className="py-24 relative bg-gradient-to-b from-white to-brand-accent/40 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8B5E34 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[60%] rounded-full bg-brand-sand/10 blur-3xl" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-brand-moss/10 blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-16 space-y-4">
              <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Where to go?</span>
              <h2 className="text-5xl md:text-6xl font-serif">Choose Your Destination</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['SABAH', 'SARAWAK', 'KALIMANTAN', 'BRUNEI'].map((dest, i) => (
                <motion.a 
                  key={dest}
                  href={`#${dest.toLowerCase()}`}
                  whileHover={{ y: -15, rotate: 3 }}
                  className="relative aspect-square rounded-[2.5rem] overflow-hidden group shadow-xl"
                >
                  <img 
                    src={`https://picsum.photos/seed/dest-${i}/600/800`} 
                    alt={dest} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <div className="w-full h-[1px] bg-white/60 mb-4 transition-all duration-500 group-hover:bg-brand-highlight"></div>
                    <h3 className="text-white text-3xl font-serif tracking-widest">{dest}</h3>
                    <div className="w-full h-[1px] bg-white/60 mt-4 transition-all duration-500 group-hover:bg-brand-highlight"></div>
                  </div>
                  <div className="absolute bottom-8 left-0 w-full flex justify-center z-10">
                    <span className="text-brand-highlight text-[9px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">Explore Region</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Web Article Features Section (Editorial Design) */}
        <section className="py-32 relative bg-[#F9F8F6] overflow-hidden" id="article">
          {/* Background accents */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-header/10 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/50 blur-3xl rounded-full pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Web Article Features</span>
                  <span className="px-3 py-1 bg-brand-header/5 text-brand-header text-[9px] font-bold uppercase tracking-widest rounded-full">Updates Monthly</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                  This Month: <span className="italic text-brand-highlight">Mystique of Kinabalu</span>
                </h2>
              </div>
              <button className="px-8 py-4 border border-brand-header/10 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-brand-header hover:text-white transition-all whitespace-nowrap">
                PAST THEMES
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              {/* 1. Feature Article (Large Hero) */}
              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden group shadow-sm"
              >
                <img src="https://picsum.photos/seed/kinabalu-feature/1200/800" alt="Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-4/5">
                  <span className="inline-block px-4 py-1.5 bg-brand-highlight text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">Feature Article</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight group-hover:text-brand-highlight transition-colors">Conquering the Peak: A Complete Guide to Mount Kinabalu</h3>
                  <p className="text-white/70 text-sm font-light line-clamp-2 md:line-clamp-none">Everything you need to know about the trails, the permits, and the breathtaking views from the summit of Southeast Asia's highest peak.</p>
                </div>
              </motion.a>

              {/* 2. Informative Articles (Sidebar) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-4 h-auto lg:h-[500px]"
              >
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-brand-header/5 shadow-lg h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-serif text-2xl text-brand-header">Related Guides</h4>
                    <FileText className="w-5 h-5 text-brand-highlight" />
                  </div>
                  <div className="space-y-5 flex-grow">
                    {[
                      { img: "flora", tag: "Flora & Fauna", title: "Discovering Pitcher Plants of the Alpine Meadow" },
                      { img: "guide", tag: "Preparation", title: "Choosing the Right Mountain Guide for Your Pace" },
                      { img: "hotspring", tag: "Surrounds", title: "Relaxing at Poring Hot Springs Post-Climb" }
                    ].map((article, idx) => (
                      <a href="#" key={idx} className="flex gap-5 items-center group">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                          <img src={`https://picsum.photos/seed/${article.img}/200/200`} alt={article.tag} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <span className="text-[9px] text-brand-highlight font-bold uppercase tracking-widest mb-2 block">{article.tag}</span>
                          <h5 className="font-serif text-base text-brand-header group-hover:text-brand-highlight transition-colors leading-snug">{article.title}</h5>
                        </div>
                      </a>
                    ))}
                  </div>
                  <button className="w-full mt-6 py-4 border border-brand-header/10 rounded-xl text-[10px] font-bold tracking-[0.2em] text-brand-header hover:bg-brand-header hover:text-white transition-all">
                    VIEW ALL GUIDES
                  </button>
                </div>
              </motion.div>

              {/* 3. Listicle */}
              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-8 relative h-[400px] rounded-[2rem] overflow-hidden group shadow-lg"
              >
                <img src="https://picsum.photos/seed/kinabalu-gear/1000/600" alt="Gear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-header/80 group-hover:bg-brand-header/70 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">Listicle</span>
                    <ListChecks className="w-8 h-8 text-white/30" />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -right-4 -bottom-10 text-[180px] font-serif font-black text-white/5 leading-none select-none pointer-events-none">10</div>
                    <h4 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-snug max-w-md">Essential Items You Must Bring for the Climb</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-highlight uppercase tracking-[0.2em]">
                      Read The List <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* 4. E-Book Promotion */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-4 bg-gradient-to-br from-[#1a4731] to-[#0d291b] p-10 rounded-[2rem] border border-white/10 shadow-xl shadow-[#1a4731]/20 relative overflow-hidden group flex flex-col items-center justify-center text-center h-[400px]"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
                
                <span className="px-3 py-1 bg-emerald-400/20 text-emerald-300 border border-emerald-400/20 text-[9px] font-bold uppercase tracking-widest rounded-full mb-8 relative z-10">Available Now</span>
                
                <div className="w-24 h-32 bg-white/10 backdrop-blur-md shadow-2xl rounded-r-lg border-l-4 border-emerald-400 flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  <BookOpen className="w-8 h-8 text-emerald-100" />
                </div>

                <h4 className="text-2xl font-serif text-white mb-3 relative z-10 drop-shadow-md">Kinabalu Field Guide</h4>
                <p className="text-emerald-100/80 text-sm font-light mb-8 max-w-xs relative z-10">A comprehensive downloadable e-book featuring exclusive maps, packing lists, and local contacts.</p>
                
                <button className="px-8 py-4 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-400/40 hover:-translate-y-1 transition-all duration-300 w-full max-w-xs relative z-10">
                  Download Now
                </button>
              </motion.div>

              {/* 5. Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-12 bg-white p-8 md:p-12 rounded-[2rem] border border-brand-header/5 shadow-lg"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 border-b border-brand-header/5 pb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Social Wall</span>
                      <span className="px-3 py-1 bg-brand-header/5 text-brand-header/40 text-[8px] font-bold uppercase tracking-widest rounded-full">When Ready</span>
                    </div>
                    <h3 className="text-4xl font-serif text-brand-header">Connect & Discover</h3>
                  </div>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 bg-brand-header/5 rounded-full text-[10px] font-bold text-brand-header uppercase tracking-[0.2em] hover:bg-brand-highlight hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" /> Follow @1StopBorneo
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Reel Simulation */}
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group bg-black shadow-md cursor-pointer">
                      <img src="https://picsum.photos/seed/reel-kinabalu/400/500" alt="Reel" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-3">
                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center"><Heart className="w-4 h-4 text-white" /></div>
                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center"><MessageCircle className="w-4 h-4 text-white" /></div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-2 py-1 bg-brand-highlight text-white text-[8px] font-bold uppercase tracking-widest rounded mb-2 inline-block">Reel</span>
                        <p className="text-white text-sm font-medium line-clamp-2">Breathtaking sunrise from the summit! 🌅 #Kinabalu</p>
                      </div>
                    </div>
                  </div>

                  {/* Carousel Simulation */}
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group bg-gray-100 shadow-md cursor-pointer">
                      <img src="https://picsum.photos/seed/carousel-flora/400/500" alt="Carousel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                        <Copy className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 text-[8px] font-bold uppercase tracking-widest rounded mb-2 inline-block">Carousel</span>
                        <p className="text-white text-sm font-medium line-clamp-2">Unique Flora of the Alpine Region. Swipe to explore 👉</p>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      </div>
                    </div>
                  </div>

                  {/* Interview Simulation */}
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group bg-brand-header shadow-md cursor-pointer">
                      <img src="https://picsum.photos/seed/interview-guide/400/500" alt="Interview" className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-brand-highlight flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <div>
                          <h4 className="text-white font-serif text-xl leading-snug mb-4">"The mountain has a spirit you must respect."</h4>
                          <div className="h-px w-12 bg-brand-highlight mb-4"></div>
                          <p className="text-white/70 text-xs font-light">Q&A with veteran guide Junaidi</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What-to-do Simulation */}
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group bg-[#f4f9f5] border border-brand-header/10 shadow-md cursor-pointer flex flex-col items-center justify-center p-8 text-center">
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/50 transition-colors duration-500" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-brand-highlight/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-highlight transition-all duration-500">
                          <ListChecks className="w-8 h-8 text-brand-highlight group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-brand-highlight text-[9px] font-bold uppercase tracking-widest mb-2">Save This</span>
                        <h4 className="text-brand-header font-serif text-2xl mb-4 leading-snug">Top 5 Things To Do Post-Climb</h4>
                        <p className="text-brand-header/60 text-xs font-light">Essential recovery tips before heading to the airport.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-brand-header text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Explore by Interest</span>
                  <h2 className="text-5xl md:text-6xl font-serif text-white">Categories</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-brand-highlight font-serif italic text-2xl">Destination</h3>
                    <ul className="space-y-4">
                      {['Island', 'Waterfall', 'Camping / Glamping'].map((item, i) => (
                        <li key={item} className="flex items-center gap-4 group cursor-pointer">
                          <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-brand-highlight group-hover:border-brand-highlight transition-all">{i+1}</span>
                          <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-brand-highlight font-serif italic text-2xl">Animal</h3>
                    <ul className="space-y-4">
                      {['Herpers', 'Birding', 'Mammals Watching'].map((item, i) => (
                        <li key={item} className="flex items-center gap-4 group cursor-pointer">
                          <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-brand-highlight group-hover:border-brand-highlight transition-all">{i+1}</span>
                          <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <CategoryCarousel />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-highlight rounded-full blur-[100px] opacity-20" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-highlight rounded-full blur-[100px] opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Trips Section */}
        <section className="py-24 relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light/50 to-transparent pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-20 space-y-4">
              <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.4em]">Make an Impact</span>
              <h2 className="text-5xl md:text-6xl font-serif">Conservation Trips</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {conservationTrips.map((trip, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-header/5 group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6 bg-brand-highlight px-4 py-2 rounded-full shadow-lg text-white">
                      <p className="text-[8px] font-bold uppercase tracking-widest">Upcoming Trip</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col flex-grow space-y-6">
                    <div className="space-y-3">
                      <span className="text-brand-highlight font-bold text-[9px] uppercase tracking-[0.4em]">{trip.tagline}</span>
                      <h3 className="text-2xl md:text-3xl font-serif leading-tight">{trip.title}</h3>
                    </div>
                    <p className="text-brand-header/70 text-sm leading-relaxed font-light flex-grow">
                      {trip.description}
                    </p>
                    <div className="pt-4 mt-auto">
                      <button className="w-full py-4 bg-brand-header text-white rounded-full font-bold text-[10px] tracking-[0.3em] hover:bg-brand-highlight transition-all shadow-md hover:shadow-xl">
                        VIEW ITINERARY
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      </>
      )}

      {/* Footer */}
      <footer className="bg-[#051109] text-white pt-16 pb-8 relative overflow-hidden border-t border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-moss/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12 items-center">
            {/* Brand Column */}
            <div className="lg:col-span-7 space-y-6 pr-0 lg:pr-12">
              <a href="/" className="inline-flex items-center gap-5 group">
                <img 
                  src="https://1stopborneoguide.com/stg7x92b/wp-content/uploads/2025/11/1SBW-latest-TRANSPARENT-with-white-border-scaled.png" 
                  alt="1StopBorneo Logo" 
                  className="h-16 w-auto drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-white font-bold text-xl tracking-[0.3em] leading-none mb-2">1STOPBORNEO</div>
                  <div className="text-emerald-400 font-medium text-[10px] tracking-[0.4em] leading-none">CONSERVATION GUIDE</div>
                </div>
              </a>
              <p className="text-white/60 text-base leading-relaxed max-w-xl font-light">
                Dedicated to the conservation of Borneo's unique wildlife and habitats. Join us in our mission to protect and preserve nature for future generations.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white text-white/70 transition-all duration-300 hover:-translate-y-1">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white text-white/70 transition-all duration-300 hover:-translate-y-1">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group/footer-card">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover/footer-card:scale-150 pointer-events-none" />
                
                <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-4 relative z-10">
                  <span className="w-8 h-px bg-emerald-500/50"></span>
                  Get in Touch
                </h4>
                <ul className="space-y-5 relative z-10">
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Call Us</span>
                      <a href="tel:+60128248052" className="text-white/90 hover:text-emerald-400 transition-colors text-sm font-medium">+60 12-824 8052</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                      <Mail className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Email Us</span>
                      <a href="mailto:1stopborneo@gmail.com" className="text-white/90 hover:text-emerald-400 transition-colors text-sm font-medium">1stopborneo@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Location</span>
                      <span className="text-white/90 text-sm font-medium">Tawau, Sabah, Malaysia</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
              © {new Date().getFullYear()} 1StopBorneo Guide. All rights reserved.
            </div>
            <div className="flex gap-8 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
