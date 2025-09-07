import './testimonials.css'
import Tdata from './Tdata'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <section id='testimonials'>
        <h5></h5>
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
        <Slider {...settings}>
          {
            Tdata.map((value, index) => {
              return(
                <article className='testimonial' key={index}>
                  <div className="client__avatar">
                    <img src={value.image} alt={value.id} width='unset' height='unset' />
                  </div>
                  <h5 className="client__name">{value.name}</h5>
                  <small className='client__review'>{value.review}</small>
                </article>
              )
            })
          }
        </Slider>
        </div>
      </section>
    </>
  )
}

export default Testimonials