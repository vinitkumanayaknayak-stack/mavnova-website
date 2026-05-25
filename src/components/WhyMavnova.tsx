import { motion } from "motion/react";
import { WhyMavnovaItem } from "../types";
import { Eye, ShieldAlert, BadgeCheck, Lightbulb, Users, Compass, Megaphone, Milestone } from "lucide-react";

export default function WhyMavnova() {
  const pillars: WhyMavnovaItem[] = [
    {
      id: "practical-exposure",
      title: "Real-World Learning",
      description:
        "We push student capability outside textbook lines. By deploying hands-on projects, hardware testing, and technical trials, students bridge high-level concept with tactile reality.",
      iconName: "compass",
    },
    {
      id: "innovation-culture",
      title: "Innovation-Driven Culture",
      description:
        "Configuring custom student creative zones that encourage rapid prototyping, analytical risk-taking, and active research. We turn classrooms into incubators for student capability.",
      iconName: "lightbulb",
    },
    {
      id: "confidence-leadership",
      title: "Confidence & Elite Leadership",
      description:
        "Through demanding competitive events and project management, students gain extreme confidence, mastering communication, resource management, and precise pressure execution.",
      iconName: "badgecheck",
    },
    {
      id: "prestige-visibility",
      title: "Prestige & Branding",
      description:
        "Transforming schools into premier local hubs of forward-thinking technology. Highly publicized inter-school competitive wins and showcase events offer massive system visibility.",
      iconName: "megaphone",
    },
    {
      id: "competitive-arenas",
      title: "Elite Competitions",
      description:
        "Integrating inter-school leagues and technical showdowns that challenge coding stamina, robotics control loop integrity, and strategic collaboration under real-time conditions.",
      iconName: "milestone",
    },
    {
      id: "mentorship-networks",
      title: "Direct Industry Mentorship",
      description:
        "Providing active connection points with veteran engineers and technological guides. Students are guided by creators who navigate the forefront of modern engineering environments.",
      iconName: "users",
    },
  ];

  const renderIcon = (name: string) => {
    const cls = "w-6 h-6 text-cyber-blue group-hover:text-neon-cyan transition-colors duration-400";
    switch (name) {
      case "compass": return <Compass className={cls} />;
      case "lightbulb": return <Lightbulb className={cls} />;
      case "badgecheck": return <BadgeCheck className={cls} />;
      case "megaphone": return <Megaphone className={cls} />;
      case "milestone": return <Milestone className={cls} />;
      case "users": return <Users className={cls} />;
      default: return <Lightbulb className={cls} />;
    }
  };

  return (
    <section id="why-mavnova" className="relative w-full py-24 md:py-32 bg-primary-themed text-primary-themed overflow-hidden border-t border-themed-main transition-colors duration-700">
      {/* Background glow structures */}
      <div className="absolute top-[10%] left-[-15%] w-[40vw] h-[40vw] bg-cyber-purple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[35vw] h-[35vw] bg-cyber-blue/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 tech-grid-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header grid section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column Vision Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-themed-main border border-themed-sub font-mono text-[9px] tracking-widest text-cyber-purple">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>VISIONARY SCOPE MANIFESTO</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-wide uppercase leading-[0.95] text-primary-themed">
              Redefining <br />
              Student <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-cyber-blue to-cyber-purple text-neon-blue">
                Evolution.
              </span>
            </h2>

            <p className="text-sm tracking-wide text-secondary-themed font-body leading-relaxed">
              MAVNOVA configures end-to-end innovation systems directly inside school ecosystems. We align physical robotics, competitive engineering, peer interaction structures, and technological guidance to prepare students for challenges awaiting them outside high school doors.
            </p>

            {/* Futuristic Tech Console Box */}
            <div className="glass-panel rounded-xl p-5 border border-themed-sub space-y-3 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent hologram-line" />
              <div className="flex items-center justify-between border-b border-themed-sub pb-2 font-mono text-[9px] text-muted-themed">
                <span>SYSTEM PARAMETERS: HIGH</span>
                <span>MAV_INTEG_v4.2</span>
              </div>
              <div className="space-y-2 text-xs font-mono text-secondary-themed">
                <div className="flex justify-between items-center bg-themed-main px-2.5 py-1.5 rounded-md border border-themed-sub">
                  <span>Practical Integration</span>
                  <span className="text-cyber-blue font-bold">100% EXPERIENTIAL</span>
                </div>
                <div className="flex justify-between items-center bg-themed-main px-2.5 py-1.5 rounded-md border border-themed-sub">
                  <span>School Standing</span>
                  <span className="text-cyber-purple font-bold">REGIONAL REPUTATION LEAP</span>
                </div>
                <div className="flex justify-between items-center bg-themed-main px-2.5 py-1.5 rounded-md border border-themed-sub">
                  <span>Target Competencies</span>
                  <span className="text-pink-400 font-bold">ROBOTICS • LEADERSHIP • IoT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Core Feature Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel hover:glass-panel-glow-blue rounded-xl p-6 border border-themed-sub transition-all duration-400 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-themed-main border border-themed-sub flex items-center justify-center mb-5 group-hover:border-cyber-blue/30 group-hover:bg-cyber-blue/5 transition-all duration-400">
                    {renderIcon(pillar.iconName)}
                  </div>
                  <h3 className="font-display font-black text-sm sm:text-base tracking-wider text-primary-themed uppercase mb-2.5 group-hover:text-cyber-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-secondary-themed tracking-wide font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-themed-sub flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[8.5px] tracking-widest text-muted-themed group-hover:text-cyber-blue/60 uppercase">
                    Pillar_0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-themed-sub group-hover:bg-cyber-blue animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
