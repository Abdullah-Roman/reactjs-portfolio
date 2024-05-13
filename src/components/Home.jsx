import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["React Developer", "Javascript Developer"],
    loop: 0,
  });
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold font-ral text-[#ccd6f6]">
          Abdullah Al Roman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold font-ral text-[#8892b0]">
          I'm a <span>{text}</span>.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a react developer specializing in building and designing
          exceptional digital experiences. Currently, I’m focused on building
          responsive react web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
