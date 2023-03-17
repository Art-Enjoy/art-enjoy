import React from 'react'
import "./Slide.css"

import images from '../export/images'
import { motion } from 'framer-motion'

const Slide = () => {
  return (
<<<<<<< HEAD
    
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
    
=======
    <h1>Slide</h1>
      /*<div>Slide</div>*/
>>>>>>> 169f4eb3f934daffdec970da973c7de8ed06da0d
  )
}

export default Slide