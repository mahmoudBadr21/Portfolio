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
                <small>Junior</small>
              </article>

              <article className='about__card'>
                <i className="fa-solid fa-users about__icon"></i>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>

              <article className='about__card'>
                <i className="fa-solid fa-folder about__icon"></i>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>

            </div>

            <p>
              A junior Front-End Developer specializing in React.js,
              focused on enhancing my skills in building interactive web applications
              using HTML, CSS, and JavaScript. I am passionate about continuous learning
              and collaborating within a team to deliver exceptional user experiences.
            </p>

            <a href="#contact" className='btn btn-primary'>Let&apos; Talk</a>

          </div>
        </div>
      </section>
    </>
  )
}

export default About