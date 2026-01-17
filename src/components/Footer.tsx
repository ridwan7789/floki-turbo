import { motion } from 'framer-motion';
import teamTurbo from '@/assets/team-turbo.jpeg';

const hashtags = [
  "#FlokiTurbo",
  "#FlokiArmy", 
  "#Solana",
  "#SolanaMeme",
  "#TurboMode",
  "#ATHLoading",
];

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={teamTurbo}
          alt="Floki Turbo Team"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text-turbo">Floki Turbo</span>
            <span className="text-foreground/60"> × </span>
            <span className="gradient-text-valhalla">Floki Army</span>
          </h4>
          
          <div className="space-y-2 text-lg text-muted-foreground mb-8">
            <p>Built on Solana.</p>
            <p>Driven by community.</p>
            <p className="text-primary">Powered by belief.</p>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {hashtags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-muted/30 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/60">
            © 2025 FLOKI TURBO. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
