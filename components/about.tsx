'use client'

import { Code2, Calendar, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: 'Academic Projects', value: '7+', icon: Code2 },
  { label: 'Years of Study', value: '4+', icon: Calendar },
  { label: 'Certifications', value: '4+', icon: Award },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Computer Engineering Student & Full-Stack Developer
            </p>
          </motion.div>

          {/* Text Content First */}
          <motion.div
            className="space-y-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a final-year <span className="text-foreground font-semibold">Computer Engineering student at ENSA Khouribga</span>, 
                  actively seeking an end-of-studies internship in IT. My passion lies in full-stack development 
                  and DevOps practices, where I combine creative problem-solving with technical excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in building <span className="text-foreground font-semibold">scalable applications that make a difference</span>. 
                  Whether it's developing a centralized API management system or crafting intuitive user experiences, 
                  I'm dedicated to delivering solutions that drive efficiency and innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, I'm constantly exploring new technologies and methodologies to enhance my skills 
                  and stay at the forefront of the ever-evolving tech landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Three Cards in Grid 3 Columns */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-xl p-8 text-center space-y-4 shadow-sm"
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-6">Languages</h3>
              <div className="flex justify-center gap-8 flex-wrap">
                {[
                  { language: 'Arabic', level: 'Native', levelClass: 'w-full' },
                  { language: 'French', level: 'Intermediate', levelClass: 'w-4/5' },
                  { language: 'English', level: 'Intermediate', levelClass: 'w-3/5' }
                ].map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <p className="font-semibold text-foreground">{lang.language}</p>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                    <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: lang.levelClass } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}