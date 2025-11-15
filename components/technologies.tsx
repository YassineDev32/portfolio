'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
    ],
  },
  {
    category: 'Backend & Web Services',
    items: [
      { name: 'Spring Boot', icon: '🌱' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'REST API', icon: '🔌' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'Java', icon: '☕' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Jenkins', icon: '⚙️' },
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Jira', icon: '🎯' },
      { name: 'AWS', icon: '☁️' },
    ],
  },
  {
    category: 'Security',
    items: [
      { name: 'Spring Security', icon: '🛡️' },
      { name: 'JWT', icon: '🔐' },
      { name: 'OAuth2', icon: '🔑' },
    ],
  },
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile Scrum', icon: '🔄' },
      { name: 'CI/CD', icon: '🚀' },
      { name: 'DevOps', icon: '⚡' },
    ],
  },
]

export function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="technologies" className="py-20 px-4 bg-muted/10" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Technologies & Skills
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to build innovative digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + techIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 space-y-4 h-full hover:shadow-lg hover:shadow-primary/5 border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">
                    {tech.category}
                  </h3>
                  <div className="space-y-3">
                    {tech.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + techIndex * 0.1 + itemIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.02, 
                          backgroundColor: 'rgba(255, 107, 53, 0.1)',
                          borderColor: 'rgb(255, 107, 53)'
                        }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-primary/20 transition-all duration-200"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium text-foreground">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Learning</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="space-y-2"
                >
                  <p className="font-semibold text-foreground">🏆 AWS Academy Cloud Developing</p>
                  <p className="text-sm text-muted-foreground">AWS</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="space-y-2"
                >
                  <p className="font-semibold text-foreground">🐳 Introduction to Docker</p>
                  <p className="text-sm text-muted-foreground">DataScientist.fr</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="space-y-2"
                >
                  <p className="font-semibold text-foreground">📦 Git and GitHub</p>
                  <p className="text-sm text-muted-foreground">365 Data Science</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="space-y-2"
                >
                  <p className="font-semibold text-foreground">💻 Complete Web Development</p>
                  <p className="text-sm text-muted-foreground">UDEMY 2024</p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}