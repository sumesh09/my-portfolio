import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import  Leetcode  from "../assets/LeetCode.png";
export default function Footer() {
    const handleLeetCode = () => {
        window.open("https://leetcode.com/u/sumeshmishrs109/", "_blank");
    };
  return (
    <footer className="w-full py-8 mt-16 bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-sm">&copy; {new Date().getFullYear()} Sumesh Mishra</div>

      {/* <h2 className="text-4xl font-bold mb-6 text-cyan-400">Contact</h2>
      <p className="text-gray-300 mb-8">Let's connect!</p> */}

      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/sumesh09" className="text-cyan-400">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/sumesh-mishra-ab5a10133/" className="text-cyan-400">
          <Linkedin />
        </a>
        <a href="mailto:sumeshmishrs109@gmail.com" className="text-cyan-400">
          <Mail />
        </a>
        
        <img src={Leetcode} onClick={handleLeetCode} className="leetcode text-cyan-400 hover:cursor-pointer">
        </img>
      </div>

       <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-4 py-2 rounded-md border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Back to top
        </button>
        </div>
    </footer>
  );
}
