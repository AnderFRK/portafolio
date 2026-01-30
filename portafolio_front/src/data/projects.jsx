import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiReact, SiOracle, SiSqlite, SiPhp, SiCss3, SiMongodb, SiNodedotjs, SiAndroid, SiTailwindcss } from "react-icons/si";
import foroImg from "../assets/images/projects/foroejem.png";
export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Inventario, Incidencias y Aulas",
    description: "Aplicación web desarrollada en PHP nativo para la gestión de inventario, incidencias y aulas, con distintos niveles de acceso según el tipo de usuario.",
    tech: [
      { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    ],
    github: "https://github.com/AnderFRK/gestion_infouni",
    demo: "#",
    image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=Sistema+Ventas", 
  },
  {
    id: 2,
    title: "Foro Imageboard AESF (En Desarrollo)",
    description: "Foro tipo imageboard, Permite a los usuarios publicar imágenes y comentarios de forma anónima. Desarrollado con el stack MERN.",
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Express", icon: <SiNodedotjs className="text-gray-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },

    ],
    github: "https://github.com/portafolioFRK/TU_REPO_FORO",
    demo: "#",
    image: foroImg,
  },
  {
    id: 3,
    title: "Catalogo Virtual Dinamico con App Sheet",
    description: "Aplicacion web que agrega productos de forma dinámica utilizando App Sheet. Ideal para pequeñas empresas que desean un catálogo en línea sin complicaciones.",
    tech: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
    github: "https://github.com/AnderFRK/Catologo-Virtual",
    demo: null,
    image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=Android+App",
  },
    {
    id: 4,
    title: "Aplicacion de Gestion de Inventario,Venta y Compras",
    description: "Aplicación nativa Android desarrollada en Java. Utiliza SQLite para almacenamiento local y exportación de bases de datos.",
    tech: [
      { name: "Java", icon: <SiOracle className="text-orange-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-500" /> },
    ],
    github: "https://github.com/AnderFRK/AppLASU",
    demo: null,
    image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=Android+App",
  },
];