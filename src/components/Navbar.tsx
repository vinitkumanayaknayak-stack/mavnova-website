import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Menu, X, ArrowUpRight, Radio, Sun, Moon } from "lucide-react";

export type NavbarPage = "home" | "ecosystem" | "why-mavnova" | "the-effect" | "showcase" | "future" | "contact";

export default function Navbar({ 
  isLight, 
  toggleTheme, 
  currentPage = "home", 
  onNavigate 
}: { 
  isLight: boolean; 
  toggleTheme: () => void; 
  currentPage?: NavbarPage;
  onNavigate?: (page: NavbarPage, anchorId?: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; page: NavbarPage }[] = [
    { name: "Ecosystem", page: "ecosystem" },
    { name: "Why MAVNOVA", page: "why-mavnova" },
    { name: "The Effect", page: "the-effect" },
    { name: "Future Vision", page: "future" },
    { name: "Exhibits Gallery", page: "showcase" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 ${
          scrolled ? "bg-primary-themed/50 backdrop-blur-md border-b border-themed-main py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate ? onNavigate("home") : window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center gap-2.5 group cursor-pointer text-left bg-transparent border-0 outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-themed-main border border-themed-main overflow-hidden group-hover:border-cyber-blue transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Cpu className="w-5 h-5 text-primary-themed group-hover:text-cyber-blue transition-colors duration-500 relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-r from-primary-themed via-primary-themed to-cyber-blue transition-all duration-500 group-hover:to-cyber-purple">
                MAVNOVA
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-muted-themed leading-none uppercase">
                Beyond Classrooms
              </span>
            </div>
          </button>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={() => onNavigate && onNavigate(link.page)}
                  className={`relative font-mono text-xs tracking-widest transition-colors duration-300 py-1 group cursor-pointer border-0 bg-transparent outline-none ${
                    isActive ? "text-cyber-blue font-bold text-shadow-glow" : "text-secondary-themed hover:text-primary-themed"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-cyber-blue to-cyber-purple transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Ambient Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-themed-main glass-panel cursor-pointer hover:border-cyber-blue/50 text-primary-themed transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group overflow-hidden"
              title={isLight ? "Toggle Cyber Dark Mode" : "Toggle Minimal Light Mode"}
            >
              <AnimatePresence mode="wait">
                {isLight ? (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, rotate: 45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, rotate: -45, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: -20, rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-themed-main border border-themed-sub font-mono text-[10px] tracking-wider text-cyber-blue">
              <Radio className="w-3 h-3 animate-pulse text-cyber-blue" />
              <span>ECOSYSTEM ACTIVE</span>
            </div>
            
            <button
              onClick={() => onNavigate && onNavigate("contact")}
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-themed text-primary-themed hover:bg-cyber-blue hover:text-white border border-themed-main transition-all duration-400 overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest uppercase">
                PARTNER WITH US <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-themed-main glass-panel text-primary-themed hover:border-cyber-blue"
              aria-label="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-indigo-500" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-themed-main border border-themed-sub font-mono text-[9px] text-cyber-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-ping" />
              <span>LIVE</span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-themed-main border border-themed-main text-primary-themed hover:border-cyber-blue transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary-themed/98 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col justify-between pb-12 transition-colors duration-500"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[11px] tracking-widest text-muted-themed border-b border-themed-sub pb-2">
                INDEX NAVIGATION
              </span>
              <div className="flex flex-col gap-5">
                {navLinks.map((link, i) => {
                  const isActive = currentPage === link.page;
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (onNavigate) onNavigate(link.page);
                      }}
                      className={`font-display font-medium text-2xl tracking-widest text-left cursor-pointer transition-colors block bg-transparent border-0 outline-none w-full ${
                        isActive
                          ? "text-cyber-blue font-bold text-shadow-glow"
                          : "text-secondary-themed hover:text-cyber-blue"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate("contact");
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-cyber-blue font-mono text-xs font-bold tracking-widest text-white hover:bg-cyber-purple transition-all duration-300 cursor-pointer"
              >
                PARTNER WITH US <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center font-mono text-[10px] text-muted-themed">
                © {new Date().getFullYear()} MAVNOVA SYSTEM INC.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
