import SkillsCard from "../components/Skills-Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skillslist = [
    {
      title: "Languages",
      skills: [
        {
          name: "Typescript",
          icon: "typescript",
        },
        {
          name: "Javascript",
          icon: "javascript",
        },
        {
          name: "Python",
          icon: "python",
        },
        {
          name: "PHP",
          icon: "php",
        },
        {
          name: "C#",
          icon: "csharp",
        },
        {
          name: "C++",
          icon: "cplusplus",
        },
        {
          name: "C",
          icon: "c",
        },
        {
          name: "Java",
          icon: "java",
        },
        {
          name: "HTML/CSS",
          icon: "html5",
        },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        {
          name: "React.js",
          icon: "react",
        },
        {
          name: "Node.js",
          icon: "nodejs",
        },

        {
          name: ".NET Core",
          icon: "dot-net",
        },
        {
          name: "Tailwind",
          icon: "tailwindcss",
        },
        {
          name: "SASS",
          icon: "sass",
        },

        {
          name: "Svelte",
          icon: "svelte",
        },
        {
          name: "Express",
          icon: "express",
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
        },
        {
          name: "MaterialUI",
          icon: "materialui",
        },
      ],
    },
    {
      title: "Technologies",
      skills: [
        {
          name: "MongoDB",
          icon: "mongodb",
        },
        {
          name: "SQL",
          icon: "mysql",
        },
        {
          name: "SQLite",
          icon: "sqlite",
        },

        {
          name: "InfluxDB",
          icon: "influxdb",
        },
        {
          name: "Amazon Web Services",
          icon: "amazonwebservices",
        },

        {
          name: "Emacs",
          icon: "emacs",
        },
        {
          name: "Azure",
          icon: "azure",
        },
        {
          name: "Arduino IDE",
          icon: "arduino",
        },
        {
          name: "VS Code / 2022",
          icon: "visualstudio",
        },
      ],
    },
  ];

  const fadeInParagraphsContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Stagger the children with 0.2 seconds delay between each
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });

  return (
    <motion.div
      variants={fadeInParagraphsContainerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={ref}
      className="w-full lg:p-40 font-ralewayBold p-10 pt-0 relative h-full z-10"
      id="#skills"
    >
      <div className="blurred-circle"></div>
      {[...Array(5)].map((_, index) => (
        <span className="shooting_star" key={index}></span>
      ))}

      <header className="w-full p-10 flex flex-row items-center">
        <h1 className="text-4xl font-bold font-ralewayBold  text-center w-full pt-0">
          SKILLS
        </h1>
      </header>
      <div className="flex flex-col justify-center w-full items-center lg:grid lg:grid-cols-3 gap-20 lg:gap-32">
        {skillslist.map((skill) => (
          <SkillsCard
            title={skill.title}
            skills={skill.skills}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
