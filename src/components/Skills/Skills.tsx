import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { Terminal, Shield, Zap, Database, Monitor, Code } from "lucide-react";

const skillsData = [
  {
    title: "Fullstack Core",
    icon: <Code size={30} />,
    items: ["TypeScript", "Node.js", "React", "Next.js", "Vite"]
  },
  {
    title: "Segurança de Elite",
    icon: <Shield size={30} />,
    items: ["JWT / Auth", "Bcrypt / Argon2", "CORS / CSRF", "Zod Validation"]
  },
  {
    title: "Sistemas em Real-Time",
    icon: <Zap size={30} />,
    items: ["Socket.io", "Push Notifications", "Mercado Pago", "Webhooks"]
  },
  {
    title: "Engenharia de Dados",
    icon: <Database size={30} />,
    items: ["PostgreSQL", "Firebase", "Prisma ORM", "Supabase"]
  },
  {
    title: "UI/UX Imersiva",
    icon: <Monitor size={30} />,
    items: ["Framer Motion", "Tailwind CSS", "Responsive Design", "Cyber Aesthetic"]
  },
  {
    title: "Qualidade & Ops",
    icon: <Terminal size={30} />,
    items: ["Jest / TDD", "Clean Architecture", "CI/CD", "Git Workflow"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.header}>
        <motion.span 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          // HABILIDADES_TECNICAS
        </motion.span>
        <motion.h2 
          className="section-title"
          data-text="TECNOLOGIAS DE PONTA"
          style={{ marginBottom: '20px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tecnologias de Ponta
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ translateY: -8, borderColor: 'var(--neon-cyan)', boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }}
          >
            <div className={styles.iconBox}>
              {skill.icon}
            </div>
            <h3>{skill.title}</h3>
            <div className={styles.tags}>
              {skill.items.map((item, idx) => (
                <span key={idx} className={styles.tag}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}