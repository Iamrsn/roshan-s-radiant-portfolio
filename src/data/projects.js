// ╔══════════════════════════════════════════════════════════════════╗
// ║  📦  PROJECTS DATA — EDIT THIS FILE TO MANAGE YOUR PROJECTS      ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║                                                                  ║
// ║  How to use:                                                     ║
// ║  • Add a new project: copy a block, change the values, save.     ║
// ║  • Remove a project: delete its block.                           ║
// ║  • Reorder: drag the blocks up or down.                          ║
// ║                                                                  ║
// ║  Available accent gradients (cycle freely):                      ║
// ║    "primary-accent" · "secondary-primary" ·                      ║
// ║    "accent-secondary" · "primary-secondary"                      ║
// ║                                                                  ║
// ╚══════════════════════════════════════════════════════════════════╝

const projects = [
  {
    title: "Restaurant App — Backend",
    description:
      "Scalable restaurant management backend handling menus, orders, and role-based user access with secure JWT auth and bcrypt encryption.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    live: "",                       // Live demo URL (leave "" to hide)
    github: "https://github.com/",  // GitHub repo URL (leave "" to hide)
    accent: "primary-accent",
  },
  {
    title: "Real-Time Tracker",
    description:
      "Live location tracking app with WebSocket communication and dynamic map visualization using Leaflet and custom markers.",
    tech: ["Express", "Socket.io", "Leaflet", "JavaScript"],
    live: "",
    github: "https://github.com/",
    accent: "secondary-primary",
  },
  {
    title: "Job Portal",
    description:
      "Full-featured MERN job portal with role-based access for recruiters & candidates, job posting, application tracking and JWT auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "",
    github: "https://github.com/",
    accent: "accent-secondary",
  },
  {
    title: "Attendance Management",
    description:
      "Built at Banaras Locomotive Works — MERN system with React UI, seamless API integration and Postman-tested backend endpoints.",
    tech: ["React", "Node.js", "MongoDB", "Postman"],
    live: "",
    github: "https://github.com/",
    accent: "primary-secondary",
  },
];

export default projects;
