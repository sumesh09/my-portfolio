import { motion } from "framer-motion";
import helloWave from "../assets/helloWave.gif";
import bgImage from "../assets/bgImage.gif";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
         <div className="absolute inset-0 bg-black/40"></div>
      <div className="md:flex">
        <img
          src={helloWave}
          alt="Hello waving"
          className="w-60 h-60 mb-6 mx-auto rounded-xl shadow-lg"
        />
        <div className="mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={"text-gray-300 max-w-xl relative text-white text-5xl md:text-3xl font-extrabold drop-shadow-lg"}
          >
            Welcome! This is my Portfolio and I am {" "}
            <span className="text-cyan-400">Sumesh Mishra</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 md:text-xl max-w-xl"
          >
            Frontend Developer • React • TypeScript
          </motion.p>
        </div>
      </div>
    </section>
  );
}
