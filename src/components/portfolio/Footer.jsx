import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg">
              <span className="text-gradient">Roshan</span>
              <span className="text-foreground">.dev</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Roshan Kumar Sharma · Made with{" "}
              <Heart className="w-3 h-3 inline text-primary-glow fill-primary-glow" /> in Varanasi
            </p>
          </div>

          <div className="flex items-center gap-3">
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
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-primary-glow hover:scale-110 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
