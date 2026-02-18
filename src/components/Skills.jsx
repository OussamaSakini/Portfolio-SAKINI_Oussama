import { useTheme } from "../context/ThemeContext";
import { GlowCard, SectionLabel } from "./UI";
import { SKILLS_BARS, TECH_TAGS, SOFT_SKILLS, LANGUAGES } from "../data";
import { useInView } from "../hooks";

function SkillBar({ name, level, delay = 0 }) {
  const [ref, vis] = useInView();
  const t = useTheme();
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ fontSize: 13, color: t.textMuted, fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 12, color: t.textSub }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: t.skillTrack, borderRadius: 999, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: vis ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #4AFFA7, #A78BFA)",
            borderRadius: 999,
            transition: `width 1.3s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            boxShadow: "0 0 10px rgba(74,255,167,0.5)",
          }}
        />
      </div>
    </div>
  );
}

function TechCloud() {
  const t = useTheme();
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s" }}>
      <p style={{ color: t.textSub, fontSize: 12, marginBottom: 20, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Technologies
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {TECH_TAGS.map((tag) => (
          <span
            key={tag.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "5px 12px",
              borderRadius: 999,
              fontSize: 12,
              border: `1px solid ${tag.color}30`,
              background: `${tag.color}0D`,
              color: tag.color,
              transition: "all 0.25s",
              cursor: "none",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.background = `${tag.color}1A`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = `${tag.color}0D`; }}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function SoftSkillsCard() {
  const t = useTheme();
  return (
    <GlowCard
      color="#A78BFA"
      style={{
        marginTop: 28,
        padding: 24,
        background: t.softBg,
        border: `1px solid ${t.softBorder}`,
      }}
    >
      <p style={{ color: t.textSub, fontSize: 12, marginBottom: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Soft Skills
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {SOFT_SKILLS.map((s) => (
          <span
            key={s}
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
            {s}
          </span>
        ))}
      </div>
    </GlowCard>
  );
}

function LanguagesCard() {
  const t = useTheme();
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
      {LANGUAGES.map((l) => (
        <GlowCard
          key={l.lang}
          color="#4AFFA7"
          style={{ flex: 1, padding: 18, textAlign: "center" }}
        >
          <div style={{ fontSize: 28, marginBottom: 8 }}>{l.flag}</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: t.text, marginBottom: 3 }}>{l.lang}</div>
          <div style={{ fontSize: 11, color: t.textSub }}>{l.level}</div>
        </GlowCard>
      ))}
    </div>
  );
}

export default function Skills() {
  const t = useTheme();
  return (
    <section
      id="skills"
      style={{
        padding: "130px 60px",
        background: t.dark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.015)",
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
        transition: "background 0.4s",
      }}
    >
      <SectionLabel color="#A78BFA" pre="Stack" title="Compétences" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          marginTop: 48,
        }}
        className="skills-grid"
      >
        {/* Left – Bars */}
        <div>
          <p style={{ color: t.textSub, fontSize: 12, marginBottom: 28, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Maîtrise technique
          </p>
          {SKILLS_BARS.map((s, i) => (
            <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} />
          ))}
        </div>

        {/* Right – Cloud + cards */}
        <div>
          <TechCloud />
          <SoftSkillsCard />
          <LanguagesCard />
        </div>
      </div>
    </section>
  );
}