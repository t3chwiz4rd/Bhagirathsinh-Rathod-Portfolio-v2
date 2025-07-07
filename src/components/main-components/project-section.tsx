'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'ALGOPILOT - Algorithmic Trading System',
    description:
      'Backtested and deployed real-time trading strategies using WebSockets, broker APIs, and multithreaded architecture.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
    tags: ['Python', 'Flask', 'WebSockets', 'Pandas', 'NumPy'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AUDIOVERSE - Music Managing App',
    description: 'A full-stack app with role-based access to manage songs and albums securely using JWT and Celery.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    tags: ['Flask', 'Vue.js', 'Celery', 'SQLAlchemy'],
    github: '#',
    demo: '#',
  },
  {
    title: 'QRAttendance',
    description:
      'Android app using QR and Firebase for fast, secure attendance recording in real-time.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tags: ['Android', 'Java', 'Firebase', 'ZXing'],
    github: '#',
    demo: '#',
  },
  {
    title: 'System Threat Forecaster',
    description:
      'ML-based system to predict system threats using user and antivirus data; includes EDA and model evaluation.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    tags: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
      }),
    ]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <motion.section
      id="project"
      className="my-6 flex w-full scroll-mt-28 flex-col items-center md:mb-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl font-semibold">Projects & Creations</h2>
        <p className="text-muted-foreground mt-3 text-sm">Ideas Engineered into Scalable Solutions</p>
      </div>

      <div className="max-w-5xl mx-auto relative flex items-center justify-center">
        <Button
          onClick={scrollPrev}
          className="hidden lg:flex absolute left-0 z-10 -translate-x-full p-2 bg-card rounded-full hover:bg-accent transition"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </Button>

        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-5 lg:hidden px-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border border-border hover:bg-accent transition duration-300 group">
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>

                <CardHeader>
                  <CardTitle className="font-mono text-base sm:text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Desktop: carousel layout */}
        <div className="hidden lg:block overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="min-w-[85%] md:min-w-[65%] flex-shrink-0 snap-center"
              >
                <Card className="bg-card border border-border hover:bg-accent transition duration-300 group">
                  <div className="relative h-44 md:h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>

                  <CardHeader>
                    <CardTitle className="font-mono text-base sm:text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollNext}
          className="hidden lg:flex absolute right-0 z-10 translate-x-full p-2 bg-card rounded-full hover:bg-accent transition"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </Button>
      </div>
    </motion.section>
  )
}
