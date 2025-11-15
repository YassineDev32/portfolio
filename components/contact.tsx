'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/YassineDev32' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/yassine-said-008591267/' },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 text-center space-y-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground">Let's Talk</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:yassinesaid.23k@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>

                <div className="flex justify-center gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          asChild
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            className="text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
