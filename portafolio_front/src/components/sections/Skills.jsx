import { motion } from "framer-motion";
import { 
  SiPhp, SiLaravel, SiReact, SiCss3, SiTailwindcss, 
  SiLua, SiMysql, SiSqlite, SiMongodb, SiExpress, 
  SiNodedotjs, SiPython, SiAmazons3, SiAwslambda,
  SiHtml5, SiJquery, SiJavascript, SiPandas, SiNumpy, 
  SiTensorflow, SiGit, SiGithub 
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa"; 

const Skills = () => {
  
  const categories = [
    {
      title: "Frontend & UI",
      skills: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
      ]
    },
    {
      title: "Backend & Scripting",
      skills: [
        { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-slate-400" /> },
        { name: "Java", icon: <FaJava className="text-orange-400" /> },
        { name: "Lua (Roblox)", icon: <SiLua className="text-blue-400" /> },
      ]
    },
    {
      title: "IA & Data Science",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-300" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "TensorFlow.js", icon: <SiTensorflow className="text-yellow-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-indigo-400" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      ]
    },
    {
      title: "Cloud, DB & Herramientas",
      skills: [
        { name: "AWS Core", icon: <FaAws className="text-orange-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "SQLite", icon: <SiSqlite className="text-sky-300" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Arsenal Tecnológico
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Desde el desarrollo web Full Stack hasta la Inteligencia Artificial y la Nube.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/50 transition-all cursor-default group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                      {skill.name}
                    </span>
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

export default Skills;