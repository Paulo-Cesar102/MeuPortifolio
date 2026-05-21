import { motion } from "framer-motion";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobreSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={`${styles.imageWrapper} glass`}>
            <div className={styles.avatarBox}>
              <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "var(--neon-cyan)", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "var(--neon-magenta)", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                {/* Cyberpunk Avatar Shape */}
                <path d="M100 20 L160 50 L160 150 L100 180 L40 150 L40 50 Z" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                <path d="M100 30 L150 55 L150 145 L100 170 L50 145 L50 55 Z" fill="none" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
                
                {/* Tech details */}
                <rect x="70" y="70" width="60" height="4" fill="var(--neon-cyan)" />
                <rect x="70" y="80" width="40" height="4" fill="var(--neon-magenta)" />
                <circle cx="100" cy="120" r="10" stroke="var(--neon-cyan)" fill="none" />
                <path d="M90 120 L110 120" stroke="var(--neon-magenta)" strokeWidth="2" />
                
                {/* Scanning line effect */}
                <motion.rect 
                  x="40" y="20" width="120" height="2" fill="var(--neon-cyan)" opacity="0.5"
                  animate={{ y: [20, 180, 20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
            
            <motion.div 
              className={styles.experienceBadge}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <strong>2+</strong>
              <span>Anos de Código</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.textSide}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>// EXECUTE SYSTEM_INFO</span>
          <h2 className={styles.title}>Arquiteto de <span className={styles.highlight}>Sistemas de Elite</span> com Foco em Backend.</h2>
          
          <div className={styles.content}>
            <p>
              Sou o <strong>Paulo César</strong>, um desenvolvedor movido pela precisão técnica e pela infraestrutura invisível que faz a web funcionar. Embora domine o ecossistema Fullstack, meu verdadeiro habitat é o <strong>Backend</strong>, onde projeto arquiteturas robustas, seguras e de alta escalabilidade.
            </p>
            <p className={styles.personalPhrase}>
              "Sou aquele tipo de desenvolvedor que acorda cedo com uma ideia na cabeça e não sossega até ver ela rodando perfeitamente. Minha jornada na programação é guiada pela curiosidade e pela vontade de resolver problemas reais."
            </p>
            <p>
              Domino tecnologias como <strong>Node.js, PostgreSQL e Firebase</strong>, aplicando padrões de Clean Architecture para garantir que cada linha de código seja eficiente e resiliente. Minha missão é transformar problemas complexos em soluções sólidas e performáticas.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3 className="neon-text-cyan">20+</h3>
              <p>Deployments</p>
            </div>
            <div className={styles.statLine}></div>
            <div className={styles.statItem}>
              <h3 className="neon-text-magenta">100%</h3>
              <p>Uptime de Foco</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}