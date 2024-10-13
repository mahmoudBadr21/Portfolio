import React from 'react'
import CV from '../../images/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn' download>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA