'use client'

import { motion } from 'framer-motion'
import { FaPython, FaRProject, FaChartBar, FaDatabase, FaCode, FaBrain } from 'react-icons/fa'
import { 
  SiPowerbi, SiTableau, SiJupyter, SiPostgresql, SiPytorch, SiTensorflow, 
  SiApacheairflow, SiAmazonaws, SiGooglecloud,
  SiDocker, SiKubernetes, SiJenkins, SiGit,
  SiMongodb, SiRedis
} from 'react-icons/si'

const skills = [
  // Programming Languages
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', category: 'Language' },
  { name: 'SQL', icon: SiPostgresql, color: 'text-blue-500', category: 'Language' },
  { name: 'R', icon: FaRProject, color: 'text-blue-400', category: 'Language' },
  { name: 'Scala', icon: FaCode, color: 'text-red-400', category: 'Language' },
  
  // ML/AI Frameworks
  { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-400', category: 'ML Framework' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', category: 'ML Framework' },
  { name: 'Keras', icon: FaBrain, color: 'text-red-500', category: 'ML Framework' },
  { name: 'Scikit-learn', icon: FaCode, color: 'text-orange-300', category: 'ML Framework' },
  
  // Data Libraries
  { name: 'Pandas', icon: FaDatabase, color: 'text-blue-400', category: 'Data Library' },
  { name: 'NumPy', icon: FaCode, color: 'text-blue-600', category: 'Data Library' },
  
  // Visualization
  { name: 'Power BI', icon: SiPowerbi, color: 'text-yellow-500', category: 'Visualization' },
  { name: 'Tableau', icon: SiTableau, color: 'text-blue-600', category: 'Visualization' },
  { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-500', category: 'Visualization' },
  { name: 'Statistics', icon: FaChartBar, color: 'text-purple-400', category: 'Visualization' },
  
  // Cloud & Infrastructure
  { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-300', category: 'Cloud' },
  { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-400', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500', category: 'Cloud' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-400', category: 'Cloud' },
  
  // Data Engineering
  { name: 'Airflow', icon: SiApacheairflow, color: 'text-red-400', category: 'Data Engineering' },
  { name: 'Kafka', icon: FaDatabase, color: 'text-red-500', category: 'Data Engineering' },
  { name: 'Snowflake', icon: FaDatabase, color: 'text-blue-300', category: 'Data Engineering' },
  { name: 'Databricks', icon: FaCode, color: 'text-blue-400', category: 'Data Engineering' },
  
  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500', category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', category: 'Database' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500', category: 'Database' },
  
  // DevOps
  { name: 'Jenkins', icon: SiJenkins, color: 'text-blue-500', category: 'DevOps' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500', category: 'DevOps' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tools & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to build production-ready AI solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-primary-500/20 hover:border-primary-500/40 hover:bg-dark-700/50 transition-all"
                >
                  <IconComponent className={`w-8 h-8 ${skill.color}`} />
                  <span className="text-sm text-gray-300 text-center font-medium">{skill.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
