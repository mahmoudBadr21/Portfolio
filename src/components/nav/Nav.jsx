import React, {useState} from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
      <nav>
        <a href="#" className={activeNav === '#' ? "active" : ""} 
        onClick={() => setActiveNav("#")}>
          <i className='fas fa-home'></i>
        </a>

        <a href="#about" className={activeNav === '#about' ? "active" : ""}
        onClick={() => setActiveNav("#about")}>
          <i className='fas fa-user'></i>
        </a>
        
        <a href="#experience" className={activeNav === '#experience' ? "active" : ""} 
        onClick={() => setActiveNav("#experience")}>
          <i className='fas fa-book-open'></i>
        </a>

        <a href="#services" className={activeNav === '#services' ? "active" : ""}
        onClick={() => setActiveNav("#services")}>
          <i className='fa-solid fa-shekel'></i>
        </a>

        <a href="#contact" className={activeNav === '#contact' ? "active" : ""}
        onClick={() => setActiveNav("#contact")}>
          <i className='fas fa-comments'></i>
        </a>
      </nav>
    </>
  )
}

export default Nav