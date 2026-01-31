import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MdVerified } from "react-icons/md"; // <--- 1. IMPORT NUEVO
import profileImg from "../../assets/images/profile/perfil.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-medium tracking-wide mb-4">
              MI NOMBRE ES
            </h2>
            
            {/* --- AQUÍ ESTÁ EL CAMBIO PRINCIPAL --- */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight flex items-center gap-3 justify-center md:justify-start">
              Frank Anderson 
              <MdVerified className="text-cyan-400 text-4xl md:text-6xl" /> 
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-400 mb-6">
              Desarrollador de Software Freelance
            </h3>
            <p className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                Desarrollador de software egresado, apasionado por transformar ideas en
                soluciones funcionales. Me adapto a la tecnología que cada proyecto requiere,
                cuidando la calidad y estructura del código.
            </p>

            {/* Botones de Acción */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Ver Proyectos
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="https://github.com/AnderFRK" target="_blank" className="text-slate-400 hover:text-white transition-colors"><FiGithub size={24}/></a>
                <a href="https://pe.linkedin.com/in/frank-sumari" target="_blank" className="text-slate-400 hover:text-white transition-colors"><FiLinkedin size={24}/></a>
                <a href="mailto:frank_04484@hotmail.com" className="text-slate-400 hover:text-white transition-colors"><FiMail size={24}/></a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Marco decorativo giratorio */}
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
            
            {/* Imagen con máscara circular */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10">
               <img 
                 src={profileImg} 
                 alt="Foto de perfil" 
                 className="w-full h-full object-cover"
               />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;