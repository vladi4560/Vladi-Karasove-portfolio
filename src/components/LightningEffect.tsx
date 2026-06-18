import { useEffect, useState, useCallback } from 'react';

interface Bolt {
  id: number;
  x: number;
  path: string;
  branches: string[];
}

function generateBolt(startX: number): { path: string; branches: string[] } {
  // Main jagged bolt from top to ~70% down screen
  const points: [number, number][] = [[startX, 0]];
  let x = startX;
  const steps = 8 + Math.floor(Math.random() * 4);
  const segH = (window.innerHeight * 0.72) / steps;

  for (let i = 1; i <= steps; i++) {
    x += (Math.random() - 0.5) * 80;
    x = Math.max(10, Math.min(window.innerWidth - 10, x));
    points.push([x, i * segH]);
  }

  const path = `M ${points.map(([px, py]) => `${px} ${py}`).join(' L ')}`;

  // 1–2 branch forks from random mid-points
  const branches: string[] = [];
  const branchCount = 1 + Math.floor(Math.random() * 2);
  for (let b = 0; b < branchCount; b++) {
    const from = points[3 + Math.floor(Math.random() * (points.length - 5))];
    let bx = from[0];
    let by = from[1];
    const bPoints: [number, number][] = [[bx, by]];
    const bSteps = 3 + Math.floor(Math.random() * 3);
    for (let s = 0; s < bSteps; s++) {
      bx += (Math.random() - 0.5) * 60;
      by += segH * 0.8;
      bPoints.push([bx, by]);
    }
    branches.push(`M ${bPoints.map(([px, py]) => `${px} ${py}`).join(' L ')}`);
  }

  return { path, branches };
}

let boltId = 0;

export default function LightningEffect() {
  const [bolts, setBolts] = useState<Bolt[]>([]);
  const [flash, setFlash] = useState(0); // 0=off, 1=bright, 2=dim

  const strike = useCallback(() => {
    const startX = 80 + Math.random() * (window.innerWidth - 160);
    const { path, branches } = generateBolt(startX);
    const id = ++boltId;

    setBolts((prev) => [...prev, { id, x: startX, path, branches }]);
    setFlash(1);

    // Flicker sequence: flash → dim → flash again → off
    setTimeout(() => setFlash(0), 80);
    setTimeout(() => setFlash(2), 160);
    setTimeout(() => setFlash(0), 260);
    setTimeout(() => setFlash(1), 300);
    setTimeout(() => setFlash(0), 380);

    // Remove bolt after animation
    setTimeout(() => setBolts((prev) => prev.filter((b) => b.id !== id)), 600);
  }, []);

  useEffect(() => {
    // First strike after 1.5s so page has settled
    const initial = setTimeout(strike, 1500);
    const interval = setInterval(strike, 5000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [strike]);

  return (
    <>
      {/* Screen flash overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          pointerEvents: 'none',
          background: 'rgba(210, 230, 255, 1)',
          opacity: flash === 1 ? 0.22 : flash === 2 ? 0.1 : 0,
          transition: flash === 0 ? 'opacity 0.15s ease-out' : 'none',
        }}
      />

      {/* Lightning bolts */}
      {bolts.map((bolt) => (
        <svg
          key={bolt.id}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 199,
            pointerEvents: 'none',
            width: '100vw',
            height: '100vh',
            overflow: 'visible',
            animation: 'lightning-bolt-fade 0.55s ease-out forwards',
          }}
        >
          <defs>
            <filter id={`glow-${bolt.id}`} x="-50%" y="-10%" width="200%" height="120%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer glow */}
          <path
            d={bolt.path}
            stroke="rgba(180, 210, 255, 0.35)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Core bolt */}
          <path
            d={bolt.path}
            stroke="rgba(230, 245, 255, 0.95)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#glow-${bolt.id})`}
          />
          {/* Inner white core */}
          <path
            d={bolt.path}
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Branch bolts */}
          {bolt.branches.map((bp, i) => (
            <g key={i}>
              <path d={bp} stroke="rgba(180,210,255,0.25)" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d={bp} stroke="rgba(220,240,255,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
        </svg>
      ))}

      <style>{`
        @keyframes lightning-bolt-fade {
          0%   { opacity: 1; }
          30%  { opacity: 0.9; }
          45%  { opacity: 0.1; }
          55%  { opacity: 0.85; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
