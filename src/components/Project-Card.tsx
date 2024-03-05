/* eslint-disable @typescript-eslint/no-explicit-any */
interface Skill {
  icon: string;
  title: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  skills: Skill[];
  desc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  type,
  skills,
  desc,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#403b6a] p-10 rounded-2xl">
      <img src={image} className=" rounded-lg mb-3" />
      <h3 className="w-full text-3xl text-[#FFC701]"> {title} </h3>
      <h4 className="w-full text-xl text-[#DE7EFF]"> {type} </h4>
      <div className="flex flex-row flex-wrap justify-start gap-3 w-full">
        {skills.map((skill, index) => (
          <span className="flex items-center gap-1 text-lg" key={index}>
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
        ))}
      </div>
      <p className="text-lg"> {desc} </p>

      <div></div>
    </div>
  );
};

export default ProjectCard;
