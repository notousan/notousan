"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "JavaScript / TypeScript", level: 90, icon: "⚡" },
  { name: "React / Next.js", level: 85, icon: "⚛" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "UI / UX Design", level: 70, icon: "🎨" },
  { name: "Git & DevOps", level: 80, icon: "🔧" },
];

const timeline = [
  { year: "2024", title: "Web Geliştirme Yolculuğu", desc: "Modern web teknolojileriyle tanışma" },
  { year: "2025", title: "İlk Projeler", desc: "React ve Next.js ile gerçek projeler geliştirme" },
  { year: "2026", title: "Portfolyo & Freelance", desc: "Kişisel marka oluşturma ve freelance çalışmalar" },
];

export default function Hakkimda() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="page-container px-6 py-20 md:px-12 lg:px-24">

      {/* Arka plan parlamaları */}
      <div className="fixed top-1/3 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Geri Butonu */}
      <a href="/" className={`back-button mb-12 ${loaded ? 'animate-fadeInLeft' : 'opacity-0'}`}>
        ← Ana Sayfa
      </a>

      {/* Başlık Bölümü */}
      <div className="max-w-5xl mx-auto">

        <div className={`mb-16 ${loaded ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
          <p className="text-green-500/50 font-mono text-xs tracking-[0.5em] uppercase mb-4">◉ SİSTEM DOSYASI: NEO.PROFILE</p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight page-title">
            Merhaba, ben <span className="neon-text">Neo.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mt-6 leading-relaxed max-w-2xl">
            Yazılım geliştirici, tasarımcı ve dijital dünyayı keşfeden bir gezgin. 
            Kod yazmak benim için sadece iş değil, aynı zamanda sanat.
          </p>
        </div>

        {/* İki Sütunlu Bölüm */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Sol — Hakkımda Detay */}
          <div className={`glass-card p-8 ${loaded ? 'animate-fadeInLeft delay-200' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold text-white mb-6 page-title flex items-center gap-3">
              <span className="neon-text text-xl">▹</span> Kim Bu Neo?
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
              <p>
                Matrix'in dışına çıkmayı hedefleyen, teknolojiyle iç içe bir geliştirici. 
                Modern web teknolojileri ile kullanıcı deneyimini birleştirerek dijital dünyada 
                fark yaratan projeler üretiyorum.
              </p>
              <p>
                Her satır kod, bir problem çözme yolculuğu. Her tasarım, bir hikaye anlatma biçimi. 
                Bu portfolyo da benim hikayemi anlatıyor.
              </p>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-green-500/10">
              <div className="text-center">
                <p className="text-2xl font-bold neon-text page-title">10+</p>
                <p className="text-xs text-zinc-500 mt-1">Proje</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold neon-text page-title">2+</p>
                <p className="text-xs text-zinc-500 mt-1">Yıl Deneyim</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold neon-text page-title">∞</p>
                <p className="text-xs text-zinc-500 mt-1">Tutku</p>
              </div>
            </div>
          </div>

          {/* Sağ — Yetenekler */}
          <div className={`glass-card p-8 ${loaded ? 'animate-fadeInRight delay-300' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold text-white mb-6 page-title flex items-center gap-3">
              <span className="neon-text text-xl">▹</span> Yetenekler
            </h2>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-zinc-300 flex items-center gap-2">
                      <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-xs text-green-500/60 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-400 transition-all duration-1000 ease-out"
                      style={{
                        width: loaded ? `${skill.level}%` : '0%',
                        transitionDelay: `${0.5 + i * 0.15}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zaman Çizelgesi */}
        <div className={`mb-16 ${loaded ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold text-white mb-10 page-title flex items-center gap-3">
            <span className="neon-text text-xl">▹</span> Yolculuk
          </h2>
          <div className="relative">
            {/* Çizgi */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent"></div>

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex gap-6 items-start ${loaded ? 'animate-fadeInLeft' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.6 + i * 0.2}s` }}
                >
                  {/* Nokta */}
                  <div className="w-9 h-9 rounded-full border border-green-500/50 bg-black flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="text-green-500/60 font-mono text-xs tracking-widest mb-1">{item.year}</p>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
