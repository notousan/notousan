"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const predefinedQuestions = [
  { id: "q1", text: "Sen kimsin?", answer: "Ben Morpheus. Sana gerçeği göstermek için buradayım." },
  { id: "q2", text: "Matrix nedir?", answer: "Matrix kontrol sistemidir. Zihnini hapsetmek için gözlerinin önüne çekilmiş bir dünyadır." },
  { id: "q3", text: "Hangi hapı seçmeliyim?", answer: "Mavi hapı alırsan hikaye biter, yatağında uyanır ve neye inanmak istersen ona inanırsın. Kırmızı hapı alırsan Harikalar Diyarı'nda kalırsın, ben de sana tavşan deliğinin ne kadar derinlere gittiğini gösteririm." },
  { id: "q4", text: "İletişime nasıl geçerim?", answer: "İletişim sayfasından bana e-posta gönderebilir veya diğer ağlardan ulaşabilirsin." }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", sender: "bot", text: "Sonunda geldin. Seni bekliyordum. Ne bilmek istiyorsun?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleQuestionClick = (q: typeof predefinedQuestions[0]) => {
    // Add user question
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: q.text };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate bot thinking
    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: q.answer };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="glass-card w-80 h-96 mb-4 flex flex-col overflow-hidden animate-scaleIn origin-bottom-left shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-green-500/30">
          {/* Header */}
          <div className="bg-green-500/10 p-3 border-b border-green-500/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-green-500/50">
                <img src="/morpheus.png" alt="Morpheus" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-sm text-green-400">Morpheus</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-green-500/50 hover:text-green-400 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/60">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.sender === "user" 
                      ? "bg-green-500/20 text-green-100 border border-green-500/30 rounded-br-none" 
                      : "bg-zinc-900/80 text-zinc-300 border border-zinc-700/50 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options Area */}
          <div className="p-3 bg-black/80 border-t border-green-500/20 space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
            {predefinedQuestions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuestionClick(q)}
                className="block w-full text-left p-2 rounded bg-green-500/5 hover:bg-green-500/20 border border-green-500/10 hover:border-green-500/40 text-xs text-green-400/80 hover:text-green-300 transition-all cursor-pointer"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button Container */}
      <div className="relative group">
        
        {/* Tooltip (Baloncuk) - Sadece kapalıyken ve sayfa yüklendiğinde görünür */}
        {!isOpen && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500/20 border border-green-500/50 text-green-300 px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity animate-bounce">
            Uyan...
            {/* Küçük Ok */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500/20 border-b border-r border-green-500/50 rotate-45"></div>
          </div>
        )}

        {/* Dışarıya Yayılan Animasyonlu Halka (Ping) */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border border-green-500/50 animate-ping opacity-75"></div>
        )}

        {/* Ana Buton */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full border-2 border-green-500 overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-all transform hover:scale-110 z-10 bg-black"
        >
          <img src="/morpheus.png" alt="Chat" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
