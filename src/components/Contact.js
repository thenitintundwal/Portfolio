import React from "react";

const Contact = () => {
  return (
    <div className="mt-32 bg-[#E6DACE] pb-16">
      <div className="w-[90%] lg:w-[46rem] my-0 mx-auto">
        <div className="flex items-center justify-center  gap-3 pt-20 pb-16  ">
          <div className="w-5 h-5 bg-blue-800"></div>
          <h1 className=" text-3xl font-bold tracking-wide">LET'S TALK</h1>
        </div>
        <form action="https://formspree.io/f/xdorzdbv" method="POST">
          <div className="flex flex-col drop-shadow-2xl bg-[#f3e7ef] px-6 lg:px-16 pt-12 pb-12 rounded-lg">
            <label className="font-medium text-lg" htmlFor="fname">
              First Name
            </label>
            <input
              className="text-lg rounded-lg mt-4 mb-5 p-2 border border-transparent focus:outline-none"
              type="text"
              name="First Name"
              id="fname"
              required
            />
            <label className="font-medium text-lg" htmlFor="lname">
              Last Name
            </label>
            <input
              className="text-lg rounded-lg mt-4 mb-5 p-2 border border-transparent focus:outline-none"
              type="text"
              name="Last Name"
              id="lname"
              required
            />
            <label className="font-medium text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="text-lg rounded-lg mt-4 mb-5 p-2 border border-transparent focus:outline-none"
              type="email"
              id="email"
              name="Email"
              required
            />
            <label className="font-medium text-lg" htmlFor="subject">
              Subject
            </label>
            <input
              className="text-lg rounded-lg mt-4 mb-5 p-2 border border-transparent focus:outline-none"
              type="text"
              id="subject"
              name="Subject"
            />
            <label className="font-medium text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="text-lg rounded-lg mt-4 mb-5 p-2 border border-transparent focus:outline-none"
              type="text"
              id="message"
              name="Message"
            />
            <button className="py-1 w-[30%] lg:w-1/5 mt-6 border-2 bg-blue-700 text-white rounded-3xl hover:border-2 hover:border-blue-700 hover:text-black hover:bg-white ">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
