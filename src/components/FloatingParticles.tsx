import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  size: string;
  color: string;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(45 100% 50%)',
      'hsl(190 100% 50%)',
      'hsl(263 100% 63%)',
    ];

    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: `${2 + Math.random() * 4}px`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            width: particle.size,
            height: particle.size,
            background: particle.color,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
