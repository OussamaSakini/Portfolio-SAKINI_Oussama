import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { AnimText, StatBlock, PulseDot, VDivider } from "./UI";

function FloatingOrb() {
  return (
    <div
      className="float"
      style={{ position: "absolute", right: "6%", top: "18%", width: 300, height: 300, pointerEvents: "none" }}
    >
      <div className="spin-slow" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(74,255,167,0.12)" }} />
      <div
        style={{
          position: "absolute",
          inset: 20,
          borderRadius: "50%",
          border: "1px dashed rgba(167,139,250,0.18)",
          animation: "spin-slow 30s linear infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 60,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,255,167,0.12) 0%, rgba(167,139,250,0.08) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: "Clash Display, sans-serif", fontSize: 32, fontWeight: 700, color: "rgba(255,255,255,0.1)" }}>
          AI
        </span>
      </div>
      {/* Orbiting dot */}
      <div style={{ position: "absolute", inset: -10, borderRadius: "50%", animation: "spin-slow 8s linear infinite" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#4AFFA7",
            transform: "translateY(-50%)",
            boxShadow: "0 0 20px #4AFFA7",
          }}
        />
      </div>
    </div>
  );
}

function RolePills({ started }) {
  const t = useTheme();
  const pills = ["Ingénieur IA", "Data Scientist", "ML Engineer", "NLP / RAG"];
  return (
    <div
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s 0.6s",
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginBottom: 28,
      }}
    >
      {pills.map((p) => (
        <span
          key={p}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 14px",
            borderRadius: 999,
            fontSize: 13,
            border: `1px solid ${t.border}`,
            background: t.tagBg,
            color: t.textMuted,
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

function AvailableBadge({ started }) {
  return (
    <div
      style={{
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        borderRadius: 999,
        background: "rgba(74,255,167,0.08)",
        border: "1px solid rgba(74,255,167,0.2)",
        marginBottom: 32,
      }}
    >
      <PulseDot />
      <span style={{ color: "#4AFFA7", fontSize: 13, fontWeight: 500 }}>
        Disponible immédiatement · Reims, France
      </span>
    </div>
  );
}

export default function Hero({ onNav }) {
  const [ready, setReady] = useState(false);
  const t = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="accueil"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
    >
      {/* Backgrounds */}
      <div
        className="hero-grid"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "20%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,255,167,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", top: "55%", left: "25%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <FloatingOrb />

      <div style={{ width: "100%", maxWidth: "100%", padding: "0 60px", paddingTop: 130, zIndex: 1 }}>
        <AvailableBadge started={ready} />

        <h1
          style={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "clamp(60px, 9vw, 120px)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            color: t.text,
          }}
        >
          <AnimText text="Oussama" started={ready} delay={0.1} />
          <br />
          <span className="text-gradient">
            <AnimText text="Sakini" started={ready} delay={0.3} />
          </span>
        </h1>

        <RolePills started={ready} />

        <p
          style={{
            opacity: ready ? 1 : 0,
            transition: "all 0.6s 0.7s",
            color: t.textMuted,
            fontSize: 17,
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: 40,
          }}
        >
          Je conçois et déploie des solutions d'IA à fort impact — du machine learning classique à l'IA générative,
          en passant par la réalité virtuelle.
        </p>

        {/* CTAs */}
        <div style={{ opacity: ready ? 1 : 0, transition: "all 0.6s 0.85s", display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72 }}>
          <button className="btn-primary" onClick={() => onNav("experience")}>
            Voir mes expériences
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="m5 12 14 0M13 6l6 6-6 6" />
            </svg>
          </button>
          <a href="mailto:sakini.oussama@gmail.com" className="btn-outline" style={{ color: t.text, borderColor: t.border }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            sakini.oussama@gmail.com
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            opacity: ready ? 1 : 0,
            transition: "all 0.6s 1s",
            display: "flex",
            gap: 40,
            padding: "28px 0",
            borderTop: `1px solid ${t.border}`,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <StatBlock n={5} suffix="+" label="Années études" />
          <VDivider t={t} />
          <StatBlock n={3} label="Expériences pro" />
          <VDivider t={t} />
          <StatBlock n={3} label="Projets IA" />
          <VDivider t={t} />
          <StatBlock n={3} label="Langues" />
        </div>
      </div>
    </section>
  );
}