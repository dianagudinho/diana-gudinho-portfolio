'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            I'm always open to discussing data projects, opportunities, or just having a chat about data science!
          </p>
          <p className="text-primary-400 font-medium">
            Let's collaborate and build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-primary-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:dianagudinho16@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-colors"
                >
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <FaEnvelope className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">dianagudinho16@gmail.com</p>
                  </div>
                </motion.a>
                <motion.div
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg"
                >
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">New York, USA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-primary-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://www.linkedin.com/in/dianagudinho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-colors"
                >
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <FaLinkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold">linkedin.com/in/dianagudinho</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/dianagudinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700 transition-colors"
                >
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <FaGithub className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white font-semibold">github.com/dianagudinho</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
