"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Matrix Portfolyo",
    desc: "Next.js ve Tailwind CSS ile oluşturulmuş kişisel portfolyo sitesi. Matrix temalı, neon yeşil tasarım.",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
    status: "Aktif",
    icon: "🌐",
    link: "#",
  },
  {
    id: 2,
    title: "E-Ticaret Dashboard",
    desc: "Modern ve kullanıcı dostu bir yönetim paneli. Gerçek zamanlı veri takibi ve analitik araçlar.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    status: "Geliştiriliyor",
    icon: "📊",
    link: "#",
  },
  {
    id: 3,
    title: "Chat Uygulaması",
    desc: "WebSocket tabanlı gerçek zamanlı mesajlaşma uygulaması. End-to-end şifreleme destekli.",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
    status: "Planlama",
    icon: "💬",
    link: "#",
  },
  {
    id: 4,
    title: "AI Asistan",
    desc: "Yapay zeka destekli kişisel asistan. Doğal dil işleme ve akıllı yanıt sistemi.",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    status: "Konsept",
    icon: "🤖",
    link: "#",
  },
];

const statusColors: Record<string, string> = {
  "Aktif": "text-green-400 bg-green-500/10 border-green-500/30",
  "Geliştiriliyor": "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  "Planlama": "text-blue-400 bg-blue-500/10 border-blue-500/30",
  "Konsept": "text-purple-400 bg-purple-500/10 border-purple-500/30",
};

export default function Projelerim() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="page-container px-6 py-20 md:px-12 lg:px-24">

      {/* Arka plan */}
      <div className="fixed top-1/4 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Geri Butonu */}
      <a href="/" className={`back-button mb-12 ${loaded ? 'animate-fadeInLeft' : 'opacity-0'}`}>
        ← Ana Sayfa
      </a>

      <div className="max-w-6xl mx-auto">

        {/* Başlık */}
        <div className={`mb-16 ${loaded ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
          <p className="text-green-500/50 font-mono text-xs tracking-[0.5em] uppercase mb-4">◉ SİSTEM DOSYASI: NEO.PROJECTS</p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight page-title">
            Proje<span className="neon-text">lerim</span>
          </h1>
          <p className="text-lg text-zinc-400 mt-6 max-w-xl">
            Matrix'ten kaçış için geliştirdiğim araçlar ve projeler.
          </p>
        </div>

        {/* Proje Kartları */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className={`glass-card group p-8 cursor-pointer block ${loaded ? 'animate-slideInFromBottom' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Üst kısım — ikon + durum */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl">{project.icon}</span>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Başlık */}
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-3 page-title">
                {project.title}
              </h3>

              {/* Açıklama */}
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* Teknolojiler */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded bg-green-500/5 border border-green-500/10 text-green-500/60 group-hover:border-green-500/30 group-hover:text-green-400/80 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover alt çizgi */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className={`mt-16 text-center ${loaded ? 'animate-fadeInUp delay-700' : 'opacity-0'}`}>
          <p className="text-zinc-600 font-mono text-xs tracking-widest">
            Daha fazla proje yakında...
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
}
