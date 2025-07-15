import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "@/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section className="py-12 flex flex-col gap-10" id="experience">
      <motion.article 
        className="flex flex-col gap-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h3 className="subhead-text">Work Experience</h3>
        <p className="text-slate-500">
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </motion.article>

      <motion.article 
        className="flex"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company_name}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <VerticalTimelineElement
                date={exp.date}
                iconStyle={{ 
                  background: exp.iconBg,
                  boxShadow: `0 0 0 4px ${exp.iconBg}33`,
                }}
                icon={
                  <motion.div 
                    className="flex justify-center items-center w-full h-full"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-7/12 h-7/12 object-contain"
                    />
                  </motion.div>
                }
                contentStyle={{
                  borderBottom: `8px solid ${exp.iconBg}`,
                  boxShadow: "none",
                  borderRadius: "12px",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${exp.iconBg}`,
                }}
                visible={hasAnimated}
              >
                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <h4 className="text-black text-xl font-poppins font-semibold">
                    {exp.title}
                  </h4>
                  <p className="text-black-500 font-medium text-base m-0">
                    {exp.company_name}
                  </p>
                </motion.article>

                <motion.ul 
                  className="my-5 list-disc ml-5 space-y-2"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2 * index + 0.3,
                      },
                    },
                  }}
                >
                  {exp.points.map((point, pointIndex) => (
                    <motion.li
                      key={`${exp.company_name}-point-${pointIndex}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                          },
                        },
                      }}
                      whileHover={{ 
                        x: 5,
                        color: exp.iconBg,
                      }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </VerticalTimeline>
      </motion.article>
    </section>
  );
};