import Home from '@/components/Home'
import Intro from '@/components/Intro'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Home />
      <Intro />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

