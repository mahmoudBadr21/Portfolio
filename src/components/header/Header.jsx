import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">

          <h5>Hallo I&apos;m</h5>
          <h1>Mahmoud Badr</h1>
          <h5 className="text-light">Front End Devoloper</h5>

          <CTA />

          <HeaderSocials />

          <div className="me">
            <img src={ME} alt='me' width="320" height="400" />
          </div>

          <a href="#contact" className='scroll__dwon'>Scroll Dwon</a>

        </div>
      </header>
    </>
  )
}

export default Header
