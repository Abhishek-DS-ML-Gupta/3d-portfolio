import { skills } from "@/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
} as const;

const container = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    }
  }
};

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 flex flex-col gap-10" id="skills">
      <motion.h3 
        className="subhead-text"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h3>

      <motion.article 
        className="flex flex-wrap gap-10 justify-center"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        {skills.map((skill) => (
          <motion.div 
            className="block-container w-20 h-20"
            key={skill.name}
            variants={skillItem}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="btn-back rounded-xl"
              initial={{ opacity: 0.6, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 3,
                delay: Math.random() * 2
              }}
            />
            <motion.div 
              className="btn-front rounded-xl flex justify-center items-center"
              whileHover={{
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.8 }
              }}
            >
              <motion.img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.article>
    </section>
  );
};