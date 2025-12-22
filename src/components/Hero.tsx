import { profilePic } from "../constants/img";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      {/* CONTENEDOR FLEX */}
      <div className="flex flex-col lg:flex-row-reverse items-center">
        {/* IMAGEN */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-5">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={profilePic || ""}
            alt="profile"
            className="w-72 h-72 lg:w-[650px] lg:h-[650px] border border-stone-900 rounded-3xl"
          />
        </div>

        {/* TEXTO */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 px-4"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl lg:text-8xl tracking-tighter"
            >
              Ewirlin Smith
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-6 py-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
