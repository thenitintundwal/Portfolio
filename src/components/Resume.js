import React from "react";

const Resume = () => {
  return (
    <div className="mt-32 bg-[#E6DACE] pb-20">
      <div className="w-[90%] lg:w-[47rem] my-0 mx-auto">
        <div className="flex items-center justify-center gap-3 py-20 ">
          <div className="w-5 h-5 bg-blue-800"></div>
          <h1 className=" text-3xl font-bold tracking-wide">RESUME</h1>
        </div>

        <div className="flex justify-between mx">
          <p className="font-bold text-2xl">Education</p>
          <a
            href="https://drive.google.com/file/d/1WkIKPq2XJ0OrQGSWXz2PoqsKgOvzEMgt/view"
            target="resume"
          >
            <button className="py-2 px-6 text-sm font-bold border-2 bg-blue-700 text-white rounded-3xl hover:border-2 hover:border-blue-700 hover:text-black hover:bg-white ">
              DOWNLOAD CV
            </button>
          </a>
        </div>

        <div className="drop-shadow-2xl bg-white flex flex-col lg:flex-row justify-evenly lg:items-center mt-16 h-[22rem] rounded-2xl px-6">
          <div className="w-[18rem] flex flex-col gap-3 font-bold">
            <h1 className="text-blue-700 font-bold text-xl">2022-2025</h1>
            <p>Guru Gobind Singh Indraprastha University</p>
            <p> BTech, Chemical Engineering</p>

            <p>Delhi</p>
          </div>
          <div className=" w-full lg:w-[18rem]">
            <p>
              I'm in 3rd year of my graduation. I'm persuing BTech, Chemical
              Engineering from Guru Gobind Singh Indraprastha University and I
              have learnt many things in my college like leadership quality,
              communication skill.
            </p>
          </div>
        </div>
        <div className="drop-shadow-2xl bg-white mt-16 lg:h-[22rem] rounded-2xl pl-10 py-7">
          <h1 className=" pt-10 pb-10 font-bold text-2xl">
            Professional Skillset
          </h1>
          <div className="flex lg:flex-row gap-5 lg:gap-48 flex-col">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <div className="w-4 h-4 lg:w-7 lg:h- bg-blue-800"></div>
                <p> Frontend Developer </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-4 h-4 bg-blue-800"></div>
                <p> React </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-4 h-4 4 bg-blue-800"></div>
                <p> Javascript </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center pr-[73%]">
              <div className="flex gap-2 items-center pr-5">
                <div className="w-4 h-4 bg-blue-800"></div>
                <p> Html5 </p>
              </div>
              <div className="flex gap-2 items-center pr-7">
                <div className="w-4 h-4 bg-blue-800"></div>
                <p> Css3 </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 bg-blue-800"></div>
                <p> Tailwind </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
