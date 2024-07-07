import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMennu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center h-28 w-full text-black fixed top-0 bg-white z-10">
      <div className="flex gap-3 items-center lg:px-16 px-8">
        <div className="w-4 h-4 bg-blue-800"></div>
        <Link to="/">
          <p className=" text-2xl flex flex-col lg:flex-row font-black tracking-wide cursor-pointer">
            Nitin Tundwal{" "}
            <span className=" text-lg font-normal ">/ WEB DEVELOPER</span>
          </p>
        </Link>
      </div>
      <div
        className={`z-10 w-full fixed text-xl bg-[#f7eaf1] lg:hidden flex flex-col gap-5 items-center justify-center h-full pt-72 ${
          menu ? "block" : "hidden top"
        } `}
      >
        <NavLink className=" hover:text-blue-600 opacity-100" to="/">
          ABOUT ME
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/resume">
          RESUME
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/projects">
          PROJECTS
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/contact">
          CONTACT
        </NavLink>
      </div>
      <div className="lg:flex lg:gap-5 lg:px-16 px-5 text-lg  hidden">
        <NavLink className=" hover:text-blue-600" to="/">
          ABOUT ME
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/resume">
          RESUME
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/projects">
          PROJECTS
        </NavLink>
        <NavLink className=" hover:text-blue-600" to="/contact">
          CONTACT
        </NavLink>
      </div>
      <button
        className="px-8 block lg:hidden text-2xl z-10"
        onClick={handleMennu}
      >
        {menu ? <RxCross2 /> : <FiMenu />}
      </button>
    </div>
  );
};

export default Navbar;
