const Projects = () => {
  return (
    <section className="w-full relative bg-[#272257] p-10 md:p-40 md:mt-0 md:pb-0">
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
    </section>
  );
};

export default Projects;
