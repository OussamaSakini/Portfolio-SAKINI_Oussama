import { useState, useEffect } from "react";
import { C, HERO_GRAD } from "../styles/colors";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);
    const links = [
        { href: "#hero", label: "Accueil", color: C.blue },
        { href: "#skills", label: "Compétences", color: C.blue },
        { href: "#timeline", label: "Parcours", color: C.violet },
        { href: "#projects", label: "Projets", color: C.pink },
        { href: "#certs", label: "Diplômes", color: C.cyan },
        { href: "#contact", label: "Contact", color: C.orange },
    ];
    return (
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(245,247,255,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(99,102,241,0.12)" : "none", transition: "all 0.4s", padding: "0.9rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", letterSpacing: "0.05em", background: HERO_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}>OS</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
                {links.map(l => (
                    <a key={l.href} href={l.href} style={{ color: C.textSub, textDecoration: "none", fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s", fontWeight: 600 }}
                        onMouseEnter={e => e.target.style.color = l.color}
                        onMouseLeave={e => e.target.style.color = C.textSub}
                    >{l.label}</a>
                ))}
                <a href="/CV_OUSSAMA_SAKINI.pdf" download style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    cursor: "none",
                    padding: "8px 8px",
                    border: "1px solid #4F46E5",
                    background: "#4F46E5",
                    borderRadius: 4,
                    display: "inline-block"
                }}>
                    Download CV
                </a>
            </div>
        </nav>
    );
}
