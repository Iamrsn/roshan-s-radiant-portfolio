import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projects from "@/data/projects";

const accentMap = {
  "primary-accent": "from-primary/30 to-accent/30",
  "secondary-primary": "from-secondary/30 to-primary/30",
  "accent-secondary": "from-accent/30 to-secondary/30",
  "primary-secondary": "from-primary/30 to-secondary/30",
};

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
          {projects.map((p, i) => {
            const accentClass = accentMap[p.accent] || accentMap["primary-accent"];
            const hasLinks = p.live || p.github;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <GlassCard className="h-full p-7 group relative overflow-hidden">
                  <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${accentClass} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />

                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs glass px-3 py-1 rounded-full text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    {hasLinks && (
                      <div className="flex items-center gap-4 pt-2 border-t border-border">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary-glow transition"
                          >
                            <ExternalLink className="w-4 h-4" /> Live
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary-glow transition"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
