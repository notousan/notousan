"use client";

import { useEffect, useState } from "react";

const contactLinks = [
  {
    title: "Telefon",
    subtitle: "0555 096 9605",
    icon: "☎",
    href: "tel:+905550969605",
    color: "hover:border-green-400 hover:text-green-300",
  },
  {
    title: "E-Posta",
    subtitle: "efemustafa9000@gmail.com",
    icon: "✉",
    href: "mailto:efemustafa9000@gmail.com",
    color: "hover:border-green-400 hover:text-green-300",
  },
  {
    title: "Instagram",
    subtitle: "@efecreativemedia",
    icon: "✦",
    href: "https://instagram.com/efecreativemedia",
    color: "hover:border-pink-400 hover:text-pink-300",
  },
  {
    title: "Teams",
    subtitle: "notousan",
    icon: "◉",
    href: "https://teams.microsoft.com",
    color: "hover:border-violet-400 hover:text-violet-300",
  },
];

export default function Iletisim() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "efemustafa9000@gmail.com",
        "template_xb5h5bc",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Neo",
        },
        "DVlHWjQqXLb3W4jlK"
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      console.error("EmailJS Error:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-container px-6 py-20 md:px-12 lg:px-24">

      {/* Arka plan */}
      <div className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 left-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Geri */}
      <a href="/" className={`back-button mb-12 ${loaded ? 'animate-fadeInLeft' : 'opacity-0'}`}>
        ← Ana Sayfa
      </a>

      <div className="max-w-5xl mx-auto">

        {/* Başlık */}
        <div className={`mb-16 ${loaded ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
          <p className="text-green-500/50 font-mono text-xs tracking-[0.5em] uppercase mb-4">◉ SİSTEM DOSYASI: NEO.CONTACT</p>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight page-title">
            İleti<span className="neon-text">şim</span>
          </h1>
          <p className="text-lg text-zinc-400 mt-6 max-w-xl">
            Sinyali yakala. Bağlantı kur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Sol — İletişim Linkleri */}
          <div className="space-y-5">
            {contactLinks.map((link, i) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card group flex items-center gap-5 p-6 ${link.color} transition-all duration-300 block ${loaded ? 'animate-fadeInLeft' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl border border-green-500/20 bg-green-500/5 flex items-center justify-center text-green-500 text-xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{link.title}</h3>
                  <p className="text-zinc-500 text-xs font-mono mt-0.5">{link.subtitle}</p>
                </div>
                <span className="ml-auto text-zinc-700 group-hover:text-green-500 transition-colors duration-300 text-sm">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Sağ — İletişim Formu */}
          <div className={`glass-card p-8 ${loaded ? 'animate-fadeInRight delay-300' : 'opacity-0'}`}>
            <h2 className="text-xl font-bold text-white mb-6 page-title flex items-center gap-3">
              <span className="neon-text text-lg">▹</span> Mesaj Gönder
            </h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 animate-scaleIn">
                <div className="text-5xl">✓</div>
                <p className="neon-text font-mono text-lg font-bold">Mesaj İletildi!</p>
                <p className="text-zinc-500 text-sm">En kısa sürede döneceğim.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-2 block">İsim</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-green-500/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-green-500/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300"
                    placeholder="Adın..."
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-2 block">E-Posta</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-green-500/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-green-500/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300"
                    placeholder="neo@matrix.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-2 block">Mesaj</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-green-500/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:border-green-500/50 focus:outline-none focus:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 resize-none"
                    placeholder="Mesajın..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 bg-green-500/10 border border-green-500 text-green-400 font-mono text-sm uppercase tracking-widest rounded-lg hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Gönderiliyor..." : "Sinyali Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
