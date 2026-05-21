import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./Projetos.module.css";
import { Play, X, Cpu, Zap, BarChart3, ShieldCheck } from "lucide-react";
import gymClubImg from "../../assets/Captura_de_tela_2026-05-21_103334-removebg-preview.png";
import dashboardImg from "../../assets/Captura de tela 2026-05-21 104816.png";

// Ícone do GitHub manual
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Projeto {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: Feature[];
  tech: string[];
  image?: string;
  images?: {
    dashboard: string;
    mobile: string;
  };
  isMultiScreen?: boolean;
  videoUrl?: string;
  isComingSoon?: boolean;
}

const projetos: Projeto[] = [
  {
    title: "GymClub",
    category: "Líder Técnico & Full-Stack",
    description: "Ecossistema robusto de alta performance que conecta alunos, personais e academias através de IA e gamificação em tempo real.",
    longDescription: "O FitnApp nasceu com a ambição de transformar a forma como as pessoas treinam. Muito além de um simples app, é um ecossistema construído do zero para resolver problemas complexos com o máximo de capricho e segurança.",
    features: [
      { icon: <Cpu size={18} />, text: "Smart Coach AI: Integração com Google Gemini para rotinas personalizadas." },
      { icon: <Zap size={18} />, text: "Real-time Hub: Gamificação e chat via WebSockets (Socket.io)." },
      { icon: <ShieldCheck size={18} />, text: "Fintech Integrada: Checkout transparente com Mercado Pago API." },
      { icon: <BarChart3 size={18} />, text: "Data Viz: Gráficos de evolução física com Recharts." }
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Firebase", "Prisma"],
    images: {
      dashboard: dashboardImg,
      mobile: gymClubImg
    },
    isMultiScreen: true,
    videoUrl: "#"
  },
  {
    title: "E-comerce (Em Planejamento)",
    category: "Fullstack E-commerce & Fintech",
    description: "Plataforma de vendas escalável com Dashboard B2B completo, chat em tempo real e sistema antifraude.",
    longDescription: "Um sistema de e-commerce de alta performance projetado para suportar grandes volumes de tráfego e transações seguras. Focado na experiência do vendedor (Dashboard administrativo rico) e do comprador (navegação fluida e segura).",
    features: [
      { icon: <ShieldCheck size={18} />, text: "Segurança: JWT, Refresh Token, Rate Limiting e Bcrypt." },
      { icon: <Zap size={18} />, text: "Real-time: Chat vendedor/cliente via Socket.io e notificações." },
      { icon: <Cpu size={18} />, text: "Estoque Inteligente: Proteção contra Race Conditions em compras simultâneas." },
      { icon: <BarChart3 size={18} />, text: "B2B Dashboard: Gráficos financeiros, gestão de produtos e pedidos." }
    ],
    tech: ["TypeScript", "PostgreSQL", "Prisma", "Express", "Jest", "Mercado Pago"],
    image: "",
    isComingSoon: true
  },
  {
    title: "Banco API (Em Planejamento)",
    category: "Backend & Fintech Architecture",
    description: "API básica de sistema bancário.",
    longDescription: "Uma API robusta focada no setor financeiro, implementando os mais altos padrões de segurança e integridade de dados para gestão de contas e transações.",
    features: [
      { icon: <ShieldCheck size={18} />, text: "Segurança Bancária: Autenticação 2FA, Refresh Tokens e Criptografia Argon2." },
      { icon: <Zap size={18} />, text: "Transações: Sistema de transferências com proteção contra ataques de força bruta." },
      { icon: <Cpu size={18} />, text: "Arquitetura: Clean Architecture com isolamento total da lógica de negócio." },
      { icon: <BarChart3 size={18} />, text: "Audit Log: Registro completo de todas as operações para conformidade financeira." }
    ],
    tech: ["Node.js", "Express", "Argon2", "PostgreSQL", "Prisma", "Jest"],
    image: "",
    isComingSoon: true
  }
];

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);

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
            <div className={styles.imageBox} style={projeto.isComingSoon ? { background: '#000' } : {}}>
              {projeto.isComingSoon && (
                <div className={styles.comingSoonBadge}>
                  <span className="mono">EM BREVE</span>
                </div>
              )}
              {projeto.isMultiScreen && projeto.images ? (
                <div className={styles.multiImages}>
                  <img src={projeto.images.dashboard} alt="Dashboard" className={styles.dashboardImage} />
                  <img src={projeto.images.mobile} alt="Mobile App" className={styles.mobileImage} />
                </div>
              ) : (
                !projeto.isComingSoon && <img src={projeto.image} alt={projeto.title} className={styles.image} />
              )}
              
              <div className={styles.overlay}>
                <div className={styles.links}>
                   <button className={styles.iconBtn} onClick={() => setSelectedProject(projeto)}>
                     <Play size={24} />
                   </button>
                   <a href="#" className={styles.iconBtn}><GithubIcon size={24} /></a>
                </div>
              </div>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.category}>{projeto.category}</span>
              <h3>{projeto.title}</h3>
              <p>{projeto.description}</p>
              
              {projeto.features && (
                <div className={styles.miniFeatures}>
                  {projeto.features.map((f, i) => (
                    <div key={i} className={styles.featureItem}>
                      {f.icon}
                      <span>{f.text.split(':')[0]}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.techList}>
                {projeto.tech.map((t, idx) => (
                  <span key={idx} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={`${styles.modalContent} glass`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className={styles.modalGrid}>
                <div className={styles.videoArea}>
                  <div className={styles.videoPlaceholder}>
                    <Play size={48} className={styles.playIcon} />
                    <p className="mono">AGUARDANDO UPLOAD DO VÍDEO...</p>
                  </div>
                </div>

                <div className={styles.detailsArea}>
                  <span className="neon-text-cyan mono">// DETALHES_DO_PROJETO</span>
                  <h2>{selectedProject.title}</h2>
                  <p className={styles.longDesc}>{selectedProject.longDescription}</p>
                  
                  <div className={styles.fullFeatures}>
                    {selectedProject.features?.map((f, i) => (
                      <div key={i} className={styles.fullFeatureItem}>
                        <div className={styles.featureIcon}>{f.icon}</div>
                        <p>{f.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className={styles.modalFooter}>
                    <a href="#" className={styles.primaryBtn}>
                      Ver Repositório <GithubIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
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