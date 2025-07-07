'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      className="w-full border-t py-6 text-center text-sm text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="flex items-center justify-center gap-1">
        <Copyright className="w-4 h-4" />
        {new Date().getFullYear()} Bhagirathsinh Rathod. All rights reserved.
      </span>
    </motion.footer>
  )
}

export default Footer
