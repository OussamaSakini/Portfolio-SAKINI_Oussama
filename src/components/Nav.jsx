import { useState, useEffect } from "react";
import { C, HERO_GRAD } from "../styles/colors";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 110,
                background: scrolled || menuOpen ? "rgba(245,247,255,0.92)" : "transparent",
                backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
                borderBottom: scrolled || menuOpen ? "1px solid rgba(99,102,241,0.12)" : "none",
                transition: "all 0.4s", padding: "0.9rem 2rem", display: "flex",
                justifyContent: "space-between", alignItems: "center", width: "100%"
            }}>
                <span style={{
                    fontFamily: "'Playfair Display', serif", fontSize: "1.3rem",
                    letterSpacing: "0.05em", background: HERO_GRAD,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    fontWeight: 700
                }}>OS</span>

                {/* Desktop Links */}
                <div className="md:flex hidden" style={{ gap: "1.5rem", alignItems: "center" }}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} style={{
                            color: C.textSub, textDecoration: "none",
                            fontFamily: "'Lato', sans-serif", fontSize: "0.8rem",
                            letterSpacing: "0.06em", textTransform: "uppercase",
                            transition: "color 0.2s", fontWeight: 600
                        }}
                            onMouseEnter={e => e.target.style.color = l.color}
                            onMouseLeave={e => e.target.style.color = C.textSub}
                        >{l.label}</a>
                    ))}
                    <a href="/CV_OUSSAMA_SAKINI.pdf" download style={{
                        fontFamily: "'DM Mono', monospace", fontSize: 11,
                        letterSpacing: "0.18em", textTransform: "uppercase",
                        color: "white", textDecoration: "none", cursor: "pointer",
                        padding: "8px 12px", border: "1px solid #4F46E5",
                        background: "#4F46E5", borderRadius: 6, display: "flex",
                        alignItems: "center", justifyContent: "center", lineHeight: 1
                    }}>
                        Download CV
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden flex"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none", border: "none", cursor: "pointer",
                        flexDirection: "column", gap: 5, padding: 5
                    }}
                >
                    <div style={{ width: 22, height: 2, background: C.blue, transition: "0.3s", transform: menuOpen ? "rotate(45deg) translateY(10px)" : "none" }} />
                    <div style={{ width: 22, height: 2, background: C.blue, opacity: menuOpen ? 0 : 1, transition: "0.3s" }} />
                    <div style={{ width: 22, height: 2, background: C.blue, transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "none" }} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: "fixed", top: menuOpen ? 0 : "-100%", left: 0, right: 0,
                height: "100vh", background: "rgba(245,247,255,0.98)",
                zIndex: 105, transition: "0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                display: "flex", flexDirection: "column", justifyContent: "center",
                alignItems: "center", gap: "2rem", padding: "2rem"
            }}>
                {links.map(l => (
                    <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: C.text, textDecoration: "none",
                            fontFamily: "'Playfair Display', serif", fontSize: "1.8rem",
                            fontWeight: 600
                        }}
                    >{l.label}</a>
                ))}
                <a href="/CV_OUSSAMA_SAKINI.pdf" download onClick={() => setMenuOpen(false)} style={{
                    fontFamily: "'DM Mono', monospace", fontSize: 14,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "white", textDecoration: "none", padding: "12px 24px",
                    background: "#4F46E5", borderRadius: 8, marginTop: "1rem"
                }}>
                    Download CV
                </a>
            </div>
        </>
    );
}
