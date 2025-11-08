'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'University at Buffalo',
    location: 'New York, USA',
    period: 'Aug 2023 - Feb 2025',
    description: 'Advanced expertise in AI, NLP, Machine Learning, and Cloud technologies. Specialized in Generative AI, Computer Vision, and building production-ready AI solutions.',
    achievements: [
      'Research Assistant Position',
      'Focus on LLMs and RAG Systems',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Information Science',
    institution: 'Visvesvaraya Technological University',
    location: 'India',
    period: 'Aug 2016 - Aug 2020',
    description: 'Comprehensive foundation in computer science, data structures, algorithms, and software engineering principles',
    achievements: [
      'Software Engineering Internship',
      'Full-Stack Development Experience',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark-700 p-8 rounded-xl hover:bg-dark-600 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <FaGraduationCap className="text-primary-400 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-accent-400 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                  <p className="text-primary-400 text-sm font-semibold">{edu.period}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

