import { useState } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";

const timelineData = [
    {
        type: "work", title: "Data Scientist", org: "Crédit Agricole Nord Est", loc: "Reims, France", period: "03/2025 – 09/2025", color: C.blue, icon: "💼", desc: `– Création de scores prédictifs d’appétence et de typologies clients afin d’optimiser la stratégie commerciale
        – Développement de macros SAS pour la génération de variables et d’indicateurs métier.
        – Participation à la migration potentielle de SAS vers un nouvel environnement de travail, à travers la conception de trames réutilisables et la rédaction de documentations techniques destinées à accélérer les futurs développements et à faciliter la montée en compétences de l’équipe.
        – Collaboration avec les équipes Marketing, Finance, CRM et la caisse régionale d'Alsace Vosges.` },
    { type: "edu", title: "Master M2 \"Data Science\"", org: "Université Claude Bernard Lyon 1", loc: "Lyon, France", period: "2024 – 2025", color: C.blue, icon: "🎓", desc: "Spécialisation approfondie en data science et machine learning avancé." },
    {
        type: "work", title: "Ingénieur Développement VR", org: "CEA", loc: "Marcoule, France", period: "02/2024 – 08/2024", color: C.blue, icon: "💼", desc: `– Conception et développement d’un simulateur immersif en réalité virtuelle (VR) destiné à la télémanipulation en environnement nucléaire.
        – Intégration du module d'OpenCV pour assister l’utilisateur et améliorer la précision des mouvements.
– Évaluation ergonomique et cognitive du simulateur à l’aide de la méthode NASA - TLX(Task Load Index) afin de mesurer la charge mentale, physique et temporelle des utilisateurs.` },
    { type: "edu", title: "Master M2 \"Management des Technologies Interactives\"", org: "Arts Et Métiers (ENSAM) Campus de Cluny", loc: "Chalon-Sur-Saône, France", period: "2023 – 2024", color: C.blue, icon: "🎓", desc: "Double diplôme en management des technologies interactives." },
    {
        type: "work", title: "Stagiaire Data Scientist", org: "AXA", loc: "Casablanca, Maroc", period: "07/2023 – 09/2023", color: C.blue, icon: "💼", desc: `– Développement d’un modèle de machine learning basé sur XGBoost pour prédire l'attrition des clients.
– Analyse des comportements clients pour identifier les profils à risque et mise en place de stratégies de fidélisation.` },
    { type: "edu", title: "Diplôme Ingénieur Intelligence Artificielle & Génie Informatique", org: "Arts Et Métiers (ENSAM) Campus de Casablanca", loc: "Casablanca, Maroc", period: "2019 – 2024", color: C.blue, icon: "🎓", desc: "Formation d'ingénieur d'état en Intelligence Artificielle et Génie Informatique." },
];

export default function Timeline() {
    const [filter, setFilter] = useState("all");
    const data = filter === "all" ? timelineData : timelineData.filter(d => d.type === filter);

    return (
        <section id="timeline" style={{
            padding: "clamp(4rem, 10vw, 6rem) clamp(1rem, 5vw, 2rem)",
            position: "relative", zIndex: 1, width: "100%", margin: "0 auto", maxWidth: "1500px"
        }}>
            <SectionHeader title="Parcours" accent={C.blue} />

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", marginBottom: "3rem", flexWrap: "wrap" }}>
                {[{ v: "all", l: "✨ Tout", c: C.blue }, { v: "work", l: "💼 Expériences", c: C.blue }, { v: "edu", l: "🎓 Formations", c: C.blue }].map(f => (
                    <button key={f.v} onClick={() => setFilter(f.v)} style={{
                        padding: "0.5rem 1.4rem", borderRadius: 20, border: "none",
                        background: filter === f.v ? f.c : "rgba(255,255,255,0.7)",
                        color: filter === f.v ? "#fff" : C.textSub,
                        fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", cursor: "pointer",
                        transition: "all 0.25s", fontWeight: filter === f.v ? 600 : 400,
                        boxShadow: filter === f.v ? `0 4px 14px ${f.c}44` : "0 2px 8px rgba(0,0,0,0.06)"
                    }}>{f.l}</button>
                ))}
            </div>

            <div style={{ position: "relative", width: "100%" }}>
                {/* Vertical Line - Hidden on very small screens, moved on others */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: `linear-gradient(to bottom, transparent, ${C.blue}30, ${C.blue}30, transparent)`,
                        zIndex: 1
                    }}
                    className="md:block hidden"
                />

                {data.map((item, i) => (
                    <div key={i} style={{
                        display: "flex",
                        justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                        marginBottom: "clamp(2rem, 5vw, 3.5rem)",
                        position: "relative",
                        width: "100%"
                    }} className="md:flex-row flex-col">

                        {/* Dot (Desktop) */}
                        <div
                            style={{
                                position: "absolute", left: "50%", top: "1.4rem",
                                transform: "translateX(-50%)", width: 16, height: 16,
                                borderRadius: "50%", background: C.blue, border: `3px solid ${C.bg}`,
                                boxShadow: `0 0 15px ${C.blue}66`, zIndex: 2
                            }}
                            className="md:block hidden"
                        />

                        {/* Timeline Card */}
                        <div
                            style={{
                                background: C.bgCard, border: `1px solid ${C.blue}15`,
                                borderRadius: 20, padding: "1.5rem", backdropFilter: "blur(10px)",
                                transition: "all 0.3s", boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                            }}
                            className="w-full md:w-[45%]"
                            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue + "44"; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 15px 40px ${C.blue}20`; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = C.blue + "15"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)"; }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${C.blue}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{item.icon}</div>
                                <span style={{ fontSize: "0.75rem", color: C.blue, fontFamily: "'Lato', sans-serif", background: C.blue + "12", padding: "4px 12px", borderRadius: 10, fontWeight: 700 }}>{item.period}</span>
                            </div>

                            <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.3rem", fontSize: "1.1rem", fontWeight: 700 }}>{item.title}</h3>
                            <p style={{ color: C.blue, fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", margin: "0 0 0.2rem", fontWeight: 700 }}>{item.org}</p>
                            <p style={{ color: C.textMute, fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", margin: "0 0 1rem" }}>📍 {item.loc}</p>

                            <div style={{ height: 1.5, width: 40, background: `linear-gradient(90deg, ${C.blue}40, transparent)`, marginBottom: "1rem" }} />

                            <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", margin: 0, lineHeight: 1.7, whiteSpace: "pre-line", textAlign: "justify" }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
