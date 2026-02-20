import { useState, useEffect } from "react";
import { C } from "../styles/colors";

export default function Typewriter({ texts }) {
    const [display, setDisplay] = useState("");
    const [idx, setIdx] = useState(0);
    const [typing, setTyping] = useState(true);
    const colors = [C.blue, C.violet, C.pink, C.cyan];

    useEffect(() => {
        const current = texts[idx];
        if (typing) {
            if (display.length < current.length) {
                const t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 58);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setTyping(false), 1800);
                return () => clearTimeout(t);
            }
        } else {
            if (display.length > 0) {
                const t = setTimeout(() => setDisplay(display.slice(0, -1)), 32);
                return () => clearTimeout(t);
            } else {
                setIdx((idx + 1) % texts.length);
                setTyping(true);
            }
        }
    }, [display, typing, idx, texts]);

    return (
        <span style={{ color: colors[idx % colors.length], transition: "color 0.5s" }}>
            {display}<span style={{ animation: "blink 1s step-end infinite" }}>|</span>
        </span>
    );
}
