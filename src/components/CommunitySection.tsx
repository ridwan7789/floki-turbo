import { motion } from 'framer-motion';
import { Send, Twitter } from 'lucide-react';
import mascot from '@/assets/floki-mascot.jpeg';

const CommunitySection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Valhalla-style background */}
      <div className="absolute inset-0 bg-gradient-valhalla" />
      <div className="absolute inset-0 stars opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={mascot}
                alt="Floki Turbo Mascot"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full neon-card-purple"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 gradient-text-valhalla">
              JOIN THE FLOKI ARMY
            </h2>
            
            <p className="text-xl text-foreground/80 mb-4">
              Floki Turbo is nothing without the army behind it.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              This is where momentum lives.<br />
              This is where movement begins.
            </p>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="https://t.me/Flokiturbosol"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-heading font-bold rounded-xl neon-card-blue hover:bg-secondary/90 transition-all"
              >
                <Send className="w-5 h-5" />
                TELEGRAM
              </motion.a>
              
              <motion.a
                href="https://x.com/FlokiTurbo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-heading font-bold rounded-xl hover:bg-foreground/90 transition-all"
              >
                <Twitter className="w-5 h-5" />
                X (TWITTER)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
