import { motion } from "framer-motion";
import { subProjects } from "../../data/sub_project.jsx";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const Sub_Projects = () => {
  return (
    <section id="sub-projects" className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-4">
            Otros Proyectos y Experimentos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Proyectos más pequeños, pruebas de concepto o aplicaciones en las que he trabajado para aprender nuevas tecnologías.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group relative flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-4">
                <FiFolder className="text-cyan-500/50 text-3xl group-hover:text-cyan-400 transition-colors" />
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      title="Ver código en GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      title="Ver Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sub_Projects;