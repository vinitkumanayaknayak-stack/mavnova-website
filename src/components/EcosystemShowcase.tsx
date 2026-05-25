import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { 
  Cpu, 
  ExternalLink, 
  Gauge, 
  Terminal, 
  Sliders, 
  Workflow, 
  Zap, 
  Binary, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Eye, 
  Pin 
} from "lucide-react";

interface EcosystemShowcaseItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  glowColor: "cyan" | "purple" | "magenta" | "blue";
  techCode: string;
  metrics: { label: string; value: string; progress: number }[];
  specifications: string[];
}

export default function EcosystemShowcase() {
  const dataset: EcosystemShowcaseItem[] = [
    {
      id: "eco-autonomous-rovers",
      category: "ROBOTICS MOTORSPORT",
      title: "Autonomous RC Rovers",
      subtitle: "STUDENTS CONSTRUCTING TELEMETRY RC AUTOMOTIVES",
      description: "Elite extracurricular challenges where students hand-build high-stamina RC cars. Students coordinate real-time C++ PID telemetry logic, steering configurations, and LiDAR obstacle evasion loops under stage spotlights.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
      glowColor: "cyan",
      techCode: "CORESYS // RC_ROVER_v4",
      metrics: [
        { label: "ASSEMBLY DURATION", value: "32 Hours", progress: 85 },
        { label: "PID REACTION RATE", value: "3.2ms", progress: 96 },
        { label: "CHASSIS STABILITY", value: "98.8%", progress: 98 }
      ],
      specifications: [
        "Lightweight impact-resistant custom chassis fabrication",
        "Direct wiring of PWM servos and telemetry arrays",
        "Configuring custom infrared distance meters",
        "Proportional-integral-derivative velocity algorithm compilation"
      ]
    },
    {
      id: "eco-arduino-iot",
      category: "PRACTICAL EMBEDDED LABS",
      title: "Arduino IoT Nodes",
      subtitle: "CIRCUIT LOOP ARCHITECTURE • MICROCONTROLLERS",
      description: "Tacitive discovery hubs focusing on soldering, code compilation, and multi-sensor configurations. Cohorts build smart responsive sensors, analog-to-digital controllers, and responsive robotic terminals.",
      imageUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=1200",
      glowColor: "purple",
      techCode: "EMBED_CHIP // ATMEL_NANO_X",
      metrics: [
        { label: "ADC RESOLUTION", value: "10-bit", progress: 90 },
        { label: "SIGNAL CALIBRATION", value: "0.04ms", progress: 95 },
        { label: "POWER DAMPENING", value: "Active", progress: 85 }
      ],
      specifications: [
        "Wiring and compiling responsive sensor microcontrollers",
        "Establishing reliable SPI/I2C peripheral bus interfaces",
        "Soldering custom headers on mechanical shields",
        "Integrating analog telemetry logs over serial bus channels"
      ]
    },
    {
      id: "eco-algorithmic-code",
      category: "COMPUTATIONAL SANDBOX",
      title: "Algorithmic Code Cells",
      subtitle: "REAL-TIME FIRMWARE • NON-BLOCKING PIPES",
      description: "Low-level coding desks where students design non-blocking control loops. Developing custom asynchronous state engines to read sensors, dampening noise, and driving mechanical joints with extreme precision.",
      imageUrl: "https://images.unsplash.com/photo-1517055720445-09f1873b2ced?auto=format&fit=crop&q=80&w=1200",
      glowColor: "blue",
      techCode: "NODE_KRNL // NON_BLOCKING_SYS",
      metrics: [
        { label: "LOOP SPEED", value: "2400Hz", progress: 94 },
        { label: "COMPILER STRETCH", value: "O2 Safe", progress: 90 },
        { label: "INTERRUPT WINDOW", value: "15μs", progress: 95 }
      ],
      specifications: [
        "Interrupt Service Routines scheduling triggers",
        "Complementary filtering logic for telemetry reading",
        "Dampening sensor jitter and processing inputs",
         "Configuring fail-safe states during power reduction events"
      ]
    },
    {
      id: "eco-leaderboard-championships",
      category: "CHAMPIONSHIP ARENAS",
      title: "Inter-School Competitions",
      subtitle: "EXTRACURRICULAR ARENAS • CHAMPIONSHIP WINNERS",
      description: "High-stakes inter-school competitive tournaments putting students custom RC cars and robotics rovers face-to-face on stadium obstacle circuits. Cohorts test their code speed and team navigation systems under massive visibility.",
      imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200",
      glowColor: "magenta",
      techCode: "ARENA_CHALL // COHORT_LEAGUE",
      metrics: [
        { label: "REGIONAL CLUSTERS", value: "48 Schools", progress: 95 },
        { label: "PIT-RECOVERY WINDOW", value: "12.8s", progress: 91 },
        { label: "COHORT WIN STREAKS", value: "98.2%", progress: 98 }
      ],
      specifications: [
        "Dynamic high-pressure track route calibration",
        "Hot-swapping modular batteries in pit lanes",
        "Collaborative radio driver-chassis communications",
        "Real-world trophy systems and regional prestige branding"
      ]
    },
    {
      id: "eco-futuristic-labs",
      category: "CREATOR STATIONS",
      title: "Advanced Innovation Labs",
      subtitle: "INDUSTRIAL WORKBENCHES • RAPID MANUFACTURING",
      description: "Custom labs configured within schools. Equipping student cohorts with physical testbeds, digital CNC engraving machines, volumetric 3D printers, and dual-output adjustable power cells for elite modeling.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      glowColor: "purple",
      techCode: "FAB_STATION // CNC_v9.1",
      metrics: [
        { label: "FAB_LIMITS_TOLERANCE", value: "0.02mm", progress: 98 },
        { label: "PRINTER FLUID SPEED", value: "140mm/s", progress: 85 },
        { label: "ASSEMBLY DOCK NODES", value: "48 Units", progress: 92 }
      ],
      specifications: [
        "3D CAD assembly file configuration pipelines",
        "Parametric stress loading calculations",
        "Fine-filament volumetric chassis printing",
        "High-contrast safety compliance structures"
      ]
    },
    {
      id: "eco-synergy-collaboration",
      category: "KINETIC COGNITION",
      title: "Kinetic Collaboration",
      subtitle: "OUTDOOR SOLUTIONS • TACTICAL LOGISTICS",
      description: "Synergizing physical motion, tactical route mathematics, and coordination layers. Students formulate sports-strategy graphs, telemetry relays, and cohort mechanical systems to conquer complex challenges.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      glowColor: "cyan",
      techCode: "SYN_NODE // LOGISTICS_DOCK",
      metrics: [
        { label: "COORDINATION DEPTH", value: "Elite", progress: 96 },
        { label: "STRATEGIC STRETCH", value: "94.5%", progress: 94 },
        { label: "RESPONSE LATENCY", value: "0.12s", progress: 90 }
      ],
      specifications: [
        "Applying physics math constraints to real-world velocity",
        "Collaborative role allocation mapping",
        "Simulating route scenarios with computer boards",
        "Accelerating public speaking during symposium briefs"
      ]
    }
  ];

  const [activeItem, setActiveItem] = useState<EcosystemShowcaseItem>(dataset[0]);
  const [hudHint, setHudHint] = useState("DRAG STREAM / HOVER SIDES");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursorHud, setShowCursorHud] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const scrollX = useMotionValue(0);
  const springX = useSpring(scrollX, { damping: 45, stiffness: 120 });
  
  const [maxScroll, setMaxScroll] = useState(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current && trackRef.current) {
        const cWidth = containerRef.current.offsetWidth;
        const tWidth = trackRef.current.scrollWidth;
        setMaxScroll(Math.max(0, tWidth - cWidth + 100));
      }
    };
    
    const timer = setTimeout(calculateBounds, 120);
    window.addEventListener("resize", calculateBounds);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateBounds);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const updateScroll = () => {
      if (!isDraggingRef.current && velocityRef.current !== 0) {
        let currentX = scrollX.get();
        let targetX = currentX + velocityRef.current;
        
        if (targetX > 0) {
          targetX = 0;
          velocityRef.current = 0;
        } else if (targetX < -maxScroll) {
          targetX = -maxScroll;
          velocityRef.current = 0;
        }
        
        scrollX.set(targetX);
      }
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    animationFrameId = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [maxScroll, scrollX]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    const normalizedX = (x / rect.width) * 2 - 1;
    const deadZone = 0.28;
    if (normalizedX > deadZone) {
      const speedProp = (normalizedX - deadZone) / (1 - deadZone);
      velocityRef.current = -speedProp * 20;
      setHudHint("MOVE RIGHT ➔");
    } else if (normalizedX < -deadZone) {
      const speedProp = (-normalizedX - deadZone) / (1 - deadZone);
      velocityRef.current = speedProp * 20;
      setHudHint("➔ MOVE LEFT");
    } else {
      velocityRef.current = 0;
      setHudHint("DRAG OR HOVER SIDES");
    }
  };

  const glowMapper = {
    cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.18)] text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.18)] text-purple-400 bg-purple-500/10 border-purple-500/30",
    magenta: "hover:border-pink-500/50 hover:shadow-[0_0_50px_rgba(236,72,153,0.18)] text-pink-400 bg-pink-500/10 border-pink-500/30",
    blue: "hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.18)] text-blue-400 bg-blue-500/10 border-blue-500/30"
  };

  const systemColorTexts = {
    cyan: "text-cyan-400",
    purple: "text-purple-400",
    magenta: "text-pink-400",
    blue: "text-blue-400"
  };

  return (
    <section 
      id="ecosystem-view" 
      className="relative w-full py-16 md:py-24 bg-primary-themed transition-colors duration-700 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 30, 0],
            backgroundColor: activeItem.glowColor === "cyan" ? "rgba(6,182,212,0.06)" : 
                             activeItem.glowColor === "purple" ? "rgba(168,85,247,0.06)" : 
                             activeItem.glowColor === "magenta" ? "rgba(236,72,153,0.06)" : "rgba(59,130,246,0.06)"
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 tech-grid-dots opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 font-mono text-[9px] tracking-[0.3em] text-cyber-blue uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              <span>THE MAVNOVA ACTIVE ECOSYSTEM MODULE</span>
            </div>
            <h2 className="font-display font-black text-3.5xl md:text-5xl lg:text-5.5xl tracking-wide uppercase leading-none text-primary-themed">
              DRAG & HOVER <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow">
                SYSTEM CORE
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] text-secondary-themed">
            <div className="flex flex-col text-right">
              <span>SCANNER FREQUENCY</span>
              <span className="text-cyber-purple font-bold">943.20 MEGAHERTZ</span>
            </div>
            <div className="h-8 w-px bg-themed-main" />
            <div className="flex flex-col text-right">
              <span>MODULE PERSISTENCE</span>
              <span className="text-cyber-blue font-bold">100% ONLINE</span>
            </div>
          </div>
        </div>

        {/* Cinematic Stream Slider */}
        <div 
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setShowCursorHud(true)}
          onPointerLeave={() => {
            setShowCursorHud(false);
            velocityRef.current = 0;
          }}
          className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing border-y border-themed-main py-12 px-2 bg-gradient-to-b from-themed-main/[0.01] to-transparent"
        >
          {/* Virtual Floating HUD Targeter */}
          {showCursorHud && (
            <div 
              className="absolute pointer-events-none z-40 px-3 py-1.5 rounded bg-black/90 border border-cyber-blue/40 text-[9px] font-mono text-white tracking-widest uppercase flex items-center gap-2"
              style={{ left: cursorPos.x + 18, top: cursorPos.y - 12 }}
            >
              <Terminal className="w-3.5 h-3.5 text-cyber-blue animate-pulse" />
              <span>{hudHint}</span>
            </div>
          )}

          <motion.div 
            ref={trackRef}
            style={{ x: springX }}
            drag="x"
            dragConstraints={{ right: 0, left: -maxScroll }}
            onDragStart={() => {
              isDraggingRef.current = true;
              velocityRef.current = 0;
            }}
            onDragEnd={() => {
              isDraggingRef.current = false;
            }}
            className="flex gap-8 w-fit"
          >
            {dataset.map((item, idx) => {
              const isSelected = activeItem.id === item.id;
              return (
                <EcosystemCard 
                  key={item.id}
                  item={item}
                  isSelected={isSelected}
                  onClick={() => setActiveItem(item)}
                  glowMapper={glowMapper}
                  systemColorTexts={systemColorTexts}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Detailed Modular Split Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-xs tracking-[0.3em] font-black pointer-events-none px-3 py-1.5 rounded-md border text-center ${
                activeItem.glowColor === "cyan" ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" :
                activeItem.glowColor === "purple" ? "bg-purple-500/10 border-purple-500/20 text-purple-400" :
                activeItem.glowColor === "magenta" ? "bg-pink-500/10 border-pink-500/20 text-pink-400" :
                "bg-blue-500/10 border-blue-500/20 text-blue-400"
              }`}>
                {activeItem.techCode}
              </span>
              <div className="h-px flex-1 bg-themed-main" />
              <div className="w-2.5 h-2.5 rounded-full bg-themed-main animate-ping" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-widest text-secondary-themed uppercase block">
                {activeItem.category}
              </span>
              <h3 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-primary-themed leading-tight">
                {activeItem.title}
              </h3>
              <p className="font-mono text-xs text-cyber-blue tracking-widest uppercase font-semibold">
                {activeItem.subtitle}
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-secondary-themed leading-relaxed tracking-wide">
              {activeItem.description}
            </p>

            {/* Simulated Live System Diagnostics Panel */}
            <div className="glass-panel rounded-xl p-5 border border-themed-main space-y-3 relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 top-0 h-[100%] tech-grid opacity-[0.05] pointer-events-none" />
              <div className="flex items-center justify-between border-b border-themed-sub pb-2 font-mono text-[8.5px] text-muted-themed">
                <span>[ TELEMETRY FEED ACTIVE ]</span>
                <span className="text-cyber-blue">STATUS_VERIFIED</span>
              </div>
              <div className="space-y-2.5">
                {activeItem.metrics.map((metric, i) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="flex justify-between font-mono text-[10px] text-secondary-themed">
                      <span>{metric.label}</span>
                      <span className="font-bold text-primary-themed">{metric.value}</span>
                    </div>
                    <div className="h-1 w-full bg-themed-sub rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.progress}%` }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full ${
                          activeItem.glowColor === "cyan" ? "bg-cyan-400" :
                          activeItem.glowColor === "purple" ? "bg-purple-500" :
                          activeItem.glowColor === "magenta" ? "bg-pink-500" : "bg-blue-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          {/* Hologram Blueprint Diagnostics (Right) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-panel border border-themed-main p-1.5 flex items-center justify-center">
              {/* Scanline */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-20" />
              <div className="absolute inset-x-0 h-[1.5px] bg-cyber-blue/50 hologram-line z-20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <img 
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 opacity-75 md:opacity-90 hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Telemetry Coordinates Labels */}
                  <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/80 bg-black/60 px-2 py-1 rounded border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
                    <span>COORDS_CONNECTED: {activeItem.techCode}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="glass-panel rounded-xl p-6 border border-themed-main space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-secondary-themed uppercase block">
                SYSTEM SPEC DIAGRAMS
              </span>
              <ul className="space-y-3 font-body text-xs text-secondary-themed">
                {activeItem.specifications.map((spec, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      activeItem.glowColor === "cyan" ? "bg-cyan-400" :
                      activeItem.glowColor === "purple" ? "bg-purple-500" :
                      activeItem.glowColor === "magenta" ? "bg-pink-500" : "bg-blue-500"
                    }`} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({
  item, 
  isSelected, 
  onClick, 
  glowMapper, 
  systemColorTexts 
}: { 
  key?: string;
  item: EcosystemShowcaseItem; 
  isSelected: boolean; 
  onClick: () => void;
  glowMapper: Record<string, string>;
  systemColorTexts: Record<string, string>;
}) {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className={`w-[260px] sm:w-[325px] shrink-0 text-left glass-panel rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col group relative ${
        isSelected ? glowMapper[item.glowColor] + " border-[1.5px]" : "border-themed-main hover:border-themed-main/60"
      }`}
    >
      <div className="relative w-full h-[160px] overflow-hidden bg-black/50">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale contrast-110 opacity-60 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-themed/90 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="font-mono text-[8px] tracking-widest bg-black/50 border border-white/10 px-2 py-0.5 rounded text-white font-medium uppercase">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-themed-sub pb-1.5">
            <span className="font-mono text-[8px] text-muted-themed tracking-widest uppercase block">
              {item.techCode}
            </span>
            <div className="flex items-center gap-1">
              <span className={`w-1 h-1 rounded-full ${
                isSelected ? "bg-cyber-blue animate-pulse" : "bg-muted-themed"
              }`} />
            </div>
          </div>
          <h3 className={`font-display font-black text-sm tracking-widest uppercase transition-colors select-none ${
            isSelected ? systemColorTexts[item.glowColor] : "text-primary-themed group-hover:text-cyber-blue"
          }`}>
            {item.title}
          </h3>
          <p className="font-body text-[11px] text-secondary-themed leading-relaxed select-none">
            {item.description.substring(0, 95)}...
          </p>
        </div>

        <div className="pt-3 border-t border-themed-sub flex items-center justify-between mt-3 font-mono text-[8px] text-muted-themed uppercase select-none">
          <span>SELECT TO DIAGNOSE</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">➔</span>
        </div>
      </div>
    </motion.button>
  );
}
