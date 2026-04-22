import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Code, Layout, Server, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive UIs with React + Tailwind. Smooth animations, accessible components, blazing-fast performance.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Robust REST APIs with Node, Express & MongoDB. JWT auth, role-based access, secure data flows.",
  },
  {
    icon: Code,
    title: "Full-Stack MERN Apps",
    desc: "End-to-end MERN applications — dashboards, portals, real-time apps. Deployed and production-ready.",
  },
  {
    icon: Zap,
    title: "Bug Fixes & Optimization",
    desc: "Performance audits, refactoring, fixing tricky bugs in your existing React or Node codebase.",
  },
];

const Services = () => {
  return (
    <Section id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">Freelance Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">build</span> together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Available for freelance projects worldwide. Fast turnaround, clear communication, clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow hover:gap-2.5 transition-all">
                  Get in touch <ArrowRight className="w-4 h-4" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
