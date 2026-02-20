import { C, HERO_GRAD } from "./styles/colors";
import ParticleCanvas from "./components/ParticleCanvas";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f5f7ff; overflow-x: hidden; width: 100%; }
        #root { width: 100%; }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes rotateBorder { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #eef0ff; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #2563eb, #7c3aed, #ec4899); border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: #94a3b8; }
      `}</style>

      {/* Multi-color background blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: 0, left: "30%", width: "60vw", height: "40vh", background: `radial-gradient(ellipse, ${C.blue}12, transparent 70%)`, filter: "blur(50px)" }} />
        <div style={{ position: "absolute", top: "40%", right: 0, width: "40vw", height: "50vh", background: `radial-gradient(ellipse, ${C.violet}10, transparent 70%)`, filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "45vw", height: "40vh", background: `radial-gradient(ellipse, ${C.pink}10, transparent 70%)`, filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "20%", width: "30vw", height: "30vh", background: `radial-gradient(ellipse, ${C.cyan}08, transparent 70%)`, filter: "blur(40px)" }} />
      </div>

      <ParticleCanvas />
      <Nav />

      <main style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer style={{ textAlign: "center", padding: "2.5rem", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "1rem" }}>
          {[C.blue, C.violet, C.pink, C.cyan, C.orange].map(c => (
            <div key={c} style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textMute }}>
          © 2025 <span style={{ background: HERO_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>Oussama Sakini</span> — Ingénieur IA & Data Scientist
        </p>
      </footer>
    </>
  );
}