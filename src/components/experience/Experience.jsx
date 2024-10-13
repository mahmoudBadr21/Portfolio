import React from 'react'
import './experience.css'
import { forntEndLan, otherLan } from './dataE'

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Devolopment</h3>
            <div className="experience__content">
              {
                forntEndLan.map((value, id) => {
                  return (
                    <article className='experience__details' key={id}>
                      <i className="fas fa-check-circle experience__details-icon"></i>
                      <div>
                        <h4>{value.name}</h4>
                        <small className='text-light'>{value.level}</small>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </div>

          <div className="experience__other">
          <h3>Other Language</h3>
            <div className="experience__content">
              {
                otherLan.map((value, id) => {
                  return (
                    <article className='experience__details' key={id}>
                      <i className="fas fa-check-circle experience__details-icon"></i>
                      <div>
                        <h4>{value.name}</h4>
                        <small className='text-light'>{value.level}</small>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience