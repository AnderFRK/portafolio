import { 
  FiGithub, 
  FiExternalLink, 
  FiShare2,
  FiLock,
  FiCloud 
} from "react-icons/fi";

import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiWebrtc,
  SiAwsamplify,    
  SiAmazondynamodb,
  SiAmazons3,      
  SiGraphql,
  SiAwslambda,
  SiMysql,
  SiTensorflow
} from "react-icons/si";

export const subProjects = [
  /*{
    id: 1,
    title: "CRUD Dashboard para Gestion de Ventas, Compras e Inventario",
    description: "Página para gestionar ventas, compras e inventario. Desarrollada con React, Vite y Tailwind CSS. El proyecto es un CRUD básico sin funcionalidades avanzadas.",
    tech: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "TensorFlow.js", icon: <SiTensorflow className="text-orange-500" /> }
    ],
    github: "https://github.com/AnderFRK/LasuAppWebVisual",
    demo: "https://anderfrk.github.io/LasuAppWebVisual/",
  },*/
  {
    id: 1,
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
    github: "https://github.com/AnderFRK/VigilaAWS",
    demo: null,
  },
];