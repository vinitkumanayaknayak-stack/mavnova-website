import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ContactFormData } from "../types";
import { Mail, Instagram, Linkedin, Youtube, Send, ShieldCheck, HelpCircle, Terminal, ChevronRight, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    schoolName: "",
    role: "principal",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateLogs = () => {
    const logs = [
      "INITIALIZING SECURE PROTOCOL...",
      "PACKET SERIALIZATION: COMPLETE",
      "DESTINATION: INTEGRATION_COORDINATORS",
      "STATUS: DATA_DELIVERED [200 OK]"
    ];
    setConsoleLogs([]);
    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, log]);
      }, (index + 1) * 350);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.schoolName) {
      alert("Please configure the mandated credentials: Name, Email, and School Name.");
      return;
    }

    setIsSubmitting(true);
    simulateLogs();

    // Simulate futuristic transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1800);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      schoolName: "",
      role: "principal",
      email: "",
      phone: "",
      message: "",
    });
    setSubmitSuccess(false);
    setConsoleLogs([]);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-dark-gray text-white overflow-hidden border-t border-white/[0.03]">
      {/* Glow structures */}
      <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyber-purple/5 blur-[130px] pointer-events-none z-0" />
      <div className="absolute inset-0 tech-grid-dots opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column Description and Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] text-cyber-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>PARTNERSHIP INTERFACE</span>
              </div>
              
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-wide leading-tight">
                Partner With <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyber-blue to-neon-magenta text-neon-purple">
                  MAVNOVA.
                </span>
              </h2>
              
              <p className="text-xs sm:text-sm text-white/50 tracking-wide font-body leading-relaxed max-w-[450px]">
                Inquire today to initiate MAVNOVA innovation hubs, robotics labs, competitive leagues, and mentorship suites inside your school ecosystem.
              </p>
            </div>

            {/* Visual Social Channels coordinates with glowing micro-interactions */}
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase block">DIRECT NET CHANNELS</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <a
                  href="mailto:hello@mavnova.com"
                  className="glass-panel hover:glass-panel-glow-blue rounded-xl p-4 border border-white/5 transition-all duration-300 group flex items-center gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyber-blue/30 group-hover:bg-cyber-blue/5 transition-colors">
                    <Mail className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <span className="font-mono text-[8.5px] text-white/30 block tracking-widest leading-none">EMAIL DESK</span>
                    <span className="text-[11.5px] font-semibold text-white/80 group-hover:text-cyber-blue transition-colors">hello@mavnova.com</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel hover:glass-panel-glow-purple rounded-xl p-4 border border-white/5 transition-all duration-300 group flex items-center gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyber-purple/30 group-hover:bg-cyber-purple/5 transition-colors">
                    <Instagram className="w-4 h-4 text-cyber-purple" />
                  </div>
                  <div>
                    <span className="font-mono text-[8.5px] text-white/30 block tracking-widest leading-none">INSTAGRAM</span>
                    <span className="text-[11.5px] font-semibold text-white/80 group-hover:text-cyber-purple transition-colors">@mavnova_system</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel hover:glass-panel-glow-blue rounded-xl p-4 border border-white/5 transition-all duration-300 group flex items-center gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyber-blue/30 group-hover:bg-cyber-blue/5 transition-colors">
                    <Linkedin className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <span className="font-mono text-[8.5px] text-white/30 block tracking-widest leading-none">LINKEDIN</span>
                    <span className="text-[11.5px] font-semibold text-white/80 group-hover:text-cyber-blue transition-colors">MAVNOVA Ecosystem</span>
                  </div>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel hover:glass-panel-glow-magenta rounded-xl p-4 border border-white/5 transition-all duration-300 group flex items-center gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-pink-500/30 group-hover:bg-pink-500/5 transition-colors">
                    <Youtube className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[8.5px] text-white/30 block tracking-widest leading-none">YOUTUBE DECK</span>
                    <span className="text-[11.5px] font-semibold text-white/80 group-hover:text-pink-400 transition-colors">@mavnova</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Mini Security standard note */}
            <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl max-w-sm">
              <ShieldCheck className="w-5 h-5 text-cyber-blue shrink-0 mt-0.5" />
              <p className="text-[10px] text-white/40 tracking-wide font-body leading-relaxed">
                By submitting MAVNOVA structures, your data is packaged using TLS standard encryption, routing immediately to our integration controllers. 100% cloud secure.
              </p>
            </div>
          </div>

          {/* Right Column Dark Glassmorphism Form Console */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-9 border border-white/5 relative overflow-hidden bg-black/45">
              <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
              <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-white/10 select-none">TRANSMITTER_INTERFACE_VER04</div>
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          autoComplete="off"
                          className="w-full bg-white/[0.02] border border-white/10 focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,180,252,0.15)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all font-body tracking-wide"
                          placeholder="e.g. Dr. Arthur Pendelton"
                        />
                      </div>

                      {/* School Name */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">School / Institution *</label>
                        <input
                          type="text"
                          name="schoolName"
                          required
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          autoComplete="off"
                          className="w-full bg-white/[0.02] border border-white/10 focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,180,252,0.15)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all font-body tracking-wide"
                          placeholder="e.g. Oakridge International"
                        />
                      </div>

                      {/* Role */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Your Role / Segment</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full bg-dark-gray border border-white/10 focus:border-cyber-blue rounded-lg px-4 py-3 text-xs text-white/80 outline-none transition-all font-body tracking-wide cursor-pointer"
                        >
                          <option value="principal">School Principal / Director</option>
                          <option value="department-head">Department Head</option>
                          <option value="educator">Educator / Teacher</option>
                          <option value="student">Student Representative</option>
                          <option value="other">Ecosystem Inquirer</option>
                        </select>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/[0.02] border border-white/10 focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,180,252,0.15)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all font-body tracking-wide"
                          placeholder="e.g. +1 (555) 0199"
                        />
                      </div>

                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,180,252,0.15)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all font-body tracking-wide"
                        placeholder="yourname@institution.edu"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] tracking-widest text-white/40 uppercase">Message details *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,180,252,0.15)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all font-body tracking-wide resize-none"
                        placeholder="Describe your school's structural needs, estimated cohort sizes, or technical goals..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative inline-flex items-center justify-center p-4 rounded-lg bg-cyber-blue text-xs font-black tracking-widest text-black shadow-[0_0_20px_rgba(0,180,252,0.15)] hover:shadow-[0_0_30px_rgba(0,180,252,0.35)] hover:bg-cyber-blue/90 font-mono transition-all duration-300 transform active:scale-[0.99] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>TRANSMITTING BIND DATA...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>SUBMIT PARTNERSHIP APPLICATION</span> <Send className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-8 relative z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,180,252,0.15)]">
                      <Check className="w-8 h-8 text-cyber-blue animate-bounce" />
                    </div>

                    <div className="space-y-3 max-w-md mx-auto">
                      <h4 className="font-display font-black text-xl sm:text-2.5xl tracking-widest uppercase text-white leading-tight">
                        TRANSMISSION SUCCEEDED.
                      </h4>
                      <p className="text-[11px] text-white/50 font-body leading-relaxed">
                        Data buffers fully resolved at our center. The MAVNOVA education coordination desk will review your submission and connect with you within 24 standard business hours.
                      </p>
                    </div>

                    {/* Hologram Simulated Console Log feedback */}
                    <div className="bg-black/80 border border-white/5 rounded-lg p-4 font-mono text-[9px] text-emerald-400 text-left space-y-1.5 max-w-sm mx-auto">
                      <div className="flex justify-between text-white/40 mb-1 border-b border-white/5 pb-1">
                        <span>TRANSMIT_CON COORD</span>
                        <span>STATUS: OK</span>
                      </div>
                      {consoleLogs.map((log, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <ChevronRight className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white/40 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] px-4 py-2 rounded-lg transition-all"
                    >
                      SEND SEPARATE APPLICATION
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
