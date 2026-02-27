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
            padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2.5rem)",
            position: "relative", zIndex: 1, width: "100%", margin: "0 auto", maxWidth: "1400px"
        }}>
            <SectionHeader title="Parcours" accent={C.blue} />

            {/* Filter tabs */}
            <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", marginBottom: "clamp(2rem, 6vw, 4rem)", flexWrap: "wrap", width: "100%" }}>
                {[{ v: "all", l: "✨ Tout" }, { v: "work", l: "💼 Expériences" }, { v: "edu", l: "🎓 Formations" }].map(f => (
                    <button key={f.v} onClick={() => setFilter(f.v)} style={{
                        padding: "0.6rem 1.6rem", borderRadius: "14px", border: "none",
                        background: filter === f.v ? C.blue : "rgba(255,255,255,0.6)",
                        color: filter === f.v ? "#fff" : C.textSub,
                        fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", cursor: "pointer",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)", fontWeight: 700,
                        boxShadow: filter === f.v ? `0 10px 25px ${C.blue}30` : "0 4px 12px rgba(0,0,0,0.03)",
                        flex: "1 1 auto", maxWidth: "180px"
                    }}>{f.l}</button>
                ))}
            </div>

            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Central line (Desktop only) */}
                <div className="hidden md:block" style={{ position: "absolute", left: "50%", top: "2rem", bottom: "2rem", width: 2, background: `linear-gradient(to bottom, transparent, ${C.blue}20, ${C.blue}20, transparent)`, transform: "translateX(-50%)" }} />

                {data.map((item, i) => (
                    <div key={i} style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "100%",
                        alignItems: "center"
                    }}>
                        {/* Dot - Responsive Position */}
                        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6 md:mb-0" style={{
                            position: "relative",
                            left: "auto",
                            top: "0",
                            transform: "none",
                            width: 24, height: 24, borderRadius: "50%",
                            background: C.bg, border: `4px solid ${C.blue}`,
                            boxShadow: `0 0 15px ${C.blue}40`, zIndex: 5,
                            marginBottom: "1rem",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "0.6rem"
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue }} />
                        </div>

                        {/* Card Container */}
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                            paddingLeft: "0", paddingRight: "0"
                        }} className="md:px-0">
                            <div style={{
                                width: "100%",
                                background: "rgba(255, 255, 255, 0.7)",
                                border: `1px solid ${C.blue}15`,
                                borderRadius: 24,
                                padding: "clamp(1.2rem, 4vw, 2rem)",
                                backdropFilter: "blur(12px)",
                                transition: "all 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                                position: "relative"
                            }}
                                className="md:w-[45%]"
                                onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue + "44"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${C.blue}15`; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = C.blue + "15"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)"; }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.blue}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>{item.icon}</div>
                                    <span style={{ fontSize: "0.75rem", color: C.blue, fontFamily: "'Lato', sans-serif", background: C.blue + "12", padding: "6px 14px", borderRadius: 12, fontWeight: 800, letterSpacing: "0.02em" }}>{item.period}</span>
                                </div>

                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.4rem", fontSize: "1.2rem", fontWeight: 800 }}>{item.title}</h3>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                                    <p style={{ color: C.blue, fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", margin: 0, fontWeight: 700 }}>{item.org}</p>
                                    <span style={{ color: C.textMute, fontSize: "0.8rem" }}>•</span>
                                    <p style={{ color: C.textMute, fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", margin: 0 }}>{item.loc}</p>
                                </div>

                                <div style={{ height: 2, width: 30, background: `linear-gradient(90deg, ${C.blue}, transparent)`, margin: "1rem 0", borderRadius: 1 }} />

                                <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", margin: 0, lineHeight: 1.8, whiteSpace: "pre-line", opacity: 0.9 }}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
