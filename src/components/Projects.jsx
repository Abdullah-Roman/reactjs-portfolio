import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 pt-24"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2">
          <p className="text-4xl font bold inline border-b-4 border-pink-600 ml-4">
            Projects
          </p>
        </div>
        <div className="grid grid-cols-2">
          <p className="py-4 text-xl ml-4">
            Check out some of my recent projects
          </p>
        </div>
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4">
          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img src="one.png" alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">
                React Tailwind Ecommerce
              </h2>
              <p className="py-3 font-ral text-white">
                This project made with react and tailwind. This ecommerce is
                fully responsive. For slider I have used slick slider.This
                webpage also have dark-mode feature. Please explore live link
                and source code from below
              </p>
              <div className="flex gap-4">
                <a
                  href="https://react-tailwind-ecommerce-five.vercel.app/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/react-tailwind-ecommerce?tab=readme-ov-file"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img src="two.png" alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">
                React Weather App
              </h2>
              <p className="py-3 font-ral text-white">
                This weather application made with open weather map api. for
                data fetching I have used axios. This app will show temperature,
                humidty and wind speed of all city around the world. User can
                input city name and get data. please expore live link and source
                code from below.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://romanreact-weather-app.netlify.app/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/react-weather-app/tree/main"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img
                src="three.png"
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">Figma to Html</h2>
              <p className="py-3 text-white font-ral">
                This web page made from figma. This web page made with
                boostrap,jquery. This webpage is fully responsible for all
                devices. This is pixel perfect convertion from figma to html.
                Please explore live link and source code from below.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://abdullah-roman.github.io/figma-to-html/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/figma-to-html?tab=readme-ov-file"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img src="four.png" alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">Figma to React</h2>
              <p className="text-white py-3 font-ral">
                This web page converted from figma by tailwind. This webpage
                have accordian which is made from scratch. This webpage also
                fully responsive and mobile friendly. Please expore live link
                and source code from below.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://figma-to-react-tailwind.vercel.app/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/figma-to-react-tailwind"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img src="five.png" alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">
                Redux Ecommerce Cart
              </h2>
              <p className=" text-white py-3 font-ral">
                This web page made with redux and redux thunk for data fetching
                from dummy store api. This webpage have add to cart, show data
                and remove cart function. Also have nice pagination and spinners
                and toatify features. for rounting I have used react router 6.4.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://redux-ecommerce-cart-eta.vercel.app/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/redux-ecommerce-cart"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[320px] h-[270px] relative group rounded-lg">
            <div className="w-full h-full  object-cover shadow-lg shadow-[#040c16] ">
              <img src="six.png" alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="absolute grid px-2 place-items-center top-0 left-0 h-full w-full overlay opacity-0 group-hover:opacity-100 duration-300">
              <h2 className="text-xl font-medium font-ral">
                React Boostrap Portfolio
              </h2>
              <p className="py-3 text-white font-ral">
                This portfolio site made with boostrap. This is fully mobile
                friendly responsive webpage. Which have nice navigation. Please
                expolore live link and source code from below.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://abdullah-roman.github.io/Boostrap-Portfolio/"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Abdullah-Roman/Boostrap-Portfolio?tab=readme-ov-file"
                  target="_blank"
                  className="hover:bg-yellow-500 hover:text-black px-6 py-1 bg-[#0a192f] rounded-md inline-block border border-white"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
