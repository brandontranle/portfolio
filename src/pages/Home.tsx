import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "../sections/About";

const Home = () => {
  return (
    <div className="h-full w-full bg-[#272257] flex flex-col">
      <Navbar />
      <Banner />
      <About />
    </div>
  );
};

export default Home;
