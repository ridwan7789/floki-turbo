import { motion } from 'framer-motion';
import { Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const CONTRACT_ADDRESS = "9FXriWjezdoKfnauuLNjJURHhP1cueaKkwqZ4Pfrpump";
const PUMP_FUN_LINK = "https://pump.fun/coin/9FXriWjezdoKfnauuLNjJURHhP1cueaKkwqZ4Pfrpump";

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Racing Grid Background */}
      <div className="absolute inset-0 racing-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-turbo"
        >
          ENGINE SPECS
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          Token Information
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 md:p-12 neon-card-yellow"
        >
          {/* Token Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Token Name</p>
              <p className="font-heading text-2xl font-bold text-primary">FLOKI TURBO</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Symbol</p>
              <p className="font-heading text-2xl font-bold text-secondary">$FLOBO</p>
            </div>
            <div className="space-y-1 md:col-span-2">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Network</p>
              <p className="font-heading text-2xl font-bold text-accent">Solana</p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="space-y-3 mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Contract Address (CA)</p>
            <div className="flex items-center gap-3 flex-wrap">
              <code className="flex-1 bg-muted/50 px-4 py-3 rounded-lg text-sm md:text-base text-foreground font-mono break-all">
                {CONTRACT_ADDRESS}
              </code>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    COPIED
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    COPY CA
                  </>
                )}
              </motion.button>
            </div>
          </div>

          {/* Turbo Gauge */}
          <div className="mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3">Turbo Power</p>
            <div className="h-4 bg-muted/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full bg-gradient-turbo rounded-full"
              />
            </div>
          </div>

          {/* Trade Button */}
          <motion.a
            href={PUMP_FUN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-electric text-secondary-foreground font-heading font-bold text-xl rounded-xl hover:opacity-90 transition-opacity"
          >
            TRADE ON PUMP.FUN
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenInfo;
