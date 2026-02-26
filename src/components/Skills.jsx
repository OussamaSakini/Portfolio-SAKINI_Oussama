import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";
import Badge from "./Badge";

const skillGroups = [
    { cat: "Data Science & IA", icon: "🧠", accent: C.blue, skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Feature Engineering", "OpenCV", "Time Series",] },
    { cat: "GenAI & LLM", icon: "✨", accent: C.violet, skills: ["LLM", "Prompt Engineering", "RAG", "Fine-tuning", "Hugging Face", "LangChain", "ChromaDB", "Embeddings", "Vector Search", "AI Agents", "Evaluation LLM"] },
    { cat: "Data Engineering & Cloud", icon: "☁️", accent: C.cyan, skills: ["SQL", "MySQL", "Oracle", "MongoDB", "PySpark", "SAS", "ETL / ELT", "Docker", "GitHub Actions", "CI/CD", "Git", "AWS"] },
    { cat: "Développement", icon: "⚙️", accent: C.pink, skills: ["React", "JavaScript", "REST API", "C# for Unity", "Unity 3D", "Scrum", "UML", "GitHub"] },
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2.5rem)", position: "relative", zIndex: 1, width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
            <SectionHeader title="Compétences" accent={C.blue} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 40vw, 340px), 1fr))", gap: "clamp(1rem, 3vw, 2rem)", width: "100%" }}>
                {skillGroups.map(g => (
                    <div key={g.cat} style={{ background: C.bgCard, border: `1px solid ${g.accent}20`, borderRadius: 24, padding: "clamp(1.2rem, 4vw, 2rem)", backdropFilter: "blur(12px)", transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "66"; e.currentTarget.style.boxShadow = `0 20px 40px ${g.accent}15`; e.currentTarget.style.transform = "translateY(-8px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = g.accent + "20"; e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${g.accent}15, ${g.accent}35)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, border: `1px solid ${g.accent}20` }}>{g.icon}</div>
                            <div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>{g.cat}</h3>
                                <div style={{ height: 3, width: 24, background: g.accent, borderRadius: 1.5, marginTop: 4 }} />
                            </div>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {g.skills.map(s => <Badge key={s} label={s} accent={g.accent} />)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
