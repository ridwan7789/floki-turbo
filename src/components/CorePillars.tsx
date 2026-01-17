import { motion } from 'framer-motion';
import { Zap, Users, Flag } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: "TURBO SPEED",
    color: "blue",
    lines: ["Solana-powered.", "Instant transactions.", "No delays. No friction."],
    glowClass: "neon-card-blue",
    textClass: "text-secondary text-glow-blue",
    iconBg: "bg-secondary/20",
  },
  {
    icon: Users,
    title: "FLOKI ARMY",
    color: "yellow",
    lines: ["Community is the engine.", "Momentum comes from unity."],
    glowClass: "neon-card-yellow",
    textClass: "text-primary text-glow-yellow",
    iconBg: "bg-primary/20",
  },
  {
    icon: Flag,
    title: "FORWARD ONLY",
    color: "purple",
    lines: ["No fake utility.", "No empty promises.", "Just movement."],
    glowClass: "neon-card-purple",
    textClass: "text-accent text-glow-purple",
    iconBg: "bg-accent/20",
  },
];

const CorePillars = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-turbo"
        >
          CORE PILLARS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass rounded-2xl p-8 ${pillar.glowClass} transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <pillar.icon className={`w-8 h-8 ${pillar.textClass}`} />
              </div>
              
              <h3 className={`font-heading text-xl md:text-2xl font-bold mb-4 ${pillar.textClass}`}>
                {pillar.title}
              </h3>
              
              <div className="space-y-2 text-foreground/80">
                {pillar.lines.map((line, i) => (
                  <p key={i} className="text-lg">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
