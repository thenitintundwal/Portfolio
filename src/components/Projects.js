import React from "react";
import "../images/weather-app.png";

const Projects = () => {
  return (
    <div className="mt-32 bg-[#E6DACE] pb-20">
      <div className="w-[80%] lg:w-[47rem] my-0 mx-auto">
        <div className="flex items-center justify-center gap-3 pt-20 pb-16">
          <div className="w-5 h-5 bg-blue-800"></div>
          <h1 className="text-xl lg:text-3xl font-bold tracking-wide">
            PROJECTS
          </h1>
        </div>

        <p className="text-center px-6 text-sm lg:text-lg lg:font-semibold">
          These are my small but Best projects till now which I have created
          while learning Web Development and more projects are on the way
          because i am still learning.
        </p>

        <div className="flex flex-col gap-3">
          <div className="drop-shadow-2xl bg-white gap-10 flex lg:flex-row flex-col justify-between mt-16 lg:h-[22rem] rounded-2xl">
            <div className="lg:w-[25rem] flex flex-col gap-10 flex-wrap">
              <div className="flex gap-5 mt-10">
                <div className="bg-blue-600 h-12 w-2"></div>
                <div>
                  <h1 className="text-blue-600 text-lg lg:text-xl font-bold">
                    Weather App 01
                  </h1>
                  <p className="text-sm lg:text-lg font-semibold">Weather</p>
                </div>
              </div>
              <p className="ml-4 text-sm">
                This is my weather app which shows you a Real-Time weather data
                around the World stay informed with up-to-the-minute weather
                updates, including Temperature, Humidity, Wind Speed, and clouds
                for any location worldwide.
              </p>
            </div>
            <div>
              <a href="https://lnkd.in/de67bxzX" target="weather">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/db9f62177777929.Y3JvcCwxMzQyLDEwNTAsMjksMA.png"
                  className="h-56 lg:h-full w-full lg:w-[20rem] rounded-b-2xl lg:rounded-r-2xl cursor-pointer"
                  alt="weather app"
                />
              </a>
            </div>
          </div>
          <div className="drop-shadow-2xl bg-white gap-10 flex lg:flex-row flex-col justify-between mt-16 lg:h-[22rem] rounded-2xl">
            <div className="lg:w-[25rem] flex flex-col gap-10 flex-wrap">
              <div className="flex gap-5 mt-10">
                <div className="bg-blue-600 h-12 w-2"></div>
                <div>
                  <h1 className="text-blue-600 text-lg lg:text-xl font-bold">
                    Tik Tac Toe 02
                  </h1>
                  <p className="text-sm lg:text-lg font-semibold">Game</p>
                </div>
              </div>
              <p className="ml-4 text-sm pr-4">
                Developing this website was an enriching experience that allowed
                me to apply and expand my knowledge of web development
                technologies. I utilized #html5 , #css3 , and #javascript to
                bring the game to life, ensuring seamless functionality and an
                aesthetically pleasing design.
              </p>
            </div>
            <div>
              <a href="https://lnkd.in/dWEbtaVR" target="game">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmqEHnOJXVthKnPb-rT7BICSiAmGQeRAe0ecLTi9jvWahfnZLzy4VtK64kZgEpFBVZ9I"
                  className=" h-56 lg:h-full w-full lg:w-[20rem] rounded-b-2xl lg:rounded-r-2xl cursor-pointer"
                  alt="Tic Tac Toe"
                />
              </a>
            </div>
          </div>
          <div className="drop-shadow-2xl bg-white gap-10 flex lg:flex-row flex-col justify-between mt-16 lg:h-[22rem] rounded-2xl">
            <div className="lg:w-[25rem] flex flex-col gap-10 flex-wrap">
              <div className="flex gap-5 mt-10">
                <div className="bg-blue-600 h-12 w-2"></div>
                <div>
                  <h1 className="text-blue-600 text-lg lg:text-xl font-bold">
                    Password Generator 03
                  </h1>
                  <p className="text-sm lg:text-lg font-semibold">Password</p>
                </div>
              </div>
              <p className="ml-4 text-sm ">
                Password Generator app ussing this app you can add numbers,
                symbols, lowercase letters and uppercase letters in your
                password to make it stonger and these are the most random
                passwords that you get and you can copy your password after
                generating and strength of password will also show by colors
                that your password is strong, week or medium.
              </p>
            </div>
            <div>
              <a href="https://lnkd.in/diWzSjJc" target="password">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwL6nC43sqQhNpG8Gs1ZSXd-psXed0XTNm7g"
                  className="h-56 lg:h-full w-full lg:w-[20rem] rounded-b-2xl lg:rounded-r-2xl cursor-pointer"
                  alt="Password Generator"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
