import miso from "../assets/images/miso.png";

const Projects = () => {
  const skills = ["Typescript", "Node.js", "MongoDB", "SCSS"];

  return (
    <section className="w-full relative bg-[#272257] p-10 pt-0 md:px-40 md:mt-0 md:pb-0 mb-10 font-ralewayBold">
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
      <div className="flex flex-col rounded-xl bg-[#413d6a] p-5 xl:p-0 xl:bg-transparent xl:flex-row">
        <div className="xl:flex-row flex flex-col-reverse w-full">
          <img src={miso} className="rounded-3xl lg:h-[500px] h-full mb-10" />
          <div className="flex-col flex items-center mb-5 xl:mb-0 xl:ml-auto text-2xl  ">
            <h3 className=" text-[#DE7EFF]"> Featured Project </h3>
            <h3 className="xl:ml-auto text-4xl"> Miso </h3>
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
        <div className="md:ml-auto flex flex-row justify-between  w-full lg:w-[500px] gap-2 h-[120px] lg:bottom-1 lg:right-0 lg:mr-40 xl:absolute z-40 xl:mt-14 rounded-3xl lg:pl-0  ">
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
    </section>
  );
};

export default Projects;
