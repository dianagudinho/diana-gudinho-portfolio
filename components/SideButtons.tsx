'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

export default function SideButtons() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <motion.a
        href="mailto:dianagudinho16@gmail.com"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-dark-800/80 backdrop-blur-sm p-4 rounded-full border border-primary-500/30 hover:border-primary-500 hover:bg-dark-700 transition-all shadow-lg"
        title="Email"
      >
        <FaEnvelope className="w-5 h-5 text-red-400" />
      </motion.a>
      
      <motion.a
        href="https://www.linkedin.com/in/dianagudinho/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-dark-800/80 backdrop-blur-sm p-4 rounded-full border border-primary-500/30 hover:border-primary-500 hover:bg-dark-700 transition-all shadow-lg"
        title="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5 text-blue-400" />
      </motion.a>
      
      <motion.a
        href="https://github.com/dianagudinho"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-dark-800/80 backdrop-blur-sm p-4 rounded-full border border-primary-500/30 hover:border-primary-500 hover:bg-dark-700 transition-all shadow-lg"
        title="GitHub"
      >
        <FaGithub className="w-5 h-5 text-gray-300" />
      </motion.a>
      
      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-full hover:shadow-lg hover:shadow-primary-500/50 transition-all shadow-lg"
        title="Download Resume"
      >
        <FaDownload className="w-5 h-5 text-white" />
      </motion.a>
    </div>
  )
}

