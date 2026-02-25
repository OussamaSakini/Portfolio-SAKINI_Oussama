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
        <section id="certs" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto", maxWidth: "1300px" }}>
            <SectionHeader title="Certifications" accent={C.blue} />
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", justifyContent: "center", width: "100%" }}>
                <button onClick={prev} style={{ width: 44, height: 44, borderRadius: "50%", border: `2px solid ${C.blue}`, background: "rgba(255,255,255,0.8)", color: C.blue, fontSize: "1.2rem", cursor: "pointer", transition: "all 0.2s", flexShrink: 0, backdropFilter: "blur(8px)" }}
                    onMouseEnter={e => { e.target.style.background = C.blue; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.color = C.blue; }}>‹</button>

                <div style={{ display: "flex", gap: "2rem", overflow: "hidden", justifyContent: "center", flex: 1 }}>
                    {vis.map((c, i) => {
                        const isCenter = i === 1;
                        return (
                            <a key={`${c.title}-${cur}-${i}`} href={c.link} target="_blank" rel="noreferrer"
                                className="cert-card-anim" style={{
                                    width: isCenter ? 360 : 300,
                                    flexShrink: 0,
                                    background: isCenter ? `linear-gradient(135deg, ${c.color}15, ${c.color}05)` : "rgba(255,255,255,0.6)",
                                    border: `${isCenter ? 2 : 1}px solid ${isCenter ? c.color : c.color + "40"}`,
                                    borderRadius: 16,
                                    padding: "2rem 1.5rem",
                                    textAlign: "center",
                                    opacity: isCenter ? 1 : 0.65,
                                    transform: isCenter ? "scale(1.06)" : "scale(0.9)",
                                    transition: "all 0.4s ease",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: isCenter ? `0 20px 50px ${c.color}30` : "none",
                                    textDecoration: "none",
                                    display: "block"
                                }}
                                onMouseEnter={e => { if (isCenter) e.currentTarget.style.transform = "scale(1.08) translateY(-5px)"; }}
                                onMouseLeave={e => { if (isCenter) e.currentTarget.style.transform = "scale(1.06) translateY(0)"; }}
                            >
                                <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                                    <img src={c.logo} alt={c.org} style={{ maxHeight: "100%", maxWidth: "80%", objectFit: "contain", filter: isCenter ? "none" : "grayscale(1) opacity(0.7)" }} />
                                </div>
                                <div style={{ width: 40, height: 3, background: `linear-gradient(90deg, ${c.color}, ${c.color}88)`, margin: "0 auto 1rem", borderRadius: 2 }} />
                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.4rem", fontSize: isCenter ? "1.05rem" : "0.9rem", lineHeight: 1.3 }}>{c.title}</h3>
                                <p style={{ color: c.color, fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", margin: "0 0 0.3rem", fontWeight: 700 }}>{c.org}</p>
                            </a>
                        );
                    })}
                </div>

                <button onClick={next} style={{ width: 44, height: 44, borderRadius: "50%", border: `2px solid ${C.blue}`, background: "rgba(255,255,255,0.8)", color: C.blue, fontSize: "1.2rem", cursor: "pointer", transition: "all 0.2s", flexShrink: 0, backdropFilter: "blur(8px)" }}
                    onMouseEnter={e => { e.target.style.background = C.blue; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.color = C.blue; }}>›</button>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
                {certs.map((c, i) => (
                    <div key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 28 : 8, height: 8, borderRadius: 4, background: i === cur ? certs[cur].color : C.textMute + "55", cursor: "pointer", transition: "all 0.3s" }} />
                ))}
            </div>
        </section>
    );
}
