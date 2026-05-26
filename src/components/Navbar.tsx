import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
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
    { name: 'Products', href: '#products' },
    { name: 'B2B Service', href: '#b2b' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(2,132,199,0.06)] border-b border-brand-teal/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-18 sm:min-h-22 md:min-h-24 py-2">
            {/* Sacred Logo - Left Side */}
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => handleLinkClick('#hero')} className="flex items-center gap-2 group cursor-pointer bg-transparent border-0">
                <img
                  src={aabsharLogo}
                  alt="Aabshar Mineral Water Logo"
                  className="h-16 sm:h-20 md:h-26 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(2,132,199,0.08)]"
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
                    className={`font-medium text-sm transition-colors duration-200 cursor-pointer relative py-1 group ${
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
                className="relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-sm tracking-wide text-white rounded-full bg-linear-to-r from-brand-teal to-brand-aqua hover:brightness-110 shadow-[0_4px_16px_rgba(2,132,199,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-0"
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
                className="text-slate-700 hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-teal p-2 rounded-md"
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
              className="md:hidden bg-white/98 border-b border-brand-teal/10 backdrop-blur-lg overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? 'text-brand-teal bg-sky-50/80 font-bold border-l-4 border-brand-teal pl-2.5'
                          : 'text-slate-700 hover:text-brand-teal hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                       setIsOpen(false);
                       onOrderClick();
                    }}
                    className="flex items-center justify-center w-full px-5 py-3 text-base font-bold text-white bg-linear-to-r from-brand-teal to-brand-aqua rounded-xl shadow-lg hover:brightness-110 cursor-pointer"
                  >
                    <Droplets className="w-5 h-5 mr-2 text-white" />
                    Order Now (Rawalpindi & Islamabad)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
