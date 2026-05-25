import { Cpu, ArrowUp, Instagram, Linkedin, Youtube, Mail, ChevronUp } from "lucide-react";

export default function Footer({ onNavigate }: { onNavigate?: (page: "home" | "ecosystem" | "why-mavnova" | "the-effect" | "showcase" | "future" | "contact", anchorId?: string) => void }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-secondary-themed text-secondary-themed py-16 overflow-hidden border-t border-themed-main transition-colors duration-700">
      {/* Glow line indicator */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />
      <div className="absolute inset-0 tech-grid-dots opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <button onClick={() => onNavigate && onNavigate("home")} className="flex items-center gap-2.5 group w-fit text-left cursor-pointer">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-themed-main border border-themed-main overflow-hidden group-hover:border-cyber-blue transition-colors">
                <Cpu className="w-4 h-4 text-primary-themed group-hover:text-cyber-blue transition-colors relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-[0.18em] text-primary-themed">
                  MAVNOVA
                </span>
                <span className="font-mono text-[8px] tracking-[0.3em] text-muted-themed leading-none uppercase">
                  Beyond Classrooms
                </span>
              </div>
            </button>
            
            <p className="text-xs tracking-wide max-w-sm text-muted-themed font-body leading-relaxed">
              MAVNOVA redefines student growth beyond traditional academic benchmarks by provisioning high-stakes robotics, design structures, competitions, and direct technical mentorship pathways inside school programs.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-primary-themed tracking-[0.2em] uppercase block font-bold">INDEX PAGES</span>
            <div className="flex flex-col gap-2.5 text-xs font-mono">
              <button 
                onClick={() => onNavigate && onNavigate("ecosystem")} 
                className="text-secondary-themed hover:text-cyber-blue transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                01 // ECOSYSTEM CORE
              </button>
              <button 
                onClick={() => onNavigate && onNavigate("why-mavnova")} 
                className="text-secondary-themed hover:text-cyber-purple transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                02 // WHY MAVNOVA
              </button>
              <button 
                onClick={() => onNavigate && onNavigate("the-effect")} 
                className="text-secondary-themed hover:text-pink-400 transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                03 // THE EFFECT
              </button>
              <button 
                onClick={() => onNavigate && onNavigate("future")} 
                className="text-secondary-themed hover:text-cyan-400 transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                04 // FUTURE VISION
              </button>
              <button 
                onClick={() => onNavigate && onNavigate("showcase")} 
                className="text-secondary-themed hover:text-cyber-blue transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                05 // SHOWCASE EXHIBITS
              </button>
              <button 
                onClick={() => onNavigate && onNavigate("contact")} 
                className="text-secondary-themed hover:text-cyber-purple transition-colors text-left w-fit tracking-wider cursor-pointer"
              >
                06 // PARTNER MODULE
              </button>
            </div>
          </div>

          {/* Connected Network Col */}
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-primary-themed tracking-[0.2em] uppercase block font-bold">SOCIAL BINDER</span>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mavnova.tech/"
                aria-label="Instagram link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-themed-main border border-themed-sub hover:border-cyber-blue/30 hover:bg-cyber-blue/5 flex items-center justify-center text-secondary-themed hover:text-cyber-blue transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=MAVNOVA&origin=RICH_QUERY_TYPEAHEAD_HISTORY&heroEntityKey=urn%3Ali%3Aorganization%3A117135184&position=0"
                aria-label="LinkedIn link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-themed-main border border-themed-sub hover:border-cyber-purple/30 hover:bg-cyber-purple/5 flex items-center justify-center text-secondary-themed hover:text-cyber-purple transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCEBWTu0Dx7AsPGBx_aIA7dQ"
                aria-label="Youtube link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-themed-main border border-themed-sub hover:border-pink-500/30 hover:bg-pink-500/5 flex items-center justify-center text-secondary-themed hover:text-pink-400 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal bottom panel */}
        <div className="pt-8 border-t border-themed-main flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted-themed">
          <div>
            © {new Date().getFullYear()} MAVNOVA NETWORKS INC. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-6">
            <span>SECURE CONNECTIONS ACTIVE</span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 py-1 px-3.5 rounded bg-themed-main hover:bg-themed-sub hover:text-primary-themed border border-themed-sub cursor-pointer transition-all"
            >
              TOP <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
