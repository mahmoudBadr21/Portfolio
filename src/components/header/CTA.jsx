import React from 'react'
import cv from "../../assets/cv.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={cv} className='btn' download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA