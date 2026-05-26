import { GlassWater, Droplet, Mountain, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import bottleImage from '../assets/images/aabshar_500ml_bottle_1779790971869.png';

export default function WhyUs() {
  const features = [
    {
      icon: <Droplet className="w-8 h-8 text-brand-teal" />,
      title: '120–160 TDS',
      badge: 'Perfect mineral balance',
      description: 'The sweet spot for cellular absorption. Perfectly balanced mineral composition with essential magnesium, calcium, and potassium ions to power your daily vitality.',
    },
    {
      icon: <GlassWater className="w-8 h-8 text-brand-teal" />,
      title: 'Pristine Purity',
      badge: 'Advanced Purification',
      description: 'Subjected to multi-stage filtration and molecular balancing to achieve absolute physical cleanliness, giving you a refreshing, premium daily hydration taste.',
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-teal" />,
      title: 'Cold Doorstep Delivery',
      badge: 'Fresh every time',
      description: 'Delivered in dedicated temperature-controlled vans. Your water reaches your home or office cold, crisp, and ready to immediately quench your thirst.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-teal" />,
      title: 'Lab Verified',
      badge: 'Quality you can trust',
      description: 'Subjected to rigorous daily testing at our state-of-the-art laboratory and verified by independent accredited institutions to exceed standard WHO guidelines.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Top Wave Divider Representing Pristine Flow */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Visual background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[8%] bottom-0 w-3 h-3 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute left-[25%] bottom-5 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:3s]" />
        <div className="absolute right-[12%] bottom-2 w-2 h-2 bg-brand-teal/20 rounded-full blur-xs animate-bubble-slow [animation-delay:1.5s]" />
        <div className="absolute right-[30%] bottom-8 w-5 h-5 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:4.5s]" />
      </div>

      {/* Subtly presented backdrop watermark Aabshar bottle */}
      <div className="absolute right-[-5%] top-[10%] opacity-15 sm:opacity-20 pointer-events-none select-none z-0">
        <img
          src={bottleImage}
          alt="Water Droplet Backdrop Sensation"
          className="h-[600px] w-auto animate-float object-contain filter blur-xs drop-shadow-[0_0_50px_rgba(2,132,199,0.1)] rotate-12"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-teal font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 inline-flex items-center gap-1.5"
          >
            <GlassWater className="w-4 h-4 animate-bounce" />
            The Pure Standard
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            What Makes Aabshar Premium & Pure?
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-slate-600 text-base sm:text-lg mt-4"
          >
            Aabshar is more than just drinking water — it is scientifically balanced mineral hydration designed for active lifestyles, perfectly crafted to elevate your daily well-being.
          </motion.p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-brand-teal/30 hover:bg-slate-50/50 transition-all duration-300 shadow-[0_4px_24px_rgba(2,132,199,0.03)] relative group overflow-hidden"
            >
              {/* Subtle accent hover indicator in card top corner */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-teal to-brand-aqua scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-all duration-300">
                {item.icon}
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
                {item.badge}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-teal transition-colors duration-200">
                {item.title}
              </h3>

              <p className="font-sans text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TDS Showcase Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 relative overflow-hidden shadow-[0_4px_30px_rgba(2,132,199,0.04)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="font-sans text-xs text-brand-teal font-bold tracking-widest uppercase bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full mb-4 inline-block">
                The Science of Balanced Hydration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Why mineral water between 120 and 160 TDS is medically ideal
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                TDS (Total Dissolved Solids) measures minerals dissolved in drinking water. Water with too low TDS (under 50) tastes flat, robs minerals from your body cells, and offers zero hydration. High TDS (over 300) leaves a chalky saline residue. Water with 120–160 TDS represents the pristine organic target: sweet taste, instant bio-absorption, and essential electrolytes.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-between sm:justify-around lg:justify-end gap-6 border-t lg:border-t-0 lg:border-l border-sky-200 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-left">
                <p className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-teal">
                  120+
                </p>
                <p className="font-sans text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Minimum TDS</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-teal">
                  160
                </p>
                <p className="font-sans text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Maximum TDS</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom overlapping wave divider flowing into Products catalog */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(100, 255, 218, 0.15)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(128, 255, 225, 0.08)" />
        </svg>
      </div>
    </section>
  );
}
