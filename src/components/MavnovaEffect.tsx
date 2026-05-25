import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StoryEffect } from "../types";
import { ArrowLeftRight, CheckCircle2, ChevronRight, Minimize2, Scale, Terminal, XCircle } from "lucide-react";

export default function MavnovaEffect() {
  const [activeTab, setActiveTab] = useState<"traditional" | "mavnova">("mavnova");

  const traditionalPoints = [
    { title: "Static Academics Only", desc: "Heavy focus on route memory benchmarks with zero physical creation paths." },
    { title: "Siloed Student Culture", desc: "No exposure to cross-cohort collaboration or complex peer leadership environments." },
    { title: "Local Isolation", desc: "Little to no integration with inter-school technical leagues or regional championships." },
    { title: "Theoretical Models", desc: "Coding and engineering concepts mapped solely on whiteboards, never compiled on hardware." },
  ];

  const mavnovaPoints = [
    { title: "Kinetic Innovation Labs", desc: "Real-world hardware suites for Arduino integration, robotics assembly, and sensor paths." },
    { title: "Inter-School competitive Leagues", desc: "Schools compete dynamically, proving design constraints and strategy on public stages." },
    { title: "Direct Mentor Acceleration", desc: "Guided by real practitioners to build student confidence and engineering portfolios." },
    { title: "Prestige and Brand Authority", desc: "A visible reputation leap as a pioneering, future-focused technology academy." },
  ];

  const stories: StoryEffect[] = [
    {
      id: "innovation",
      badge: "SKILL AMPLIFICATION",
      title: "Active Prototyping Ecosystem",
      highlight: "Moving from textbook loops to deploying tactile code directly onto microcontrollers.",
      description: "Under traditional constraints, students learn theoretical statements. The MAVNOVA effect transitions cohorts directly into compilation, soldering, telemetry reading, and rapid CAD prototyping.",
      iconName: "terminal",
      quote: {
        text: "Integrating MAVNOVA completely transformed how our students perceived physics. They are no longer memorizing equations—they are testing telemetry on their built rovers.",
        author: "Principal Dr. Elena Rostova",
        role: "Nesta Academy International",
      }
    },
    {
      id: "competitions",
      badge: "COMPETITIVE PRESTIGE",
      title: "Inter-School Competitive Fire",
      highlight: "Forging teamwork under real-world competitive stakes.",
      description: "True student capability flourishes under competitive parameters. We create regional showcase arenas where schools pitch their customized hardware builds, testing software robustly under stadium spotlights.",
      iconName: "trophy",
      quote: {
        text: "The sheer enthusiasm of our robotics cohort at the regional MAVNOVA cup was unforgettable. It brought school pride to an entirely new technological level.",
        author: "HOD Marcus Vance",
        role: "Vanguard Scientific High",
      }
    },
    {
      id: "exposure",
      badge: "TACTILE CONFIDENCE",
      title: "Confidence Through Exposure",
      highlight: "Guiding students to address real, complex engineering problems.",
      description: "When students handle real integrated modules, build physical robots, and present strategies to industry veterans, they develop permanent executive-level confidence that stays with them through high-school, university, and beyond.",
      iconName: "shield",
      quote: {
        text: "The transformation in student leadership was staggering. Quiet coders became team captains, managing budgets, presentation pitches, and real hardware deadlines.",
        author: "Instructor Clara Hughes",
        role: "Synergy School Cluster",
      }
    }
  ];

  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  return (
    <section id="effect" className="relative w-full py-24 md:py-32 bg-primary-themed text-primary-themed overflow-hidden border-t border-themed-main transition-colors duration-700">
      {/* Background radial effects */}
      <div className="absolute top-[30%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-cyber-purple/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title area */}
        <div className="max-w-[700px] mb-20">
          <div className="flex items-center gap-2 mb-4 font-mono text-[9px] tracking-[0.3em] text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
            <span>THE REDIRECTION MECHANICS [THE MAVNOVA EFFECT]</span>
          </div>
          <h2 className="font-display font-black text-4.5xl sm:text-5xl gap-2 tracking-wide uppercase leading-none text-primary-themed">
            Moving Beyond <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-themed via-cyber-blue to-neon-magenta text-shadow-glow">
              Traditional Limits.
            </span>
          </h2>
        </div>

        {/* Dynamic Comparison Simulator Toggle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Comparative Toggle Left Pane */}
          <div className="lg:col-span-4 space-y-6">
            <div className="font-mono text-[10px] tracking-widest text-secondary-themed">COMPARATIVE MODULE STATE</div>
            <h3 className="font-display font-black text-2xl uppercase tracking-wide leading-tight text-primary-themed">
              HOW SCHOOLS TRANSITION.
            </h3>
            <p className="text-xs text-secondary-themed font-body tracking-wide leading-relaxed">
              Academic memorization benchmarks have hit extreme plateaus. MAVNOVA injects high-impact experiential environments that activate natural strategic thinking, software compilation, and hands-on robotics trials inside standard school schedules.
            </p>

            <div className="flex gap-3 p-1 rounded-xl bg-themed-main border border-themed-sub max-w-sm">
              <button
                onClick={() => setActiveTab("traditional")}
                className={`flex-1 py-2.5 rounded-lg font-mono text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "traditional"
                    ? "bg-red-500/10 border border-red-500/30 text-red-400"
                    : "text-muted-themed hover:text-primary-themed"
                }`}
              >
                TRADITIONAL
              </button>
              <button
                onClick={() => setActiveTab("mavnova")}
                className={`flex-1 py-2.5 rounded-lg font-mono text-[10px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === "mavnova"
                    ? "bg-cyber-blue/15 border border-cyber-blue/40 text-cyber-blue text-shadow-glow"
                    : "text-muted-themed hover:text-primary-themed"
                }`}
              >
                MAVNOVA AUGMENTED
              </button>
            </div>
          </div>

          {/* Comparative Simulation Screen (Right) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl p-8 border border-themed-sub relative min-h-[340px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 p-3 font-mono text-[8.5px] text-muted-themed select-none">COMPARATIVE_PRESTIGE_MATRIX</div>
              <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {activeTab === "traditional" ? (
                  <motion.div
                    key="traditional"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-red-400">
                      <Terminal className="w-4 h-4" />
                      <span>STATE_01: TRADITIONAL MEMORY ENVIRONMENT</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {traditionalPoints.map((p, idx) => (
                        <div key={idx} className="bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 p-5 rounded-xl transition-colors">
                          <div className="flex items-center gap-2.5 mb-2 font-display font-black text-xs text-red-300 uppercase tracking-widest">
                            <XCircle className="w-4 h-4 shrink-0 text-red-500" />
                            {p.title}
                          </div>
                          <p className="text-xs text-secondary-themed font-body leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mavnova"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-cyber-blue">
                      <Terminal className="w-4 h-4 animate-pulse" />
                      <span>STATE_02: MAVNOVA EXPERIENTIAL HUB</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mavnovaPoints.map((p, idx) => (
                        <div key={idx} className="bg-cyber-blue/5 hover:bg-cyber-blue/10 border border-cyber-blue/20 p-5 rounded-xl transition-all hover:glass-panel-glow-blue">
                          <div className="flex items-center gap-2.5 mb-2 font-display font-black text-xs text-cyan-300 uppercase tracking-widest">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-cyber-blue animate-pulse" />
                            {p.title}
                          </div>
                          <p className="text-xs text-secondary-themed font-body leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-6 border-t border-themed-sub flex items-center justify-between font-mono text-[9px] text-muted-themed mt-6 relative z-10">
                <span>SYSTEM MODE: ACTIVE COMPARISON</span>
                <span>MAVNOVA OUTCOMES VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

        {/* Narrative Carousel Interactive Stories */}
        <div className="bg-themed-main border border-themed-sub rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Carousel Interactive Nav Controls */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-[9px] tracking-widest text-cyber-purple uppercase block mb-2 font-bold">CINEMATIC STORIES</span>
              <div className="flex flex-col gap-2.5">
                {stories.map((story, idx) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      activeStoryIdx === idx
                        ? "bg-themed-sub border-cyber-blue/40 text-primary-themed"
                        : "bg-transparent border-transparent text-secondary-themed hover:text-primary-themed hover:bg-themed-sub/20"
                    }`}
                  >
                    <span className="font-display font-semibold text-xs sm:text-sm tracking-widest uppercase">{story.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeStoryIdx === idx ? "text-cyber-blue translate-x-1" : "text-muted-themed"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Carousel Active Content Box */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStoryIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="inline-block px-2.5 py-1 rounded bg-cyber-purple/10 border border-cyber-purple/20 font-mono text-[8.5px] tracking-widest text-cyber-purple uppercase font-bold">
                    {stories[activeStoryIdx].badge}
                  </div>
                  
                  <h4 className="font-display font-black text-2xl tracking-wider text-primary-themed uppercase sm:text-3xl">
                    {stories[activeStoryIdx].title}
                  </h4>
                  
                  <blockquote className="font-body text-cyber-blue font-medium italic text-lg tracking-wide border-l-2 border-cyber-blue/30 pl-4 py-1 leading-relaxed text-shadow-glow">
                    "{stories[activeStoryIdx].highlight}"
                  </blockquote>

                  <p className="text-sm text-secondary-themed tracking-wide font-body leading-relaxed">
                    {stories[activeStoryIdx].description}
                  </p>

                  <div className="pt-6 border-t border-themed-sub mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-themed-sub/50 p-4 rounded-xl">
                    <div className="font-mono text-xs">
                      <p className="text-primary-themed font-bold">{stories[activeStoryIdx].quote?.author}</p>
                      <p className="text-muted-themed text-[10px] tracking-widest">{stories[activeStoryIdx].quote?.role}</p>
                    </div>
                    <div className="text-xs text-secondary-themed italic max-w-sm text-right font-body leading-relaxed">
                      " {stories[activeStoryIdx].quote?.text} "
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
