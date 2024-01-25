import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="h-full w-full bg-[#272257] flex flex-col">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
