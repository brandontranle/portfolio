import miso from "../assets/images/miso.png";

const Projects = () => {
  const skills = ["Typescript", "Node.js", "MongoDB", "SCSS"];

  return (
    <section className="w-full relative bg-[#272257] p-10 md:p-40 md:mt-0 md:pb-0 mb-10 font-ralewayBold">
      <header className="w-full p-10 flex flex-row items-center">
        <hr
          className={`h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
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
        <hr
          className={`h-[2px] w-[100%]  ml-auto border-0  bg-white hidden lg:block`}
          style={
            {
              //width: `${scrollWidth}%`,
              //transition: "width 0.7s ease, background-color 0.7s ease",
              // You can adjust the duration and timing function here
            }
          }
        />
      </header>
      <div className="flex flex-col-reverse lg:flex-row">
        <img src={miso} className="rounded-3xl h-[500px]" />
        <div className="lg:ml-auto w-[650px] h-[300px] relative bg-[#151135] hidden sm:block right-0 mr-40 lg:absolute z-20 lg:mt-14 mb-10 lg:mb-0 rounded-3xl p-10">
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
        <div className="ml-auto flex flex-row  w-[500px] h-[120px] bottom-1 right-0 mr-40 absolute z-40 mt-14 rounded-3xl p-10 pr-0 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="ml-auto rounded-3xl w-[100px] text-sm text-center p-2 bg-[#EAACFF] text-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
