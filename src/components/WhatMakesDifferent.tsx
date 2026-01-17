import { motion } from 'framer-motion';
import FloatingParticles from './FloatingParticles';

const WhatMakesDifferent = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Dark neon background */}
      <div className="absolute inset-0 bg-gradient-cosmic" />
      <FloatingParticles />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold mb-8 text-foreground"
        >
          What Makes <span className="gradient-text-turbo">FLOKI TURBO</span> Different
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-secondary mb-12 font-medium"
        >
          Built on belief, not noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4 text-xl md:text-2xl text-foreground/70"
        >
          <p>No roadmap hype.</p>
          <p>No forced narratives.</p>
          <p className="text-primary font-semibold text-glow-yellow pt-4">
            Just culture, speed, and community conviction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
