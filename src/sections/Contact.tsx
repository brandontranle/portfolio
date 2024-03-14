import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });

  const fadeInParagraphsContainerVariants = {
    hidden: { opacity: 0 },
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
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={fadeInParagraphsContainerVariants}
      animate={inView ? "show" : "hidden"}
      className="w-full relative  p-10 pt-0 md:px-40 md:mt-0 md:pb-0 mb-20 font-ralewayBold"
      security="true"
    >
      <header className="w-full p-10 flex flex-row items-center">
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-left h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
        />
        <h1 className="text-4xl font-bold font-ralewayBold  text-center w-full  ">
          {" "}
          <span className="text-[#DE7EFF]"> 04. </span> CONTACT
        </h1>
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-right h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
        />
      </header>
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-[#DE7EFF] text-2xl text-center">
          You saw exactly what you need... where shall we begin?{" "}
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 items-center w-full">
          <div className="bg-[#433e6c] h-[150px] w-full flex-col flex items-center justify-center rounded-lg py-5 lg:px-20 lg:w-[400px]">
            <span className="text-center text-2xl  w-full text-[#FFC701]">
              Academic Email{" "}
            </span>
            <span className="text-center lg:text-2xl text-xl text-white">
              brandonle@ucla.edu{" "}
            </span>
          </div>
          <div className="bg-[#433e6c] h-[150px] w-full flex-col flex items-center justify-center rounded-lg py-5 lg:px-20 lg:w-[400px]">
            <span className="text-center text-2xl text-[#FFC701]">
              Personal Email{" "}
            </span>
            <span className="text-center  text-xl lg:text-2xl text-white">
              brandonle831@gmail.com{" "}
            </span>
          </div>
        </div>
      </div>
      <></>
    </motion.section>
  );
};

export default Contact;
