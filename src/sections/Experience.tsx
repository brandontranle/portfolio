import ExpCard from "../components/Experience-Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  //const [scrollWidth, setScrollWidth] = useState(0);
  //const [lineColor, setLineColor] = useState("bg-gray-200");

  //create an array for expcard containg
  const ExpCards = [
    {
      title: "Software Engineer Intern",
      company: "Intern Guys",
      date: "January 2024 • Present",
      points: [
        "Complete front-end and back-end schema of the main website offered to students and recruiters.",
        "Optimized internship searching algorithm for more accuracy and performance.",
        "Constructed a blog site to advertise latest start-ups and created another source of income through sponsoring start-ups.",
      ],
      skills: ["C#", "React.js", "CSS", "SQL", "Azure"],
    },
    {
      title: "Software Developer Intern",
      company: "MPC",
      date: "January 2024 • Present",
      points: [
        "Led the production of a fit-bit web application that simulates remote user motion from a connected fit-bit",
        "Constructed proper activity tracking that inserts data into a MongoDB server for kinesiologists researchers to analyze",
        "Proper fit-bit user authentication login to retrieve data for researchers to examine",
      ],
      skills: ["Typescript", "MongoDB", "Node.js", "Tailwind", "Figma"],
    },
    {
      title: "Lead Software Engineer Intern",
      company: "MPC",
      date: "June 2023 • November 2023",
      points: [
        " Led the production of a full-stack web application, serving as the company’s landing page. ",
        "Constructed an activity tracking discord bot and inserted data into a MongoDB server for grading employee performance. ",
        "Constructed a blog site using Ghost, utilizing handlebars for component making.",
      ],
      skills: ["Python", "Javascript", "Handlebars", "Node.js", "MongoDB"],
    },
    {
      title: "Full Stack Web Developer",
      company: "MPC",
      date: "June 2023 • September 2023",
      points: [
        " Constructed a platform interface for students to submit data and for administrators to sort and disburse.",
        "Wrote python scripts to sort the data from .csv files.",
        "Implemented an optimized automated algorithm to organize students’ input data and perform the disbursement of project links to each user for peer grading and collecting submissions.",
      ],
      skills: ["PHP", "Python", "CSS", "HTML", "SQLite"],
    },
  ];

  /*
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollableHeight) * 100;
      //setScrollWidth(scrollProgress);

      if (scrollProgress < 33) {
        setLineColor("bg-gray-300");
      } else if (scrollProgress < 66) {
        setLineColor("bg-gray-500");
      } else {
        setLineColor("bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/
  /*
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
  };*/

  const smoothRightVariants = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
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

  const fadeInItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust based on when you want the animation to trigger (1 = fully visible)
    //triggerOnce: true, // Ensures the animation only plays once
  });

  return (
    <motion.section
      className="w-full relative bg-[#272257] p-10 md:p-40  mt-0 md:pb-0 pb-0"
      ref={ref}
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
          <span className="text-[#DE7EFF]"> 02. </span> EXPERIENCE
        </h1>
        <motion.hr
          variants={smoothRightVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className={`origin-right h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
          style={
            {
              //width: `${scrollWidth}%`,
              //transition: "width 0.7s ease, background-color 0.7s ease",
              // You can adjust the duration and timing function here
            }
          }
        />
      </header>
      {}
      <motion.div
        variants={fadeInParagraphsContainerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Trigger based on inView
        className="flex flex-col  lg:grid lg:grid-cols-2 gap-10"
        ref={ref}
      >
        {ExpCards.map((exp) => (
          <motion.div
            variants={fadeInItemVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <ExpCard
              title={exp.title}
              company={exp.company}
              date={exp.date}
              points={exp.points}
              skills={exp.skills}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
