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
  return (
    <div
      className="experience rounded-3xl text-center sm:text-left font-ralewayBold w-full h-full flex flex-col p-10 z-20 bg-[#53457a] hover:drop-shadow-glow hover:cursor-pointer"
      style={{ transition: "0.5s ease" }}
    >
      <header className="text-3xl text-[#EAACFF]">
        {title} • {company}
      </header>
      <div className="text-lg"> {date} </div>
      <div className="text-lg leading-6 gap-3 flex flex-col text-left">
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
      <div className="grid-cols-3 inline-grid md:flex md:flex-row gap-3 mt-3 place-items-center justify-center md:items-start md:justify-start">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-3xl w-[100px] text-sm text-center p-2 bg-[#EAACFF] text-black"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
