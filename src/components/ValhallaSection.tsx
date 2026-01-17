import { motion } from 'framer-motion';

const ValhallaSection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-cosmic" />
      <div className="absolute inset-0 stars" />
      
      {/* Fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-4 gradient-text-valhalla text-glow-purple">
            VALHALLA ON.
          </h2>
          <h3 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary text-glow-yellow mb-12">
            ENGINES READY.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-2 text-2xl md:text-3xl text-foreground/70"
        >
          <p>No fear.</p>
          <p>No hesitation.</p>
          <p className="text-secondary font-semibold text-glow-blue pt-4">Only forward.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValhallaSection;
