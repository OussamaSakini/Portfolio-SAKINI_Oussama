import { useState, useEffect } from "react";
import { C, HERO_GRAD } from "../styles/colors";
import Typewriter from "./Typewriter";

import profilePic from "../assets/pdp2.png";

export default function Hero() {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
    return (
        <section id="hero" style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, padding: "clamp(1rem, 5vw, 2.5rem)", textAlign: "center" }}>

            {/* Decorative blobs */}
            <div className="hidden sm:block" style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}18, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none" }} />
            <div className="hidden sm:block" style={{ position: "absolute", bottom: "15%", right: "8%", width: 250, height: 250, borderRadius: "50%", background: `radial-gradient(circle, ${C.pink}18, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none" }} />

            <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease", width: "100%", maxWidth: "1200px" }}>
                {/* Avatar */}
                <div style={{ position: "relative", display: "inline-block", marginTop: "2rem", marginBottom: "clamp(1.5rem, 5vw, 2.5rem)" }}>
                    <div style={{ width: "clamp(120px, 15vw, 150px)", height: "clamp(120px, 15vw, 150px)", borderRadius: "50%", background: HERO_GRAD, padding: 3, display: "inline-block", boxShadow: `0 0 50px ${C.blue}30, 0 0 80px ${C.violet}15` }}>
                        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                            <img src={profilePic} alt="Oussama Sakini" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                    </div>
                    <div style={{ position: "absolute", bottom: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: C.green, border: `4px solid ${C.bg}`, boxShadow: `0 0 12px ${C.green}` }} />
                </div>

                <div style={{ opacity: visible ? 1 : 0, transition: "opacity 1.2s ease 0.4s", width: "100%" }}>
                    {/* Tag line */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `linear-gradient(90deg, ${C.blue}15, ${C.violet}15)`, border: `1px solid ${C.blue}33`, borderRadius: 20, padding: "6px 16px", marginBottom: "clamp(1rem, 3vw, 1.5rem)" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 8px ${C.green}` }} />
                        <span style={{ fontFamily: "'Lato', sans-serif", color: C.blue, letterSpacing: "0.2em", fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 700 }}>Disponible</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.25rem, 8vw, 5rem)", color: C.text, margin: "0 0 0.75rem", lineHeight: 1.1, fontWeight: 900 }}>
                        Oussama{" "}
                        <span style={{ background: HERO_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SAKINI</span>
                    </h1>

                    <h2 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: "clamp(0.95rem, 2.5vw, 1.6rem)", color: C.textMute, margin: "0 0 2.5rem", letterSpacing: "0.02em", minHeight: "2.5rem" }}>
                        <Typewriter texts={["Ingénieur en Intelligence Artificielle", "Data Scientist", "ML & Deep Learning Engineer", "Generative AI Enthusiast"]} />
                    </h2>

                    <p style={{ color: C.textPropos, maxWidth: 620, margin: "0 auto 3rem", lineHeight: 1.8, fontFamily: "'Lato', sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", opacity: 0.9 }}>
                        Ingénieur en Intelligence Artificielle et Data Scientist spécialisé en ML, DL et IA Gen.
                        Je conçois des solutions intelligentes, robustes et orientées impact.
                    </p>

                    {/* CTA buttons */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", width: "100%", marginBottom: "4rem" }}>
                        {[
                            { label: "📧 Me contacter", href: "#contact", grad: `linear-gradient(135deg, ${C.blue}, ${C.violet})` },
                            { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/oussama-sakini-3b6755273/", grad: `linear-gradient(135deg, ${C.violet}, ${C.pink})` },
                            { label: "⚡ GitHub", href: "https://github.com/OussamaSakini", grad: `linear-gradient(135deg, ${C.pink}, ${C.orange})` },
                        ].map(btn => (
                            <a key={btn.label} href={btn.href} target={btn.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                                style={{ padding: "0.85rem 2rem", borderRadius: 12, background: btn.grad, color: "#fff", textDecoration: "none", fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.02em", transition: "all 0.3s", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"; }}
                                className="w-full sm:w-auto"
                            >{btn.label}</a>
                        ))}
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "flex", gap: "clamp(1.5rem, 8vw, 4rem)", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                        {[
                            { val: "3+", label: "Expériences", color: C.blue },
                            { val: "5+", label: "Projets IA", color: C.violet },
                            { val: "3", label: "Langues", color: C.pink },
                        ].map(s => (
                            <div key={s.label} style={{ textAlign: "center", minWidth: 100 }}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: C.textMute, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4, fontWeight: 700 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
