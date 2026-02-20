import { C } from "../styles/colors";

export default function SectionHeader({ title, subtitle, accent = C.blue }) {
    return (
        <div style={{ textAlign: "center", marginBottom: "3rem", width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div style={{ height: 2, width: 60, background: `linear-gradient(to right, transparent, ${accent})`, borderRadius: 2 }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: accent, margin: 0, letterSpacing: "0.04em" }}>{title}</h2>
                <div style={{ height: 2, width: 60, background: `linear-gradient(to left, transparent, ${accent})`, borderRadius: 2 }} />
            </div>
            {subtitle && <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif", margin: 0, fontSize: "0.95rem" }}>{subtitle}</p>}
        </div>
    );
}
