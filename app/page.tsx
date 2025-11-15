'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Technologies } from '@/components/technologies'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { ParticlesBackground } from '@/components/particles-background'

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
