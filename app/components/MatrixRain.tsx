"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\=+*~";
    const charArray = chars.split("");

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);

    // Her sütun için: konum, hız, opaklık, parlaklık
    const streams: {
      y: number;
      speed: number;
      opacity: number;
      bright: boolean;
      chars: string[];
      length: number;
    }[] = [];

    const createStream = (x: number) => {
      const length = Math.floor(Math.random() * 25) + 8;
      const streamChars: string[] = [];
      for (let i = 0; i < length; i++) {
        streamChars.push(charArray[Math.floor(Math.random() * charArray.length)]);
      }
      return {
        y: Math.random() * -100,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        bright: Math.random() > 0.85,
        chars: streamChars,
        length,
      };
    };

    const initStreams = () => {
      streams.length = 0;
      columns = Math.floor(canvas.width / fontSize);
      for (let i = 0; i < columns; i++) {
        streams.push(createStream(i));
      }
    };
    initStreams();

    const draw = () => {
      // Trail efekti
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        const x = i * fontSize;

        for (let j = 0; j < stream.length; j++) {
          const charY = (stream.y - j) * fontSize;
          if (charY < 0 || charY > canvas.height) continue;

          // Rastgele karakter değişimi (flicker efekti)
          if (Math.random() > 0.95) {
            stream.chars[j] = charArray[Math.floor(Math.random() * charArray.length)];
          }

          // Baş karakter en parlak, geri kalanlar soluyor
          if (j === 0) {
            // Baş karakter — beyaz-yeşil parlak
            ctx.fillStyle = stream.bright
              ? `rgba(255, 255, 255, ${stream.opacity + 0.5})`
              : `rgba(100, 255, 100, ${stream.opacity + 0.4})`;
            ctx.shadowColor = "#0f0";
            ctx.shadowBlur = stream.bright ? 15 : 6;
          } else {
            // Kuyruk — yeşilden koyuya
            const fade = 1 - j / stream.length;
            ctx.fillStyle = `rgba(0, ${Math.floor(180 * fade + 40)}, 0, ${stream.opacity * fade})`;
            ctx.shadowBlur = 0;
          }

          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(stream.chars[j], x, charY);
        }

        ctx.shadowBlur = 0;
        stream.y += stream.speed;

        // Ekrandan çıkınca sıfırla
        if ((stream.y - stream.length) * fontSize > canvas.height) {
          streams[i] = createStream(i);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      initStreams();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 opacity-20 pointer-events-none"
    />
  );
}
