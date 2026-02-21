import { useState } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";

const certs = [
    { title: "AWS Cloud Practitioner", org: "Amazon Web Services", year: "2025 (en cours)", icon: "☁️", color: C.orange },
    { title: "TensorFlow Developer Certificate", org: "Google", year: "2025 (en cours)", icon: "🧠", color: C.green },
    { title: "Deep Learning Specialization", org: "Coursera / deeplearning.ai", year: "2025 (en cours)", icon: "🤖", color: C.cyan },
    { title: "Master M2 Data Science", org: "Université Claude Bernard Lyon 1", year: "2025", icon: "🎓", color: C.blue },
    { title: "Diplôme Ingénieur IA", org: "Arts Et Métiers ENSAM", year: "2024", icon: "🏛️", color: C.violet },
    { title: "Master Management Tech Interactives", org: "Institut Art Cluny", year: "2024", icon: "🎖️", color: C.pink },
];

export default function Certifications() {
    const [cur, setCur] = useState(0);
    const prev = () => setCur((cur - 1 + certs.length) % certs.length);
    const next = () => setCur((cur + 1) % certs.length);
    const vis = [
        certs[(cur - 1 + certs.length) % certs.length],
        certs[cur],
        certs[(cur + 1) % certs.length],
    ];
    return (
        <section id="certs" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto" }}>
            <SectionHeader title="Certifications & Diplômes" subtitle="Formation & accréditations" accent={C.cyan} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", width: "100%" }}>
                <button onClick={prev} style={{ width: 44, height: 44, borderRadius: "50%", border: `2px solid ${C.blue}`, background: "rgba(255,255,255,0.8)", color: C.blue, fontSize: "1.2rem", cursor: "pointer", transition: "all 0.2s", flexShrink: 0, backdropFilter: "blur(8px)" }}
                    onMouseEnter={e => { e.target.style.background = C.blue; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.color = C.blue; }}>‹</button>

                <div style={{ display: "flex", gap: "1rem", overflow: "hidden", justifyContent: "center", flex: 1 }}>
                    {vis.map((c, i) => {
                        const isCenter = i === 1;
                        return (
                            <div key={i} style={{ width: isCenter ? 280 : 200, flexShrink: 0, background: isCenter ? `linear-gradient(135deg, ${c.color}15, ${c.color}05)` : "rgba(255,255,255,0.6)", border: `${isCenter ? 2 : 1}px solid ${isCenter ? c.color : c.color + "40"}`, borderRadius: 16, padding: "2rem 1.5rem", textAlign: "center", opacity: isCenter ? 1 : 0.5, transform: isCenter ? "scale(1.06)" : "scale(0.9)", transition: "all 0.4s ease", backdropFilter: "blur(10px)", boxShadow: isCenter ? `0 20px 50px ${c.color}30` : "none" }}>
                                <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{c.icon}</div>
                                <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, ${c.color}, ${c.color}88)`, margin: "0 auto 1rem", borderRadius: 2 }} />
                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.4rem", fontSize: isCenter ? "1rem" : "0.85rem", lineHeight: 1.3 }}>{c.title}</h3>
                                <p style={{ color: c.color, fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", margin: "0 0 0.3rem", fontWeight: 600 }}>{c.org}</p>
                                <p style={{ color: C.textMute, fontFamily: "'Lato', sans-serif", fontSize: "0.74rem", margin: 0 }}>{c.year}</p>
                            </div>
                        );
                    })}
                </div>

                <button onClick={next} style={{ width: 44, height: 44, borderRadius: "50%", border: `2px solid ${C.violet}`, background: "rgba(255,255,255,0.8)", color: C.violet, fontSize: "1.2rem", cursor: "pointer", transition: "all 0.2s", flexShrink: 0, backdropFilter: "blur(8px)" }}
                    onMouseEnter={e => { e.target.style.background = C.violet; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.color = C.violet; }}>›</button>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
                {certs.map((c, i) => (
                    <div key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 28 : 8, height: 8, borderRadius: 4, background: i === cur ? certs[cur].color : C.textMute + "55", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
            </div>
        </section>
    );
}
