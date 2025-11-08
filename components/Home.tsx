'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaDatabase, FaBrain, FaArrowDown, FaDownload } from 'react-icons/fa'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">Hey, Hi! This is Diana</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I'm a Data Scientist specializing in LLMs, RAG systems, and multi-agent architectures. 
              I build AI solutions that transform healthcare diagnostics, optimize supply chains, and 
              unlock actionable insights from complex data.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-dark-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/20">
                <FaBrain className="text-primary-400" />
                <span className="text-gray-300">AI & LLMs</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-accent-500/20">
                <FaDatabase className="text-accent-400" />
                <span className="text-gray-300">Data Engineering</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/20">
                <FaChartLine className="text-primary-400" />
                <span className="text-gray-300">Machine Learning</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#intro"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                Explore My Work
                <FaArrowDown className="animate-bounce" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-dark-800 border-2 border-primary-500/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-700 hover:border-primary-500 transition-all duration-300"
              >
                Download Resume
                <FaDownload />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
