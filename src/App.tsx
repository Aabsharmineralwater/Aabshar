import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import B2B from './components/B2B';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BottomNav from './components/BottomNav';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedSize, setSelectedSize] = useState('500ml');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOrderProduct = (size: string) => {
    const WHATSAPP_NUMBER = '923051999897';
    let message = '';
    if (size === '500ml' || size === '500 mL') {
      message = `Hi Aabshar! 💧\nI want to order the 500ml Mineral Water Bottles.\nPlease share pricing and delivery details.`;
    } else {
      message = `Hi Aabshar! 💧\nI want to order the 1.5 Litre Mineral Water Bottles.\nPlease share pricing and delivery details.`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-brand-teal selection:text-white relative">
      
      {/* Decoupled Real Mountain / Abshar scenery background */}
      <div className="site-bg-backdrop" role="presentation" />
      
      {/* Absolute background canvas overlays */}
      <div className="fixed top-0 inset-x-0 bottom-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-aqua/8 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '8000ms' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pb-16 md:pb-0">
        {/* Navbar */}
        <Navbar onOrderClick={() => {
          const WHATSAPP_NUMBER = '923051999897';
          const msg = `Hi Aabshar! 👋\nI want to place an order.\nPlease assist me.`;
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        }} />

        {/* Hero Section */}
        <Hero
          onOrderClick={() => {
            const WHATSAPP_NUMBER = '923051999897';
            const msg = `Hi Aabshar! 💧\nI saw your website and want to place an order.\nPlease share details about your 500ml and 1.5L bottles.`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
          }}
          onExploreClick={() => scrollToSection('#products')}
        />

        {/* Trust signal stats banner */}
        <div className="bg-gradient-to-r from-white/60 via-sky-50/45 to-white/60 backdrop-blur-md border-y border-white/50 py-6 sm:py-8 font-sans overflow-hidden shadow-inner-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded bg-sky-200/50 text-brand-teal text-[10px] font-bold uppercase tracking-widest">
                  Quality Guaranteed
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                  Perfectly Balanced Premium Minerals for Daily Hydration
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3 font-semibold text-xs sm:text-sm text-slate-700">
                <span className="flex items-center gap-2">💧 Balanced Essential Minerals</span>
                <span className="flex items-center gap-2">✅ WHO Compliant Quality</span>
                <span className="flex items-center gap-2">🚚 Chilled Logistic Fleet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Catalogue side-by-side cards */}
        <Products onOrderProduct={handleOrderProduct} />

        {/* B2B Private Custom Label Branding Option */}
        <B2B onQuoteClick={() => {
          // Simply accept completed inquiry
        }} />

        {/* USP / Why Aabshar Section (About Us) */}
        <WhyUs />

        {/* Map tracker Area Delivery options */}
        <Delivery />

        {/* Reviews Testimonials Social Proof */}
        <Testimonials />

        {/* Interactive Ordering Form / Contact */}
        <OrderForm
          selectedSize={selectedSize}
          onSizeChange={(size) => setSelectedSize(size)}
        />

        {/* Footer */}
        <Footer onLinkClick={scrollToSection} />

        {/* Pulsing floating WhatsApp helper bottom-right */}
        <WhatsAppButton />

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNav onLinkClick={scrollToSection} />
      </div>

    </div>
  );
}
