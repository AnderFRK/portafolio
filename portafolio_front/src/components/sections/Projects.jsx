import { motion } from "framer-motion";
import { projects } from "../../data/projects.jsx"; // Importamos los datos
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-4">
            Mis Proyectos Destacados
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Una selección de los trabajos técnicos más relevantes que he desarrollado, 
            desde aplicaciones web full-stack hasta soluciones móviles.
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-slate-800 rounded-full hover:bg-cyan-600 text-white transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-3 bg-slate-800 rounded-full hover:bg-cyan-600 text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800/50">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-800/50 px-2 py-1 rounded">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Más (Opcional) */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/AnderFRK?tab=repositories" 
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500 transition-all hover:bg-slate-800"
          >
            <FiGithub /> Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;