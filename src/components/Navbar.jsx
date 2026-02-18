import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { NAV_LINKS } from "../data";

function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      title={dark ? "Mode clair" : "Mode sombre"}
      style={{
        cursor: "none",
        border: "none",
        width: 44,
        height: 24,
        borderRadius: 999,
        background: dark ? "rgba(74,255,167,0.2)" : "rgba(0,0,0,0.12)",
        position: "relative",
        transition: "background 0.3s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 3,
          left: dark ? "calc(100% - 21px)" : 3,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: dark ? "#4AFFA7" : "#0a0a0f",
          transition: "left 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
        }}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

function NavItem({ label, active, onClick, t }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? `rgba(74,255,167,0.1)` : "transparent",
        border: active ? "1px solid rgba(74,255,167,0.2)" : "1px solid transparent",
        borderRadius: 999,
        color: active ? "#4AFFA7" : t.textMuted,
        fontSize: 13,
        fontWeight: 500,
        fontFamily: "inherit",
        padding: "6px 14px",
        cursor: "none",
        transition: "all 0.3s",
      }}
    >
      {label}
    </button>
  );
}

export default function Navbar({ activeSection, onNav }) {
  const t = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNav(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "16px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? t.navBg : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
        transition: "all 0.4s",
      }}
    >
      {/* Logo */}
      <div style={{ fontFamily: "Clash Display, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>
        <span className="text-gradient">OS.</span>
      </div>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          gap: 4,
          background: t.bgCard,
          padding: 6,
          borderRadius: 999,
          border: `1px solid ${t.border}`,
          backdropFilter: "blur(10px)",
        }}
        className="hide-mobile"
      >
        {NAV_LINKS.map((n) => (
          <NavItem key={n.id} label={n.label} active={activeSection === n.id} onClick={() => handleNav(n.id)} t={t} />
        ))}
      </div>

      {/* Right controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <ThemeToggle />
        <a
          href="mailto:sakini.oussama@gmail.com"
          className="btn-primary hide-mobile"
          style={{ padding: "10px 20px", fontSize: 13 }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
          </svg>
          Me contacter
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{ background: "none", border: "none", color: t.text, cursor: "none", padding: 4 }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: t.navBg,
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${t.border}`,
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {NAV_LINKS.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNav(n.id)}
              style={{ background: "none", border: "none", color: t.text, cursor: "none", textAlign: "left", fontSize: 15, fontFamily: "inherit", padding: "8px 0" }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}