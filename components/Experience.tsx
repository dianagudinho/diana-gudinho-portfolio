'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    title: 'Research Assistant',
    company: 'University at Buffalo',
    location: 'New York, USA',
    period: 'Feb 2025 - Present',
    description: [
      'Improved diagnostic QA accuracy by 22% on 10K+ MRI scans by combining embedding-driven retrieval with fine-tuned LLMs to surface relevant prior cases for radiologists',
      'Prototyped multi-agent GenAI workflows that coordinated retrieval, reasoning, and summarization tasks, reducing validation by 30%',
      'Optimized model training with distributed PyTorch and GPU scheduling, cutting training cycles by 25%',
    ],
  },
  {
    title: 'Graduate Student Assistant',
    company: 'University at Buffalo',
    location: 'New York, USA',
    period: 'Aug 2024 - Dec 2024',
    description: [
      'Developed a customer intelligence solution using LLM-based text generation and prompt engineering to analyze unstructured campaign data, driving an 18% increase in marketing ROI',
      'Designed a RAG pipeline to integrate structured and unstructured records, enabling semantic search and faster reporting by 45%',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Tata Consultancy Services Ltd.',
    location: 'India',
    period: 'Oct 2020 - June 2023',
    description: [
      'Built demand forecasting models using XGBoost and LSTM on 50K+ SKUs, improving stock accuracy, which cut procurement spend by $470K annually',
      'Designed pricing and margin models on transactional data, uncovering low-performing SKUs and guiding adjustments that lifted product profitability by 12%',
      'Engineered pipelines on AWS Glue, Redshift, and S3, processing 5M+ daily records to give executives near real-time visibility',
      'Applied clustering and anomaly detection on 100K+ distribution routes to uncover inefficiencies, reducing delays by 17% and improving fleet utilization',
      'Conducted regression and root cause analysis on supplier and claims data, improving compliance report accuracy by 25% while also lowering financial risk exposure',
      'Built Tableau dashboards for fulfillment and cost KPIs; cut refresh time by 40% and improved stakeholder adoption by 30%',
      'Automated retraining workflows and CI/CD pipelines, cutting release cycles by 30% and improving production model reliability',
      'Defined KPIs with finance, logistics, and product teams, embedding metrics like SLA compliance and forecast accuracy into daily decisions',
    ],
  },
  {
    title: 'Full-Stack Software Engineering Intern',
    company: 'QSpiders',
    location: 'India',
    period: 'Jul 2019 - Aug 2019',
    description: [
      'Optimized PostgreSQL queries and indexing for 8K+ sessions, cutting response times by 45% and stabilizing peak-hour performance',
      'Built automated Excel templates for weekly summaries, streamlining issue tracking for managers',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in data analysis and business intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex items-start gap-6 pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10" />

                  <div className="flex-1">
                    <div className="bg-dark-800 p-6 rounded-xl hover:bg-dark-700 transition-colors border-l-2 border-primary-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <FaBriefcase className="text-primary-400" />
                        <span className="text-primary-400 text-sm font-semibold">{exp.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-accent-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2 text-sm leading-relaxed">
                            <span className="text-primary-400 mt-1.5 flex-shrink-0">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

