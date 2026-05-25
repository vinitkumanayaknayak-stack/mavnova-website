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

interface CinematicShowcaseItem {
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

export default function ExperienceShowcase() {
  const showcaseData: CinematicShowcaseItem[] = [
    {
      id: "sh-rc-races",
      category: "ROBOTICS MOTORSPORT",
      title: "MAVNOVA Grand Prix",
      subtitle: "RC ROBOT RACING • AUTONOMOUS VELOCITY ENGINE",
      description: "Tactical high-density autonomous vehicle trials. Student cohorts assemble miniature RC cars and coordinate real-time C++ PID loop calculations, computer-vision lane tracking, and obstacle networks.",
      imageUrl: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=1200",
      glowColor: "cyan",
      techCode: "SYS_V_CRTL // PID_LOOP_9.2",
      metrics: [
        { label: "SENSOR REACTION TIME", value: "3.4ms", progress: 95 },
        { label: "TELEMETRY BAUD RATE", value: "115200bps", progress: 88 },
        { label: "AUTONOMOUS PATH TOLERANCE", value: "1.2cm", progress: 92 }
      ],
      specifications: [
        "LiDAR visual-SLAM workspace mapping",
        "Direct connection of PWM servo-motor paths",
        "High-frequency radio wave telemetry feedback",
        "Chassis stress and shock tolerance simulation"
      ]
    },
    {
      id: "sh-arduino-build",
      category: "EMBEDDED HARDWARE",
      title: "Arduino Sensory Lab",
      subtitle: "IOT HARDWARE • COMPILATION SANDBOX",
      description: "Wiring, soldering, and compiling robust circuit loops. High-precision workspace where students coordinate analog-to-digital conversions, bus topologies, and hardware interrupt arrays to drive robotic devices.",
      imageUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=1200",
      glowColor: "purple",
      techCode: "CHIP_CORE // ATMEL_328P_X",
      metrics: [
        { label: "BUS FREQUENCY", value: "16MHz", progress: 75 },
        { label: "I/O REFRESH LATENCY", value: "0.02ms", progress: 96 },
        { label: "RAM CONSTRAINTS USED", value: "88%", progress: 88 }
      ],
      specifications: [
        "I2C and SPI multi-sensor bus configuration",
        "Analog infrared signal calibration buffers",
        "Optocoupler galvanic isolators",
        "Physical sensory trigger threshold configuration"
      ]
    },
    {
      id: "sh-competitions",
      category: "CHAMPIONSHIP ARENA",
      title: "Hacker League Arena",
      subtitle: "COHORT COMPETITION • TOURNAMENT SPECS",
      description: "A battle-tested environment under high-intensity arena spots. Cohorts field their custom-milled rovers and mechanical physical scale RC cars to solve randomized mazes and physical token relocation targets.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
      glowColor: "magenta",
      techCode: "ARENA_SIG // LEAGUE_LEVEL_4",
      metrics: [
        { label: "PARTICIPATING TEAMS", value: "32 Cohorts", progress: 90 },
        { label: "VICTORY THRESHOLD", value: "98.5%", progress: 98 },
        { label: "COHORT HOT-SWAP AVG", value: "14.2s", progress: 85 }
      ],
      specifications: [
        "Real-time stadium sensor grid synchronization",
        "Rapid pit-lane mechanical gear hot-swapping",
        "Tactical radio-frequency jamming diagnostics",
        "Team coordinator telemetry broadcasting"
      ]
    },
    {
      id: "sh-coding",
      category: "COMPUTATIONAL STACK",
      title: "Computational Core Labs",
      subtitle: "ALGORITHM DESIGN • FIRMWARE PROTOTYPING",
      description: "Low-level coding desks where mathematics becomes direct physical output. Cohorts draft non-blocking state loops, sensor fusion estimators, and asynchronous timers designed to sustain reliable operation.",
      imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200",
      glowColor: "blue",
      techCode: "COMPUTE_NODE // KERNEL_ISR.1",
      metrics: [
        { label: "COMPILER STRETCH", value: "O3 Optimized", progress: 99 },
        { label: "ISR RUNTIME WINDOW", value: "12μs", progress: 94 },
        { label: "FLOATING POINT RATE", value: "480 MFLOPS", progress: 82 }
      ],
      specifications: [
        "Interrupt Service Routine (ISR) scheduling",
        "Complementary filter estimation algorithms",
        "Multi-threaded thread safety primitives",
        "Dynamic compiler memory alignment optimizations"
      ]
    },
    {
      id: "sh-maker-spaces",
      category: "SPATIAL ATELIER",
      title: "The Maker Stations",
      subtitle: "CAD PIPELINES • DIGITAL MANUFACTURING",
      description: "The physical design foundry. Outfitted with high-precision digital CNC routers, modular rapid-casting blocks, CAD docking ports, and dual-nozzle physical 3D printers for fast airframe fabrication.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
      glowColor: "cyan",
      techCode: "FOB_CELL // PROT_ATEL_08",
      metrics: [
        { label: "CNC TOLERANCE LIMIT", value: "0.05mm", progress: 97 },
        { label: "PLA INTRUSION SPEED", value: "120mm/s", progress: 80 },
        { label: "3D CAD ASSEMBLY PARTS", value: "54 Nodes", progress: 91 }
      ],
      specifications: [
        "Autodesk parametric modeling environment",
        "Custom mechanical stress loading simulation",
        "Precision additive material configuration",
        "Quick-release chassis mounting plates"
      ]
    },
    {
      id: "sh-stage-pitch",
      category: "LEADERSHIP SCALE",
      title: "Symposium Stage",
      subtitle: "VENTURE PITCHING • PRODUCT EXPO",
      description: "Ecosystem presentation events where confidence is forged. Student innovators stand on high-contrast illuminated stages, broadcasting hardware telemetry charts and real-world system applications directly to industry partners.",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
      glowColor: "purple",
      techCode: "STAGE_PROJ // COGNITIVE_EXPO",
      metrics: [
        { label: "AUDIENCE REACH", value: "400+ Guests", progress: 95 },
        { label: "PITCH STAGE METRIC", value: "Interactive HUD", progress: 90 },
        { label: "INDUSTRY BACKING", value: "12 Sponsors", progress: 85 }
      ],
      specifications: [
        "Real-time visual data widget streaming",
        "Professional technical architecture diagrams",
        "Project prototype live telemetry feed",
        "Collaborative audience Q&A session channels"
      ]
    },
    {
      id: "sh-labs",
      category: "STEM SANCTORUMS",
      title: "Stem Innovation Labs",
      subtitle: "ELECTRIC DIAGNOSTICS • OSCILLOSCOPES",
      description: "Clean development labs optimized for high-frequency measurement. Equipped with logic analyzers, digital oscilloscopes, variable power reservoirs, and active testing pathways for functional verification.",
      imageUrl: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200",
      glowColor: "magenta",
      techCode: "LAB_BENCH // TEKTRONIX_M_2",
      metrics: [
        { label: "MAX ACQUISITION RATE", value: "2.5 GS/s", progress: 92 },
        { label: "SIGNAL RESOLUTION", value: "12-bit ADC", progress: 88 },
        { label: "ISOLATED DC CHANNELS", value: "4 Lanes", progress: 95 }
      ],
      specifications: [
        "Signal integrity and ripple calibration",
        "High-frequency spectrum radio analysis",
        "Active printed circuit board diagnostics",
        "Electrostatic discharge protective systems"
      ]
    },
    {
      id: "sh-mentors",
      category: "EXPERT PIPELINES",
      title: "Mentor Assembly Cells",
      subtitle: "DISCOVERY SEEDS • TECH VETERANS",
      description: "One-on-one fabrication workshops. Aerospace engineers, embedded developers, and firmware architects guide project teams, helping students safely dissect complex electromagnetic challenges.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      glowColor: "blue",
      techCode: "COHORT_COACH // SEED_NETWORK",
      metrics: [
        { label: "MENTOR TO COHORT RATIO", value: "1:2 Teams", progress: 96 },
        { label: "DEVELOPER AVG SAVINGS", value: "24 Code Hrs", progress: 92 },
        { label: "INTEGRATION STRETCH", value: "Industrial", progress: 90 }
      ],
      specifications: [
        "Industrial PCB review workflows",
        "Software optimization and cache tuning",
        "Professional development sprint mapping",
        "Commercial compliance standards testing"
      ]
    }
  ];

  const [activeItem, setActiveItem] = useState<CinematicShowcaseItem>(showcaseData[0]);
  const [hudHint, setHudHint] = useState("DRAG FEED / HOVER SIDES");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursorHud, setShowCursorHud] = useState(false);

  // Motion setup for smooth cinematic horizontal pan
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const scrollX = useMotionValue(0);
  const springX = useSpring(scrollX, { damping: 45, stiffness: 120 });
  
  const [maxScroll, setMaxScroll] = useState(0);
  const isDraggingRef = useRef(false);

  // Recalculate track limits, boundaries
  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current && trackRef.current) {
        const cWidth = containerRef.current.offsetWidth;
        const tWidth = trackRef.current.scrollWidth;
        setMaxScroll(Math.max(0, tWidth - cWidth + 100)); // offset padding
      }
    };
    
    // Slight timeout so DOM paint is fully completed
    const timer = setTimeout(calculateBounds, 100);
    window.addEventListener("resize", calculateBounds);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateBounds);
    };
  }, []);

  // requestAnimationFrame scroll looping on hover boundaries
  useEffect(() => {
    let animationFrameId: number;
    
    const updateScroll = () => {
      if (!isDraggingRef.current && velocityRef.current !== 0) {
        let currentX = scrollX.get();
        let targetX = currentX + velocityRef.current;
        
        // Elastic clamping simulation at boundaries
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

  // Track cursor position, compute pan direction speed
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    // Calculate normalized position relative to center (-1 left margin, 1 right margin)
    const normalizedX = (x / rect.width) * 2 - 1;

    // Boundary speed acceleration zones
    const deadZone = 0.28;
    if (normalizedX > deadZone) {
      // Scale velocity proportionally up to -24px per frame based on proximity to edge
      const speedProp = (normalizedX - deadZone) / (1 - deadZone);
      velocityRef.current = -speedProp * 20;
      setHudHint("HOVER RIGHT ➔");
    } else if (normalizedX < -deadZone) {
      const speedProp = (-normalizedX - deadZone) / (1 - deadZone);
      velocityRef.current = speedProp * 20;
      setHudHint("➔ HOVER LEFT");
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
      id="showcase" 
      className="relative w-full py-24 md:py-32 bg-primary-themed transition-colors duration-700 overflow-hidden border-t border-themed-main"
    >
      {/* Dynamic Ambient Blur Spotlights based on active element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
            backgroundColor: activeItem.glowColor === "cyan" ? "rgba(6,182,212,0.06)" : 
                             activeItem.glowColor === "purple" ? "rgba(168,85,247,0.06)" : 
                             activeItem.glowColor === "magenta" ? "rgba(236,72,153,0.06)" : "rgba(59,130,246,0.06)"
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 35, 0],
            backgroundColor: activeItem.glowColor === "cyan" ? "rgba(168,85,247,0.04)" : 
                             activeItem.glowColor === "purple" ? "rgba(6,182,212,0.04)" : 
                             activeItem.glowColor === "magenta" ? "rgba(59,130,246,0.04)" : "rgba(236,72,153,0.04)"
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] right-[10%] w-[55vw] h-[55vw] rounded-full blur-[170px]"
        />
        <div className="absolute inset-0 tech-grid-dots opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cinematic Header Block */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 font-mono text-[9px] tracking-[0.3em] text-cyber-blue uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              <span>THE INTERACTIVE MOTION GALLERY</span>
            </div>
            <h2 className="font-display font-black text-3.5xl md:text-5xl lg:text-5.5xl tracking-wide uppercase leading-none">
              FUTURE REEL <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-themed via-cyber-blue to-neon-magenta">
                Ecosystem In Motion.
              </span>
            </h2>
          </div>
          <div className="max-w-sm border-l-2 border-cyber-blue/40 pl-4 font-mono">
            <p className="text-xs text-secondary-themed leading-relaxed">
              Hover left or right to slide the cinematic track. Click any immersive element to synchronize the physical diagnostic telemetry board below.
            </p>
          </div>
        </div>

        {/* Hover-Controlled Cinematic Gallery Wrapper */}
        <div 
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setShowCursorHud(true)}
          onPointerLeave={() => {
            setShowCursorHud(false);
            velocityRef.current = 0;
          }}
          className="relative w-full overflow-visible py-10 cursor-grab active:cursor-grabbing select-none"
        >
          {/* Futuristic Floating Cursor HUD Badge */}
          {showCursorHud && (
            <motion.div
              style={{
                x: cursorPos.x - 70,
                y: cursorPos.y - 45,
                pointerEvents: "none"
              }}
              className="absolute left-0 top-0 z-40 hidden md:flex flex-col items-center gap-1.5 px-3 py-1.5 bg-black/85 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl font-mono text-[9px] font-bold tracking-widest text-cyan-400 uppercase"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
                <span>{hudHint}</span>
              </div>
              <span className="text-[7.5px] text-white/40 font-normal">DRAG OR FLING TO PAN</span>
            </motion.div>
          )}

          {/* Panoramic Reel Track */}
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.16}
            onDragStart={() => {
              isDraggingRef.current = true;
              velocityRef.current = 0;
            }}
            onDragEnd={() => {
              isDraggingRef.current = false;
            }}
            style={{ x: springX }}
            className="flex items-stretch gap-8 w-max pl-4 pr-32"
          >
            {showcaseData.map((item) => {
              const isSelected = activeItem.id === item.id;
              return (
                <TiltCard 
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

          {/* Left/Right Visual Edge Shading indicating scroll overflow */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-primary-themed to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-primary-themed to-transparent pointer-events-none z-20" />
        </div>

        {/* Technical Specification Diagnostic Core HUD */}
        <div className="mt-12">
          <div className="flex items-center gap-3 border-b border-themed-main pb-4 mb-8">
            <span className="p-2 rounded-lg bg-themed-main border border-themed-sub text-cyber-blue">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-muted-themed uppercase">SYSTEM INTEGRITY MONITOR</span>
              <h3 className="font-display font-black text-sm uppercase tracking-wider text-primary-themed flex items-center gap-2">
                ACTIVE TELEMETRY: 
                <span className={`font-mono text-xs ${systemColorTexts[activeItem.glowColor]}`}>
                  {activeItem.techCode}
                </span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Spec Columns */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[9px] tracking-[0.2em] text-cyber-purple bg-cyber-purple/10 px-3 py-1.5 rounded-full uppercase border border-cyber-purple/20">
                  {activeItem.category}
                </span>
                
                <h4 className="font-display font-black text-2xl uppercase tracking-wide text-primary-themed">
                  {activeItem.title}
                </h4>

                <p className="font-sans text-sm text-secondary-themed leading-relaxed tracking-wide">
                  {activeItem.description}
                </p>
              </div>

              {/* Specs array */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] tracking-widest text-muted-themed uppercase block">FIRMWARE DIRECTIVES</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeItem.specifications.map((spec, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-themed-main border border-themed-sub hover:border-themed-main hover:shadow-sm transition-all group"
                    >
                      <ZipLineGlow glow={activeItem.glowColor} />
                      <span className="text-xs text-secondary-themed font-sans tracking-wide leading-relaxed group-hover:text-primary-themed transition-colors">
                        {spec}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spec Telemetry Visualization Map */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-themed-main border border-themed-sub relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
                <div className="absolute top-[5%] right-[5%] w-16 h-16 border border-themed-main p-1 flex items-center justify-center font-mono text-[8px] text-muted-themed text-center">
                  SYS_RC_MODULE
                </div>

                <div className="space-y-6 relative z-10 w-full">
                  <span className="font-mono text-[9px] tracking-widest text-muted-themed uppercase block">COHORT PROGRESSIVE STATS</span>
                  
                  <div className="space-y-5">
                    {activeItem.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-muted-themed uppercase">{metric.label}</span>
                          <span className={`font-bold ${systemColorTexts[activeItem.glowColor]}`}>{metric.value}</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-primary-themed/50 overflow-hidden border border-themed-sub">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.progress}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${
                              activeItem.glowColor === "cyan" ? "from-cyan-500 to-blue-400" :
                              activeItem.glowColor === "purple" ? "from-purple-500 to-indigo-400" :
                              activeItem.glowColor === "magenta" ? "from-pink-500 to-purple-400" :
                              "from-blue-500 to-cyan-400"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactile interaction button */}
                <div className="mt-8 pt-6 border-t border-themed-sub flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="font-mono text-center sm:text-left">
                    <p className="text-[8.5px] text-muted-themed tracking-widest uppercase">HARDWARE NODE ID</p>
                    <p className={`text-md font-bold tracking-wider ${systemColorTexts[activeItem.glowColor]}`}>{activeItem.techCode}</p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary-themed hover:text-cyber-blue transition-colors group"
                  >
                    INQUIRE PILOT MODULE <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// 3D Card Tilt Component optimized for zero jitter and supreme sub-pixel tracking
function TiltCard({ 
  item, 
  isSelected, 
  onClick, 
  glowMapper, 
  systemColorTexts 
}: { 
  key?: string;
  item: CinematicShowcaseItem; 
  isSelected: boolean; 
  onClick: () => void;
  glowMapper: Record<string, string>;
  systemColorTexts: Record<string, string>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to relative coordinate system (+- 0.5)
    const relativeX = (x / rect.width) - 0.5;
    const relativeY = (y / rect.height) - 0.5;

    // Maximum degrees of tilt config
    const maxTilt = 8;
    setRotation({
      x: -relativeY * maxTilt,
      y: relativeX * maxTilt
    });

    // Translate coordinates into exact cursor percentage
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handlePointerLeave = () => {
    setRotation({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      className={`sm:w-[480px] w-[320px] h-[480px] shrink-0 rounded-2xl border flex flex-col justify-between relative overflow-hidden cursor-pointer select-none transition-all duration-300 ${
        isSelected 
          ? `${glowMapper[item.glowColor]} bg-themed-main border-cyber-blue shadow-lg scale-[1.02]`
          : "border-themed-main bg-themed-main/60 hover:border-themed-main/10"
      }`}
    >
      {/* Background Cinematic Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.img
          src={item.imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            scale: hovered ? 1.08 : 1.02,
            filter: isSelected ? "grayscale(0) brightness(0.65)" : "grayscale(0.4) brightness(0.4)"
          }}
        />
        {/* Futuristic glowing spot tracking the pointer inside the card */}
        {hovered && (
          <div 
            style={{
              background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.06), transparent 80%)`,
            }}
            className="absolute inset-0 transition-opacity duration-300"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />
      </div>

      {/* Futuristic Scanline, Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none z-10" />

      {/* Card Header Info block */}
      <div className="p-6 relative z-20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[8px] text-white/40">
            <span className={`w-1.5 h-1.5 rounded-full ${
              item.glowColor === "cyan" ? "bg-cyan-400" :
              item.glowColor === "purple" ? "bg-purple-400" :
              item.glowColor === "magenta" ? "bg-pink-400" : "bg-blue-400"
            }`} />
            <span>{item.techCode.split(" // ")[1]}</span>
          </div>
        </div>
      </div>

      {/* Card Footer Content Block */}
      <div className="p-6 relative z-20 space-y-4 bg-gradient-to-t from-black/98 via-black/70 to-transparent pt-16">
        <div className="space-y-1">
          <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
            {item.subtitle}
          </p>
          <h4 className="font-display font-black text-xl tracking-wide uppercase text-white leading-tight group-hover:text-cyber-blue">
            {item.title}
          </h4>
        </div>

        <p className="text-xs text-white/65 font-sans leading-relaxed tracking-wide line-clamp-3">
          {item.description}
        </p>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[9px]">
          <span className="text-white/40 uppercase">ACTIVE PARAMETERS</span>
          <span className={`${systemColorTexts[item.glowColor]} uppercase tracking-widest font-black flex items-center gap-1`}>
            {isSelected ? "SYNCHRONIZED" : "DECRYPT NODE"} 
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Sparkler point for spec elements
function ZipLineGlow({ glow }: { glow: string }) {
  const shadowCol = {
    cyan: "shadow-[0_0_8px_#06b6d4] bg-cyan-400",
    purple: "shadow-[0_0_8px_#a855f7] bg-purple-400",
    magenta: "shadow-[0_0_8px_#ec4899] bg-pink-400",
    blue: "shadow-[0_0_8px_#3b82f6] bg-blue-400"
  };
  return (
    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 animate-pulse ${shadowCol[glow] || "bg-cyan-400"}`} />
  );
}
