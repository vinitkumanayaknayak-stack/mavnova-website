import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Eye, Hourglass, Landmark, Orbit } from "lucide-react";

export default function FutureVision() {
  const [coordinates, setCoordinates] = useState({ lat: "22.1655° N", lng: "113.5432° E" });
  const [activeFrequency, setActiveFrequency] = useState("432.18 MHz");

  // Keep changing numbers slowly in background to show real-time live system states
  useEffect(() => {
    const interval = setInterval(() => {
      const randomFreq = (400 + Math.random() * 50).toFixed(2);
      setActiveFrequency(`${randomFreq} MHz`);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="future" className="relative w-full py-28 md:py-36 bg-primary-themed text-primary-themed overflow-hidden border-t border-themed-main transition-colors duration-700">
      {/* Absolute Cinematic Backdrops & Gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-cyber-blue/15 via-cyber-purple/10 to-neon-magenta/5 blur-[140px] pointer-events-none animate-rotate-slow" />
      <div className="absolute inset-0 tech-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-dots opacity-20 pointer-events-none" />

      {/* Floating Tactical Data Lines */}
      <div className="absolute top-12 left-12 font-mono text-[8px] opacity-25 tracking-[0.3em] uppercase hidden lg:block text-secondary-themed">
        MAV_CORE_GEO_LOCK: {coordinates.lat} / {coordinates.lng}
      </div>
      <div className="absolute top-12 right-12 font-mono text-[8px] opacity-25 tracking-[0.3em] uppercase hidden lg:block text-secondary-themed">
        FREQ_SIG: {activeFrequency} [RESONANT]
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Abstract logo layout */}
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="relative w-16 h-16 rounded-full bg-themed-main border border-themed-sub flex items-center justify-center mb-8 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Orbit className="w-6 h-6 text-cyber-blue group-hover:text-cyber-purple transition-colors duration-500" />
        </motion.div>

        {/* Cinematic Sub-Indicator */}
        <div className="flex items-center gap-2 mb-6 font-mono text-[10px] tracking-[0.3em] text-cyber-blue uppercase font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
          THE FUTURE VISION MANIFESTO
        </div>

        {/* The Bold Cinematic Statement */}
        <div className="max-w-4xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7.5xl tracking-normal uppercase leading-[1.0] text-center text-primary-themed"
          >
            Building the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-cyber-blue via-cyber-purple to-neon-magenta text-shadow-glow pb-1 bg-[size:400%_400%] animate-aurora">
              Next Generation
            </span>{" "}
            <br />
            of Student Ecosystems.
          </motion.h2>
        </div>

        {/* Visually Unforgettable Floating Framework Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mt-16 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-xl p-5 border border-themed-sub bg-themed-main/40"
          >
            <div className="flex items-center gap-2.5 mb-3 font-mono text-[9px] tracking-widest text-cyber-blue font-bold">
              <Landmark className="w-4 h-4 text-cyber-blue" />
              <span>01 / INTEGRATION</span>
            </div>
            <p className="text-[11px] text-secondary-themed tracking-wide font-body leading-relaxed">
              MAVNOVA modules deploy seamlessly into regional school programs, standard schedules, and active hubs with minimal structural latency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-xl p-5 border border-themed-sub bg-themed-main/40"
          >
            <div className="flex items-center gap-2.5 mb-3 font-mono text-[9px] tracking-widest text-cyber-purple font-bold">
              <Cpu className="w-4 h-4 text-cyber-purple" />
              <span>02 / HARDWARE AGILITY</span>
            </div>
            <p className="text-[11px] text-secondary-themed tracking-wide font-body leading-relaxed">
              Students leverage standard hardware layers—from basic Arduino IoT controllers to advanced autonomous robotics platforms with precision sensors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel rounded-xl p-5 border border-themed-sub bg-themed-main/40"
          >
            <div className="flex items-center gap-2.5 mb-3 font-mono text-[9px] tracking-widest text-pink-400 font-bold">
              <Hourglass className="w-4 h-4 text-pink-400" />
              <span>03 / PERMANENCE</span>
            </div>
            <p className="text-[11px] text-secondary-themed tracking-wide font-body leading-relaxed">
              Not a brief weekly workshop. MAVNOVA sets up a permanent self-sustaining technology atmosphere and design authority within schools.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
