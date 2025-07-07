'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, GraduationCapIcon } from 'lucide-react'

type EducationItem = {
  school: string
  degree: string
  period: string
  description: string
  tech: string[]
}

const Education = () => {
  const educationData: EducationItem[] = [
    {
      school: 'Navrachana University, Vadodara',
      degree: 'B.Tech in Computer Science and Engineering',
      period: 'Oct 2020 - Jun 2024',
      description: 'Graduated with a CGPA of 8.7/10 with a focus on full-stack development and systems engineering.',
      tech: ['Data Structures', 'Web Development', 'Database Systems'],
    },
    {
      school: 'Indian Institute of Technology Madras (Online)',
      degree: 'Diploma in Programming and Data Science',
      period: 'Jan 2021 - Present',
      description: 'Coursework CGPA: 6.64/10, Project CGPA: 9.0/10. Emphasis on applied data science and analytics.',
      tech: ['Machine Learning', 'Statistics', 'Python Programming'],
    },
  ]


  return (
    <motion.section
      id="education"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold">Foundations of Knowledge</h2>
        <p className="text-muted-foreground mt-3 text-sm">Merging Academic Rigor with Real-World Problem Solving</p>
      </div>

      <div className="-mt-0 w-full max-w-2xl px-4">
        <div className="relative max-w-screen-md mx-auto">
          {educationData.map((item: EducationItem) => (
            <div key={item.school} className="relative pl-8 [&:not(:last-child)]:pb-10">
              {/* Vertical line and circle */}
              <div className="bg-muted absolute left-0 top-2.5 h-full w-[1.5px] sm:w-[2px]">
                <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                    <GraduationCapIcon className="size-5" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold">{item.school}</span>
                </div>

                {/* Degree and Period */}
                <div>
                  <h3 className="text-sm sm:text-base italic text-muted-foreground">{item.degree}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="size-4" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {item.tech.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education
