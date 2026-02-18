import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useInView, useCounter } from "../hooks";

/* ── GlowCard ── */
export function GlowCard({ children, color = "#4AFFA7", className = "", style = {}, onClick }) {
  const [hover, setHover] = useState(false);
  const t = useTheme();

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
      style={{
        background: hover ? t.bgCardHover : t.bgCard,
        border: `1px solid ${hover ? color + "55" : t.border}`,
        borderRadius: 20,
        backdropFilter: "blur(12px)",
        boxShadow: hover ? `0 0 40px ${color}18, inset 0 0 30px ${color}05` : "none",
        transition: "all 0.35s ease",
        position: "relative",
        overflow: "hidden",
        cursor: onClick ? "none" : "default",
        ...style,
      }}
    >
      {hover && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${color}08 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </div>
  );
}

/* ── Tag ── */
export function Tag({ children, color, style = {} }) {
  const t = useTheme();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 500,
        border: `1px solid ${color ? color + "30" : t.tagBorder}`,
        background: color ? color + "0D" : t.tagBg,
        color: color || t.tagText,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* ── SectionLabel ── */
export function SectionLabel({ color = "#4AFFA7", pre, title }) {
  const [ref, vis] = useInView();
  const t = useTheme();
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.7s",
      }}
    >
      <p style={{ color, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
        — {pre}
      </p>
      <h2
        style={{
          fontFamily: "Clash Display, sans-serif",
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: t.text,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ── AnimText (letter-by-letter reveal) ── */
export function AnimText({ text, started, delay = 0 }) {
  return (
    <span style={{ display: "inline-block" }}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.5s ${delay + i * 0.025}s, transform 0.5s ${delay + i * 0.025}s`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* ── StatBlock ── */
export function StatBlock({ n, label, suffix = "" }) {
  const [ref, vis] = useInView(0.5);
  const val = useCounter(n, vis);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          fontFamily: "Clash Display, sans-serif",
          background: "linear-gradient(135deg, #4AFFA7, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
        }}
      >
        {val}{suffix}
      </div>
      <div style={{ color: "rgba(155,155,175,0.7)", fontSize: 13, marginTop: 6, letterSpacing: "0.04em" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Divider (vertical) ── */
export function VDivider({ t }) {
  return (
    <div style={{ width: 1, alignSelf: "stretch", background: t?.border || "rgba(255,255,255,0.06)", margin: "0 8px" }} />
  );
}

/* ── PulseDot ── */
export function PulseDot() {
  return (
    <div
      style={{ width: 7, height: 7, borderRadius: "50%", background: "#4AFFA7", boxShadow: "0 0 12px #4AFFA7", flexShrink: 0 }}
      className="pulse-glow"
    />
  );
}