import { motion } from 'framer-motion';

const ImpactStatement = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Not just a meme.
          </h2>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold gradient-text-electric text-glow-blue mb-12">
            Not just speed.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-3xl md:text-5xl font-black gradient-text-valhalla text-glow-purple"
        >
          This is a movement.
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactStatement;
