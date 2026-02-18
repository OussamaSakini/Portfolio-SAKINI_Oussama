import { useState, useEffect } from "react";

export default function Cursor({ pos }) {
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4AFFA7",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "transform 0.1s",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: trail.x - 18,
          top: trail.y - 18,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(74,255,167,0.4)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}