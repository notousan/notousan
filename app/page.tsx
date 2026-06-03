export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-6 md:p-24 text-white overflow-hidden relative">
      
      {/* Arka plan parlama efektleri (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] md:blur-[150px] -z-10"></div>
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[120px] -z-10"></div>

      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center gap-8 text-center">
        
        {/* Başlık (Gradient Renk Geçişli) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 drop-shadow-sm">
          Merhaba Dünya!
        </h1>
        
        {/* Alt Metin */}
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
          Bu benim ilk <span className="text-white font-semibold">Next.js</span> ve <span className="text-white font-semibold">Tailwind CSS</span> projem. Web geliştirme dünyasına harika bir giriş yapıyorum!
        </p>
        
        {/* Etkileşimli Buton */}
        <div className="mt-8 group rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md cursor-pointer hover:-translate-y-1">
          <span className="font-semibold text-zinc-300 group-hover:text-blue-400 transition-colors duration-300">
            Kodlamaya Başla 🚀
          </span>
        </div>
        
      </div>
    </main>
  );
}