import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 92 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "Node.js & Express", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "REST APIs & JWT", level: 88 },
  { name: "Git & GitHub", level: 90 },
];

const tools = [
  "JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind",
  "HTML5", "CSS3", "JWT", "bcrypt", "Socket.io", "Postman", "Jira", "Git", "VS Code", "SQL",
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GlassCard className="p-8" hover={false}>
            <h3 className="font-display text-xl font-semibold mb-6">Core Proficiency</h3>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8" hover={false}>
            <h3 className="font-display text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="glass px-4 py-2 rounded-full text-sm font-medium hover:text-primary-glow transition cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-display font-semibold mb-3">Concepts</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Object-Oriented Programming · Data Structures & Algorithms ·
                RESTful API Design · Authentication (JWT/bcrypt) · Real-time
                (Socket.io) · Agile / Jira workflows
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
