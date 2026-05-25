import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Cpu, Rocket, Code, Laptop, Trophy, Zap, Shield, Eye, EyeOff, ArrowRight } from "lucide-react";

interface NavigationBentoCard {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  colSpan: string;
  icon: string;
  glowColor: "cyan" | "purple" | "magenta" | "blue";
  techStack: string[];
  targetPage: "ecosystem" | "why-mavnova" | "the-effect" | "future" | "showcase" | "contact";
}

function BentoTiltCard({ 
  card, 
  index, 
  onNavigate 
}: { 
  card: NavigationBentoCard; 
  index: number; 
  onNavigate?: (page: "home" | "ecosystem" | "why-mavnova" | "the-effect" | "showcase" | "future" | "contact") => void;
  key?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showWireframe, setShowWireframe] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x: (x / rect.width) * 12, y: -(y / rect.height) * 12 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const glowStyles = {
    cyan: "border-cyan-500/10 shadow-sm hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
    purple: "border-purple-500/10 shadow-sm hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    magenta: "border-pink-500/10 shadow-sm hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]",
    blue: "border-blue-500/10 shadow-sm hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
  };

  const glowLightMaps = {
    cyan: "bg-cyan-500/5",
    purple: "bg-purple-500/5",
    magenta: "bg-pink-500/5",
    blue: "bg-blue-500/5",
  };

  const renderIcon = (iconName: string, color: string) => {
    const cls = `w-5 h-5 ${
      color === "cyan"
        ? "text-cyan-400"
        : color === "purple"
        ? "text-purple-400"
        : color === "magenta"
        ? "text-pink-400"
        : "text-cyber-blue"
    }`;
    switch (iconName) {
      case "cpu": return <Cpu className={cls} />;
      case "rocket": return <Rocket className={cls} />;
      case "code": return <Code className={cls} />;
      case "laptop": return <Laptop className={cls} />;
      case "trophy": return <Trophy className={cls} />;
      case "zap": return <Zap className={cls} />;
      default: return <Cpu className={cls} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onNavigate && onNavigate(card.targetPage)}
      className={`glass-panel rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 flex flex-col justify-between ${
        card.colSpan
      } ${glowStyles[card.glowColor]} min-h-[290px]`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.015, 1.015, 1.015)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Blueprint simulator indicator button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowWireframe(!showWireframe);
        }}
        className="absolute top-4 right-4 z-40 p-1.5 rounded-md bg-black/50 border border-white/5 hover:border-white/10 text-white/40 hover:text-white/80 transition-all text-[9.5px] font-mono flex items-center gap-1.5"
        title="Toggle Matrix blueprint visualization"
      >
        {showWireframe ? <EyeOff className="w-3.5 h-3.5 text-neon-cyan" /> : <Eye className="w-3.5 h-3.5" />}
        <span>{showWireframe ? "DIAG" : "HOLO"}</span>
      </button>

      {/* Grid Overlay background */}
      <div className="absolute inset-0 tech-grid opacity-25 z-0 pointer-events-none" />

      {/* Hover glow follows mouse dynamic background */}
      {isHovered && (
        <div
          className={`absolute pointer-events-none rounded-full w-[45%] h-[45%] blur-[60px] z-10 opacity-40 ${
            glowLightMaps[card.glowColor]
          }`}
          style={{
            left: `${(coords.x + 12) * 3.5}%`,
            top: `${(-coords.y + 12) * 3.5}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Wireframe blueprints */}
      {showWireframe && (
        <div className="absolute inset-0 z-30 pointer-events-none border border-cyber-blue/20 scale-[0.98] rounded-xl flex items-center justify-center bg-black/95">
          <div className="absolute inset-x-0 h-[1.5px] bg-cyber-blue/30 hologram-line" />
          <div className="text-center font-mono p-4">
            <div className="text-cyber-blue text-xs font-bold mb-1 uppercase tracking-widest animate-pulse">
              [ MATRIX CONNECT_v4 ]
            </div>
            <div className="text-[9.5px] text-white/50 flex flex-col gap-1 inline-block text-left">
              <span>TARGET_PAGE: {card.targetPage.toUpperCase()}</span>
              <span>GEOMETRY: 3D_REPRESENTATION</span>
              <span>COMPILATION: ONLINE</span>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Visual Aspect Banner */}
      <div className="relative w-full h-[150px] overflow-hidden bg-black/60 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-themed via-transparent to-transparent z-10 transition-colors duration-700" />
        <img
          src={card.imageUrl}
          alt={card.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-widest bg-black/60 border border-white/10 px-2.5 py-1 rounded-md text-white/95 uppercase font-medium">
            {card.category}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 relative z-20 flex-1 flex flex-col justify-between pt-1">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-themed-main border border-themed-sub flex items-center justify-center">
              {renderIcon(card.icon, card.glowColor)}
            </div>
            <h3 className="font-display font-black text-sm sm:text-base tracking-widest text-primary-themed uppercase group-hover:text-cyber-blue transition-colors">
              {card.title}
            </h3>
          </div>
          <p className="text-xs text-secondary-themed tracking-wide font-body leading-relaxed">
            {card.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-themed-sub font-mono text-[9px] text-muted-themed uppercase">
          <span className="flex items-center gap-1">
            {card.techStack.slice(0, 2).map((tech) => (
              <span key={tech} className="text-muted-themed">#{tech}</span>
            ))}
          </span>
          <span className="flex items-center gap-1.5 font-bold text-cyber-blue group-hover:translate-x-1.5 transition-transform duration-300">
            ENTER MODULE <ArrowRight className="w-3.5 h-3.5 text-cyber-blue" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid({ 
  onNavigate 
}: { 
  onNavigate?: (page: "home" | "ecosystem" | "why-mavnova" | "the-effect" | "showcase" | "future" | "contact") => void;
}) {
  const containerRef = useRef(null);

  const bentoCards: NavigationBentoCard[] = [
    {
      id: "nav-ecosystem",
      category: "ACTIVE ECOSYSTEM",
      title: "Ecosystem Blueprint",
      description: "Step into our immersive sensory sliders, displaying telemetry rovers, Arduino microchips, code blocks, and regional competition tracks.",
      imageUrl: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=800",
      colSpan: "col-span-1 md:col-span-2",
      icon: "rocket",
      glowColor: "cyan",
      techStack: ["ArduinoRC", "PIDControl", "Competitions", "Labs"],
      targetPage: "ecosystem",
    },
    {
      id: "nav-why",
      category: "PHILOSOPHICAL PILLARS",
      title: "Why MAVNOVA",
      description: "Our core structural values. Inverting classroom boundaries and turning colleges into first-class engineering hubs.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      colSpan: "col-span-1",
      icon: "cpu",
      glowColor: "purple",
      techStack: ["RealWorldExp", "ActiveMentors", "Leadership"],
      targetPage: "why-mavnova",
    },
    {
      id: "nav-effect",
      category: "THE COMPARATIVE STATE",
      title: "The Mavnova Effect",
      description: "A digital comparison matrix analyzing physical creation loops vs. standard route memorisation systems.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      colSpan: "col-span-1",
      icon: "code",
      glowColor: "magenta",
      techStack: ["TraditionalVsActive", "VantagePitches"],
      targetPage: "the-effect",
    },
    {
      id: "nav-future",
      category: "ROADMAP STRATEGY",
      title: "Future Vision",
      description: "The digital Future Vision manifesto detailing low latency platform deployment and permanent technological structures inside schools.",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      colSpan: "col-span-1 md:col-span-2",
      icon: "trophy",
      glowColor: "blue",
      techStack: ["NextGenManifesto", "AgileAgility"],
      targetPage: "future",
    },
    {
      id: "nav-showcase",
      category: "EXPERIMENTAL SPACE",
      title: "Cinematic Exhibits",
      description: "Our dedicated motion gallery showcasing robotics motorsport, spatial prototyping ateliers, and low-level algorithms compile.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
      colSpan: "col-span-1 md:col-span-2",
      icon: "laptop",
      glowColor: "purple",
      techStack: ["ActiveViewer", "MakerAteliers", "Holograms"],
      targetPage: "showcase",
    },
    {
      id: "nav-contact",
      category: "PARTNERSHIPS REGISTRY",
      title: "Partner With Us",
      description: "Connect with our coordination desk, configure standard school integrations, and establish technological prestige branding.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      colSpan: "col-span-1",
      icon: "zap",
      glowColor: "cyan",
      techStack: ["Integrations", "ResourceLeaps"],
      targetPage: "contact",
    },
  ];

  return (
    <section id="portal-dashboard" className="relative w-full py-20 md:py-28 bg-primary-themed text-primary-themed overflow-hidden border-t border-themed-main transition-colors duration-700">
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyber-purple/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 mb-4 font-mono text-[9px] tracking-[0.3em] text-cyber-blue font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              <span>THE MAVNOVA STATIONS // PLATFORM DASHBOARD PORTAL</span>
            </div>
            <h2 className="font-display font-black text-3.5xl sm:text-4xl md:text-5xl gap-2 tracking-wide uppercase leading-tight text-primary-themed">
              CHOOSE A PORTAL TO <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow">
                ENTER THE ECOSYSTEM.
              </span>
            </h2>
          </div>
          <div className="max-w-[340px] text-right font-mono text-[10px] text-secondary-themed tracking-widest hidden md:block leading-relaxed">
            STATION STATUS: SYNCHRONIZED
            <br />
            ARRAY CODES: AD_C_78xBF_VERIFIED
            <br />
            COHORT METRICS: 100% EXPERIENTIAL
          </div>
        </div>

        {/* Bento Grid layout */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoCards.map((card, i) => (
            <BentoTiltCard key={card.id} card={card} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
