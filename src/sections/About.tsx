import portrait from "../assets/images/me.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/*
const fadeInContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
*/
const fadeInItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const smoothRightContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const smoothRightVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const smoothRightVariantsQuick = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const fadeInParagraphsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Stagger the children with 0.2 seconds delay between each
    },
  },
};

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });

  return (
    <motion.section className="w-full gradient-bg relative  pb-10" id="#about">
      <header className="w-full p-10 flex flex-row items-center" ref={ref}>
        <motion.h1
          variants={fadeInItemVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-4xl font-bold font-ralewayBold ml-0 text-center w-full lg:w-[30%] lg:text-left  lg:ml-[20%]"
        >
          {" "}
          <span className="text-[#DE7EFF]"> 01. </span> ABOUT ME
        </motion.h1>
        <motion.hr
          className="h-[2px] w-[100%] origin-right mr-20 border-0 hidden lg:block bg-white"
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        />
      </header>
      <div className="flex flex-col xl:flex-row mt-10">
        <motion.div
          variants={fadeInParagraphsContainerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"} // Trigger based on inView
          className="w-full text-center p-5 xl:pl-40 xl:text-left xl:p-0 font-ralewayBold"
          ref={ref} // Attach ref here if this is the container you want to track for inView
        >
          <motion.h1
            variants={fadeInItemVariants}
            className="text-4xl font-bold font-ralewayBold text-[#FFC701] "
          >
            {" "}
            Hi, I'm Brandon Le{" "}
          </motion.h1>
          <motion.p
            variants={fadeInItemVariants}
            className="text-[#BFBFBF] text-2xl mt-10"
          >
            {" "}
            I am a second-year Computer Science major at UCLA! Besides being a
            student, I am a Full-Stack Developer or Software Engineer, and
            running enthusiast.
          </motion.p>
          <motion.p
            variants={fadeInItemVariants}
            className="text-[#BFBFBF] text-2xl mt-5"
          >
            {" "}
            My passion for web development grew in 2022, when I landed my first
            internship at the community college I graduated from while I was in
            high school!
          </motion.p>
          <motion.p
            variants={fadeInItemVariants}
            className="text-[#BFBFBF] text-2xl mt-5"
          >
            Fast forward to today, I’ve had the privilege to work for a
            community college, two start-ups, and have led the production of my
            own web app with my group of my friends.
          </motion.p>
        </motion.div>
        <motion.div
          variants={smoothRightContainerVariants}
          initial="hidden"
          animate="show"
          className="w-full lg:mt-0 p-5 lg:text-left lg:p-0 font-ralewayBold flex items-center justify-center xl:justify-normal"
          ref={ref}
        >
          <motion.div
            variants={fadeInItemVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="ml-auto w-[500px] h-[420px] origin-right bg-[#DE7EFF] hidden lg:block right-0 absolute z-20 transition-all"
          ></motion.div>
          <motion.div
            variants={smoothRightVariantsQuick}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-[#CB51F4] w-[600px] origin-right hidden lg:block ml-auto h-[400px] relative z-10 transition-all"
          ></motion.div>
          <motion.img
            variants={fadeInItemVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            src={portrait}
            className="h-[350px]  md:mt-0  z-20 xl:ml-32 xl:absolute relative rounded transition-all"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
