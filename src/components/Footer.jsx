import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const t = useTheme();
  return (
    <footer
      style={{
        borderTop: `1px solid ${t.footerBorder}`,
        padding: "24px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        background: t.bg,
        transition: "background 0.4s",
      }}
    >
      <span
        className="text-gradient"
        style={{ fontFamily: "Clash Display, sans-serif", fontWeight: 700, fontSize: 20 }}
      >
        OS.
      </span>
      <span style={{ color: t.textSub, fontSize: 13 }}>
        © 2025 Oussama Sakini — Ingénieur IA · Data Scientist
      </span>
      <span style={{ color: t.textSub, fontSize: 13 }}>
        Made with React + Tailwind ⚡
      </span>
    </footer>
  );
}