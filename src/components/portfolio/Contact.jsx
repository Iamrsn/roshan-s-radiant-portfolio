import { useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "./Section";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

// 👇 PASTE YOUR EMAILJS CREDENTIALS HERE — get them free at https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_7efnk68";
const EMAILJS_TEMPLATE_ID = "template_69n0yq8";
const EMAILJS_PUBLIC_KEY = "Z2F4bw_GvkEL1AIwv";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);

    const notConfigured =
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY";

    if (notConfigured) {
      // Fallback: open user's mail client with prefilled message
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:roshancode2004@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your mail app — paste your EmailJS keys to enable direct sending!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "roshancode2004@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Couldn't send — please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "roshancode2004@gmail.com", href: "mailto:roshancode2004@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8299101626", href: "tel:+918299101626" },
    { icon: MapPin, label: "Location", value: "Varanasi, India", href: "#" },
  ];

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary-glow mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got a project in <span className="text-gradient">mind?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm one message away. Let's talk about your idea.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <GlassCard className="lg:col-span-2 p-8 flex flex-col" hover={false}>
            <h3 className="font-display text-xl font-semibold mb-6">Reach out</h3>
            <div className="space-y-5 flex-1">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="font-medium group-hover:text-primary-glow transition">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/" },
                  { icon: Linkedin, href: "https://linkedin.com/" },
                  { icon: Mail, href: "mailto:roshancode2004@gmail.com" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-primary-glow hover:scale-110 transition"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-3 p-8" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full glass rounded-xl px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full glass rounded-xl px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full glass rounded-xl px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-7 py-3.5 rounded-xl hover:opacity-90 transition shadow-lg shadow-primary/40 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
