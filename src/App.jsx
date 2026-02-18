import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useMousePosition, useScrollSpy } from "./hooks";
import { NAV_LINKS } from "./data";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* ── Global styles injected once ── */
const GLOBAL_CSS = `
  @import url('https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=clash-display@700,600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(74,255,167,0.3); border-radius: 2px; }
  ::selection { background: rgba(74,255,167,0.3); }

  /* Animations */
  @keyframes float       { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes spin-slow   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes pulse-glow  { 0%,100%{opacity:0.4; box-shadow:0 0 8px #4AFFA7} 50%{opacity:1; box-shadow:0 0 18px #4AFFA7} }
  @keyframes gradient-shift { 0%{background-position:0%} 100%{background-position:200%} }

  .float      { animation: float 6s ease-in-out infinite; }
  .spin-slow  { animation: spin-slow 20s linear infinite; }
  .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

  .text-gradient {
    background: linear-gradient(135deg, #4AFFA7 0%, #A78BFA 50%, #4AFFA7 100%);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 5s linear infinite;
  }

  /* Buttons */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 14px;
    font-weight: 600; font-size: 14px; font-family: inherit;
    background: linear-gradient(135deg, #4AFFA7, #38d9a9);
    color: #050507; border: none; cursor: none; text-decoration: none;
    transition: all 0.3s;
    box-shadow: 0 0 30px rgba(74,255,167,0.25);
  }
  .btn-primary:hover { box-shadow: 0 0 50px rgba(74,255,167,0.45); transform: translateY(-2px); }

  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 14px;
    font-weight: 600; font-size: 14px; font-family: inherit;
    background: transparent; border: 1px solid rgba(255,255,255,0.12);
    cursor: none; text-decoration: none;
    transition: all 0.3s;
  }
  .btn-outline:hover { background: rgba(255,255,255,0.06); }

  /* Project hover lift */
  .project-card { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
  .project-card:hover { transform: translateY(-8px) !important; }

  /* Responsive helpers */
  .hide-mobile { display: flex; }
  .show-mobile { display: none; }

  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
    .exp-grid { grid-template-columns: 1fr !important; }
    .skills-grid { grid-template-columns: 1fr !important; }
  }
`;

function AppInner() {
  const mouse = useMousePosition();
  const t = useTheme();
  const ids = NAV_LINKS.map((n) => n.id);
  const [activeSection, setActiveSection] = useScrollSpy(ids);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div
      style={{
        background: t.bg,
        color: t.text,
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'Satoshi', 'DM Sans', sans-serif",
        cursor: "none",
        overflowX: "hidden",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      <style>{GLOBAL_CSS}</style>

      <Cursor pos={mouse} />
      <Navbar activeSection={activeSection} onNav={handleNav} />

      <main>
        <Hero onNav={handleNav} />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}