import React from 'react'
import "./Slide.css"

import images from '../export/images'
import { motion } from 'framer-motion'

const Slide = () => {
  return (
    
      <motion.div className='slider-container'>
          <motion.div className='slider' drag='x' 
          dragConstraints={{right: 0, left:-2123}} >
          {images.map(image => (
              <motion.div className='item'>
                  <img src={image} alt="" />
                 
                 
                  
              </motion.div>
          ))}
          </motion.div>
          
      </motion.div>
    
  )
}

export default Slide