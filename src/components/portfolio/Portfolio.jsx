import React from 'react'
import { motion } from "framer-motion";
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
              return (
                <motion.article
                  className="portfolio__item"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.02, duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="portfolio__item-image">
                    <video src={value.image} autoPlay loop muted></video>
                  </div>
                  <h3>{value.title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={value.github} className="btn" target="_blank">
                      Github
                    </a>
                    <a
                      href={value.demo}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.article>
              );
            })
          }
        </div>
      </section>
    </>
  )
}

export default Portfolio