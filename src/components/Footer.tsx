import MailIcon from "../assets/svgs/Mail";
import LinkedInSmall from "../assets/svgs/LinkedIn-Small";
import GithubSmall from "../assets/svgs/Github-Small";
import ChevronUp from "../assets/svgs/ChevronUp";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#191540] w-full h-full p-10 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
        <span className="mt-10 md:mt-0 font-bold text-2xl font-ralewayBold md:mr-auto">
          © 2024 Brandon Le
        </span>
        <div className="md:ml-auto">
          <ChevronUp />
        </div>
      </div>
      <div className="mt-10 flex flex-row justify-center md:justify-end items-center gap-5 w-full">
        <MailIcon />
        <LinkedInSmall />
        <GithubSmall />
      </div>
    </div>
  );
};

export default Footer;
