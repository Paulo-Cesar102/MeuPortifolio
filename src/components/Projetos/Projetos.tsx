import { motion } from "framer-motion";
import styles from "./Projetos.module.css";
import { ExternalLink } from "lucide-react";

// Ícone do GitHub manual (visto que lucide-react v1.0+ removeu logos de marcas)
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projetos = [
  {
    title: "EcoSystem API v2",
    category: "Backend Architecture",
    description: "API de alta performance com arquitetura baseada em microsserviços, integração Mercado Pago e sistema de logística em tempo real.",
    tech: ["Node.js", "TypeScript", "Prisma", "Redis"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nova Bank Dashboard",
    category: "Fintech Interface",
    description: "Interface bancária premium com gráficos financeiros avançados, animações fluidas e segurança JWT de última geração.",
    tech: ["React", "Framer Motion", "Socket.io", "Zod"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Guardian Auth",
    category: "Security Tool",
    description: "Sistema de autenticação robusto com suporte a 2FA, estratégias de Refresh Token e proteção contra ataques de força bruta.",
    tech: ["Node.js", "Express", "Argon2", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projetos() {
  return (
    <section id="projetos" className={styles.projetosSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>// PORTFOLIO_PROJECTS</span>
        <h2 className="section-title" data-text="PROJETOS EM DESTAQUE">Projetos em Destaque</h2>
      </div>

      <div className={styles.grid}>
        {projetos.map((projeto, index) => (
          <motion.div 
            key={index}
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.imageBox}>
              <img src={projeto.image} alt={projeto.title} className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.links}>
                   <a href="#" className={styles.iconBtn}><ExternalLink size={24} /></a>
                   <a href="#" className={styles.iconBtn}><GithubIcon size={24} /></a>
                </div>
              </div>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.category}>{projeto.category}</span>
              <h3>{projeto.title}</h3>
              <p>{projeto.description}</p>
              
              <div className={styles.techList}>
                {projeto.tech.map((t, idx) => (
                  <span key={idx} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className={styles.viewMore}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <a href="https://github.com/Paulo-Cesar102" target="_blank" className={styles.githubBtn}>
          Ver todos os arquivos no terminal
        </a>
      </motion.div>
    </section>
  );
}