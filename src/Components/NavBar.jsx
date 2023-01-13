import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="scroll-p-20 z-20 top-0 md:left-[14%] lg:left-[24%] xl:left-[29%] 2xl:left-[35.6%] flex fixed ">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-b gap-9 from-[#383838] to-[#000000] py-3 px-10">
        <a
          href="#Home"
          className="text-white text-xl cursor-pointer duration-200 hover:scale-125 uppercase"
        >
          Home
        </a>
        <a
          href="#Mutants"
          className="text-white cursor-pointer text-xl duration-200 hover:scale-125 mx-8 uppercase"
        >
          Mutants
        </a>
        <a
          href="#Schools"
          className="text-white cursor-pointer text-xl duration-200 hover:scale-125  uppercase"
        >
          Schools
        </a>
        <a
          href="#Maps"
          className="text-white cursor-pointer text-xl duration-200 hover:scale-125 ml-8 uppercase"
        >
          Maps
        </a>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer fixed top-3 right-1 z-30 text-white md:hidden"
      >
        {nav ? <FaTimes size={40} /> : <FaBars size={35} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center text-5xl gap-8 w-screen h-screen bg-gradient-to-b from-petrol-blue to-petrol-blue-border">
          <a
            href="#Home"
            className="text-white cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            Home
          </a>
          <a
            href="#Mutants"
            className="text-white cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            Mutants
          </a>
          <a
            href="#Schools"
            className="text-white cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            Schools
          </a>
          <a
            href="#Maps"
            className="text-white cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            Maps
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
