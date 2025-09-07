import './services.css'
import { Sdata } from './Sdata'

const Services = () => {
  return (
    <>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          {
            Sdata.map((value, id) => {
              return (
                <article className="service" key={id}>
                  <div className="service__head">
                    <h3>{value.title}</h3>
                  </div>

                  <ul className="service__list">
                    {value.content.map((item, id) => {
                      return (
                        <li key={id}>
                          <i className="fas fa-check service__list-icon"></i>
                          <p>{item}</p>
                        </li>
                      )
                    })}
                  </ul>
                </article>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default Services