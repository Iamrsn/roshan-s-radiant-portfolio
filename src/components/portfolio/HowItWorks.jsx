import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { ClipboardList, Map, Rocket, RefreshCw, Clock } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    label: "Brief",
    desc: "Share your idea, goals, and references. I ask the right questions.",
    time: "Day 1",
  },
  {
    icon: Map,
    label: "Plan",
    desc: "Scope, timeline, milestones, and a fixed quote — no surprises.",
    time: "Day 2–3",
  },
  {
    icon: Rocket,
    label: "Delivery",
    desc: "I build in focused sprints with daily updates and previews.",
    time: "Week 1–2",
  },
  {
    icon: RefreshCw,
    label: "Review",
    desc: "Two rounds of revisions, then deploy and hand off the keys.",
    time: "Final week",
  },
];

const HowItWorks = () => {
  const handleStart = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("prefill-contact", { detail: { service: "web-app", focus: true } })
    );
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#contact");
  };

  return (
    <Section id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From idea to <span className="text-gradient">launch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step process. Most projects ship in <span className="text-foreground font-medium">2–3 weeks</span> end-to-end.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary-glow">
                  <Clock className="w-3 h-3" />
                  <span>{s.time}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Got a tighter deadline? I take on rush jobs too — just mention it in the brief.
          </p>
          <a
            href="#contact"
            onClick={handleStart}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl text-sm font-medium hover:text-primary-glow transition"
          >
            Send me a brief →
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default HowItWorks;
