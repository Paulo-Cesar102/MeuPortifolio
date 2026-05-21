import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundEffects}>
        <div className={styles.glow} />
        <div className={styles.lines} />
      </div>

      <div className={styles.hero}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className={styles.pulse}></div>
            <Terminal size={14} className={styles.neonIcon} />
            <span className="mono">System_Status: <span className="neon-text-green">Operacional</span></span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Fullstack <br />
            <span className={styles.gradientText}>Architect</span>
          </motion.h1>

          <motion.div 
            className={styles.subtextContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className={styles.subtitle}>
              Construindo o <span className={styles.white}>Amanhã</span> com Precisão de <span className={styles.cyan}>Byte</span>.
            </h2>
            <p className={styles.description}>
              Engenheiro Fullstack especializado em arquitetura de alta escala, 
              segurança defensiva e interfaces que desafiam a realidade.
            </p>
          </motion.div>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projetos"
              className={styles.primary}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px var(--neon-cyan)" }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar Projetos
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#contato"
              className={styles.secondary}
              whileHover={{ scale: 1.02, background: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              Contato Direto
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.visualSide}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className={styles.techOrb}>
             <div className={styles.innerRing}></div>
             <div className={styles.outerRing}></div>
             <Cpu size={80} className={styles.centerIcon} />
             <div className={styles.orbitingIcons}>
                <Globe size={24} className={styles.icon1} />
                <Terminal size={24} className={styles.icon2} />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}