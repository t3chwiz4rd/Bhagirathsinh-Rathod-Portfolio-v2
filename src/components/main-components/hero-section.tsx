// 'use client'

// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// import { SlSocialLinkedin } from 'react-icons/sl'
// import { SiRefinedgithub } from 'react-icons/si'
// import { TbMailShare } from 'react-icons/tb'

// export default function Hero() {
//   return (
//     <motion.section
//       id="about"
//       className="my-10 min-h-screen w-full scroll-mt-28 flex flex-col items-center px-4 sm:px-6 md:mb-20"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//     >
//       {/* Status Badge */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ type: 'tween', duration: 0.2 }}
//       >
//         <Link
//           href="#contact"
//           className="flex items-center gap-3 rounded border px-3 py-1"
//         >
//           <span className="relative flex size-2">
//             <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative flex size-2 rounded-full bg-green-400"></span>
//           </span>
//           <span className="font-mono text-sm">Available for work!</span>
//         </Link>
//       </motion.div>

//       {/* Name */}
//       <motion.h1
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="font-heading max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold"
//       >
//         Bhagirathsinh Rathod
//       </motion.h1>

//       {/* Tagline */}
//       <motion.p
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="text-muted-foreground max-w-xl text-base sm:text-lg"
//       >
//         Bridging Full-Stack Development with the World of Quantitative Finance
//       </motion.p>

//       {/* Social Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.15 }}
//         className="flex flex-col sm:flex-row gap-3 mt-4"
//       >
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="outline"
//             size="lg"
//             onClick={() => window.open('https://github.com/t3chwiz4rd', '_blank')}
//             className="w-full sm:w-auto"
//           >
//             <SiRefinedgithub className="w-5 h-5 mr-1" />
//             Github
//           </Button>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="outline"
//             size="lg"
//             onClick={() =>
//               window.open(
//                 'https://www.linkedin.com/in/bhagirathsinh-rathod-646810203/',
//                 '_blank'
//               )
//             }
//             className="w-full sm:w-auto"
//           >
//             <SlSocialLinkedin className="w-5 h-5 mr-1" />
//             Linkedin
//           </Button>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Button
//             variant="outline"
//             size="lg"
//             onClick={() =>
//               window.open('mailto:developwithbhagirathsinh@gmail.com', '_blank')
//             }
//             className="w-full sm:w-auto"
//           >
//             <TbMailShare className="w-5 h-5 mr-1" />
//             Contact
//           </Button>
//         </motion.div>
//       </motion.div>``

//       {/* Divider */}
//       {/* <div className="bg-muted mt-10 my-10 h-12 w-1 rounded-full opacity-100"></div> */}
//     </motion.section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SiRefinedgithub } from 'react-icons/si'
import { TbMailShare } from 'react-icons/tb'

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-center"
      >
        Bhagirathsinh Rathod
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl text-base sm:text-lg text-center mt-2"
      >
        Bridging Full-Stack Development with the World of Quantitative Finance
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row gap-3 mt-6"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/t3chwiz4rd', '_blank')}
            className="w-full sm:w-auto"
          >
            <SiRefinedgithub className="w-5 h-5 mr-1" />
            Github
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/bhagirathsinh-rathod-646810203/',
                '_blank'
              )
            }
            className="w-full sm:w-auto"
          >
            <SlSocialLinkedin className="w-5 h-5 mr-1" />
            Linkedin
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <TbMailShare className="w-5 h-5 mr-1" />
            <Link
                href="#contact"
              >
                Contact
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
