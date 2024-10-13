import React from 'react'
import './about.css'
import ME from '../../images/me5.jpg'

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Us</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='#' width={320} height={400} />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <i className="fa-solid fa-award about__icon"></i>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <i className="fa-solid fa-users about__icon"></i>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
                <i className="fa-solid fa-folder about__icon"></i>
                <h5>Projects</h5>
                <small>50+ Completed</small>
              </article>

            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eos ipsa nam quis dolorum tempore libero accusantium.
              Obcaecati incidunt voluptas nesciunt eius,
              itaque qui amet in eligendi repellendus placeat officia? Necessitatibus.
            </p>

            <a href="#contact" className='btn btn-primary'>Let&apos; Talk</a>

          </div>
        </div>
      </section>
    </>
  )
}

export default About