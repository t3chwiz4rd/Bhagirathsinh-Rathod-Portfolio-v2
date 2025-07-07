// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import { motion, useMotionValue } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Calendar, GraduationCap, GraduationCapIcon } from 'lucide-react'
// import { SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
// import { RiNextjsLine, RiNodejsLine } from 'react-icons/ri'
// import { PiFramerLogo } from 'react-icons/pi'
// import { DiDocker } from 'react-icons/di'
// import { GrDocker } from 'react-icons/gr'

// type EducationItem = {
//   school: string;
//   degree: string;
//   period: string;
//   description: string;
//   tech: string[];
// };

// const About = () => {
//     const skills = [
//         { name: 'React', icon: <SiReact  className="size-10" /> },
//         { name: 'Next.js', icon: <RiNextjsLine className="size-10" /> },
//         { name: 'TypeScript', icon: <SiTypescript  className="size-10" /> },
//         { name: 'Tailwind CSS', icon: <SiTailwindcss className="size-10" /> },
//         { name: 'Node.js', icon: <RiNodejsLine  className="size-10" /> },
//         { name: 'Framer Motion', icon: <PiFramerLogo  className="size-10" /> },
//         { name: 'Docker', icon: <GrDocker  className="size-10" /> },
//         { name: 'PostgreSQL', icon: <SiPostgresql  className="size-10" /> },
//     ]

//   const x = useMotionValue(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [isPaused, setIsPaused] = useState(false)

//   useEffect(() => {
//     let animationFrame: number
//     const speed = 1

//     const loop = () => {
//       if (!isPaused) {
//         x.set(x.get() - speed)
//         const container = containerRef.current
//         if (container) {
//           const totalWidth = container.scrollWidth
//           const visibleWidth = container.offsetWidth
//           if (Math.abs(x.get()) >= totalWidth - visibleWidth) {
//             x.set(0) // reset to beginning for infinite loop
//           }
//         }
//       }
//       animationFrame = requestAnimationFrame(loop)
//     }

//     animationFrame = requestAnimationFrame(loop)

//     return () => cancelAnimationFrame(animationFrame)
//   }, [isPaused, x])

//     return (
//         <motion.section
//             id="about"
//             className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.175 }}
//         >
//             <div className="mb-10 text-center">
//                 <h2 className="font-heading text-3xl font-semibold">About Me</h2>
//             </div>
//             {/* Introduction */}
//             <div className="-mt-5 max-w-2xl text-justify leading-7">
                
//                 <p className="mb-4">
//                 I&apos;m Michał Skolak, a front-end developer from Poland. I&apos;ve
//                 been learning programming for over 3 years. After I started high
//                 school, I decided to pursue my passion for programming. My favorite
//                 part of programming is the problem-solving aspect. I love the feeling
//                 of finally figuring out a solution to a problem. I&apos;ve had the
//                 opportunity to work on several exciting projects during my learning
//                 journey, ranging from personal projects to collaborative ventures. My
//                 core stack is React, Next.js, TypeScript, and Tailwind CSS. I am also
//                 familiar with Nest.js and Prisma. I&apos;m always looking to learn new
//                 technologies.
//                 </p>
//                 <p>
//                 I&apos;m open to job opportunities where I can contribute, learn, and
//                 grow. If you have a good opportunity that matches my skills and
//                 experience, don&apos;t hesitate to contact me.
//                 </p>
//             </div>

//             {/* Skills Banner */}
//             <div
//                 className=" max-w-2xl mt-12 overflow-hidden py-4"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//                 ref={containerRef}
//             >
//                 <motion.div
//                 className="flex gap-8 whitespace-nowrap text-lg font-medium"
//                 style={{ x }}
//                 >
//                 {[...skills, ...skills].map((skill, i) => (
//                     <div
//                         key={`${skill.name}-${i}`}
//                         className="flex flex-col items-center justify-center"
//                         title={skill.name}
//                     >
//                         <div className="rounded-full p-2">{skill.icon}</div>
//                     </div>
//                 ))}
//                 {/* Duplicate to create infinite scroll feel */}
//                 {[...skills, ...skills].map((skill, i) => (
//                     <div
//                         key={`${skill.name}-${i}`}
//                         className="flex flex-col items-center justify-center"
//                         title={skill.name}
//                     >
//                         <div className="rounded-full p-2">{skill.icon}</div>
//                     </div>
//                 ))}
//                 </motion.div>
//             </div>
//         </motion.section>
//     )
// }

// export default About

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SiBootstrap, SiC, SiCelery, SiCplusplus, SiFirebase, SiJavascript, SiJsonwebtokens, SiNumpy, SiPandas, SiPlotly, SiPostgresql, SiReact, SiScikitlearn, SiSqlalchemy, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { RiNextjsLine, RiNodejsLine } from 'react-icons/ri'
import { PiFramerLogo } from 'react-icons/pi'
import { GrDocker } from 'react-icons/gr'

import { SiPython, SiFlask, SiFastapi, SiDotnet, SiAngular, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaLinux, FaJava, FaAndroid, FaVuejs, FaAngular } from 'react-icons/fa';
import SkillMarquee from '../common/skillMarquee'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'


const skills = [
  { name: 'Python', icon: <SiPython className="size-10" /> },
  { name: 'Flask', icon: <SiFlask className="size-10" /> },
  { name: 'FastAPI', icon: <SiFastapi className="size-10" /> },
  { name: '.NET Core', icon: <SiDotnet className="size-10" /> },
  { name: 'React', icon: <SiReact className="size-10" /> },
  { name: 'Next.js', icon: <RiNextjsLine className="size-10" /> },
  { name: 'Vue.js', icon: <FaVuejs className="size-10" /> },
  { name: 'AngularJS', icon: <FaAngular className="size-10" /> },
  { name: 'TypeScript', icon: <SiTypescript className="size-10" /> },
  { name: 'JavaScript', icon: <SiJavascript className="size-10" /> },
  { name: 'HTML', icon: <FaHtml5 className="size-10" /> },
  { name: 'CSS', icon: <FaCss3Alt className="size-10" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="size-10" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="size-10" /> },
  { name: 'SQLAlchemy', icon: <SiSqlalchemy className="size-10" /> },
  { name: 'MySQL', icon: <SiMysql className="size-10" /> },
  { name: 'SQLite', icon: <SiSqlite className="size-10" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="size-10" /> },
  { name: 'Firebase', icon: <SiFirebase className="size-10" /> },
  { name: 'Linux', icon: <FaLinux className="size-10" /> },
  { name: 'Docker', icon: <GrDocker className="size-10" /> },
  { name: 'Celery', icon: <SiCelery className="size-10" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="size-10" /> },
  { name: 'Pandas', icon: <SiPandas className="size-10" /> },
  { name: 'NumPy', icon: <SiNumpy className="size-10" /> },
  { name: 'Matplotlib', icon: <SiPlotly className="size-10" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="size-10" /> },
  { name: 'Java', icon: <FaJava className="size-10" /> },
  { name: 'C', icon: <SiC className="size-10" /> },
  { name: 'C++', icon: <SiCplusplus className="size-10" /> },
  { name: 'Android', icon: <FaAndroid className="size-10" /> },
  // { name: 'ZXing', icon: <SiZxing className="size-10" /> }, // optional, generic barcode
]


const About = () => {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let animationFrame: number
    const speed = 1

    const loop = () => {
      if (!isPaused) {
        x.set(x.get() - speed)
        const container = containerRef.current
        if (container) {
          const totalWidth = container.scrollWidth
          const visibleWidth = container.offsetWidth
          if (Math.abs(x.get()) >= totalWidth - visibleWidth) {
            x.set(0)
          }
        }
      }
      animationFrame = requestAnimationFrame(loop)
    }

    animationFrame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, x])

  return (
    <motion.section
      id="about"
      className="my-10 w-full scroll-mt-28 flex flex-col items-center px-4 sm:px-6 md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold">About Me</h2>
        <p className="text-muted-foreground mt-3 text-sm">Passionate Developer with a Vision for Code and Markets</p>
      </div>

      {/* Introduction */}
      <div className="w-full max-w-2xl sm:text-center text-center leading-7 text-base sm:text-md">
        <p className="mb-4">
          I’m Bhagirathsinh Rathod, a full-stack developer with a deep interest in quantitative finance and algorithmic trading. With a strong foundation in backend and frontend development, I enjoy creating efficient, scalable software solutions and exploring the intersection of code and capital markets. I’ve developed real-time systems using technologies like Flask, FastAPI, React, and .NET, and deployed live trading strategies integrating broker APIs and WebSocket data streams. Currently working as a Software Engineer at NetWeb Software, I continue to refine my skills in full-stack development while diving deeper into C++ and financial systems.
        </p>
        <p>
          Whether it's enhancing user interfaces or engineering resilient backend systems, I'm always eager to collaborate on innovative projects that challenge the norm and create impact.
        </p>
      </div>

      {/* Skills Banner */}
      <div
        className="w-full max-w-2xl mt-12 overflow-hidden py-4 sm:py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <motion.div
          className="flex gap-6 sm:gap-8 whitespace-nowrap text-lg font-medium"
          style={{ x }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex flex-col items-center justify-center min-w-[64px]"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="rounded-full p-1 sm:p-2">{skill.icon}</div>    
                </TooltipTrigger>  
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
              
            </div>
          ))}
        </motion.div>
        {/* <SkillMarquee /> */}
      </div>
    </motion.section>
  )
}

export default About
