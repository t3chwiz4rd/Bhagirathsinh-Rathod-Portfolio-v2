'use client'

import { useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import {
  SiBootstrap, SiC, SiCelery, SiCplusplus, SiFirebase, SiJavascript,
  SiJsonwebtokens, SiNumpy, SiPandas, SiPlotly, SiPostgresql, SiReact,
  SiScikitlearn, SiSqlalchemy, SiSqlite, SiTailwindcss, SiTypescript,
  SiPython, SiFlask, SiFastapi, SiDotnet, SiMysql
} from 'react-icons/si'
import { RiNextjsLine, RiNodejsLine } from 'react-icons/ri'
import { FaHtml5, FaCss3Alt, FaLinux, FaJava, FaAndroid, FaVuejs, FaAngular } from 'react-icons/fa'
import { GrDocker } from 'react-icons/gr'

const skills = [
  { name: 'Python', icon: <SiPython className="size-10" /> },
  { name: 'Flask', icon: <SiFlask className="size-10" /> },
  { name: 'FastAPI', icon: <SiFastapi className="size-10" /> },
  { name: '.NET Core', icon: <SiDotnet className="size-10" /> },
  { name: 'React', icon: <SiReact className="size-10" /> },
  { name: 'Next.js', icon: <RiNextjsLine className="size-10" /> },
  { name: 'Vue.js', icon: <FaVuejs className="size-10" /> },
  { name: 'Angular', icon: <FaAngular className="size-10" /> },
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
]

const SkillMarquee = () => {
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration: 60, // Speed: lower = faster
      },
    })
  }, [controls])

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex gap-8 w-max"
        style={{ x }}
        animate={controls}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[64px]"
            title={skill.name}
          >
            <div className="rounded-full p-1">{skill.icon}</div>
            <span className="text-sm font-bold mt-1 text-muted-foreground">{skill.name}</span>
          </div>
        ))}
        {/* Repeat once to ensure seamless scroll */}
        {skills.map((skill, i) => (
          <div
            key={`copy-${i}`}
            className="flex flex-col items-center justify-center min-w-[64px]"
            title={skill.name}
          >
            <div className="rounded-full p-1">{skill.icon}</div>
            <span className="text-xs mt-1 text-muted-foreground">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillMarquee

// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//   SiReact, SiAngular, SiVuedotjs, SiTailwindcss, SiBootstrap, SiJavascript, SiTypescript,
//   SiPython, SiFlask, SiFastapi, SiDotnet, SiMysql, SiPostgresql, SiFirebase,
//   SiSqlite, SiSqlalchemy, SiCelery, SiJsonwebtokens
// } from 'react-icons/si'
// import { RiNextjsLine } from 'react-icons/ri'
// import { GrDocker } from 'react-icons/gr'
// import { FaLinux } from 'react-icons/fa'

// // Media query hook
// function useMediaQuery(query: string): boolean {
//   const [matches, setMatches] = useState(false)
//   useEffect(() => {
//     const media = window.matchMedia(query)
//     const listener = () => setMatches(media.matches)
//     listener()
//     media.addEventListener('change', listener)
//     return () => media.removeEventListener('change', listener)
//   }, [query])
//   return matches
// }

// // Skill type
// type Skill = {
//   name: string
//   icon: React.ReactNode
// }

// // Grouped skills (no 'as const')
// const groupedSkills: Record<string, Skill[]> = {
//   frontend: [
//     { name: 'React', icon: <SiReact className="size-8" /> },
//     { name: 'Next.js', icon: <RiNextjsLine className="size-8" /> },
//     { name: 'Angular', icon: <SiAngular className="size-8" /> },
//     { name: 'Vue.js', icon: <SiVuedotjs className="size-8" /> },
//     { name: 'Tailwind', icon: <SiTailwindcss className="size-8" /> },
//     { name: 'Bootstrap', icon: <SiBootstrap className="size-8" /> },
//     { name: 'JavaScript', icon: <SiJavascript className="size-8" /> },
//     { name: 'TypeScript', icon: <SiTypescript className="size-8" /> },
//   ],
//   backend: [
//     { name: 'Python', icon: <SiPython className="size-8" /> },
//     { name: 'Flask', icon: <SiFlask className="size-8" /> },
//     { name: 'FastAPI', icon: <SiFastapi className="size-8" /> },
//     { name: '.NET', icon: <SiDotnet className="size-8" /> },
//   ],
//   database: [
//     { name: 'MySQL', icon: <SiMysql className="size-8" /> },
//     { name: 'PostgreSQL', icon: <SiPostgresql className="size-8" /> },
//     { name: 'Firebase', icon: <SiFirebase className="size-8" /> },
//     { name: 'SQLite', icon: <SiSqlite className="size-8" /> },
//     { name: 'SQLAlchemy', icon: <SiSqlalchemy className="size-8" /> },
//   ],
//   devops: [
//     { name: 'Docker', icon: <GrDocker className="size-8" /> },
//     { name: 'Linux', icon: <FaLinux className="size-8" /> },
//     { name: 'Celery', icon: <SiCelery className="size-8" /> },
//     { name: 'JWT', icon: <SiJsonwebtokens className="size-8" /> },
//   ],
// }

// const categories = Object.keys(groupedSkills)

// export default function GroupedSkillMarquee() {
//   const isMobile = useMediaQuery('(max-width: 768px)')
//   const [hoveredTabs, setHoveredTabs] = useState<Record<string, boolean>>({})

//   const allSkills = Object.values(groupedSkills).flat()
//   const shouldShowMarquee = (skills: Skill[]) => skills.length > 7

//   const renderSkills = (skills: Skill[], animate: boolean) => {
//     if (!animate) {
//       return (
//         <div className="flex flex-wrap justify-center gap-4 py-4">
//           {skills.map((skill) => (
//             <div key={skill.name} className="flex flex-col items-center min-w-[64px]">
//               {skill.icon}
//               <span className="text-xs mt-1 text-background whitespace-nowrap">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       )
//     }

//     return (
//       <div className="relative w-full overflow-hidden h-20">
//         <motion.div
//           className="flex gap-8 w-max absolute"
//           animate={{ x: ['0%', '-100%'] }}
//           transition={{ repeat: Infinity, duration: skills.length * 2, ease: 'linear' }}
//         >
//           {skills.map((skill) => (
//             <div key={skill.name} className="flex flex-col items-center min-w-[64px]">
//               {skill.icon}
//               <span className="text-xs mt-1 text-background whitespace-nowrap">{skill.name}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     )
//   }

//   if (isMobile) {
//     return (
//       <div className="w-full py-10 text-center space-y-6">
//         <h3 className="text-xl font-semibold text-muted-foreground">Skills</h3>
//         {renderSkills(allSkills, shouldShowMarquee(allSkills))}
//       </div>
//     )
//   }

//   return (
//     <div className="w-full border rounded-xl overflow-hidden divide-y divide-border">
//       {categories.map((category) => {
//         const skills = groupedSkills[category]
//         const isHovered = hoveredTabs[category] || false
//         const animate = isHovered && shouldShowMarquee(skills)

//         return (
//           <div
//             key={category}
//             className={`w-full transition-colors duration-300 px-4 py-6 text-center cursor-pointer ${
//               isHovered ? 'bg-foreground text-background' : 'bg-background text-foreground'
//             }`}
//             onMouseEnter={() => setHoveredTabs((prev) => ({ ...prev, [category]: true }))}
//             onMouseLeave={() => setHoveredTabs((prev) => ({ ...prev, [category]: false }))}
//           >
//             {isHovered ? (
//               renderSkills(skills, animate)
//             ) : (
//               <h3 className="text-xl font-semibold capitalize">{category}</h3>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
