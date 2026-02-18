import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
    else setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggle = () => {
    setDark((p) => {
      localStorage.setItem("theme", !p ? "dark" : "light");
      return !p;
    });
  };

  const t = {
    dark,
    toggle,
    bg: dark ? "#050507" : "#f5f5f7",
    bgCard: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
    bgCardHover: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    border: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
    borderHover: dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.18)",
    text: dark ? "#ffffff" : "#0a0a0f",
    textMuted: dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)",
    textSub: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)",
    navBg: dark ? "rgba(5,5,7,0.85)" : "rgba(245,245,247,0.85)",
    gridColor: dark ? "rgba(74,255,167,0.04)" : "rgba(0,150,100,0.04)",
    skillTrack: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
    tagBg: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    tagBorder: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    tagText: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    softBg: dark ? "rgba(167,139,250,0.05)" : "rgba(167,139,250,0.08)",
    softBorder: dark ? "rgba(167,139,250,0.15)" : "rgba(167,139,250,0.25)",
    footerBorder: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.08)",
  };

  return <ThemeContext.Provider value={t}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);