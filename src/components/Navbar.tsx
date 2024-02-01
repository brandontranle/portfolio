import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*todos:
    -add url to login button

  */

  return (
    <nav className="flex flex-row w-full bg-transparent h-20 absolute z-20 top-0 flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/*
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
  />*/}
        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-[#FFC701] ">
          &lt;3
        </span>
      </a>
      {windowWidth <= 755 ? (
        <>
          <button
            onClick={toggleDropdown}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:hidden mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#272257] md:dark:bg-gray-900 dark:border-gray-700`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 z-20">
              <li>
                <a href="/" className="block py-2 px-3">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="block py-2 px-3">
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className="block py-2 px-3">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#projects" className="block py-2 px-3">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" className="block py-2 px-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-lg text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white group transition duration-300"
                aria-current="page"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px]  bg-white"></span>
              </a>
            </li>
            <li>
              <a
                href="#steps"
                className="block py-2 px-3 text-lg text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white group transition duration-300"
                aria-current="page"
              >
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] bg-white"></span>
              </a>
            </li>
            <li>
              <a
                href="/FAQs"
                className="block py-2 px-3 text-lg text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white group transition duration-300"
                aria-current="page"
              >
                Experience
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px]  bg-white"></span>
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-lg text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white group transition duration-300"
                aria-current="page"
              >
                Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px]  bg-white"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-lg text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white group transition duration-300"
                aria-current="page"
              >
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px]  bg-white"></span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
