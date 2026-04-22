import { motion } from "framer-motion";

const Section = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`section-padding relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
