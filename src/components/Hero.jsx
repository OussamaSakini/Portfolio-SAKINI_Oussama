import { useState, useEffect } from "react";
import { C, HERO_GRAD } from "../styles/colors";
import Typewriter from "./Typewriter";

import profilePic from "../assets/Pdp CV.PNG";

export default function Hero() {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
    return (
        <section id="hero" style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, padding: "2rem", textAlign: "center" }}>

            {/* Decorative blobs */}
            <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}18, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 250, height: 250, borderRadius: "50%", background: `radial-gradient(circle, ${C.pink}18, transparent 70%)`, filter: "blur(40px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "40%", right: "3%", width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${C.cyan}15, transparent 70%)`, filter: "blur(30px)", pointerEvents: "none" }} />

            <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease", width: "100%" }}>
                {/* Avatar */}
                <div style={{ position: "relative", display: "inline-block", marginTop: "1.2rem", marginBottom: "2rem" }}>
                    <div style={{ width: 140, height: 140, borderRadius: "50%", background: HERO_GRAD, padding: 3, display: "inline-block", boxShadow: `0 0 50px ${C.blue}40, 0 0 80px ${C.violet}20`, /*animation: "rotateBorder 6s linear infinite"*/ }}>
                        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                            <img src={profilePic} alt="Oussama Sakini" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                    </div>
                    <div style={{ position: "absolute", bottom: 8, right: 8, width: 20, height: 20, borderRadius: "50%", background: C.green, border: `3px solid ${C.bg}`, boxShadow: `0 0 12px ${C.green}` }} />
                </div>

                <div style={{ opacity: visible ? 1 : 0, transition: "opacity 1.2s ease 0.4s", width: "100%" }}>
                    {/* Tag line */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `linear-gradient(90deg, ${C.blue}15, ${C.violet}15)`, border: `1px solid ${C.blue}33`, borderRadius: 20, padding: "4px 16px", marginBottom: "1rem" }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 8px ${C.green}` }} />
                        <span style={{ fontFamily: "'Lato', sans-serif", color: C.blue, letterSpacing: "0.25em", fontSize: "0.75rem", textTransform: "uppercase" }}>Disponible</span>
                    </div>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,7vw,5rem)", color: C.text, margin: "0 0 0.5rem", lineHeight: 1.1 }}>
                        Oussama{" "}
                        <span style={{ background: HERO_GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SAKINI</span>
                    </h1>

                    <h2 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: "clamp(1rem,2.5vw,1.5rem)", color: C.textMute, margin: "0 0 2rem", letterSpacing: "0.03em", minHeight: "2rem" }}>
                        <Typewriter texts={["Ingénieur en Intelligence Artificielle", "Data Scientist", "ML & Deep Learning Engineer", "Generative AI Enthusiast"]} />
                    </h2>

                    <p style={{ color: C.textPropos, maxWidth: 560, margin: "0 auto 2.5rem", lineHeight: 1.85, fontFamily: "'Lato', sans-serif", fontSize: "1.05rem" }}>
                        Ingénieur en Intelligence Artificielle et Data Scientist spécialisé en ML, DL et IA Gen.
                        Je conçois des solutions intelligentes, robustes et orientées impact.
                    </p>

                    {/* CTA buttons */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                        {[
                            { label: "📧 Me contacter", href: "#contact", grad: `linear-gradient(135deg, ${C.blue}, ${C.violet})` },
                            { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/oussama-sakini-3b6755273/", grad: `linear-gradient(135deg, ${C.violet}, ${C.pink})` },
                            { label: "⚡ GitHub", href: "https://github.com/OussamaSakini", grad: `linear-gradient(135deg, ${C.pink}, ${C.orange})` },
                        ].map(btn => (
                            <a key={btn.label} href={btn.href} target={btn.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer"
                                style={{ padding: "0.75rem 1.8rem", borderRadius: 8, background: btn.grad, color: "#fff", textDecoration: "none", fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.04em", transition: "all 0.3s", boxShadow: "0 4px 15px rgba(0,0,0,0.12)" }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.12)"; }}
                            >{btn.label}</a>
                        ))}
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "3.5rem", flexWrap: "wrap", width: "100%" }}>
                        {[
                            { val: "3+", label: "Expériences", color: C.blue },
                            { val: "5+", label: "Projets IA", color: C.violet },
                            { val: "3", label: "Langues", color: C.pink },
                        ].map(s => (
                            <div key={s.label} style={{ textAlign: "center" }}>
                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: s.color }}>{s.val}</div>
                                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: C.textMute, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
