import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className=" h-screen w-full lg:w-[43%] bg-[#E6DACE] relative lg:mt-20 mt-[90%]"></div>
      <div className=" flex lg:flex-row flex-col gap-14 lg:justify-center items-center absolute lg:top-[30%] top-[20%] lg:right-[4%] ">
        <div className="drop-shadow-2xl">
          <div className=" bg-[#f7eaf1] flex flex-col lg:gap-10 justify-center items-center px-8 lg:px-20 py-10">
            <div className=" w-40 h-40 lg:w-52 lg:h-52 ">
              <img
                src="https://img.freepik.com/premium-vector/avatar-man-with-beard-office-worker-wearing-glasses-it-developer-engineer-programmer_277909-144.jpg?w=2000"
                className=" rounded-full"
                alt="ProfileImage"
              />
            </div>
            <div className="flex flex-col gap-6 justify-center items-center">
              <h1 className="text-xl lg:text-2xl font-extrabold tracking-widest text-center ">
                NITIN <br /> TUNDWAL
              </h1>

              <hr className=" h-1 w-14 bg-blue-800" />
              <p className="text-xl tracking-widest	lg:block hidden">
                WEB DEVELOPER
              </p>
              <div className="flex gap-8 justify-between lg:hidden block -bottom-px-5">
                <Link to="/resume">
                  <button className="py-1 px-5 border-2 bg-blue-700 text-white rounded-3xl hover:border-2 hover:border-blue-700 hover:text-black hover:bg-white ">
                    RESUME
                  </button>
                </Link>
                <Link to="/projects">
                  <button className="py-1 px-5 border border-black rounded-3xl hover:bg-blue-700 hover:text-white hover:border-blue-700 ">
                    PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center gap-5 lg:gap-7 text-lg py-4 ">
            <a href="https://github.com/thenitintundwal" target="github">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-tundwal-169743238/"
              target="linkdin"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/NitinTundwal_07" target="twitter">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/nitintundwal_07/"
              target="instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[90%] lg:w-[25%] left-[50%]">
          <h1 className=" font-black text-4xl lg:text-8xl ">Hello</h1>
          <p className=" font-semibold text-xl tracking-widest py-8">
            Here's I am Web Developer
          </p>
          <div className="lg:flex gap-4 pb-10 lg:block hidden ">
            <Link to="/resume">
              <button className="py-1 px-8 border-2 bg-blue-700 text-white rounded-3xl hover:border-2 hover:border-blue-700 hover:text-black hover:bg-white ">
                RESUME
              </button>
            </Link>
            <Link to="/projects">
              <button className="py-1 px-7 border border-black rounded-3xl hover:bg-blue-700 hover:text-white hover:border-blue-700 ">
                PROJECTS
              </button>
            </Link>
          </div>
          <p className="pb-7 ">
            I'm a web developer and I just completed my frontend. I know skills
            like HTML5, CSS3, JAVASCRIPT, REACTJS, TAILWIND and now I'm learning
            complete MERN.
          </p>
          <p>I'm a also doing B.Tech I'm in my 4th year of my graduation.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
