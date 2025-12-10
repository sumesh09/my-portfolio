import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import  Leetcode  from "../assets/LeetCode.png";
export default function Contact() {
    const handleLeetCode = () => {
        window.open("https://leetcode.com/u/sumeshmishrs109/", "_blank");
    };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-8 py-24 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">Contact</h2>
      <p className="text-gray-300 mb-8">Let's connect!</p>

      <div className="flex justify-center gap-6 text-xl">
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
    </motion.section>
  );
}
