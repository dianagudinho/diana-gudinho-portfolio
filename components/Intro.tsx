'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const facts = [
  {
    title: '4+ Years Experience',
    description: 'Designing AI solutions that drive business impact across healthcare, supply chain, and retail industries',
  },
  {
    title: 'LLM & RAG Expertise',
    description: 'Specialized in deploying LLMs, RAG systems, and multi-agent architectures to improve decision-making',
  },
  {
    title: 'End-to-End Solutions',
    description: 'Building scalable, production-ready AI pipelines with cloud-native deployments',
  },
  {
    title: 'Research & Innovation',
    description: 'Currently pursuing Master\'s in Data Science at University at Buffalo, exploring Generative AI, Computer Vision, and NLP',
  },
  {
    title: 'Business Impact',
    description: 'Translating complex data into actionable strategies that create measurable value',
  },
  {
    title: 'Production Focus',
    description: 'Experienced in automating workflows, CI/CD pipelines, and improving production model reliability',
  },
]

export default function Intro() {
  return (
    <section id="intro" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-primary-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{fact.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{fact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
