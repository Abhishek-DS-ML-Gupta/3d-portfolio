import { Link } from "react-router-dom";
import { socialLinks } from "@/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      } as const,
    },
  };

  const hoverEffect = {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 } as const,
  };

  const tapEffect = { scale: 0.95 };

  return (
    <footer 
      className="footer font-poppins bg-slate-50 dark:bg-slate-900 py-8"
      ref={ref}
    >
      <motion.div
        className="border-t border-slate-200 dark:border-slate-700 mx-auto max-w-7xl px-4"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.div
        className="footer-container max-w-7xl mx-auto px-4 mt-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          className="text-slate-600 dark:text-slate-400 text-sm md:text-base text-center"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} <strong className="text-slate-800 dark:text-slate-200">Abhishek Developer</strong>. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center items-center mt-4"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <Link to={link.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain transition-colors duration-300 hover:opacity-80 dark:invert dark:hover:invert-0"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400"
          variants={itemVariants}
        >
          <Link
            to="/privacy"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};