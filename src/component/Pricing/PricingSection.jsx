import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PricingCard from './PricingCard';

export default function PricingSection({ prices = [] }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-gradient-to-r from-defoGreen from-[-58.97%] to-defoBlue to-50% py-20 px-4 sm:px-6 lg:px-8 price-section-banner overflow-hidden"
    >
      {/* Background Ambient Glow Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#00f298]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header with Scroll Entrance */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="!text-white text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm font-poppins"
          >
            Ready to get started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl font-medium !text-emerald-100 font-poppins mt-3 drop-shadow-sm"
          >
            The only app you need for complete Entertainment
          </motion.p>
        </div>

        {/* 3D Scroll-Animated Pricing Cards Row */}
        <div className="flex justify-center items-stretch gap-6 sm:gap-8 flex-wrap max-w-6xl mx-auto">
          {prices.map((priceItem, index) => (
            <PricingCard
              key={priceItem._id || priceItem.id || index}
              priceItem={priceItem}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
