import miso from "../assets/images/miso.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/Project-Card";
import { useState } from "react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const skills = ["Typescript", "Node.js", "MongoDB", "SCSS"];
  const projects = [
    {
      image: miso as string,
      title: "MSUB",
      type: "Static Web App",
      skills: [
        { icon: "react", title: "React" },
        { icon: "typescript", title: "Typescript" },
        { icon: "sass", title: "Sass" },
      ],
      desc: "MSUB is a static web app designed to showcase the various projects and events hosted by the MSUB club. The website is designed to be responsive and user-friendly, with a modern and sleek design. The website is built using React, Typescript, and SCSS.",
    },
    {
      image: miso as string,
      title: "Thriftopia",
      type: "E-Commerce Web App",
      skills: [
        { icon: "react", title: "React" },
        { icon: "typescript", title: "Typescript" },
        { icon: "tailwindcss", title: "Tailwind" },
        { icon: "nodejs", title: "Node.js" },
        { icon: "mongodb", title: "MongoDB" },
      ],
      desc: "Think a thrift store for students! The website is desgined to help students sell or exchange goods to other students at their campus or near ones! This app is built in React, Typescript, Tailwind, MongoDB, and Node.js.",
    },
    {
      image: miso as string,
      title: "Peach Party",
      type: "Game",
      skills: [
        { icon: "cplusplus", title: "C++" },
        { icon: "opengl", title: "OpenGL" },
      ],
      desc: "Peach Party is a objected oriented C++ game built with OpenGL. It was built as an assignment from my class and I was responsbile for implementing all objected-oriented features!",
    },
    {
      image: miso as string,
      title: "notzsh",
      type: "Terminal App",
      skills: [
        { icon: "c", title: "C" },
        { icon: "python", title: "Python" },
      ],
      desc: "notzsh is a terminal application that demonstrates the execution of shell commands, connected by pipes, such that the output of each command becomes the input for the next. The test cases are built in python but the program is built in C.",
    },
    {
      image: miso as string,
      title: "Tug-o-word",
      type: "Type Racing Web App",
      skills: [
        { icon: "php", title: "PHP" },
        { icon: "laravel", title: "laravel" },
        { icon: "mysql", title: "sql" },
        { icon: "amazonwebservices", title: "aws" },
      ],
      desc: "Imagine tug-o-war but with your keyboard! Battle your buddies in an intense team fight or 1v1, seeing who takes victor with their typing speed. This app is built in PHP, laravel, mySQL, and hosted on AWS.",
    },
    {
      image: miso as string,
      title: "Harmonic Motion",
      type: "Scientific Simulation Web App",
      skills: [
        { icon: "javascript", title: "javascript" },
        { icon: "html5", title: "html5" },
        { icon: "css3", title: "CSS3" },
      ],
      desc: "I went above and beyond in my undergrad physics course and made a harmonic motion simulator for my final project! Dynamically adjust variables and simulate the reality of simple harmonic motion.",
    },
  ];

  const smoothRightVariants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  /*
  const fadeInParagraphsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger the children with 0.2 seconds delay between each
      },
    },
  };

  const fadeInItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };*/

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });
  const toggleShowMore = () => setShowMore(!showMore);

  const fadeInParagraphsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full relative bg-[#272257] p-10 pt-0 md:px-40 md:mt-0 md:pb-0 mb-10 font-ralewayBold flex flex-col items-center justify-center"
    >
      <header className="w-full p-10 flex flex-row items-center">
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-left h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
          style={
            {
              //width: `${scrollWidth}%`,
              //transition: "width 0.7s ease, background-color 0.7s ease",
              // You can adjust the duration and timing function here
            }
          }
        />
        <h1 className="text-4xl font-bold font-ralewayBold  text-center w-full  ">
          {" "}
          <span className="text-[#DE7EFF]"> 03. </span> PROJECTS
        </h1>
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-right h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
        />
      </header>
      <div className="flex flex-col rounded-xl bg-[#413d6a] p-5 xl:p-0 xl:bg-transparent xl:flex-row mb-10">
        <div className="xl:flex-row flex flex-col-reverse w-full">
          <img src={miso} className="rounded-3xl lg:h-[500px] h-full mb-10" />
          <div className="flex-col flex items-center mb-5 xl:mb-0 xl:ml-auto text-2xl  ">
            <h3 className=" xl:ml-auto text-[#DE7EFF]"> Featured Project </h3>
            <h3 className="xl:ml-auto text-4xl"> Miso </h3>
            <div className="xl:ml-auto flex flex-row justify-between  w-full lg:w-[500px] gap-2 mt-10 z-40 lg:mt-auto lg:mb-14 rounded-3xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="lg:ml-auto rounded-3xl w-[100px] h-[40px] flex justify-center items-center text-sm text-center p-2 bg-[#EAACFF] text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[650px] w-full lg:h-[300px] h-full relative bg-[#151135]  sm:block right-0 mr-40 xl:absolute z-20 xl:mt-20 mb-10 xl:mb-0 rounded-3xl p-10">
          <p className="text-right text-md">
            Miso, a productivity app, designed to elevate your work efficiency
            while offering a touch of comfort.
            <br />
            <br />
            Meet Miso, our adorable cat mascot, keeping you company on-screen to
            uplift your spirits during those long study or work sessions.
            <br />
            <br />
            Having struggled with time management and study habits, I created
            Miso to help me! With the motive of helping people study and reduce
            stress with our beloved Miso cat, and the various widgets, we made,
            Miso is for you!
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse rounded-xl bg-[#413d6a] p-5 xl:p-0 xl:bg-transparent xl:flex-row">
        <div className="xl:mr-auto xl:w-[650px] w-full lg:h-[300px] h-full relative bg-[#151135]  sm:block left-0 xl:ml-40 xl:absolute z-20 xl:mt-20 mb-10 xl:mb-0 rounded-3xl p-10">
          <p className="text-right text-md">
            Miso, a productivity app, designed to elevate your work efficiency
            while offering a touch of comfort.
            <br />
            <br />
            Meet Miso, our adorable cat mascot, keeping you company on-screen to
            uplift your spirits during those long study or work sessions.
            <br />
            <br />
            Having struggled with time management and study habits, I created
            Miso to help me! With the motive of helping people study and reduce
            stress with our beloved Miso cat, and the various widgets, we made,
            Miso is for you!
          </p>
        </div>
        <div className="xl:flex-row flex flex-col w-full">
          <div className="flex-col flex  mb-5 xl:mb-0 xl:mr-auto text-2xl items-center xl:items-start ">
            <h3 className=" text-[#DE7EFF]"> Featured Project </h3>
            <h3 className="xl:mr-auto text-4xl lg:mb-10"> Physiobit </h3>
            <div className="xl:mr-auto flex flex-row justify-between w-full mt-10 lg:w-[500px] gap-2 lg:mt-auto items-end lg:mb-16 h-full  z-40 xl:mt-14 rounded-3xl   ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className=" rounded-3xl w-[100px] h-[40px] flex justify-center items-center text-sm text-center p-2 bg-[#EAACFF] text-black"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <img
            src={miso}
            className="rounded-3xl lg:h-[500px] h-full ml-auto mb-10"
          />
        </div>
      </div>
      <header className="w-full p-10 flex flex-row items-center">
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-left h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
          style={
            {
              //width: `${scrollWidth}%`,
              //transition: "width 0.7s ease, background-color 0.7s ease",
              // You can adjust the duration and timing function here
            }
          }
        />
        <h1 className="text-4xl font-bold font-ralewayBold  text-center w-full  ">
          {" "}
          <span className="text-[#DE7EFF]"> </span> SHOWCASE
        </h1>
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-right h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
        />{" "}
      </header>
      <div className="xl:flex-row flex flex-col w-full">
        <motion.div
          variants={fadeInParagraphsContainerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col justify-center items-center md:grid md:grid-cols-1 xl:grid-cols-2
         2xl:grid-cols-3 lg:grid-cols-2 gap-24"
        >
          {(showMore ? projects : projects.slice(0, 3)).map(
            (project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                type={project.type}
                skills={project.skills}
                desc={project.desc}
              />
            )
          )}
        </motion.div>
      </div>
      <button
        onClick={toggleShowMore}
        className="bg-[#EAACFF] text-black px-4 py-2 rounded-lg hover:bg-[#d99be6] transition-colors mt-10"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </motion.section>
  );
};

export default Projects;
