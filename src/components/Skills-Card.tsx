import { motion } from "framer-motion";

interface SkillsCardProps {
  title: string;
  skills: { name: string; icon: string }[];
  inView: boolean;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills, inView }) => {
  const fadeInItemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      variants={fadeInItemVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="p-10 w-[375px] h-full bg-[#413D6A] rounded-xl z-20"
    >
      <div className="text-4xl text-[#EAACFF] text-center mb-5"> {title} </div>
      <div className="flex flex-col text-left">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-row items-center text-white ml-[25%]"
          >
            <span className=" text-xl mr-3">
              {/*if its express, change it to: devicon-express-original colored */}
              <i
                className={`devicon-${
                  skill.icon === "express" ||
                  skill.icon === "emacs" ||
                  skill.icon === "influxdb"
                    ? `${skill.icon}-original`
                    : `${skill.icon}-plain colored`
                }`}
              ></i>
            </span>
            {skill.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
