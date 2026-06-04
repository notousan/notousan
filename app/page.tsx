export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-center p-6">
      
      {/* Matrix Izgara Efekti (Arka Plan) */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Merkezdeki Yeşil Parlama */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]">
          WAKE UP, <span className="text-green-500">NEO...</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-green-400/80 mb-8 font-mono tracking-widest uppercase">
          Follow the white rabbit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full mt-8">
          <a href="#" className="group relative px-8 py-4 bg-green-500/10 border border-green-500 text-green-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
            <span className="absolute inset-0 w-full h-full -z-10 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Projelerim
          </a>
          
          <a href="#" className="px-8 py-4 border border-zinc-700 text-zinc-400 font-mono text-lg uppercase tracking-wider transition-all duration-300 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5">
            Sisteme Bağlan
          </a>
        </div>
      </div>
    </div>
  );
}