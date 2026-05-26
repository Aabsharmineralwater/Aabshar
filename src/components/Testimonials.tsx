import { Quote, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import bottleImage from '../assets/images/aabshar_500ml_bottle_1779790971869.png';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Bilal Ahmed',
      location: 'Islamabad HQ',
      role: 'Corporate HR Director',
      quote: "We commissioned Aabshar custom-labeled bottles for our annual tech summit. The custom logo typography alignment was beautifully sharp and clean. Our board of directors specifically commented on the refreshing crispness of the water—best corporate service in the Federal Capital area.",
      rating: 5,
    },
    {
      name: 'Dr. Sara Khan',
      location: 'Saddar, Rawalpindi',
      role: 'Family Pediatrician',
      quote: "As a practicing healthcare specialist, the Total Dissolved Solids (TDS) value of drinking water is critical to cell hydration. Aabshar consistently delivers water at 120–160 TDS with perfect molecular purity. Having it delivered ice-cold to our clinics is a total game changer.",
      rating: 5,
    },
    {
      name: 'Zainab Malik',
      location: 'Fateh Jang',
      role: 'Luxury Event Planner',
      quote: "Managing premium marquees means every table detail must scream perfection. Aabshar's 500ml and 1.5L bottles match our high-end floral sets effortlessly. Their chilled vans arrive precisely on schedule, meaning the mineral water is served at the absolute correct temperature.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Top Wave Segment */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Background visual decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-14 w-80 h-80 bg-brand-aqua/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[30%] bottom-8 w-3.5 h-3.5 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute right-[25%] bottom-16 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:1.5s]" />
      </div>

      {/* Subtle Aabshar bottle watermark floating behind review cards */}
      <div className="absolute right-[-8%] top-[15%] opacity-15 sm:opacity-20 pointer-events-none select-none z-0">
        <img
          src={bottleImage}
          alt="Testimonials Purity Aura"
          className="h-[520px] w-auto animate-float object-contain filter blur-xs rotate-45"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-teal font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
            Social Proof & Trust
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Verified Aabshar Hydration Reviews
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-slate-600 text-base sm:text-lg mt-4"
          >
            Don’t just take our word for it. Read honest, real accounts from family pediatricians, corporate event planners, and business heads in Rawalpindi, Islamabad, and Fateh Jang.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:border-brand-teal/35 hover:bg-slate-50/50 transition-all duration-300 shadow-[0_4px_30px_rgba(2,132,199,0.03)] flex flex-col justify-between relative group"
            >
              {/* Decorative Quotation Symbol */}
              <div className="absolute top-6 right-8 text-sky-200/50 group-hover:text-brand-teal/10 transition-colors duration-350">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars container */}
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4.5 h-4.5 fill-amber-400 text-amber-400 animate-pulse"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>

                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-xs text-brand-teal mt-0.5 font-semibold">{rev.role}</p>
                </div>
                <div className="bg-sky-50 px-3 py-1 rounded-full border border-sky-150 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  📍 {rev.location}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Summary */}
        <div className="mt-16 text-center">
          <p className="font-sans text-slate-500 text-sm">
            🛡️ Daily checked in-house and third-party certified testing. Sourced in accordance with PCRWR requirements.
          </p>
        </div>

      </div>

      {/* Overlapping bottom waves transitioning into scheduling ordering system */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>
    </section>
  );
}
