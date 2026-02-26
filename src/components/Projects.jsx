import { useState, useEffect } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";
import Badge from "./Badge";

const projects = [
    {
        title: "RAG Agent Intelligent",
        tags: ["LangChain", "RAG", "LLM", "Ollama", "ChromaDB", "Gradio"],
        cat: "GenAI",
        icon: "🤖",
        desc: "Agent intelligent basé sur RAG pour l'interrogation de documents en langage naturel. Interface Gradio interactive pour upload et dialogue.",
        color: C.violet,
        glow: "rgba(124, 58, 237, 0.4)"
    },
    {
        title: "Détection d'Anomalies Financières",
        tags: ["Isolation Forest", "LOF", "Random Forest"],
        cat: "ML",
        icon: "🔍",
        desc: "Modèles supervisés & non-supervisés pour détecter des anomalies dans les transactions financières. Évaluation F1 & AUC sur données déséquilibrées.",
        color: C.blue,
        glow: "rgba(37, 99, 235, 0.4)"
    },
    {
        title: "Détection de Commentaires Toxiques",
        tags: ["NLP", "LSTM", "TensorFlow", "Pandas"],
        cat: "NLP",
        icon: "💬",
        desc: "Modèle NLP (LSTM) pour classifier les commentaires toxiques. F1-score de 0.90 sur dataset annoté, AUC-ROC excellent.",
        color: C.pink,
        glow: "rgba(236, 72, 153, 0.4)"
    },
    {
        title: "Simulateur VR Nucléaire",
        tags: ["Unity 3D", "OpenCV", "C#", "VR", "CEA"],
        cat: "Other",
        icon: "🥽",
        desc: "Simulateur immersif en réalité virtuelle pour télémanipulateur nucléaire au CEA. Vision par ordinateur intégrée via OpenCV.",
        color: C.cyan,
        glow: "rgba(6, 182, 212, 0.4)"
    },
    {
        title: "Score Prédictif Client",
        tags: ["PySpark", "Cloudera", "SAS", "ACP", "Clustering"],
        cat: "ML",
        icon: "📊",
        desc: "Scores d'appétence et typologies clients pour optimiser la stratégie commerciale de Crédit Agricole Nord Est.",
        color: C.blue,
        glow: "rgba(37, 99, 235, 0.4)"
    },
    {
        title: "Churn Prediction (Chez AXA)",
        tags: ["XGBoost", "Python", "SQL", "Oracle", "Scrum"],
        cat: "ML",
        icon: "📉",
        desc: "Modèle XGBoost pour prédire l'attrition clients assurance. Analyse comportementale et stratégies de fidélisation.",
        color: C.blue,
        glow: "rgba(37, 99, 235, 0.4)"
    },
];

const catColors = {
    All: C.blue,
    ML: C.blue,
    NLP: C.pink,
    GenAI: C.violet,
    Other: C.cyan
};

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [animate, setAnimate] = useState(true);
    const cats = ["All", "ML", "NLP", "GenAI", "Other"];

    useEffect(() => {
        setAnimate(false);
        const timer = setTimeout(() => setAnimate(true), 10);
        return () => clearTimeout(timer);
    }, [filter]);

    const displayed = filter === "All" ? projects : projects.filter(p => p.cat === filter);

    return (
        <section id="projects" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2.5rem)", position: "relative", zIndex: 1, width: "100%", maxWidth: "1400px", margin: "0 auto", overflow: "hidden" }}>
            <SectionHeader title="Projets" accent={C.blue} />

            {/* Filter Navigation - Premium Glass */}
            <div style={{
                display: "flex",
                gap: "clamp(0.4rem, 2vw, 0.8rem)",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                padding: "clamp(0.4rem, 2vw, 0.6rem)",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                maxWidth: "700px",
                margin: "0 auto clamp(2.5rem, 6vw, 4rem)"
            }}>
                {cats.map(c => {
                    const col = catColors[c];
                    const isActive = filter === c;
                    return (
                        <button key={c} onClick={() => setFilter(c)} style={{
                            padding: "clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 3vw, 1.6rem)",
                            borderRadius: "14px",
                            border: "none",
                            background: isActive ? col : "transparent",
                            color: isActive ? "#fff" : C.textSub,
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
                            cursor: "pointer",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            fontWeight: 700,
                            boxShadow: isActive ? `0 8px 20px ${col}44` : "none",
                            letterSpacing: "0.03em",
                            flex: "1 1 auto",
                            minWidth: "60px"
                        }}
                            onMouseEnter={e => { if (!isActive) e.target.style.color = col; }}
                            onMouseLeave={e => { if (!isActive) e.target.style.color = C.textSub; }}
                        >{c}</button>
                    );
                })}
            </div>

            <div className="projects-grid" style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
            }}>
                {displayed.map((p, i) => (
                    <div key={p.title} style={{
                        background: "rgba(255, 255, 255, 0.7)",
                        border: `1px solid rgba(255, 255, 255, 0.6)`,
                        borderRadius: "24px",
                        padding: "2.2rem",
                        backdropFilter: "blur(20px)",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.2rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                        height: "100%"
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = p.color + "44";
                            e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                            e.currentTarget.style.boxShadow = `0 30px 60px -12px ${p.color}20, 0 18px 36px -18px rgba(0,0,0,0.1)`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                        }}
                    >
                        {/* Status/Category Badge */}
                        <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
                            <span style={{
                                fontSize: "0.65rem",
                                color: p.color,
                                background: p.color + "12",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                border: `1px solid ${p.color}22`
                            }}>{p.cat}</span>
                        </div>

                        {/* Icon Container with soft glow */}
                        <div style={{
                            width: 64,
                            height: 64,
                            borderRadius: "20px",
                            background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "2.2rem",
                            boxShadow: `0 8px 16px ${p.color}08`,
                            border: `1px solid ${p.color}15`
                        }}>{p.icon}</div>

                        <div style={{ flex: 1 }}>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                color: C.text,
                                margin: "0 0 0.8rem",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2
                            }}>{p.title}</h3>

                            <p style={{
                                color: C.textSub,
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "0.92rem",
                                lineHeight: 1.8,
                                margin: "0 0 1.5rem",
                                textAlign: "justify",
                                opacity: 0.85
                            }}>{p.desc}</p>
                        </div>

                        {/* Tags with modern styling */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {p.tags.map(t => (
                                <span key={t} style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "'Lato', sans-serif",
                                    color: C.textMute,
                                    background: "rgba(0,0,0,0.04)",
                                    padding: "4px 12px",
                                    borderRadius: "8px",
                                    fontWeight: 500,
                                    border: "1px solid rgba(0,0,0,0.03)"
                                }}>{t}</span>
                            ))}
                        </div>

                        {/* Decorative subtle gradient blob */}
                        <div style={{
                            position: "absolute",
                            bottom: "-20%",
                            right: "-10%",
                            width: "50%",
                            height: "40%",
                            background: `radial-gradient(circle, ${p.color}08, transparent 70%)`,
                            pointerEvents: "none",
                            zIndex: -1
                        }} />
                    </div>
                ))}
            </div>
        </section>
    );
}
