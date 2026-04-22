import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Briefcase, Clock, Globe, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const offerings = [
  "Custom MERN web apps (React + Node + MongoDB)",
  "Responsive landing pages & portfolios",
  "REST API design with authentication & RBAC",
  "Bug fixes, performance audits & code reviews",
  "Frontend UI from Figma → production code",
];

const perks = [
  { icon: Clock, label: "Fast turnaround", desc: "Most small projects ship in 1–2 weeks" },
  { icon: Globe, label: "Remote worldwide", desc: "Async-friendly across all time zones" },
  { icon: MessageCircle, label: "Clear communication", desc: "Daily updates · easy to reach" },
];

const Freelance = () => {
  return (
    <Section id="freelance">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">Freelance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open for <span className="text-gradient">freelance work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have an idea, a half-built project, or a feature you need shipped? Let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: services + availability */}
          <GlassCard className="lg:col-span-3 p-8 md:p-10 relative overflow-hidden" hover={false}>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-60" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">What I can build for you</h3>
              </div>

              <ul className="space-y-3 mb-8">
                {offerings.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary-glow mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium">Currently accepting projects</p>
                  <p className="text-xs text-muted-foreground">Booking starts: this week · Avg. response: under 12 hrs</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Right: perks + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {perks.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4 h-4 text-primary-glow" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{p.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-between gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-4 rounded-2xl hover:opacity-90 transition shadow-lg shadow-primary/40 hover:shadow-primary/60"
            >
              <span>Start a project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Freelance;
