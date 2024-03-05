import { motion } from "framer-motion";
//import { useInView } from "react-intersection-observer";
//import ProjectCard from "../components/Project-Card";

const ProjectsGrid = () => {
  /*
    const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });

  /*
  const projects = [
    {
      image: "",
      title: "Physiobit",
      type: "WEB APP",
      techStack: ["React (TS)", "Node.js", "TimefluxDB", "Tailwind"],
      description:
        "An open-source web applications that aims to minimize the complexity behind physiological research by providing a platform for researchers to analyze and export Fitbit data!",
    },
    {
      image: "",
      title: "Pomodoro Timer",
      type: "WEB APP",
      techStack: ["React (TS)", "SCSS"],
      description:
        "A productivity web application that uses the Pomodoro Technique to help users manage their time and tasks.",
    },
    {
      image: "",
      title: "Portfolio",
      type: "WEB APP",
      techStack: ["React (TS)", "Tailwind"],
      description:
        "A personal portfolio website that showcases my work and projects.",
    },
  ];*/

  return (
    <motion.section
      //ref={ref}
      className="w-full relative bg-[#272257] p-10 pt-0 md:px-40 md:mt-0 md:pb-0 mb-10 font-ralewayBold"
    ></motion.section>
  );
};

export default ProjectsGrid;
