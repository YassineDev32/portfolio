"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <motion.p
                className="text-primary font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Yassine
              </motion.h1>
              <motion.h2
                className="text-3xl lg:text-5xl font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Software Engineer
              </motion.h2>
            </div>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I craft innovative digital experiences through clean code and
              creative problem-solving. Passionate about building scalable
              applications that make a difference.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <a
                  href="/CV_Yassine_Said_ANG.pdf"
                  download="Yassine-Said-CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
              {/* Glowing circle background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-orange-500/15 to-primary/20 blur-3xl" />
              </motion.div>

              {/* Circular Image */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                style={{
                  width: "450px",
                  height: "450px",
                }}
              >
                {/* Main Profile Image */}
                <motion.img
                  src="/images/image_said.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.div>

              {/* Subtle reflection effect */}
              <motion.div
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-gradient-to-t from-primary/10 to-transparent blur-xl rounded-full"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}