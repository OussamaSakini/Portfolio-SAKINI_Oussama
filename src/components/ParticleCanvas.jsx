import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animId;
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener("resize", resize);

        const COLORS = [
            [37, 99, 235], [124, 58, 237], [236, 72, 153], [6, 182, 212], [249, 115, 22]
        ];

        const particles = Array.from({ length: 100 }, () => {
            const col = COLORS[Math.floor(Math.random() * COLORS.length)];
            return {
                x: Math.random() * (canvas.width || 1200),
                y: Math.random() * (canvas.height || 800),
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.45,
                dy: (Math.random() - 0.5) * 0.45,
                alpha: Math.random() * 0.5 + 0.15,
                col,
            };
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.col.join(",")},${p.alpha})`;
                ctx.fill();
            });
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        const col = particles[i].col;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${col.join(",")},${0.1 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.7;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}
