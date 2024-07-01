import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen mx-auto">
        <div
          className={` ${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi I'm <span className="text-[#915eff]">Abdullah</span>
            </h1>
            <p className={`${styles.heroSubText} mt-10 text-white-100`}>
              I develop and maintain web applications{" "}
              <br className="sm:block hidden" />
              using Wordpress, React.js and other related technologies.
            </p>
          </div>
        </div>

        {/* <ComputersCanvas /> */}

        <div className="absolute top-[420px] w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
