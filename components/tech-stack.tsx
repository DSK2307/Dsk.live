"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface TechItem {
  name: string
  icon: React.ReactNode
  category: string
  proficiency: number
}
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaAws, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiExpress, SiFramer, SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiGooglecloud, SiPostman, SiVercel, SiFigma, SiFlask, SiDjango, SiTensorflow, SiPytorch, SiHtml5, SiStripe } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const techItems = [
  // Frontend / Web
  { name: 'Next.js', icon: <SiNextdotjs size={32} />, category: 'frontend', proficiency: 90, color: '#000000' },
  { name: 'React', icon: <FaReact size={32} />, category: 'frontend', proficiency: 88, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript size={32} />, category: 'frontend', proficiency: 85, color: '#007ACC' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, category: 'frontend', proficiency: 90, color: '#06B6D4' },
  { name: 'HTML5', icon: <SiHtml5 size={32} />, category: 'frontend', proficiency: 92, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt size={32} />, category: 'frontend', proficiency: 90, color: '#1572B6' },
  { name: 'Framer Motion', icon: <SiFramer size={32} />, category: 'frontend', proficiency: 80, color: '#0081F1' },
  { name: 'Shad-cn', icon: <SiShadcnui size={32} />, category: 'frontend', proficiency: 85, color: '#0081F1' },
  { name: 'Clerk', icon: <span style={{fontSize: 26, fontWeight: 'bold', color: '#6C47FF'}}>CL</span>, category: 'frontend', proficiency: 80, color: '#6C47FF' },
  { name: 'Stripe', icon: <SiStripe size={32} />, category: 'frontend', proficiency: 78, color: '#008CDD' },

  // Backend
  { name: 'Python', icon: <FaPython size={32} />, category: 'backend', proficiency: 92, color: '#3776AB' },
  { name: 'Flask', icon: <SiFlask size={32} />, category: 'backend', proficiency: 88, color: '#000000' },
  { name: 'Django', icon: <SiDjango size={32} />, category: 'backend', proficiency: 82, color: '#092E20' },
  { name: 'Node.js', icon: <FaNodeJs size={32} />, category: 'backend', proficiency: 85, color: '#68A063' },
  { name: 'Express', icon: <SiExpress size={32} />, category: 'backend', proficiency: 82, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, category: 'backend', proficiency: 88, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, category: 'backend', proficiency: 80, color: '#336791' },
  { name: 'MySQL', icon: <SiMysql size={32} />, category: 'backend', proficiency: 82, color: '#4479A1' },
  { name: 'Firebase', icon: <SiFirebase size={32} />, category: 'backend', proficiency: 82, color: '#FFCA28' },

  // AI/ML
  { name: 'TensorFlow', icon: <SiTensorflow size={32} />, category: 'ai', proficiency: 82, color: '#FF6F00' },
  { name: 'PyTorch', icon: <SiPytorch size={32} />, category: 'ai', proficiency: 80, color: '#EE4C2C' },
  { name: 'OpenCV', icon: <span style={{fontSize: 22, fontWeight: 'bold', color: '#5C3EE8'}}>CV</span>, category: 'ai', proficiency: 82, color: '#5C3EE8' },
  { name: 'LangGraph', icon: <span style={{fontSize: 22, fontWeight: 'bold', color: '#1C3C3C'}}>LG</span>, category: 'ai', proficiency: 82, color: '#1C3C3C' },
  { name: 'Python', icon: <FaPython size={32} />, category: 'ai', proficiency: 92, color: '#3776AB' },
  { name: 'MediaPipe', icon: <span style={{fontSize: 22, fontWeight: 'bold', color: '#00C9FF'}}>MP</span>, category: 'ai', proficiency: 80, color: '#00C9FF' },
  { name: 'Gemini API', icon: <span style={{fontSize: 32}}>✨</span>, category: 'ai', proficiency: 82, color: '#4285F4' },
  { name: 'SAM2', icon: <span style={{fontSize: 22, fontWeight: 'bold', color: '#FF6B6B'}}>SAM</span>, category: 'ai', proficiency: 78, color: '#FF6B6B' },


  // Tools
  { name: 'Git', icon: <FaGitAlt size={32} />, category: 'tools', proficiency: 92, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker size={32} />, category: 'tools', proficiency: 80, color: '#2496ED' },
  { name: 'AWS', icon: <FaAws size={32} />, category: 'tools', proficiency: 78, color: '#FF9900' },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} />, category: 'tools', proficiency: 80, color: '#4285F4' },
  { name: 'VS Code', icon: <VscVscode size={32} />, category: 'tools', proficiency: 95, color: '#007ACC' },
  { name: 'Postman', icon: <SiPostman size={32} />, category: 'tools', proficiency: 85, color: '#FF6C37' },
  { name: 'Vercel', icon: <SiVercel size={32} />, category: 'tools', proficiency: 85, color: '#000000' },
  { name: 'Figma', icon: <SiFigma size={32} />, category: 'tools', proficiency: 75, color: '#F24E1E' },
];

export default techItems;


export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const categories = [
    { id: "frontend", name: "Web" },
    { id: "backend", name: "Backend" },
    { id: "ai", name: "AI/ML" },
    { id: "tools", name: "Tools" },
  ]

  const filteredTech = techItems.filter((item) => item.category === activeCategory)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id ? "bg-white text-black" : "bg-black/40 text-white hover:bg-white/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredTech.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative group"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className={`relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:-translate-y-1 ${
                hoveredTech === tech.name ? "border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : ""
              }`}
            >
              <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500 group-hover:h-1.5 group-hover:bg-blue-400" style={{ width: `${tech.proficiency}%` }}></div>
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 
                  {tech.icon}
                </div>
                <h3 className="text-center font-medium text-white transition-colors duration-300 group-hover:text-blue-300">{tech.name}</h3>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
