'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Diana Minine Gudinho. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-500 w-4 h-4" />
            </motion.span>
            <span>using Next.js, React & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

