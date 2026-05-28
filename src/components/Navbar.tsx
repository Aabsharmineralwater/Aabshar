import { useState, useEffect } from 'react';
import { Menu, X, Droplets, Phone, Mail, MapPin, Clock, Info, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import aabsharLogo from '../assets/images/regenerated_image_1779783054758.png';

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 240; // trigger offset
      const sections = ['#hero', '#products', '#b2b', '#about', '#contact'];
      
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Product', href: '#products' },
    { name: 'B2B service', href: '#b2b' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    // Close mobile menu immediately to prevent screen overlays blocking or messing up top offset height
    setIsOpen(false);
    
    // Smooth scroll with a slight delay so height collapses first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-white/75 backdrop-blur-md -webkit-backdrop-filter shadow-3d border-b border-white/20 inner-highlight py-2.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-18 sm:min-h-22 md:min-h-24 py-2">
            {/* Sacred Logo - Left Side */}
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => handleLinkClick('#hero')} className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 active:scale-95 transition-transform duration-200">
                <img
                  src={aabsharLogo}
                  alt="Aabshar Mineral Water Logo"
                  className="h-16 sm:h-20 md:h-26 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-medium text-sm transition-colors duration-200 cursor-pointer relative py-1 group nav-link-slide ${
                      isActive ? 'text-brand-teal font-semibold' : 'text-slate-600 hover:text-brand-teal'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-teal transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                id="navbar-cta"
                onClick={onOrderClick}
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-sm tracking-wide text-white rounded-full bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-110 shadow-btn-glow hover:shadow-btn-glow border-t border-white/30 press-scale transition-all duration-300 cursor-pointer"
              >
                <Droplets className="w-4 h-4 mr-2 text-white animate-pulse" />
                Order Now
              </button>
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <div className="flex md:hidden">
              <button
                id="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-teal p-2 rounded-md press-scale"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/90 backdrop-blur-md -webkit-backdrop-filter border-b border-brand-teal/10 overflow-y-auto max-h-[85vh] shadow-3d font-sans inner-highlight"
            >
              <div className="px-5 pt-5 pb-8 space-y-6">
                
                {/* 1. Brand Header with Logo & Tagline */}
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-sky-50 to-teal-50/40 rounded-2xl border border-sky-100">
                  <img
                    src={aabsharLogo}
                    alt="Aabshar Mineral Water Logo"
                    className="h-20 w-auto object-contain mb-2 drop-shadow-[0_2px_8px_rgba(2,132,199,0.1)]"
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="font-serif italic text-base font-bold text-brand-teal">
                    Pure. Natural. Refreshing.
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Premium Quality Balanced Mineral Water
                  </p>
                </div>

                {/* 2. Navigation Actions Grid */}
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2">
                    Navigation
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.href;
                      return (
                        <button
                          key={link.name}
                          onClick={() => handleLinkClick(link.href)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? 'text-brand-teal bg-sky-50/80 border-l-4 border-brand-teal pl-3'
                              : 'text-slate-700 hover:text-brand-teal hover:bg-slate-50 bg-slate-50/50'
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-brand-teal translate-x-0.5' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Redesigned Mobile "About Us" Section */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-brand-teal font-bold text-sm">
                    <Info className="w-4.5 h-4.5" />
                    <span>About Aabshar</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-left">
                    Aabshar is committed to delivering premium quality, WHO-compliant mineral water. Formulated with a perfectly balanced blend of essential natural minerals, it provides standard, crisp, health-centric hydration for you and your family every single day.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Minerals</p>
                      <p className="text-xs font-bold text-slate-800">Balanced</p>
                    </div>
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Quality</p>
                      <p className="text-xs font-bold text-slate-800">WHO Standard</p>
                    </div>
                  </div>
                </div>

                {/* 4. Redesigned "Contact Details" Section */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3.5">
                  <div className="flex items-center gap-2 text-brand-teal font-bold text-sm">
                    <Phone className="w-4.5 h-4.5" />
                    <span>Contact Details</span>
                  </div>
                  
                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-semibold text-slate-800">Location & Delivery Coverage</p>
                        <p className="text-slate-500 text-[11px]">Rawalpindi, Islamabad, Fateh Jang</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-semibold text-slate-800">Call Support</p>
                        <a href="tel:+923051999897" className="text-brand-teal font-bold hover:underline transition-all group flex items-center gap-1">
                          +92-305-1999897
                          <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-semibold text-slate-800">Email Address</p>
                        <a href="mailto:aabshar.org@gmail.com" className="text-brand-teal font-medium hover:underline">
                          aabshar.org@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div className="text-left">
                        <p className="font-semibold text-slate-800">Delivery Timings</p>
                        <p className="text-slate-500 text-[11px]">8:00 AM – 8:00 PM Daily</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Mobile Order Now CTA */}
                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOrderClick();
                    }}
                    className="flex items-center justify-center w-full px-5 py-3.5 text-base font-bold text-white bg-linear-to-r from-brand-teal to-brand-aqua rounded-xl shadow-[0_4px_16px_rgba(2,132,199,0.15)] hover:brightness-110 active:scale-98 transition-all cursor-pointer border-0"
                  >
                    <Droplets className="w-5 h-5 mr-2 text-white animate-bounce" />
                    Place Quick Order
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
