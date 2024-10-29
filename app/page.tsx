'use client'

import {easeInOut, motion} from 'framer-motion'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <motion.div className='relative'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, ease: easeInOut}}
      >
      <video 
        autoPlay 
        loop 
        muted 
        className="w-screen h-screen fixed top-0 left-0 object-cover z-0 opacity-80" 
        aria-hidden="true" // For accessibility
      >
        <source src="/product.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='relative z-50'>
        <Hero />
      </div>
    </motion.div>
  )
}

export default page
