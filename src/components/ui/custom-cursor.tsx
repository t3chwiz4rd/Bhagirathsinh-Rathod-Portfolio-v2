"use client"
import React, { useEffect, useState } from 'react';
import { CircleDot } from 'lucide-react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: any) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <CircleDot
      size={20} // adjust size
      color="black" // adjust color
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
