import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-[#0a192f] text-gray-300 grid place-items-center"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="pb-8 pl-4 lg:pl-4 grid place-items-center grid-cols-2">
          <h2 className="text-4xl font-bold border-b-4 inline  border-pink-600 font bold">
            About
          </h2>
        </div>
        <div className=" grid place-items-center sm:grid-cols-2 px-4 gap-4">
          <div>
            <p className=" text-4xl font-ral font-bold">
              Hi. I'm Roman, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="font-ral">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
