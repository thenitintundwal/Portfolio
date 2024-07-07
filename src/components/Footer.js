import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center lg:justify-between items-center lg:items-center px-2 lg:px-10 py-6 text-sm bg-wight text-center">
      <div>
        <p>&copy; 2023 by Nitin Tundwal</p>
        <p>
          Powerd and secured by <span className="underline">Netlify</span>{" "}
        </p>
      </div>
      <div className="flex gap-8 text-center justify-center font-bold flex-wrap ">
        <div>
          <h1 className=" pb-4">Call</h1>
          <p className=" font-thin text-xs">9310289537</p>
        </div>
        <div className="">
          <h1 className=" pb-4">Gmail</h1>
          <p className=" font-thin text-xs">nitintundwal07@gmail.com</p>
        </div>
        <div>
          <p className=" pb-4">Follow</p>
          <div className=" flex justify-center items-center gap-4 font-thin">
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
      </div>
    </div>
  );
};

export default Footer;
