import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, CornerRightDown, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection({ onNavigate }: { onNavigate?: (page: "home" | "ecosystem" | "why-mavnova" | "the-effect" | "showcase" | "future" | "contact", anchorId?: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    // Create particles
    const particleCount = Math.min(60, Math.floor(width / 25));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: i % 2 === 0 ? "rgba(0, 180, 252, " : "rgba(122, 34, 255, ",
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid overlay lines digitally
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color === "rgba(0, 180, 252, " ? "#00b4fc" : "#7a22ff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Connect particles if close
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alphaVal = (1 - dist / 100) * 0.12;
            ctx.strokeStyle = `rgba(122, 34, 255, ${alphaVal})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-primary-themed text-primary-themed overflow-hidden pt-20 transition-colors duration-700">
      {/* Absolute Interactive Canvas Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none opacity-80" />

      {/* Cyber ambient glows */}
      <div className="absolute top-[20%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-cyber-blue/10 blur-[130px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-cyber-purple/10 blur-[150px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] rounded-full bg-neon-magenta/5 blur-[100px] pointer-events-none z-0" />

      {/* Futuristic Background overlay matrices */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--color-primary-bg)_95%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-dots opacity-30 z-0 pointer-events-none" />

      {/* Scope Line Framework */}
      <div className="absolute inset-x-0 top-0 h-[10vh] border-b border-themed-main tech-grid opacity-10" />
      <div className="absolute inset-y-0 left-12 w-[1px] bg-themed-main/20 hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-themed-main/20 hidden xl:block" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Futuristic Top Banner Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-themed-main border border-themed-sub shadow-sm backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Zap className="w-3.5 h-3.5 text-cyber-blue animate-bounce" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-primary-themed uppercase">
            NEXT-GENERATION STUDENT ECOSYSTEMS
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
        </motion.div>

        {/* Hero title - Bold cinematic typography */}
        <div className="overflow-hidden mb-6 py-2">
          <motion.h1
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center leading-[0.9] tracking-tight relative text-primary-themed"
          >
            <span>Beyond</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-themed via-cyber-blue or from-cyber-blue to-cyber-purple text-shadow-glow pb-2">
              Classrooms.
            </span>
          </motion.h1>
        </div>

        {/* Subheading text with high legibility */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-[800px] text-sm md:text-base lg:text-lg tracking-wide text-secondary-themed font-body px-4 mb-12 leading-relaxed"
        >
          Building modern extracurricular and innovation ecosystems for schools through robotics, competitions, mentorship, student exposure, and future-focused experiences.
        </motion.p>

        {/* Action Buttons with high microinteractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto z-30"
        >
          <button
            onClick={() => onNavigate && onNavigate("showcase")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-cyber-blue hover:bg-cyber-blue/90 font-mono text-xs font-black tracking-widest text-black shadow-[0_0_30px_rgba(0,180,252,0.3)] hover:shadow-[0_0_40px_rgba(0,180,252,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            ENTER CINEMATIC GALLERY ➔
          </button>
          <button
            onClick={() => onNavigate && onNavigate("ecosystem")}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-themed-main hover:bg-themed-sub border border-themed-main hover:border-themed-main/20 font-mono text-xs font-black tracking-widest text-primary-themed transition-all duration-300 hover:shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            EXPLORE ECOSYSTEM BLUEPRINT <ShieldCheck className="w-4 h-4 text-cyber-purple" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30 hover:opacity-80"
          onClick={() => onNavigate && onNavigate("ecosystem")}
        >
          <span className="font-mono text-[9px] tracking-[0.4em] text-secondary-themed uppercase">
            EXPLORE ECOSYSTEM MODULE
          </span>
          <ArrowDown className="w-4 h-4 text-cyber-blue animate-bounce" />
        </motion.div>
      </div>

      {/* Subtle Holographic Line Overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent hologram-line" />
    </section>
  );
}
