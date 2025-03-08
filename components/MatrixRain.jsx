'use client';
import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // تنظیم اندازه اولیه canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize(); // تنظیم اندازه اولیه canvas

    window.addEventListener("resize", setCanvasSize); // اضافه کردن event listener برای تغییر اندازه

    const letters = "01010101010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      // تغییر opacity برای کم رنگ کردن بک‌گراند
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // بک‌گراند با شفافیت کمتر
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // رنگ پارتیکل‌ها با شفافیت کمتر
      ctx.fillStyle = "rgba(0, 255, 0, 1)"; // سبز پررنگتر و با شفافیت بالا
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval); // پاک کردن تایمر
      window.removeEventListener("resize", setCanvasSize); // حذف لیسنر resize
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default MatrixRain;
