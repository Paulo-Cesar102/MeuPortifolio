import { motion } from "framer-motion";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section id="contato" className={styles.contatoSection}>
      <motion.div 
        className={`${styles.container} glass`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.content}>
          <span className={styles.subtitle}>//Entrar_Em_Contato</span>
          <h2 className={styles.title}>Pronto para o <span className={styles.highlight}>Próximo Nível?</span></h2>
          <p className={styles.description}>
            Seja para um projeto complexo ou apenas para discutir o futuro do desenvolvimento fullstack, 
            estou pronto para codificar sua visão.
          </p>
          
          <motion.a 
            href="mailto:pc00555c@gmail.com" 
            className={styles.mainButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Protocolo de E-mail
          </motion.a>

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/paulo-c%C3%A9sar-8a6465174/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
               LinkedIn
            </a>
            <div className={styles.dot}></div>
            <a href="https://github.com/Paulo-Cesar102" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
               GitHub
            </a>
          </div>
        </div>
      </motion.div>
      
      <footer className={styles.footer}>
         <p className="mono">// 2026 PAULO CÉSAR. TODOS OS DIREITOS RESERVADOS.</p>
         <p className="mono">SISTEMA OPERACIONAL: VITE + REACT + TYPESCRIPT</p>
      </footer>
    </section>
  );
}