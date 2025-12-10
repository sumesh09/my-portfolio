import { motion } from "framer-motion";
import {skills} from "../data/skills";
export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-8 py-24 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.08 }}
            className={"p-4 border rounded-xl text-center border-gray-700 bg-gray-900/40 text-white hover:bg-cyan-400"}
        >
            {s}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
