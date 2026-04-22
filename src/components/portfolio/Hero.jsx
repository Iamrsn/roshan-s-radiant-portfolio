import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6">
      {/* Animated gradient blobs */}
      <motion.div
        style={{ x: mouse.x, y: mouse.y }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-float"
      />
      <motion.div
        style={{ x: -mouse.x, y: -mouse.y }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent/30 blur-[120px] animate-float"
      />
      <motion.div
        style={{ x: mouse.x * 0.5, y: -mouse.y * 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-glow" />
          <span className="text-sm text-muted-foreground">Available for freelance projects</span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-gradient">Roshan</span>
          <br />
          <span className="text-foreground">Kumar Sharma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-display"
        >
          Frontend Developer · <span className="text-gradient font-semibold">MERN Stack</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
        >
          I craft scalable, high-performance web experiences with React, Node.js & MongoDB —
          turning complex ideas into clean, user-centric products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass-strong text-foreground font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:roshankr9894@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 glass rounded-full flex items-center justify-center hover:text-primary-glow hover:scale-110 transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
