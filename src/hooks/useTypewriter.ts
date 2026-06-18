import { useState, useEffect } from 'react';

const TYPE_SPEED   = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER  = 1800;
const PAUSE_BEFORE = 400;

export function useTypewriter(words: string[]): string {
  const [display, setDisplay]     = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase]         = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === 'typing') {
      if (display.length < current.length) {
        const t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase('pausing'), PAUSE_AFTER);
        return () => clearTimeout(t);
      }
    }

    if (phase === 'pausing') {
      setPhase('deleting');
    }

    if (phase === 'deleting') {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPhase('waiting');
      }
    }

    if (phase === 'waiting') {
      const next = (wordIndex + 1) % words.length;
      const t = setTimeout(() => {
        setWordIndex(next);
        setPhase('typing');
      }, PAUSE_BEFORE);
      return () => clearTimeout(t);
    }
  }, [display, phase, wordIndex, words]);

  return display;
}
