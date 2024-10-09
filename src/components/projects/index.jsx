"use client"
import React from 'react'
import ProjectLayout from './ProjectLayout'
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 }, //initially opacity zero and when it shows it will have 1
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //means the children inside the div it will have stagger animation and after 0.3 sec each will appear
      delayChildren: 1,
    },
  },
};

const ProjectList = ({projects}) => {
  return (
    <motion.div 
      variants={container} //to use container inside a div we can use variants
      initial="hidden"
      animate="show"
      className='w-full xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'
    >
      {projects.map((project, index) => {
          return <ProjectLayout key={index} {...project} />
      })}
    </motion.div>
  )
}

export default ProjectList