import React from 'react'
import './portfolio.css'
import Pdata from './Pdata'

const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            Pdata.map((value , index) => {
              return(
                <>
                  <article className='portfolio__item' key={index}>
                    <div className="portfolio__item-image">
                      {/* <img src={value.image} alt='#' /> */}
                      <video src={value.image} autoPlay loop muted></video>
                    </div>
                    <h3>{value.title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={value.github} className='btn' target="_blank">Github</a>
                      <a href={value.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                  </article>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio