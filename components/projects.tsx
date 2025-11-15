  'use client'

  import { Card } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'
  import { ExternalLink, Github } from 'lucide-react'
  import { motion } from 'framer-motion'
  import { useInView } from 'framer-motion'
  import { useRef } from 'react'
  import Image from 'next/image'

  const projects = [
    {
      title: 'Car Rental Application',
      description:
        'Comprehensive platform for car rentals with user management, secure payment integration, invoicing, contract generation, and automated monthly reports.',
      image: '/Carotex.png',
      tech: ['React', 'Spring Boot', 'MongoDB', 'Payment API', 'Spring Security'],
      github: 'https://github.com/YassineDev32/ProjetSpringReact',
      featured: true,
    },
    {
      title: 'Automated Web App Deployment with CI/CD',
      description:
        'Implemented CI/CD pipeline using Jenkins and AWS for automated testing, Docker image publishing, and secure cloud deployment with staging and production phases.',
      image: '/CI_CD.png',
      tech: ['Jenkins', 'Docker', 'AWS', 'CI/CD', 'Git'],
      github: 'https://github.com',
      featured: true,
    },
    {
      title: 'University Management System',
      description:
        'University management application with role-based access (admin, professor, student), attendance tracking, and automated email system for justifications.',
      image: '/ecole.png',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'JavaMail'],
      github: 'https://github.com/YassineDev32/NoSQL_Porject',
      featured: false,
    },
  ]

  export function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
      <section id="projects" className="py-20 px-4 bg-muted/20" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Academic and professional projects showcasing my full-stack development skills
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full flex flex-col border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-orange-500/5">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Professional Experience Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">Professional Impact</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl">🎯</div>
                    <p className="font-semibold text-foreground">Single Source of Truth</p>
                    <p className="text-sm text-muted-foreground">Centralized API management</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl">⚡</div>
                    <p className="font-semibold text-foreground">Reduced Errors</p>
                    <p className="text-sm text-muted-foreground">Improved integration processes</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl">👥</div>
                    <p className="font-semibold text-foreground">Team Coordination</p>
                    <p className="text-sm text-muted-foreground">Enhanced cross-team visibility</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }