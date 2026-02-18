import { useTheme } from "../context/ThemeContext";
import { PulseDot } from "./UI";
import { useInView } from "../hooks";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oussama-sakini",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Oussama-Sakini",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
];

function ContactCard({ icon, label, value, href, color, t }) {
  const [ref, vis] = useInView();
  return (
    <a
      ref={ref}
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "20px 28px",
        borderRadius: 18,
        background: t.bgCard,
        border: `1px solid ${t.border}`,
        textDecoration: "none",
        color: t.text,
        cursor: "none",
        transition: "all 0.35s",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color + "55";
        e.currentTarget.style.background = color + "08";
        e.currentTarget.style.boxShadow = `0 0 30px ${color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = t.border;
        e.currentTarget.style.background = t.bgCard;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: color + "15",
          border: `1px solid ${color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p style={{ fontSize: 11, color: t.textSub, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>{label}</p>
        <p style={{ fontSize: 15, fontWeight: 600 }}>{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  const t = useTheme();
  const [ref, vis] = useInView();

  return (
    <section
      id="contact"
      style={{
        padding: "130px 60px",
        borderTop: `1px solid ${t.border}`,
        background: t.bg,
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          style={{
            textAlign: "center",
            marginBottom: 64,
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 16px",
              borderRadius: 999,
              background: "rgba(74,255,167,0.08)",
              border: "1px solid rgba(74,255,167,0.2)",
              marginBottom: 28,
            }}
          >
            <PulseDot />
            <span style={{ color: "#4AFFA7", fontSize: 13 }}>Disponible immédiatement</span>
          </div>

          <h2
            style={{
              fontFamily: "Clash Display, sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: 20,
              color: t.text,
            }}
          >
            Travaillons<br />
            <span className="text-gradient">ensemble</span>
          </h2>

          <p style={{ color: t.textMuted, fontSize: 17, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Je suis à la recherche d'une opportunité en Data Science, ML ou IA générative.
            N'hésitez pas à me contacter !
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
          <ContactCard
            icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>}
            label="Email"
            value="sakini.oussama@gmail.com"
            href="mailto:sakini.oussama@gmail.com"
            color="#4AFFA7"
            t={t}
          />
          <ContactCard
            icon={<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2 3.19a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 8.91a16 16 0 0 0 6.56 6.56l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
            label="Téléphone"
            value="+33 7 58 67 57 34"
            href="tel:+33758675734"
            color="#A78BFA"
            t={t}
          />
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 12,
                background: t.bgCard,
                border: `1px solid ${t.border}`,
                color: t.textMuted,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                cursor: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = t.text; e.currentTarget.style.borderColor = t.borderHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.borderColor = t.border; }}
            >
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}