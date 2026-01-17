import { useEffect, useState } from 'react';

interface SpeedLine {
  id: number;
  top: string;
  delay: string;
  duration: string;
  width: string;
}

const SpeedLines = () => {
  const [lines, setLines] = useState<SpeedLine[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines: SpeedLine[] = [];
      for (let i = 0; i < 15; i++) {
        newLines.push({
          id: i,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
          duration: `${1 + Math.random() * 2}s`,
          width: `${100 + Math.random() * 200}px`,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="speed-lines">
      {lines.map((line) => (
        <div
          key={line.id}
          className="speed-line"
          style={{
            top: line.top,
            animationDelay: line.delay,
            animationDuration: line.duration,
            width: line.width,
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLines;
