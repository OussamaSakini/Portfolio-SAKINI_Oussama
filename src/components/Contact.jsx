import { useState, useRef } from "react";
import { C } from "../styles/colors";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [focused, setFocused] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Le nom est requis";
        if (!form.email.trim()) {
            newErrors.email = "L'email est requis";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email invalide";
        }
        if (!form.subject.trim()) newErrors.subject = "Le sujet est requis";
        if (!form.message.trim()) newErrors.message = "Le message est requis";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("sending");

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                setStatus("sent");
                setForm({ name: "", email: "", phone: "", subject: "", message: "" });
            }, (error) => {
                setStatus("error");
                alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
                console.error(error.text);
            });
    };

    const inputStyle = (field) => ({
        width: "100%", padding: "0.85rem 1rem", borderRadius: 10,
        border: `2px solid ${errors[field] ? C.pink : focused === field ? C.blue : "rgba(99,102,241,0.2)"}`,
        background: focused === field ? "rgba(37,99,235,0.03)" : "rgba(255,255,255,0.8)",
        color: C.text, fontFamily: "'Lato', sans-serif", fontSize: "0.95rem",
        outline: "none", transition: "all 0.25s", boxSizing: "border-box",
        backdropFilter: "blur(6px)",
        boxShadow: focused === field ? `0 0 0 4px ${C.blue}18` : "none",
    });

    const infos = [
        { icon: "📧", label: "Email", val: "sakini.oussama@gmail.com", href: "mailto:sakini.oussama@gmail.com", color: C.blue },
        { icon: "📞", label: "Téléphone", val: "+33 7 58 67 57 34", href: "tel:+33758675734", color: C.blue },
        { icon: "📍", label: "Localisation", val: "Reims, FRANCE", href: null, color: C.blue },
        { icon: "💼", label: "LinkedIn", val: "Oussama SAKINI", href: "https://www.linkedin.com/in/oussama-sakini-3b6755273/", color: C.blue },
    ];

    return (
        <section id="contact" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1, width: "100%", margin: "0 auto" }}>
            <SectionHeader title="Contact" /*subtitle="Travillons ensemble — Parlons de votre projet !"*/ accent={C.blue} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start", width: "100%" }}>

                {/* Left — Info cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", width: "100%" }}>
                    {infos.map(info => (
                        <div key={info.label} style={{
                            background: "rgba(255, 255, 255, 0.7)",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            borderRadius: 16,
                            padding: "1rem 1.2rem",
                            backdropFilter: "blur(12px)",
                            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                            display: "flex",
                            alignItems: "center",
                            gap: "1.2rem",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                            cursor: info.href ? "pointer" : "default"
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,0,0,0.06), 0 0 15px ${info.color}10`;
                                e.currentTarget.style.borderColor = info.color + "33";
                                const link = e.currentTarget.querySelector(".info-val");
                                if (link) link.style.color = info.color;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                                const link = e.currentTarget.querySelector(".info-val");
                                if (link) link.style.color = C.text;
                            }}
                            onClick={() => info.href && window.open(info.href, info.href.startsWith("http") ? "_blank" : "_self")}
                        >
                            {/* Icon Box */}
                            <div style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                background: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.3rem",
                                flexShrink: 0,
                                border: `1px solid ${info.color}15`,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                            }}>
                                {info.icon}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "0.7rem",
                                    color: C.textMute,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.12em",
                                    marginBottom: 2,
                                    fontWeight: 700
                                }}>
                                    {info.label}
                                </div>
                                <div className="info-val" style={{
                                    color: C.text,
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    transition: "color 0.3s ease",
                                    wordBreak: "break-all"
                                }}>
                                    {info.val}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Availability badge */}
                    <div style={{ background: `linear-gradient(135deg, ${C.green}15, ${C.cyan}15)`, border: `1px solid ${C.green}44`, borderRadius: 14, padding: "1.2rem 1.4rem", textAlign: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                            <span style={{ width: 10, height: 10, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 10px ${C.green}` }} />
                            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, color: C.green, fontSize: "0.9rem" }}>Disponible immédiatement</span>
                        </div>
                        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.blue, margin: 0 }}>Disponible pour CDI, CDD et missions freelance</p>
                    </div>
                </div>

                {/* Right — Form */}
                <div style={{ background: C.bgCard, border: `1px solid rgba(99,102,241,0.15)`, borderRadius: 20, padding: "2.5rem", backdropFilter: "blur(14px)", boxShadow: "0 8px 30px rgba(0,0,0,0.08)", width: "100%" }}>
                    <div style={{ height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${C.blue}, ${C.violet}, ${C.pink})`, marginBottom: "2rem" }} />

                    {status === "sent" ? (
                        <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.green, margin: "0 0 0.5rem", fontSize: "1.5rem" }}>Message envoyé !</h3>
                            <p style={{ color: C.textSub, fontFamily: "'Lato', sans-serif" }}>Merci pour votre message. Je vous répondrai très bientôt.</p>
                            <button onClick={() => { setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setStatus("idle"); }} style={{ marginTop: "1.5rem", padding: "0.7rem 2rem", borderRadius: 8, background: `linear-gradient(135deg, ${C.blue}, ${C.violet})`, color: "#fff", border: "none", fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", cursor: "pointer", fontWeight: 600 }}>Nouveau message</button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", color: C.text, margin: "0 0 1.5rem", fontSize: "1.3rem" }}>Envoyez-moi un message</h3>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                                <div>
                                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textSub, display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>Nom complet *</label>
                                    <input
                                        name="user_name"
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                        onFocus={() => setFocused("name")}
                                        onBlur={() => setFocused(null)}
                                        placeholder="Votre nom"
                                        style={inputStyle("name")}
                                    />
                                    {errors.name && <span style={{ color: C.pink, fontSize: "0.75rem", fontFamily: "'Lato', sans-serif" }}>{errors.name}</span>}
                                </div>
                                <div>
                                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textSub, display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>Email *</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused(null)}
                                        placeholder="votre@email.com"
                                        style={inputStyle("email")}
                                    />
                                    {errors.email && <span style={{ color: C.pink, fontSize: "0.75rem", fontFamily: "'Lato', sans-serif" }}>{errors.email}</span>}
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                                <div>
                                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textSub, display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>Téléphone</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        value={form.phone}
                                        onChange={e => setForm({ ...form, phone: e.target.value })}
                                        onFocus={() => setFocused("phone")}
                                        onBlur={() => setFocused(null)}
                                        placeholder="+33 6 00 00 00 00"
                                        style={inputStyle("phone")}
                                    />
                                </div>
                                <div>
                                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textSub, display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>Sujet *</label>
                                    <input
                                        name="subject"
                                        value={form.subject}
                                        onChange={e => setForm({ ...form, subject: e.target.value })}
                                        onFocus={() => setFocused("subject")}
                                        onBlur={() => setFocused(null)}
                                        placeholder="Objet de votre message"
                                        style={inputStyle("subject")}
                                    />
                                    {errors.subject && <span style={{ color: C.pink, fontSize: "0.75rem", fontFamily: "'Lato', sans-serif" }}>{errors.subject}</span>}
                                </div>
                            </div>

                            <div style={{ marginBottom: "1.5rem" }}>
                                <label style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: C.textSub, display: "block", marginBottom: "0.4rem", fontWeight: 600 }}>Message *</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    placeholder="Décrivez votre projet ou opportunité..."
                                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 130 }}
                                />
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    {errors.message ? <span style={{ color: C.pink, fontSize: "0.75rem", fontFamily: "'Lato', sans-serif" }}>{errors.message}</span> : <span />}
                                    <span style={{ color: C.textMute, fontSize: "0.73rem", fontFamily: "'Lato', sans-serif" }}>{form.message.length} car.</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                style={{
                                    width: "100%", padding: "0.9rem", borderRadius: 10, border: "none",
                                    background: status === "sending" ? C.textMute : `linear-gradient(135deg, ${C.blue}, ${C.violet}, ${C.pink})`,
                                    backgroundSize: "200% 200%",
                                    color: "#fff", fontFamily: "'Lato', sans-serif", fontSize: "1rem",
                                    fontWeight: 700, cursor: status === "sending" ? "not-allowed" : "pointer",
                                    transition: "all 0.3s", letterSpacing: "0.05em",
                                    boxShadow: status === "sending" ? "none" : `0 6px 20px ${C.violet}44`,
                                }}
                                onMouseEnter={e => { if (status !== "sending") { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 10px 30px ${C.violet}55`; } }}
                                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 6px 20px ${C.violet}44`; }}
                            >
                                {status === "sending" ? "  Envoi en cours..." : "  Envoyer le message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
