import { FiGithub, FiExternalLink, FiLock, FiCloud } from "react-icons/fi";
import { BsFiletypeXml } from "react-icons/bs";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiAwsamplify,
  SiAmazondynamodb,
  SiAmazons3,
  SiAwslambda,
  SiTailwindcss,
  SiGraphql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiSqlite,
  SiLaravel,
  SiAndroidstudio
} from "react-icons/si";

import foroImg from "../assets/images/projects/foroejem.png";
import infouniImg from "../assets/images/projects/infouni.png";
import catalogoImg from "../assets/images/projects/catalogo.png";
import androidImg from "../assets/images/projects/app.png";

export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Inventario, Incidencias y Aulas",
    description: "Aplicación web desarrollada en PHP nativo para la gestión de inventario, incidencias y aulas, con distintos niveles de acceso según el tipo de usuario.",
    tech: [
      { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
    github: "https://github.com/AnderFRK/gestion_infouni",
    demo: "#",
    image: infouniImg, 
  },
  {
    id: 2,
    title: "Foro Imageboard AESF (En Desarrollo)",
    description: "Foro tipo imageboard. Permite a los usuarios publicar imágenes y comentarios de forma anónima. Desarrollado con el stack MERN.",
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
    title: "Catálogo Virtual Dinámico con AppSheet",
    description: "Aplicación web que agrega productos de forma dinámica utilizando AppSheet. Ideal para pequeñas empresas que desean un catálogo en línea sin complicaciones.",
    tech: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
    github: "https://github.com/AnderFRK/Catologo-Virtual",
    demo: null,
    image: catalogoImg,
  },
  {
    id: 4,
    title: "Aplicación de Gestión de Inventario, Venta y Compras",
    description: "Aplicación nativa Android desarrollada en Java. Utiliza SQLite para almacenamiento local y exportación de bases de datos.",
    tech: [
      { name: "Java", icon: <SiOracle className="text-orange-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-500" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
      { name: "XML", icon: <BsFiletypeXml className="text-blue-400" /> },
    ],
    github: "https://github.com/AnderFRK/AppLASU",
    demo: null,
    image: androidImg,
  },
  {
    id: 5,
    title: "Proyecto de AWS de Instituto",
    description: "Proyecto básico de AWS para conocer sus funcionalidades serverless y de gestión de usuarios.",
    tech: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "AWS Amplify", icon: <SiAwsamplify className="text-orange-400" /> },
      { name: "Amazon Cognito", icon: <FiLock className="text-red-400" /> },
      { name: "Amazon DynamoDB", icon: <SiAmazondynamodb className="text-blue-400" /> },
      { name: "Amazon S3", icon: <SiAmazons3 className="text-yellow-400" /> },
      { name: "AWS AppSync", icon: <SiGraphql className="text-pink-400" /> },
      { name: "AWS Lambda", icon: <SiAwslambda className="text-orange-500" /> },
      { name: "IAM", icon: <FiLock className="text-purple-400" /> },
      { name: "CloudFormation", icon: <FiCloud className="text-indigo-400" /> },
    ],
    github: "https://github.com/AnderFRK/ProyectoEjemplo5",
    demo: null,
    image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=Proyecto+AWS",
  },
  {
    id: 6,
    title: "CRM para Gestión de Clientes (No Disponible)",
    description: "CRM desarrollado en Laravel con React + Tailwind CSS. El proyecto no está disponible.",
    tech: [
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
    github: null,
    demo: null,
    image: "https://via.placeholder.com/600x400/0f172a/38bdf8?text=CRM+Privado",
  },
];