import { useState } from "react";

export default function Badge({ label, accent = "#7c3aed" }) {
    const [hov, setHov] = useState(false);
    return (
        <span
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                display: "inline-block", padding: "4px 13px", borderRadius: 20,
                border: `1px solid ${hov ? accent : accent + "55"}`,
                color: hov ? "#fff" : accent,
                background: hov ? accent : accent + "15",
                fontSize: "0.76rem", fontFamily: "'Lato', sans-serif",
                transition: "all 0.22s", cursor: "default", margin: "3px",
                boxShadow: hov ? `0 4px 14px ${accent}44` : "none",
            }}
        >{label}</span>
    );
}
