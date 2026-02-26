import { useState } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";

import courseraLogo from "../assets/Coursera.png";
import huaweiLogo from "../assets/Huawei.png";

const certs = [
    {
        title: "Apache Airflow 3 Fundamentals",
        org: "Apache Airflow",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png",
        link: "https://drive.google.com/file/d/1UdYIRlM3u7f2rNNhMmYwjTJfAe8pDwdM/view?usp=sharing",
        color: C.blue
    },
    {
        title: "Machine Learning for All",
        org: "Coursera",
        logo: courseraLogo,
        link: "https://drive.google.com/file/d/1hZ14uggY6Lx6aXKpdgr-DN3pn_W_SXu-/view?usp=sharing",
        color: C.blue
    },
    {
        title: "Huawei Certification 5G",
        org: "Huawei",
        logo: huaweiLogo,
        link: "https://drive.google.com/file/d/1Oq3anHqNww09sW4g4hbq07pGjK6X7j_u/view?usp=sharing",
        color: C.blue
    },
    {
        title: "Unity Essentials Pathway",
        org: "Unity",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg",
        link: "https://drive.google.com/file/d/1Ya_c6x78a5y9FhS3wye2rKfN6jEnjOsf/view?usp=sharing",
        color: C.blue
    },
    {
        title: "Teamwork Skills: Communicating Effectively in Groups",
        org: "Coursera",
        logo: courseraLogo,
        link: "https://drive.google.com/file/d/1xFt0WGC-MYQQjsOiH9gheu7ihK9CSgTp/view?usp=sharing",
        color: C.blue
    },
    {
        title: "NDG Linux Essentials",
        org: "Cisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
        link: "https://drive.google.com/file/d/1IqZORV5h2NRPRaDlJWH3klS_h9hn1yFK/view?usp=drive_link",
        color: C.blue
    },
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
        <section id="certs" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2.5rem)", position: "relative", zIndex: 1, width: "100%", margin: "0 auto", maxWidth: "1400px" }}>
            <SectionHeader title="Certifications" accent={C.blue} />
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(0.5rem, 3vw, 2.5rem)", justifyContent: "center", width: "100%" }}>
                <button onClick={prev} style={{ width: "clamp(40px, 8vw, 50px)", height: "clamp(40px, 8vw, 50px)", borderRadius: "50%", border: `2px solid ${C.blue}`, background: "rgba(255,255,255,0.8)", color: C.blue, fontSize: "1.5rem", cursor: "pointer", transition: "all 0.3s", flexShrink: 0, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; e.currentTarget.style.color = C.blue; }}>‹</button>

                <div style={{ display: "flex", gap: "1.5rem", overflow: "visible", justifyContent: "center", flex: 1, minHeight: "420px", alignItems: "center" }}>
                    {vis.map((c, i) => {
                        const isCenter = i === 1;
                        return (
                            <a key={`${c.title}-${cur}-${i}`} href={c.link} target="_blank" rel="noreferrer"
                                className={`cert-card-anim ${!isCenter ? "hidden md:flex" : "flex"}`} style={{
                                    width: isCenter ? "clamp(280px, 80vw, 380px)" : "300px",
                                    flexShrink: 0,
                                    background: isCenter ? `linear-gradient(135deg, ${c.color}10, ${c.color}05)` : "rgba(255,255,255,0.4)",
                                    border: `${isCenter ? 2 : 1}px solid ${isCenter ? c.color : c.color + "20"}`,
                                    borderRadius: 24,
                                    padding: "clamp(1.5rem, 5vw, 2.5rem) 1.5rem",
                                    textAlign: "center",
                                    opacity: isCenter ? 1 : 0.4,
                                    transform: isCenter ? "scale(1.05)" : "scale(0.9)",
                                    transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                                    backdropFilter: "blur(12px)",
                                    boxShadow: isCenter ? `0 25px 60px -15px ${c.color}25` : "none",
                                    textDecoration: "none",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                                onMouseEnter={e => { if (isCenter) { e.currentTarget.style.transform = "scale(1.08) translateY(-8px)"; e.currentTarget.style.boxShadow = `0 35px 70px -15px ${c.color}35`; } }}
                                onMouseLeave={e => { if (isCenter) { e.currentTarget.style.transform = "scale(1.05) translateY(0)"; e.currentTarget.style.boxShadow = `0 25px 60px -15px ${c.color}25`; } }}
                            >
                                <div style={{ height: 70, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                                    <img src={c.logo} alt={c.org} style={{ maxHeight: "100%", maxWidth: "85%", objectFit: "contain", filter: isCenter ? "none" : "grayscale(1) opacity(0.5)" }} />
                                </div>
                                <div style={{ width: 40, height: 4, background: `linear-gradient(90deg, ${c.color}, ${c.color}44)`, margin: "0 auto 1.5rem", borderRadius: 2 }} />
                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.5rem", fontSize: isCenter ? "1.15rem" : "0.95rem", fontWeight: 800, lineHeight: 1.3 }}>{c.title}</h3>
                                <p style={{ color: c.color, fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", margin: "0 0 0.5rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.org}</p>
                            </a>
                        );
                    })}
                </div>

                <button onClick={next} style={{ width: "clamp(40px, 8vw, 50px)", height: "clamp(40px, 8vw, 50px)", borderRadius: "50%", border: `2px solid ${C.blue}`, background: "rgba(255,255,255,0.8)", color: C.blue, fontSize: "1.5rem", cursor: "pointer", transition: "all 0.3s", flexShrink: 0, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; e.currentTarget.style.color = C.blue; }}>›</button>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
                {certs.map((c, i) => (
                    <div key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 28 : 8, height: 8, borderRadius: 4, background: i === cur ? certs[cur].color : C.textMute + "55", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
            </div>
        </section>
    );
}
