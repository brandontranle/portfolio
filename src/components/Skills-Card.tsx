interface SkillsCardProps {
  title: string;
  skills: string[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <div className="p-10 w-[375px] h-full bg-[#413D6A] rounded-xl z-20">
      <div className="text-4xl text-[#EAACFF] text-center"> {title} </div>
      <div className="flex flex-col items-center justify-center text-left">
        {skills.map((skill, index) => (
          <div key={index} className="text-white">
            <span className="text-[#EAACFF] text-xl"> ‣ </span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
