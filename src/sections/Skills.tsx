import SkillsCard from "../components/Skills-Card";

const Skills = () => {
  const skillslist = [
    {
      title: "Languages",
      skills: [
        "Typescript",
        "Javascript",
        "Python",
        "PHP",
        "C#",
        "C++",
        "C",
        "Java",
        "HTML/CSS",
      ],
    },
    {
      title: "Frameworks",
      skills: [
        "React.js",
        "Node.js",
        "Svelte",
        ".NET Core",
        "SASS",
        "Tailwind",
        "Express",
        "Bootstrap",
        "MaterialUI",
      ],
    },
    {
      title: "Tools",
      skills: [
        "MongoDB",
        "SQL",
        "SQLite",
        "Azure",
        "Arduino IDE",
        "VS Code",
        "Emacs",
        "Visual Studio",
        "Amazon Web Services",
      ],
    },
  ];

  return (
    <div
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
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-32">
        {skillslist.map((skill) => (
          <SkillsCard title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
