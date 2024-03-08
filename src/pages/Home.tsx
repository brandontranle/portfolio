import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../sections/About";
import Experience from "../sections/Experience";
//import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Skills from "../sections/Revamped-Skills";
import Contact from "../sections/Contact";

//lazy load these

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
