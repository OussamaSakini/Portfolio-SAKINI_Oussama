import { useState } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";
import Badge from "./Badge";

const projects = [
    { title: "RAG Agent Intelligent", tags: ["LangChain", "RAG", "LLM", "Ollama", "ChromaDB", "Gradio"], cat: "GenAI", icon: "🤖", desc: "Agent intelligent basé sur RAG pour l'interrogation de documents en langage naturel. Interface Gradio interactive pour upload et dialogue.", color: C.violet },
    { title: "Détection d'Anomalies Financières", tags: ["Isolation Forest", "LOF", "Random Forest", "Python"], cat: "ML", icon: "🔍", desc: "Modèles supervisés & non-supervisés pour détecter des anomalies dans les transactions financières. Évaluation F1 & AUC sur données déséquilibrées.", color: C.blue },
    { title: "Détection de Commentaires Toxiques", tags: ["NLP", "LSTM", "TensorFlow", "Pandas"], cat: "NLP", icon: "💬", desc: "Modèle NLP (LSTM) pour classifier les commentaires toxiques. F1-score de 0.90 sur dataset annoté, AUC-ROC excellent.", color: C.pink },
    { title: "Simulateur VR Nucléaire", tags: ["Unity 3D", "OpenCV", "C#", "VR"], cat: "Other", icon: "🥽", desc: "Simulateur immersif en réalité virtuelle pour télémanipulateur nucléaire au CEA. Vision par ordinateur intégrée.", color: C.cyan },
    { title: "Score Prédictif Client", tags: ["PySpark", "Cloudera", "SAS", "ACP", "Clustering"], cat: "ML", icon: "📊", desc: "Scores d'appétence et typologies clients pour optimiser la stratégie commerciale de Crédit Agricole Nord Est.", color: C.blue },
    { title: "Churn Prediction — AXA", tags: ["XGBoost", "Python", "SQL", "Oracle"], cat: "ML", icon: "📉", desc: "Modèle XGBoost pour prédire l'attrition clients assurance. Analyse comportementale et stratégies de fidélisation.", color: C.orange },
];

const catColors = { All: C.text, ML: C.blue, NLP: C.pink, GenAI: C.violet, Other: C.cyan };

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const cats = ["All", "ML", "NLP", "GenAI", "Other"];
    const displayed = filter === "All" ? projects : projects.filter(p => p.cat === filter);
    return (
        <section id="projects" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto" }}>
            <SectionHeader title="Projets" subtitle="Réalisations académiques & professionnelles" accent={C.pink} />

            <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", marginBottom: "2.5rem", flexWrap: "wrap", width: "100%" }}>
                {cats.map(c => {
                    const col = catColors[c];
                    return (
                        <button key={c} onClick={() => setFilter(c)} style={{
                            padding: "0.45rem 1.3rem", borderRadius: 20, border: "none",
                            background: filter === c ? col : "rgba(255,255,255,0.75)",
                            color: filter === c ? "#fff" : col,
                            fontFamily: "'Lato', sans-serif", fontSize: "0.83rem", cursor: "pointer",
                            transition: "all 0.25s", fontWeight: 600,
                            boxShadow: filter === c ? `0 4px 14px ${col}44` : "0 2px 8px rgba(0,0,0,0.06)"
                        }}>{c}</button>
                    );
                })}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "1.5rem", width: "100%" }}>
                {displayed.map((p, i) => (
                    <div key={i} style={{ background: C.bgCard, border: `1px solid ${p.color}25`, borderRadius: 16, padding: "1.6rem", backdropFilter: "blur(10px)", transition: "all 0.3s", position: "relative", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + "88"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${p.color}28`; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = p.color + "25"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                    >
                        {/* top accent bar */}
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}66)` }} />
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.9rem", marginTop: "0.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: p.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem" }}>{p.icon}</div>
                            <span style={{ fontSize: "0.7rem", color: p.color, background: p.color + "18", padding: "3px 10px", borderRadius: 10, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>{p.cat}</span>
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 0.6rem", fontSize: "1.05rem" }}>{p.title}</h3>
                        <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif", fontSize: "0.83rem", lineHeight: 1.7, margin: "0 0 1rem" }}>{p.desc}</p>
                        <div>{p.tags.map(t => <Badge key={t} label={t} accent={p.color} />)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
