import { motion } from "framer-motion";
import styles from "./Hero.module.css";


export default function Hero() {
  return (
    <section className={styles.hero}>
      
      <motion.div
        className={styles.content}

        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Paulo César
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Desenvolvedor Frontend React
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Construindo aplicações modernas com foco em performance,
          organização e experiência do usuário.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* BOTÃO PRINCIPAL */}
          <motion.a
            href="#projetos"
            className={styles.primary}

            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.a>

          {/* BOTÃO SECUNDÁRIO */}
          <motion.a
            href="https://github.com/"
            target="_blank"
            className={styles.secondary}

            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </motion.div>

      </motion.div>

    </section>
  );
}