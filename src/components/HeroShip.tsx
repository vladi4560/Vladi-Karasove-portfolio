export default function HeroShip() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        height: '210px',
        margin: '0 auto 0.5rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes ship-float {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(-1.8deg); }
          50%       { transform: translateX(-50%) translateY(-11px) rotate(1.8deg); }
        }
        @keyframes wave-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-200px); }
        }
        @keyframes wave-back {
          from { transform: translateX(-200px); }
          to   { transform: translateX(0); }
        }
        @keyframes sail-billow {
          0%, 100% { d: path("M74 17 L126 17 Q118 54 99 57 Q80 54 74 17 Z"); }
          50%       { d: path("M74 17 L126 17 Q122 54 99 57 Q76 54 74 17 Z"); }
        }
        @keyframes flag-wave {
          0%, 100% { transform-origin: 101px 12px; transform: rotate(0deg); }
          50%       { transform-origin: 101px 12px; transform: rotate(15deg); }
        }
        .ship-scene { position: absolute; bottom: 48px; left: 50%; animation: ship-float 4.5s ease-in-out infinite; }
        .wave-1 { position: absolute; bottom: 32px; left: -200px; width: 900px; animation: wave-fwd 5s linear infinite; }
        .wave-2 { position: absolute; bottom: 16px; left: -200px; width: 900px; animation: wave-back 7s linear infinite; }
        .wave-3 { position: absolute; bottom: 0;    left: -200px; width: 900px; animation: wave-fwd 9s linear infinite; }
        .ship-flag { animation: flag-wave 2s ease-in-out infinite; }
      `}</style>

      {/* ── Ship ─────────────────────────────────────────── */}
      <div className="ship-scene">
        <svg viewBox="0 0 200 148" width="220" height="148" style={{ display: 'block', overflow: 'visible' }}>

          {/* Bowsprit */}
          <line x1="28" y1="88" x2="8" y2="76" stroke="#6B4226" strokeWidth="2.5" strokeLinecap="round" />

          {/* Masts */}
          <rect x="97.5" y="10" width="4"  height="75" rx="1" fill="#6B4226" />
          <rect x="64"   y="22" width="3"  height="58" rx="1" fill="#6B4226" />
          <rect x="133"  y="26" width="3"  height="54" rx="1" fill="#6B4226" />

          {/* Yards */}
          <rect x="71"  y="13" width="58" height="3"   rx="1" fill="#5A3620" />
          <rect x="47"  y="26" width="36" height="2.5" rx="1" fill="#5A3620" />
          <rect x="118" y="30" width="30" height="2.5" rx="1" fill="#5A3620" />

          {/* Main sail */}
          <path d="M74 17 L126 17 Q118 54 99 57 Q80 54 74 17 Z" fill="white" opacity="0.93" />
          <path d="M99 17 L126 17 Q118 54 99 57 Z" fill="rgba(180,180,210,0.35)" />
          {/* Fore sail */}
          <path d="M49 29 L80 29 Q74 52 65 55 Q55 52 49 29 Z" fill="white" opacity="0.87" />
          <path d="M65 29 L80 29 Q74 52 65 55 Z" fill="rgba(180,180,210,0.3)" />
          {/* Mizzen sail */}
          <path d="M120 33 L146 33 Q142 52 135 55 Q126 52 120 33 Z" fill="white" opacity="0.87" />

          {/* Flag */}
          <g className="ship-flag">
            <path d="M101 10 L118 14 L101 19 Z" fill="#cc2222" />
          </g>

          {/* Hull — upper band */}
          <path d="M34 80 Q100 90 166 80 L162 95 Q100 106 38 95 Z" fill="#9B6645" />
          {/* Hull — main body */}
          <path d="M38 94 Q100 106 162 94 Q170 110 100 120 Q30 110 38 94 Z" fill="#7A4F2E" />
          {/* Deck stripe */}
          <path d="M34 78 Q100 87 166 78 Q100 74 34 78 Z" fill="#A5784F" />
          {/* Cabin */}
          <rect x="108" y="62" width="48" height="20" rx="4" fill="#8B5E3C" />
          <rect x="110" y="64" width="44" height="16" rx="3" fill="#7A4F2E" />
          {/* Cabin windows */}
          {[116, 129, 142].map((x) => (
            <g key={x}>
              <rect x={x} y="68" width="9" height="7" rx="1.5" fill="rgba(0,0,0,0.5)" />
              <rect x={x + 1} y="69" width="7" height="5" rx="1" fill="rgba(255,215,80,0.55)" />
            </g>
          ))}
          {/* Portholes */}
          {[65, 99, 134].map((x) => (
            <g key={x}>
              <circle cx={x} cy="88" r="4.5" fill="rgba(0,0,0,0.35)" />
              <circle cx={x} cy="88" r="3"   fill="rgba(255,210,70,0.28)" />
            </g>
          ))}

          {/* ── Lion Figurehead (Thousand Sunny) ── */}
          {/* Outer mane */}
          <circle cx="26" cy="87" r="17" fill="#B8760E" />
          {/* Inner mane */}
          <circle cx="26" cy="87" r="13" fill="#D4941A" />
          {/* Face */}
          <circle cx="26" cy="87" r="10" fill="#EEB84B" />
          {/* Eyes */}
          <circle cx="22" cy="85" r="2.2" fill="#1a0800" />
          <circle cx="30" cy="85" r="2.2" fill="#1a0800" />
          <circle cx="22.8" cy="84.3" r="0.8" fill="white" />
          <circle cx="30.8" cy="84.3" r="0.8" fill="white" />
          {/* Nose */}
          <ellipse cx="26" cy="89.5" rx="2.5" ry="1.6" fill="#C8961E" />
          {/* Mouth */}
          <path d="M21.5 93 Q26 97.5 30.5 93" stroke="#8B5E00" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          {/* Teeth */}
          <rect x="23.5" y="93.5" width="5" height="3" rx="1" fill="white" />
          {/* Chin tuft */}
          <ellipse cx="26" cy="97" rx="3" ry="1.5" fill="#C8961E" opacity="0.6" />

          {/* Waterline reflection */}
          <path d="M38 118 Q100 125 162 118" stroke="rgba(59,130,246,0.25)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* ── Waves ────────────────────────────────────────── */}
      <div className="wave-1">
        <svg viewBox="0 0 900 36" width="900" height="36" style={{ display: 'block' }}>
          <path d="M0 18 Q50 4 100 18 Q150 32 200 18 Q250 4 300 18 Q350 32 400 18 Q450 4 500 18 Q550 32 600 18 Q650 4 700 18 Q750 32 800 18 Q850 4 900 18 L900 36 L0 36 Z"
            fill="rgba(59,130,246,0.14)" />
        </svg>
      </div>
      <div className="wave-2">
        <svg viewBox="0 0 900 44" width="900" height="44" style={{ display: 'block' }}>
          <path d="M0 22 Q50 6 100 22 Q150 38 200 22 Q250 6 300 22 Q350 38 400 22 Q450 6 500 22 Q550 38 600 22 Q650 6 700 22 Q750 38 800 22 Q850 6 900 22 L900 44 L0 44 Z"
            fill="rgba(59,130,246,0.2)" />
        </svg>
      </div>
      <div className="wave-3">
        <svg viewBox="0 0 900 54" width="900" height="54" style={{ display: 'block' }}>
          <path d="M0 27 Q50 8 100 27 Q150 46 200 27 Q250 8 300 27 Q350 46 400 27 Q450 8 500 27 Q550 46 600 27 Q650 8 700 27 Q750 46 800 27 Q850 8 900 27 L900 54 L0 54 Z"
            fill="rgba(59,130,246,0.28)" />
        </svg>
      </div>

      {/* Sea base glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px',
        background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.1))',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
