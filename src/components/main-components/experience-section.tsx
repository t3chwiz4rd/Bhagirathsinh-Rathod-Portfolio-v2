'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, BriefcaseIcon, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

type ExperienceItem = {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

const Experience = () => {
  const experience: ExperienceItem[] = [
    {
      title: 'Software Engineer',
      company: 'NetWeb Software',
      period: 'July 2024 - Present',
      description: 'Full-stack development on a UK-based healthcare application, delivering solutions for hospital and patient management.',
      achievements: [
        'Created backend APIs and stored procedures in .NET Core',
        'Integrated APIs into a React-based frontend system',
        'Enhanced operational efficiency with modular design and clean code practices',
      ],
    },
    {
      title: 'Software Engineer Trainee - Intern',
      company: 'NetWeb Software',
      period: 'Jan 2024 - Jun 2024',
      description: 'Built a hospital management system Proof of Concept using FastAPI and Next.js during internship training.',
      achievements: [
        'Collaborated with a 3-person team to create a working prototype',
        'Gained hands-on experience with .NET, Angular, Power Automate',
        'Delivered a scalable backend using FastAPI',
      ],
    },
  ]

  return (
    <motion.section
      id="experience"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold">Professional Experience</h2>
        <p className="text-muted-foreground mt-3 text-sm">Building Systems That Power Products and Markets</p>
      </div>

      <div className="w-full max-w-2xl px-4">
        <div className="relative max-w-screen-md mx-auto">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 [&:not(:last-child)]:pb-10">
              {/* Vertical line */}
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[1.5px] sm:w-[2px]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <BriefcaseIcon className="size-5" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">{item.title}</span>
                </div>

                {/* Company and Period */}
                <div>
                  <h3 className="text-sm sm:text-base italic text-muted-foreground">{item.company}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="size-4" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>

                {/* Achievements */}
                <ul className="list-none pl-0 space-y-2">
                  {item.achievements.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                      <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
