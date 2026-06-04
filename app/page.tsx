"use client";

import { useState, useEffect } from "react";

const menuItems = [
  {
    href: "/hakkimda",
    icon: "⬡",
    title: "Hakkımda",
    subtitle: "Kim bu Neo?",
  },
  {
    href: "/projelerim",
    icon: "◈",
    title: "Projelerim",
    subtitle: "Matrix'ten kaçış planları",
  },
  {
    href: "/iletisim",
    icon: "◉",
    title: "İletişim",
    subtitle: "Sinyali yakala",
  },
];

export default function Home() {
  const [menuAcik, setMenuAcik] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // ESC tuşu ile menü kapatma
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAcik(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">

      {/* ===== NEON HOLOGRAM PANEL ===== */}
      {menuAcik && (
        <div className="holo-overlay fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center px-6">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <button
            onClick={() => setMenuAcik(false)}
            className="holo-close absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full border border-green-500/30 bg-green-500/5 text-green-500 font-mono text-xl hover:bg-green-500/20 hover:border-green-400 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            ✕
          </button>

          <div className="mb-12">
            <p className="text-green-500/50 font-mono text-xs tracking-[0.5em] uppercase mb-2">
              ● SİSTEM BAĞLANTISI AKTİF
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight page-title">
              Nereye <span className="neon-text">gideceksin?</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl justify-center">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuAcik(false)}
                className="holo-card holo-scanline relative group flex flex-col items-center gap-4 px-8 py-10 md:px-10 md:py-14 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-950/40 to-black/60 backdrop-blur-xl cursor-pointer transition-all duration-500 flex-1"
              >
                <div className="holo-icon text-4xl md:text-5xl text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.6)] mb-1">
                  {item.icon}
                </div>
                <h3 className="font-mono text-xl md:text-2xl font-bold text-white uppercase tracking-widest group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-green-500/40 tracking-wider group-hover:text-green-400/70 transition-colors duration-300">
                  {item.subtitle}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent group-hover:w-3/4 transition-all duration-500"></div>
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-green-500/30 rounded-tl-md group-hover:border-green-400/70 transition-colors duration-300"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-green-500/30 rounded-br-md group-hover:border-green-400/70 transition-colors duration-300"></div>
              </a>
            ))}
          </div>

          <p className="mt-10 font-mono text-[10px] text-green-500/20 tracking-[0.3em] uppercase">
            ESC · Geri dönmek için tıkla
          </p>
        </div>
      )}

      {/* Merkez Parlama */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-green-600/8 rounded-full blur-[160px] -z-10 pointer-events-none"></div>

      {/* İkinci Parlama */}
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className={`relative z-20 flex flex-col items-center gap-4 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Avatar Token — 3D Coin Flip */}
        <div className={`token-container w-36 h-36 md:w-44 md:h-44 mb-4 ${loaded ? 'animate-scaleIn' : 'opacity-0'}`}>
          {/* Dönen kenar efekti */}
          <div className="token-edge"></div>
          <div className="token-inner">
            {/* Ön Yüz — Neo */}
            <div className="token-front token-glow">
              <img src="/avatar.png" alt="Neo Avatar" className="w-full h-full object-cover" />
            </div>
            {/* Arka Yüz — Beyaz Tavşan */}
            <div className="token-back token-glow">
              <img src="/rabbit.png" alt="White Rabbit" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Hover'da beliren yazı */}
          <p className="token-label text-green-500/60 font-mono text-[10px] tracking-widest uppercase text-center mt-3">
            🐇 Follow the white rabbit
          </p>
        </div>

        {/* Unvan */}
        <p className={`text-green-400 font-mono tracking-[0.5em] text-xs uppercase ${loaded ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          ◉ The One ◉
        </p>

        {/* Ana Başlık */}
        <h1 className={`text-5xl md:text-8xl font-black tracking-tighter text-white mt-2 page-title ${loaded ? 'animate-fadeInUp delay-300' : 'opacity-0'}`} style={{ fontFamily: "'Orbitron', sans-serif" }}>
          UYAN <span className="neon-text animate-neonFlicker">NEO...</span>
        </h1>

        {/* Alt Yazı */}
        <p className={`text-lg md:text-2xl text-green-400/60 font-mono tracking-widest uppercase mt-1 ${loaded ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          Beyaz tavşanı takip et.
        </p>

        {/* Dekoratif çizgi */}
        <div className={`w-24 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent mt-4 ${loaded ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}></div>

        {/* Butonlar */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center w-full mt-8 ${loaded ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <a
            href="/projelerim"
            className="group relative px-8 py-4 bg-green-500/10 border border-green-500 text-green-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] overflow-hidden"
          >
            <span className="relative z-10">Projelerim</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <button
            onClick={() => setMenuAcik(true)}
            className="group relative px-8 py-4 border border-zinc-700 text-zinc-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5 overflow-hidden"
          >
            <span className="relative z-10">Sisteme Bağlan</span>
          </button>
        </div>

        {/* Scroll ipucu */}
        <div className={`mt-12 ${loaded ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
          <p className="text-green-500/20 font-mono text-[10px] tracking-[0.3em] uppercase">v1.0.0 — notousan</p>
        </div>
      </div>
    </div>
  );
}