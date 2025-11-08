'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaDatabase, FaBrain } from 'react-icons/fa'

const projects = [
  {
    title: 'AI-Powered Skill Gap Analyzer',
    description: 'Deployed a containerized microservice with Ollama and NLP models to identify skill gaps and recommend personalized learning paths, driving a 35% increase in feature adoption.',
    technologies: ['Python', 'Ollama', 'NLP', 'Docker', 'Microservices'],
    category: 'AI & NLP',
    icon: FaBrain,
    color: 'from-purple-500 to-pink-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
  {
    title: 'RAG Compliance Copilot',
    description: 'Built a retrieval-augmented assistant to auto-summarize and flag risks in regulatory documents, cutting manual review time by 35% and improving issue detection accuracy.',
    technologies: ['Python', 'RAG', 'LLMs', 'Vector DB', 'LangChain'],
    category: 'Generative AI',
    icon: FaBrain,
    color: 'from-blue-500 to-cyan-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
  {
    title: 'Customer Retention Insights',
    description: 'Integrated classifiers with LLM-driven narrative generation to produce human-readable churn insights, improving adoption of retention strategies by 15%.',
    technologies: ['Python', 'LLMs', 'Classification', 'NLP', 'XGBoost'],
    category: 'Machine Learning',
    icon: FaChartLine,
    color: 'from-green-500 to-emerald-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
  {
    title: 'E-Commerce Product Catalog Enrichment',
    description: 'Fine-tuned LLaMA + GPT ensemble for attribute extraction, boosting catalog completeness by 28%.',
    technologies: ['Python', 'LLaMA', 'GPT', 'Fine-tuning', 'Ensemble'],
    category: 'LLM & NLP',
    icon: FaBrain,
    color: 'from-orange-500 to-red-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
  {
    title: 'Demand Forecasting System',
    description: 'Built demand forecasting models using XGBoost and LSTM on 50K+ SKUs, improving stock accuracy and cutting procurement spend by $470K annually.',
    technologies: ['Python', 'XGBoost', 'LSTM', 'Time Series', 'PyTorch'],
    category: 'Forecasting',
    icon: FaChartLine,
    color: 'from-indigo-500 to-purple-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
  {
    title: 'Multi-Agent GenAI Workflows',
    description: 'Prototyped multi-agent GenAI workflows that coordinated retrieval, reasoning, and summarization tasks, reducing validation time by 30%.',
    technologies: ['Python', 'Multi-Agent Systems', 'RAG', 'LLMs', 'PyTorch'],
    category: 'Generative AI',
    icon: FaBrain,
    color: 'from-teal-500 to-blue-500',
    link: '#',
    github: 'https://github.com/dianagudinho',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing data-driven solutions and analytical insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-800 rounded-xl overflow-hidden hover:bg-dark-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                    <project.icon className={`w-6 h-6 text-white`} />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <span className="text-xs text-primary-400 font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

