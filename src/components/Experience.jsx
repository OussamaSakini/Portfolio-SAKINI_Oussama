import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { GlowCard, Tag, SectionLabel } from "./UI";
import { EXPERIENCES, EDUCATION } from "../data";

function ExpTab({ exp, active, onClick, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? `${exp.color}08` : "transparent",
        border: "none",
        borderLeft: `2px solid ${active ? exp.color : "transparent"}`,
        borderRadius: active ? "0 12px 12px 0" : 0,
        textAlign: "left",
        padding: "14px 18px",
        cursor: "none",
        fontFamily: "inherit",
        transition: "all 0.3s",
        color: active ? exp.color : t.textMuted,
        width: "100%",
      }}
    >
      <div style={{ fontSize: 11, marginBottom: 3, fontWeight: 500, letterSpacing: "0.04em" }}>{exp.period}</div>
      <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "Clash Display, sans-serif", color: active ? t.text : t.textMuted }}>
        {exp.company}
      </div>
      <div style={{ fontSize: 12, marginTop: 2 }}>{exp.role}</div>
    </button>
  );
}

function ExpDetail({ exp, t }) {
  return (
    <GlowCard color={exp.color} style={{ padding: 36, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
        <div style={{ fontSize: 40, lineHeight: 1, flexShrink: 0 }}>{exp.icon}</div>
        <div>
          <h3 style={{ fontFamily: "Clash Display, sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 4, color: t.text }}>
            {exp.role}
          </h3>
          <p style={{ color: exp.color, fontWeight: 600 }}>
            {exp.company} · {exp.location}
          </p>
          <p style={{ color: t.textSub, fontSize: 13, marginTop: 2 }}>{exp.period}</p>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {exp.tech.map((t) => (
          <Tag key={t} color={exp.color}>{t}</Tag>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {exp.bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: exp.color,
                boxShadow: `0 0 8px ${exp.color}`,
                marginTop: 7,
                flexShrink: 0,
              }}
            />
            <p style={{ color: t.textMuted, fontSize: 15, lineHeight: 1.65 }}>{b}</p>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}

function EducationGrid({ t }) {
  return (
    <div style={{ marginTop: 80 }}>
      <SectionLabel color="#A78BFA" pre="Académique" title="Formations" />
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 32 }}
      >
        {EDUCATION.map((e, i) => (
          <GlowCard key={i} color={e.color} style={{ padding: 28 }}>
            <div
              style={{
                fontFamily: "Clash Display, sans-serif",
                fontSize: 44,
                fontWeight: 700,
                color: e.color,
                opacity: 0.18,
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              {e.short}
            </div>
            <p style={{ fontSize: 11, color: t.textSub, marginBottom: 4 }}>{e.year} · {e.loc}</p>
            <p style={{ color: e.color, fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{e.degree}</p>
            <p style={{ color: t.textMuted, fontSize: 13 }}>{e.school}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const t = useTheme();

  return (
    <section
      id="experience"
      style={{ padding: "130px 60px", background: t.bg, transition: "background 0.4s" }}
    >
      <SectionLabel color="#4AFFA7" pre="Carrière" title="Expériences" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 32,
          marginTop: 48,
        }}
        className="exp-grid"
      >
        {/* Tabs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {EXPERIENCES.map((exp, i) => (
            <ExpTab key={i} exp={exp} active={active === i} onClick={() => setActive(i)} t={t} />
          ))}
        </div>

        {/* Detail panel */}
        <ExpDetail exp={EXPERIENCES[active]} t={t} />
      </div>

      <EducationGrid t={t} />
    </section>
  );
}