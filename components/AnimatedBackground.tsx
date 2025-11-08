'use client'

import { motion } from 'framer-motion'
import { FaCircle } from 'react-icons/fa'

// Randomly distributed circles
const floatingObjects = [
  { icon: FaCircle, size: 8, delay: 0, duration: 8, color: 'text-primary-400', x: 15, y: 20 },
  { icon: FaCircle, size: 12, delay: 1, duration: 10, color: 'text-accent-400', x: 85, y: 15 },
  { icon: FaCircle, size: 10, delay: 0.5, duration: 12, color: 'text-primary-300', x: 25, y: 60 },
  { icon: FaCircle, size: 14, delay: 2, duration: 9, color: 'text-accent-300', x: 70, y: 45 },
  { icon: FaCircle, size: 9, delay: 1.5, duration: 11, color: 'text-primary-500', x: 45, y: 30 },
  { icon: FaCircle, size: 16, delay: 3, duration: 8, color: 'text-accent-500', x: 90, y: 70 },
  { icon: FaCircle, size: 6, delay: 2.5, duration: 13, color: 'text-primary-400', x: 10, y: 80 },
  { icon: FaCircle, size: 11, delay: 4, duration: 10, color: 'text-accent-400', x: 55, y: 10 },
  { icon: FaCircle, size: 13, delay: 3.5, duration: 9, color: 'text-primary-300', x: 30, y: 85 },
  { icon: FaCircle, size: 7, delay: 5, duration: 11, color: 'text-accent-300', x: 75, y: 25 },
  { icon: FaCircle, size: 15, delay: 4.5, duration: 8, color: 'text-primary-500', x: 5, y: 50 },
  { icon: FaCircle, size: 9, delay: 6, duration: 10, color: 'text-accent-500', x: 60, y: 65 },
  { icon: FaCircle, size: 12, delay: 5.5, duration: 12, color: 'text-primary-400', x: 40, y: 75 },
  { icon: FaCircle, size: 8, delay: 7, duration: 9, color: 'text-accent-400', x: 20, y: 40 },
  { icon: FaCircle, size: 10, delay: 6.5, duration: 11, color: 'text-primary-300', x: 80, y: 55 },
  { icon: FaCircle, size: 14, delay: 8, duration: 8, color: 'text-accent-300', x: 50, y: 90 },
]

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Blue Blob - More Visible */}
      <motion.div
        className="absolute w-[800px] h-[800px] opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(14, 165, 233, 0.6) 0%, rgba(14, 165, 233, 0.2) 50%, transparent 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: [
            '0%',
            '30%',
            '60%',
            '30%',
            '0%',
          ],
          y: [
            '0%',
            '40%',
            '20%',
            '50%',
            '0%',
          ],
          scale: [1, 1.2, 0.9, 1.1, 1],
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 50% 50% / 70% 30% 50% 50%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Accent Purple Blob - More Visible */}
      <motion.div
        className="absolute w-[900px] h-[900px] opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 70% 60%, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
          borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          right: '10%',
          bottom: '20%',
        }}
        animate={{
          x: [
            '0%',
            '-35%',
            '-20%',
            '-40%',
            '0%',
          ],
          y: [
            '0%',
            '30%',
            '60%',
            '30%',
            '0%',
          ],
          scale: [1, 0.8, 1.3, 0.9, 1],
          borderRadius: [
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '50% 50% 50% 50% / 50% 50% 50% 50%',
            '40% 60% 60% 40% / 70% 30% 70% 30%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Secondary Blue Blob - More Visible */}
      <motion.div
        className="absolute w-[700px] h-[700px] opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(56, 189, 248, 0.5) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 100%)',
          borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
          left: '50%',
          top: '50%',
        }}
        animate={{
          x: [
            '0%',
            '50%',
            '20%',
            '45%',
            '0%',
          ],
          y: [
            '0%',
            '-30%',
            '40%',
            '-20%',
            '0%',
          ],
          scale: [1, 1.4, 0.7, 1.2, 1],
          borderRadius: [
            '40% 60% 60% 40% / 70% 30% 70% 30%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '50% 50% 50% 50% / 50% 50% 50% 50%',
            '30% 70% 70% 30% / 60% 40% 60% 40%',
            '40% 60% 60% 40% / 70% 30% 70% 30%',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Floating Circles - Randomly Distributed */}
      {floatingObjects.map((obj, index) => {
        const offsetX = Math.sin(index * 2) * 40
        const offsetY = Math.cos(index * 3) * 40
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${obj.x}%`,
              top: `${obj.y}%`,
            }}
            animate={{
              x: [0, offsetX, -offsetX * 0.6, offsetX * 0.8, 0],
              y: [0, offsetY, -offsetY * 0.6, offsetY * 0.8, 0],
              opacity: [0.4, 0.7, 0.3, 0.6, 0.4],
              scale: [1, 1.3, 0.8, 1.2, 1],
            }}
            transition={{
              duration: obj.duration,
              delay: obj.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <obj.icon 
              className={`${obj.color} opacity-60`}
              style={{ fontSize: `${obj.size}px` }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
