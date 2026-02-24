import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";
import Badge from "./Badge";

const skillGroups = [
    { cat: "Data Science & IA", icon: "🧠", accent: C.blue, skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn", "LLM", "Hugging Face", "LangChain", "Fine-tuning", "RAG", "OpenCV"] },
    { cat: "Database & Cloud", icon: "☁️", accent: C.cyan, skills: ["SQL", "MySQL", "Oracle", "MongoDB", "ChromaDB", "AWS", "Docker", "PySpark", "SAS"] },
    { cat: "Développement", icon: "⚙️", accent: C.violet, skills: ["React", "C#", "Unity 3D", "Git", "GitHub", "UML"] },
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto" }}>
            <SectionHeader title="Compétences" subtitle="Technologies & outils maîtrisés" accent={C.blue} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", width: "100%" }}>
                {skillGroups.map(g => (
                    <div key={g.cat} style={{ background: C.bgCard, border: `1px solid ${g.accent}28`, borderRadius: 16, padding: "1.6rem", backdropFilter: "blur(12px)", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = g.accent + "88"; e.currentTarget.style.boxShadow = `0 8px 30px ${g.accent}22`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = g.accent + "28"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.2rem" }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${g.accent}22, ${g.accent}44)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>{g.icon}</div>
                            <div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", color: g.accent, margin: 0, fontSize: "1.05rem" }}>{g.cat}</h3>
                                <div style={{ height: 2, width: 30, background: g.accent, borderRadius: 2, marginTop: 3 }} />
                            </div>
                        </div>
                        <div>{g.skills.map(s => <Badge key={s} label={s} accent={g.accent} />)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
