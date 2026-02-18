export const EXPERIENCES = [
  {
    role: "Data Scientist",
    company: "Crédit Agricole Nord Est",
    period: "03/2025 – 09/2025",
    location: "Reims, France",
    color: "#4AFFA7",
    icon: "🏦",
    tech: ["Python", "PySpark", "Cloudera", "SAS", "Hive", "ACP", "Clustering"],
    bullets: [
      "Scores prédictifs d'appétence & typologies clients pour optimiser la stratégie commerciale.",
      "Migration SAS → Python/PySpark sur la plateforme Cloudera (ZEUS) avec validation statistique.",
      "Collaboration avec équipes marketing, finance & CRM de deux caisses régionales.",
      "Développement de macros SAS pour la création de variables et d'indicateurs métier.",
    ],
  },
  {
    role: "Ingénieur Développement VR",
    company: "CEA Marcoule",
    period: "02/2024 – 08/2024",
    location: "Marcoule, France",
    color: "#A78BFA",
    icon: "☢️",
    tech: ["Unity 3D", "OpenCV", "C#"],
    bullets: [
      "Développement d'un simulateur immersif en VR pour télémanipulateur nucléaire.",
      "Intégration de vision par ordinateur (OpenCV) pour améliorer précision et sécurité.",
    ],
  },
  {
    role: "Stagiaire Data Scientist",
    company: "AXA",
    period: "07/2023 – 09/2023",
    location: "Casablanca, Maroc",
    color: "#FB923C",
    icon: "📊",
    tech: ["XGBoost", "Python", "SQL", "Oracle"],
    bullets: [
      "Modèle ML basé sur XGBoost pour prédire le churn (attrition) des clients.",
      "Analyse des comportements clients pour identifier les profils à risque.",
    ],
  },
];

export const PROJECTS = [
  {
    icon: "🤖",
    title: "RAG Agent",
    color: "#4AFFA7",
    tech: ["LangChain", "RAG", "Ollama", "ChromaDB", "Gradio"],
    desc: "Agent intelligent pour interrogation de documents en langage naturel via une interface Gradio.",
  },
  {
    icon: "💰",
    title: "Détection d'Anomalies",
    color: "#A78BFA",
    tech: ["Isolation Forest", "LOF", "Random Forest"],
    desc: "Détection d'anomalies dans des transactions financières avec données déséquilibrées — évalué par F1 & AUC.",
  },
  {
    icon: "🧠",
    title: "Commentaires Toxiques",
    color: "#FB923C",
    tech: ["LSTM", "NLP", "TensorFlow", "Pandas"],
    desc: "Modèle LSTM pour classer automatiquement les commentaires toxiques. F1-score 0.90, AUC-ROC élevé.",
  },
];

export const SKILLS_BARS = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "NLP", level: 82 },
  { name: "PySpark / Spark", level: 78 },
  { name: "LangChain / RAG", level: 80 },
  { name: "TensorFlow / PyTorch", level: 80 },
  { name: "SQL / NoSQL", level: 85 },
  { name: "AWS / Docker", level: 70 },
  { name: "Unity 3D / OpenCV", level: 72 },
];

export const TECH_TAGS = [
  { name: "Python", color: "#4AFFA7" },
  { name: "PySpark", color: "#4AFFA7" },
  { name: "TensorFlow", color: "#FB923C" },
  { name: "PyTorch", color: "#FB923C" },
  { name: "LangChain", color: "#A78BFA" },
  { name: "RAG", color: "#A78BFA" },
  { name: "Hugging Face", color: "#A78BFA" },
  { name: "AWS", color: "#4AFFA7" },
  { name: "Docker", color: "#4AFFA7" },
  { name: "MongoDB", color: "#FB923C" },
  { name: "ChromaDB", color: "#A78BFA" },
  { name: "React", color: "#4AFFA7" },
  { name: "Git", color: "#FB923C" },
  { name: "Scikit-learn", color: "#FB923C" },
  { name: "Unity 3D", color: "#A78BFA" },
  { name: "OpenCV", color: "#A78BFA" },
  { name: "SQL", color: "#4AFFA7" },
  { name: "SAS", color: "#FB923C" },
  { name: "Cloudera", color: "#4AFFA7" },
];

export const EDUCATION = [
  {
    short: "M2",
    school: "Université Claude Bernard Lyon 1",
    degree: "Master Data Science",
    year: "2024 – 2025",
    loc: "Lyon, France",
    color: "#4AFFA7",
  },
  {
    short: "MTI",
    school: "Arts Et Métiers — Cluny",
    degree: "Management Technologies Interactives",
    year: "2023 – 2024",
    loc: "Chalon-Sur-Saône, France",
    color: "#A78BFA",
  },
  {
    short: "ING",
    school: "Arts Et Métiers — Casablanca",
    degree: "Diplôme Ingénieur IA & Génie Informatique",
    year: "2019 – 2024",
    loc: "Casablanca, Maroc",
    color: "#FB923C",
  },
];

export const LANGUAGES = [
  { flag: "🇫🇷", lang: "Français", level: "Courant" },
  { flag: "🇬🇧", lang: "Anglais", level: "Professionnel" },
  { flag: "🇲🇦", lang: "Arabe", level: "Natif" },
];

export const SOFT_SKILLS = [
  "🧭 Leadership",
  "💡 Initiative",
  "🎯 Autonomie",
  "🤝 Travail en équipe",
  "🌍 Adaptabilité",
];

export const NAV_LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "experience", label: "Expériences" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];