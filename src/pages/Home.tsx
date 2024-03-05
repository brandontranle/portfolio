import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../sections/About";
import Experience from "../sections/Experience";
//import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Skills from "../sections/Revamped-Skills";

const Home = () => {
  return (
    <div className="h-full w-full bg-[#272257] flex flex-col">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
