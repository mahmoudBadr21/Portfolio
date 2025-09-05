import React from 'react'
import { motion } from 'framer-motion'
import cv from "../../assets/cv.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={cv}
        className="btn"
        download
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Download CV
      </motion.a>
      
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.02, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Let&apos;s Talk
      </motion.a>
    </div>
  );
}

export default CTA