import { motion } from 'framer-motion';
import originTeam from '@/assets/origin-team.jpeg';

const OriginStory = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Racing Grid Background */}
      <div className="absolute inset-0 racing-grid opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-glow-yellow">
              Floki Turbo doesn't wait for hype.
            </h2>
            
            <p className="text-2xl md:text-3xl font-heading font-semibold text-secondary">
              It builds momentum.
            </p>

            <div className="space-y-4 text-lg md:text-xl text-foreground/80">
              <p>
                <span className="text-secondary font-semibold">Born on Solana</span> — built for speed.
              </p>
              <p>
                <span className="text-primary font-semibold">Driven by the Floki Army</span> — powered by community.
              </p>
              <p>
                <span className="text-accent font-semibold">Designed for holders</span> who move together.
              </p>
            </div>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden neon-card-blue">
              <img
                src={originTeam}
                alt="Floki Turbo Racing Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary/50 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
