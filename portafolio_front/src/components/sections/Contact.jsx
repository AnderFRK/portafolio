import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; 

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Centrado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Contáctame
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Estoy disponible para oportunidades freelance y proyectos de desarrollo Full Stack. 
            <br />
            ¡Hablemos directamente y hagamos realidad tu idea!
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Contacto (3 columnas en PC, 1 en móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <FiMail size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-2">Email</h3>
            <a href="mailto:frank_04484@hotmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              frank_04484@hotmail.com
            </a>
          </motion.div>

          {/* 2. WhatsApp Card (Destacada) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 bg-slate-900/80 rounded-2xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all group text-center relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
              Más Rápido
            </div>
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
              <FaWhatsapp size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-2">WhatsApp</h3>
            <p className="text-slate-400 text-sm mb-4">Respondo en menos de 24h</p>
            <a 
              href="https://wa.me/51983572720?text=Hola%20Frank,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte." 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full font-medium transition-colors"
            >
              Chatear ahora
            </a>
          </motion.div>

          {/* 3. Ubicación Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <FiMapPin size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-2">Ubicación</h3>
            <p className="text-slate-400">
              Lima, Perú
              <br />
              <span className="text-sm opacity-70">(Disponible Remoto)</span>
            </p>
          </motion.div>

        </div>

        {/* Redes Sociales Centradas al final */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-slate-500 mb-6">O encuéntrame en mis redes</p>
          <div className="flex gap-6">
            <a 
              href="https://github.com/AnderFRK" 
              target="_blank" 
              rel="noreferrer" 
              className="p-4 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://pe.linkedin.com/in/frank-sumari" 
              target="_blank" 
              rel="noreferrer" 
              className="p-4 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-blue-600 hover:bg-blue-600 transition-all"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;