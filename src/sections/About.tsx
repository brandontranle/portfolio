import React, { useEffect, useState } from "react";

const About = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [lineColor, setLineColor] = useState("bg-gray-200");

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollableHeight) * 100;
      setScrollWidth(scrollProgress);

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
  }, []);

  return (
    <section className="w-full relative bg-[#272257] mb-10">
      <header className="w-full p-10 flex flex-row items-center">
        <h1 className="text-4xl font-bold font-ralewayBold ml-0 text-center w-full lg:w-[30%] lg:text-left  lg:ml-[20%]">
          {" "}
          <span className="text-[#DE7EFF]"> 01. </span> ABOUT ME
        </h1>
        <hr
          className={`h-[2px] w-[100%]  ml-auto border-0   hidden lg:block transition-all ${lineColor}`}
          style={{
            width: `${scrollWidth}%`,
            transition: "width 0.7s ease, background-color 0.7s ease",
            // You can adjust the duration and timing function here
          }}
        />
      </header>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="w-full text-center p-5 lg:pl-40 lg:text-left sm:pl-20 lg:p-0 font-ralewayBold">
          <h1 className="text-4xl font-bold font-ralewayBold text-[#FFC701]">
            {" "}
            Hi, I'm Brandon Le{" "}
          </h1>
          <p className="text-[#BFBFBF] text-2xl mt-5">
            {" "}
            I am a second-year Computer Science major at UCLA! Besides being a
            student, I am a Full-Stack Developer or Software Engineer, and
            running enthusiast.
          </p>
          <p className="text-[#BFBFBF] text-2xl mt-5">
            {" "}
            My passion for web development grew in 2022, when I landed my first
            internship at the community college I graduated from while I was in
            high school!
          </p>
          <p className="text-[#BFBFBF] text-2xl mt-5">
            Fast forward to today, I’ve had the privilege to work for a
            community college, two start-ups, and have led the production of my
            own web app with my group of my friends.
          </p>
        </div>
        <div className="w-full mt-20 lg:mt-0 p-5 lg:text-left lg:p-0 font-ralewayBold flex items-center">
          <div className="ml-auto w-[500px] h-[400px] bg-[#DE7EFF] right-0 absolute z-20 "></div>

          <div className="bg-[#CB51F4] w-[600px] ml-auto h-[350px] relative "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
