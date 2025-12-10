import { motion } from "framer-motion";
import aboutMe from "../assets/aboutMe.gif";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-8 py-24 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
      <div className="flex justify-center">
        <p className={ "text-gray-300 h-60 w-200 md:text-2xl leading-relaxed"}>
            I'm a passionate Frontend Developer with 5+ years of expertise in React, TypeScript,
            and building scalable UI systems. I enjoy solving complex UI challenges
            and creating delightful user experiences.
        </p>
        <img
            src={aboutMe}
            alt="Hello waving"
            className="w-60 h-60 mb-6 mx-auto rounded-xl shadow-lg"
        />
      </div>
    </motion.section>
  );
}
