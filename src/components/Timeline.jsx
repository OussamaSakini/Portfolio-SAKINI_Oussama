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
        <section id="timeline" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto", maxWidth: "1500px" }}>
            <SectionHeader title="Parcours" /*subtitle="Expériences professionnelles & formations"*/ accent={C.blue} />

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
                {data.map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: "3.5rem", position: "relative", width: "100%" }}>
                        {/* vertical line segment - connects dots from center to center */}
                        {i < data.length - 1 && (
                            <div style={{
                                position: "absolute",
                                left: "50%",
                                top: "1.9rem",
                                height: "calc(100% + 3.5rem)",
                                width: 2,
                                background: C.blue,
                                transform: "translateX(-50%)",
                                opacity: 0.2,
                                zIndex: 1
                            }} />
                        )}
                        {/* dot */}
                        <div style={{ position: "absolute", left: "50%", top: "1.4rem", transform: "translateX(-50%)", width: 16, height: 16, borderRadius: "50%", background: C.blue, border: `3px solid ${C.bg}`, boxShadow: `0 0 15px ${C.blue}66`, zIndex: 2 }} />
                        <div style={{ width: "42%", background: C.bgCard, border: `1px solid ${C.blue}15`, borderRadius: 14, padding: "1.3rem 1.5rem", backdropFilter: "blur(10px)", transition: "all 0.3s", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue + "44"; e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = `0 10px 30px ${C.blue}25`; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = C.blue + "15"; e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                                <span style={{ fontSize: "0.7rem", color: C.blue, fontFamily: "'Lato', sans-serif", background: C.blue + "12", padding: "3px 10px", borderRadius: 10, fontWeight: 600 }}>{item.period}</span>
                            </div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.25rem", fontSize: "1rem" }}>{item.title}</h3>
                            <p style={{ color: C.blue, fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", margin: "0 0 0.2rem", fontWeight: 600 }}>{item.org}</p>
                            <p style={{ color: C.textMute, fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", margin: "0 0 0.7rem" }}>📍 {item.loc}</p>
                            <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif", fontSize: "0.83rem", margin: 0, lineHeight: 1.65, whiteSpace: "pre-line", textAlign: "justify" }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
