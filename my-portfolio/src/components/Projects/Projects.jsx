import { motion } from "framer-motion";
import { projects } from "../../data/projects";
export default function Projects() {

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-8 py-24 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-cyan-400">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className={"p-6 rounded-2xl bg-gray-900/40 border border-gray-700 text-white"}
        >
            <div className="h-48 overflow-hidden">
                <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                    <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md font-medium"
                    >
                    {t}
                    </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
