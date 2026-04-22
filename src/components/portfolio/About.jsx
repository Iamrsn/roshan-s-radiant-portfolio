import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Internships", value: "2+" },
  { icon: Code2, label: "Projects Built", value: "10+" },
  { icon: GraduationCap, label: "B.Tech CSE", value: "7.8 CGPA" },
  { icon: Award, label: "MERN Cert.", value: "30 Days" },
];

const About = () => {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Building <span className="text-gradient">digital experiences</span> that matter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <GlassCard className="lg:col-span-3 p-8 md:p-10" hover={false}>
            <h3 className="font-display text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a MERN Stack Developer based in Varanasi, India, currently completing my
              B.Tech in Computer Science from Kashi Institute of Technology. I love building
              scalable, high-performance web applications using <span className="text-foreground font-medium">React, Node.js, Express, and MongoDB</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recently I interned at <span className="text-foreground">Elgoss Private Limited</span> as a
              Software Developer, where I shipped responsive UIs and robust REST APIs in an Agile
              environment. Earlier, at <span className="text-foreground">Banaras Locomotive Works</span>,
              I built an end-to-end Attendance Management System on the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about clean code, thoughtful UX, and shipping things that real
              people actually enjoy using. Currently open to <span className="text-gradient font-semibold">freelance work</span> & full-time roles.
            </p>
          </GlassCard>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col items-center justify-center text-center">
                  <s.icon className="w-7 h-7 text-primary-glow mb-3" />
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
