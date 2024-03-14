import { useMedia } from "../util/MediaContext";

interface ExpCardProps {
  title: string;
  company: string;
  date: string;
  points: string[];
  skills: string[];
}

const ExpCard: React.FC<ExpCardProps> = ({
  title,
  company,
  date,
  points,
  skills,
}) => {
  const { isMobile } = useMedia();

  return (
    <div
      className="experience rounded-3xl sm:text-left font-ralewayBold w-full h-full flex flex-col p-10 z-20 bg-[#53457a] hover:drop-shadow-glow hover:cursor-pointer"
      style={{ transition: "0.5s ease" }}
    >
      <header className="text-xl md:text-3xl text-[#EAACFF]">
        {isMobile ? (
          <>
            {title}
            <br />@ {company}
          </>
        ) : (
          <>
            {title} • {company}
          </>
        )}
      </header>
      <div className="text-lg"> {date} </div>
      <div className="text-md md:text-lg leading-6 gap-3 flex flex-col text-left">
        {points.map((point, index) => (
          <div key={index} className="flex items-center">
            <span
              className="text-[#EAACFF] pr-2"
              style={{ alignSelf: "flex-start" }}
            >
              ‣
            </span>
            {point}
          </div>
        ))}
      </div>
      <div className="xl:grid-cols-3 flex flex-row md:flex md:flex-row gap-3 mt-3 place-items-center justify-start md:items-start md:justify-start">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${
              isMobile
                ? `devicon-${
                    skill.toLowerCase() === "express" ||
                    skill.toLowerCase() === "emacs" ||
                    skill.toLowerCase() === "influxdb"
                      ? `${skill.toLowerCase()}-original`
                      : `${skill.toLowerCase()}-plain colored`
                  }
              ${skill === "Tailwind" && "devicon-tailwindcss-plain colored"}
              ${skill === "Node.js" && "devicon-nodejs-plain"} text-[2rem]`
                : "rounded-3xl w-[100px] text-sm text-center p-2 bg-[#EAACFF] text-black"
            }`}
          >
            {!isMobile && skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
