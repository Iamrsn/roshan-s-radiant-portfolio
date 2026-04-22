import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Restaurant App — Backend",
    description:
      "Scalable restaurant management backend handling menus, orders, and role-based user access with secure JWT auth and bcrypt encryption.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    live: "#",
    github: "https://github.com/",
    accent: "from-primary/30 to-accent/30",
  },
  {
    title: "Real-Time Tracker",
    description:
      "Live location tracking app with WebSocket communication and dynamic map visualization using Leaflet and custom markers.",
    tech: ["Express", "Socket.io", "Leaflet", "JavaScript"],
    live: "#",
    github: "https://github.com/",
    accent: "from-secondary/30 to-primary/30",
  },
  {
    title: "Job Portal",
    description:
      "Full-featured MERN job portal with role-based access for recruiters & candidates, job posting, application tracking and JWT auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "#",
    github: "https://github.com/",
    accent: "from-accent/30 to-secondary/30",
  },
  {
    title: "Attendance Management",
    description:
      "Built at Banaras Locomotive Works — MERN system with React UI, seamless API integration and Postman-tested backend endpoints.",
    tech: ["React", "Node.js", "MongoDB", "Postman"],
    live: "#",
    github: "https://github.com/",
    accent: "from-primary/30 to-secondary/30",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full p-7 group relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />

                <div className="relative">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs glass px-3 py-1 rounded-full text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
