import { useEffect, useRef, useState } from "react";

export default function Eyes() {
  /* ===============================
     MOUSE POSITION
     =============================== */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ===============================
     AUTO BLINK
     =============================== */
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  /* ===============================
     FLOATING POSITION (BOUNCE)
     =============================== */
  const pos = useRef({ x: 120, y: 140 });
  const velocity = useRef({ x: 0.35, y: 0.25 });
  const [, rerender] = useState(0);

  useEffect(() => {
    const animate = () => {
      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 120;

      pos.current.x += velocity.current.x;
      pos.current.y += velocity.current.y;

      if (pos.current.x <= 0 || pos.current.x >= maxX) {
        velocity.current.x *= -1;
      }
      if (pos.current.y <= 0 || pos.current.y >= maxY) {
        velocity.current.y *= -1;
      }

      rerender(v => v + 1);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  /* ===============================
     PUPIL CALIBRATION (FIXED CENTER)
     =============================== */
 const pupilStyle = (eyeCenterOffsetX: number) => {
  const max = 8;

  // CENTER of each eye (bukan container)
  const eyeCenterX = pos.current.x + eyeCenterOffsetX;
  const eyeCenterY = pos.current.y + 40;

  const dx = mouse.x - eyeCenterX;
  const dy = mouse.y - eyeCenterY;

  const angle = Math.atan2(dy, dx);

  const x = Math.cos(angle) * max;
  const y = Math.sin(angle) * max;

  return {
    transform: `translate(${x}px, ${y}px)`,
  };
};


  return (
    <div
      className="fixed z-0 pointer-events-none flex gap-6"
      style={{
        left: pos.current.x,
        top: pos.current.y,
      }}
    >
      {/* LEFT EYE */}
      <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center overflow-hidden">
        <div
          className={`w-6 h-6 bg-black rounded-full transition-transform duration-100 ${
            blink ? "scale-y-0" : "scale-y-100"
          }`}
          style={pupilStyle(40)}
        />
      </div>

      {/* RIGHT EYE */}
      <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center overflow-hidden">
        <div
          className={`w-6 h-6 bg-black rounded-full transition-transform duration-100 ${
            blink ? "scale-y-0" : "scale-y-100"
          }`}
          style={pupilStyle(140)}
        />
      </div>
    </div>
  );
}
