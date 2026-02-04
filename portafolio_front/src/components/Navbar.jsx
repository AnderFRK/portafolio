import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiCode, FiDownload } from "react-icons/fi";
import cvFile from "../assets/images/cv/CVFrankSumari.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div 
              className="flex-shrink-0 cursor-pointer flex items-center gap-2"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <FiCode className="text-cyan-400 text-3xl" /> 
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                Ander Dev
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-300 hover:text-cyan-400 hover:scale-105 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}

                <a 
                  href={cvFile} 
                  download="CV_Frank_Sumari.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 rounded-lg transition-all hover:scale-105 font-medium text-sm"
                >
                  <FiDownload />
                  <span>CV</span>
                </a>
              </div>
            </div>

            <div className="hidden md:flex gap-4 ml-4">
              <a href="https://github.com/AnderFRK" target="_blank" className="text-slate-300 hover:text-white transition-colors"><FiGithub size={20}/></a>
              <a href="https://pe.linkedin.com/in/frank-sumari" target="_blank" className="text-slate-300 hover:text-white transition-colors"><FiLinkedin size={20}/></a>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-900 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-slate-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                
                <a 
                  href={cvFile}
                  download="CV_Frank_Sumari.pdf"
                  className="flex items-center gap-2 text-cyan-400 font-bold block px-3 py-2 rounded-md text-base"
                >
                  <FiDownload /> Descargar CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;