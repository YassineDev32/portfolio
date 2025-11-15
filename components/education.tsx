'use client'

import { Card } from '@/components/ui/card'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    degree: 'Engineering Cycle in Computer Engineering',
    institution: 'National School of Applied Sciences, Khouribga',
    period: '2023 - Present',
    description: 'Currently pursuing computer engineering degree with focus on software development, systems engineering, and DevOps practices.',
    icon: GraduationCap,
    status: 'Current',
  },
  {
    degree: 'Integrated Preparatory Classes',
    institution: 'National School of Applied Sciences, Khouribga',
    period: '2021 - 2023',
    description: 'Intensive preparatory program in mathematics, physics, and computer science fundamentals.',
    icon: BookOpen,
    status: 'Completed',
  },
  {
    degree: 'Baccalaureate in Physical and Chemical Sciences (Honors)',
    institution: 'Lycée Ambition',
    period: '2019 - 2020',
    description: 'Graduated with honors in physical and chemical sciences track.',
    icon: Award,
    status: 'Completed',
  },
]

const certifications = [
  {
    name: 'AWS Academy Cloud Developing',
    issuer: 'AWS Academy',
    status: 'Completed',
    icon: '☁️',
  },
  {
    name: 'Introduction to Docker',
    issuer: 'DataScientist.fr',
    status: 'Completed',
    icon: '🐳',
  },
  {
    name: 'Git and GitHub Certificate',
    issuer: '365 Data Science',
    status: 'Completed',
    icon: '📦',
  },
  {
    name: 'The Complete 2024 Web Development',
    issuer: 'UDEMY',
    status: 'Completed',
    icon: '💻',
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 px-4 bg-muted/10" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Academic Journey
              </h3>
              <div className="space-y-6 relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-orange-500/30" />
                
                {education.map((edu, index) => {
                  const Icon = edu.icon
                  return (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline dot */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        edu.status === 'Current' 
                          ? 'bg-gradient-to-br from-primary to-orange-500' 
                          : 'bg-primary/20'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          edu.status === 'Current' ? 'text-white' : 'text-primary'
                        }`} />
                      </div>

                      <Card className={`flex-1 p-6 border-l-4 ${
                        edu.status === 'Current' 
                          ? 'border-primary bg-gradient-to-r from-primary/5 to-transparent' 
                          : 'border-border'
                      }`}>
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                              edu.status === 'Current'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-green-500/20 text-green-600'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </p>
                          <p className="text-sm font-semibold text-primary">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications & Learning
              </h3>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        cert.status === 'In Progress'
                          ? 'bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary/30'
                          : 'bg-muted/50 border-border/50'
                      }`}
                    >
                      <div className={`text-2xl ${cert.status === 'In Progress' ? 'animate-pulse' : ''}`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        cert.status === 'In Progress'
                          ? 'bg-orange-500/20 text-orange-600'
                          : 'bg-green-500/20 text-green-600'
                      }`}>
                        {cert.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Learning */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-6 p-4 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-lg border border-primary/20"
                >
                  <h4 className="font-semibold text-foreground mb-2">Currently Exploring</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Security', 'Microservices', 'Cloud Architecture', 'System Design'].map((topic, index) => (
                      <motion.span
                        key={topic}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}