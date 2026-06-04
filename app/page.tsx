"use client";

import { useState } from "react";

export default function Home() {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center p-6">

      {/* TAM EKRAN OVERLAY MENÜ */}
      {menuAcik && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10">
          {/* Kapat Butonu */}
          <button
            onClick={() => setMenuAcik(false)}
            className="absolute top-8 right-8 text-green-500 font-mono text-3xl hover:text-white transition-colors duration-200"
          >
            ✕
          </button>

          {/* Menü Linkleri */}
          <a href="/hakkimda" onClick={() => setMenuAcik(false)}
            className="font-mono text-5xl md:text-7xl font-black tracking-widest text-green-500/60 hover:text-green-400 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300 uppercase">
            Hakkımda
          </a>
          <a href="/projelerim" onClick={() => setMenuAcik(false)}
            className="font-mono text-5xl md:text-7xl font-black tracking-widest text-green-500/60 hover:text-green-400 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300 uppercase">
            Projelerim
          </a>
          <a href="/iletisim" onClick={() => setMenuAcik(false)}
            className="font-mono text-5xl md:text-7xl font-black tracking-widest text-green-500/60 hover:text-green-400 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all duration-300 uppercase">
            İletişim
          </a>
        </div>
      )}

      {/* Merkezdeki Yeşil Parlama */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-green-600/10 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="relative z-20 flex flex-col items-center gap-4">

        {/* Neo Avatarı */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.6)] mb-2">
          <img src="/avatar.png" alt="Neo Avatar" className="w-full h-full object-cover" />
        </div>

        {/* İsim ve Unvan */}
        <p className="text-green-400 font-mono tracking-[0.4em] text-sm uppercase">The One</p>

        {/* Ana Başlık */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] mt-2">
          UYAN, <span className="text-green-500">NEO...</span>
        </h1>

        {/* Alt Yazı */}
        <p className="text-lg md:text-2xl text-green-400/70 font-mono tracking-widest uppercase mt-1">
          Beyaz tavşanı takip et.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full mt-8">
          <a
            href="/projelerim"
            className="px-8 py-4 bg-green-500/10 border border-green-500 text-green-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
          >
            Projelerim
          </a>

          <button
            onClick={() => setMenuAcik(true)}
            className="px-8 py-4 border border-zinc-700 text-zinc-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5"
          >
            Sisteme Bağlan
          </button>
        </div>
      </div>
    </div>
  );
}