import { BsFillCameraFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "motion/react";
import { WorldMap } from "./ui/world-map";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact">
      <div className="relative py-10 bg-slate-950 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-white">
            Remote{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {"Connectivity".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto py-4">
            Powering AI operations globally with seamless model deployment,
            monitoring, and optimization. Let’s build scalable and intelligent
            systems together.
          </p>
          <a href="mailto:georgeokelloouma@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <WorldMap
          lineColor="rgba(0, 190, 255, 0.8)" // Adjusted for visibility on dark background
          dots={[
            {
              start: { lat: 37.0902, lng: -95.7129 }, // USA
              end: { lat: -1.286389, lng: 36.817223 }, // Kenya (Nairobi)
            },
            {
              start: { lat: -1.286389, lng: 36.817223 }, // Kenya (Nairobi)
              end: { lat: 3.139, lng: 101.6869 }, // Malaysia (Kuala Lumpur)
            },
            {
              start: { lat: 3.139, lng: 101.6869 }, // Malaysia (Kuala Lumpur)
              end: { lat: 47.5162, lng: 14.5501 }, // Austria (Vienna)
            },
            {
              start: { lat: 47.5162, lng: 14.5501 }, // Austria (Vienna)
              end: { lat: 37.0902, lng: -95.7129 }, // Back to USA
            },
          ]}
        />
      </div>
      <div className="flex mt-6 md:flex-row flex-col justify-between items-center mb-24">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 George Okello
        </p>
        <div className="flex items-center gap-8 text-2xl md:text-18">
          <a
            href="https://www.artstation.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <BsFillCameraFill />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
