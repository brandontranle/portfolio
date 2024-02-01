import Background from "../assets/images/midnights.jpg";
import Airpods from "../assets/svgs/Airpods";
import RunningShoes from "../assets/svgs/RunningShoes";
import Signature from "../assets/svgs/Signature";
import Github from "../assets/svgs/Github";
import Linkedin from "../assets/svgs/Linkedin";

const Banner = () => {
  return (
    <section className="h-[835px] w-full flex flex-row relative place-items-center justify-center">
      <img
        src={Background}
        className="top-0 absolute object-cover h-[835px] w-full"
      />

      <div className="absolute h-full w-full flex items-center justify-center">
        {[...Array(50)].map((_, index) => {
          const randomTop = `${Math.random() * 100}%`;
          const randomLeft = `${Math.random() * 75}%`;
          const animationDelay = `${index * 0.1}s`; // Adjust the delay as needed

          return (
            <div
              key={index}
              className="diamond-star animate-pulse w-2 h-2 bg-[#FFC701] rounded-full absolute border border-[#FFC701]"
              style={{
                top: randomTop,
                left: randomLeft,
                animationDelay: animationDelay,
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-col z-10 place-items-center justify-center">
        <h1 className="text-[#FFC701] text-5xl font-bold mt-52 font-ralewayBold">
          {" "}
          BRANDON LE{" "}
        </h1>{" "}
        <br />
        <h4 className="text-white text-2xl font-bold font-ralewaySemibold">
          {" "}
          Computer Science @ UCLA '26{" "}
        </h4>{" "}
        <br />
        <div className="flex flex-row pb-32">
          <Airpods />
          <p className="text-[#BFBFBF] text-lg">
            8 Hours ago, I jammed to Enchanted (Taylors Version) by Taylor Swift
          </p>
        </div>
        <div className="flex flex-row">
          <RunningShoes />
          <p className="text-[#BFBFBF] mb-5  text-lg">
            {" "}
            Miles ran this year: 169{" "}
          </p>
        </div>
        <p className="text-[#BFBFBF] mb-5  text-lg">
          {" "}
          "Run Fast, Still Last."{" "}
        </p>
        <Signature />
      </div>
      <div className="absolute flex flex-col justify-center place-items-center right-0 p-10">
        <Github />
        <br />
        <Linkedin />
      </div>
    </section>
  );
};

export default Banner;
