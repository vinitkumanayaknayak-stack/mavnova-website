import { useState, useEffect } from "react";
import Navbar, { NavbarPage } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import WhyMavnova from "./components/WhyMavnova";
import MavnovaEffect from "./components/MavnovaEffect";
import EcosystemShowcase from "./components/EcosystemShowcase";
import ExperienceShowcase from "./components/ExperienceShowcase";
import FutureVision from "./components/FutureVision";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavbarPage>("home");
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(!isLight);

  // Smooth scroll back to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentPage]);

  // Handle SPA routing & internal page switching
  const handleNavigate = (page: NavbarPage, anchorId?: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-primary-themed text-primary-themed relative transition-colors duration-700">
      {/* Absolute Holographic Scanner Scanline Overlay for real-time cinema mood */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.012] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] dark:block hidden" />
      
      {/* Floating Header */}
      <Navbar 
        isLight={isLight} 
        toggleTheme={toggleTheme} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <AnimatePresence mode="wait">
        {/* Render separate pages dynamically with clean, premium transition animations */}
        
        {currentPage === "home" && (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Cinematic Hero */}
            <HeroSection onNavigate={handleNavigate} />

            {/* Platform Portal Dashboard Navigator Grid */}
            <BentoGrid onNavigate={handleNavigate} />
          </motion.div>
        )}

        {currentPage === "ecosystem" && (
          <motion.div
            key="ecosystem-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Immersive Dedicated Page Premium Title */}
            <div className="relative text-center pt-20 pb-4 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
                <span>ECOSYSTEM COHORT STREAM</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                THE ACTIVE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow">STUDENT</span> ECOSYSTEM
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                Our core implementation layout inside school clusters. Toggle between student-built RC formula cars, custom Arduino telemetry suites, algorithm designs, and inter-school trophies. Hover over either side or drag the stream to navigate the film reel.
              </p>
            </div>

            {/* Interactive Showcase Component */}
            <EcosystemShowcase />

            {/* Navigation Return Portal Buttons */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 pb-16 flex justify-center gap-4">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
              <button 
                onClick={() => handleNavigate("contact")}
                className="px-6 py-3.5 rounded-xl bg-cyber-blue/20 hover:bg-cyber-blue/30 border border-cyber-blue/30 text-cyber-blue text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                PARTNER WITH US
              </button>
            </div>
          </motion.div>
        )}

        {currentPage === "why-mavnova" && (
          <motion.div
            key="why-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Header banner */}
            <div className="relative text-center pt-20 pb-2 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple animate-ping" />
                <span>VISIONARY ENABLING PROTOCOL</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                WHY PRESTIGE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple via-pink-400 to-cyber-blue text-shadow-glow">MAVNOVA</span> STATEMENTS
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                Discover the permanent technological architecture we establish within schools. We invert textbook limitations to unlock active peer-collaboration, spatial reasoning, and real-world hardware integration.
              </p>
            </div>

            {/* Core Why Component */}
            <WhyMavnova />

            {/* Back action */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 justify-center flex gap-4">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
              <button 
                onClick={() => handleNavigate("the-effect")}
                className="px-6 py-3.5 rounded-xl bg-cyber-purple/20 hover:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                SEE THE EFFECTS ➔
              </button>
            </div>
          </motion.div>
        )}

        {currentPage === "the-effect" && (
          <motion.div
            key="effect-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Header banner */}
            <div className="relative text-center pt-20 pb-2 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
                <span>TRANSITION MATRIX SPECS</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                THE TRANSITION <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-magenta via-pink-400 to-cyber-blue text-shadow-glow">MATRIX</span> EFFECT
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                A quantitative comparison matrix. Investigate how schools pivot traditional whiteboard programs into high-stakes hardware assemblies, tactile software compilation, and community pride tournaments.
              </p>
            </div>

            {/* Core Comparative Component */}
            <MavnovaEffect />

            {/* Back Actions */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 justify-center flex gap-4">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
              <button 
                onClick={() => handleNavigate("future")}
                className="px-6 py-3.5 rounded-xl bg-cyber-blue/20 hover:bg-cyber-blue/30 border border-cyber-blue/30 text-cyber-blue text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                VIEW ROADMAP ROADMAP ➔
              </button>
            </div>
          </motion.div>
        )}

        {currentPage === "future" && (
          <motion.div
            key="future-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Header banner */}
            <div className="relative text-center pt-20 pb-2 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>STRATEGIC MANIFESTO INDEX</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                THE FUTURISTIC <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyan-400 to-cyber-purple text-shadow-glow">ROADMAP</span> MANIFESTO
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                Read our core philosophical directives. Our strategy installs permanent technological prestige circles inside regional academies, preparing cohorts for future-focused careers.
              </p>
            </div>

            {/* Core Manifesto Component */}
            <FutureVision />

            {/* Back action */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 justify-center flex gap-4">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
              <button 
                onClick={() => handleNavigate("showcase")}
                className="px-6 py-3.5 rounded-xl bg-cyber-blue/20 hover:bg-cyber-blue/30 border border-cyber-blue/30 text-cyber-blue text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                VIEW VISUAL SHOWCASE ➔
              </button>
            </div>
          </motion.div>
        )}

        {currentPage === "showcase" && (
          <motion.div
            key="showcase-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Immersive Dedicated Page Premium Title */}
            <div className="relative text-center pt-20 pb-4 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
                <span>EXHIBIT CENTRAL MODULE</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                CINEMATIC <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow">EXPERIENCE</span> SHOWCASE
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                Step inside our physical labs and workspace simulations. Drag the horizontal stream cards or hover near the boundaries to discover live student groups configuring RC velocity cars, Arduino telemetry networks, and CAD prototyping cells.
              </p>
            </div>

            {/* Structural Showcase Component */}
            <ExperienceShowcase />

            {/* Navigation options */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4 pb-16 flex justify-center gap-4">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
              <button 
                onClick={() => handleNavigate("contact")}
                className="px-6 py-3.5 rounded-xl bg-cyber-blue/20 hover:bg-cyber-blue/30 border border-cyber-blue/30 text-cyber-blue text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                PARTNER WITH US
              </button>
            </div>
          </motion.div>
        )}

        {currentPage === "contact" && (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pt-24 min-h-screen"
          >
            {/* Header banner */}
            <div className="relative text-center pt-20 pb-2 px-4 max-w-5xl mx-auto z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
                <span>COORDINATION REGISTRY</span>
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-primary-themed leading-tight">
                ESTABLISH THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow">PARTNERSHIP</span> BINDER
              </h1>
              <p className="max-w-2xl mx-auto mt-6 text-xs sm:text-sm text-secondary-themed tracking-wide leading-relaxed font-body">
                Connect with our academic coordination desk to configure standard school integrations, launch technology labs, or sponsor inter-school tournaments.
              </p>
            </div>

            {/* Core Contact Component */}
            <ContactSection />

            {/* Back home */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 justify-center flex">
              <button 
                onClick={() => handleNavigate("home")}
                className="px-6 py-3.5 rounded-xl bg-themed-main hover:bg-themed-sub border border-themed-sub text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer text-primary-themed font-bold"
              >
                ➔ BACK TO PLATFORM PORTAL
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Responsive Adaptive Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
