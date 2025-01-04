import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hg7jkyr', 'template_r23t2g7', form.current, {
        publicKey: '5C7Ptgyj7F94AE8un',
      })
      .then(
        () => {
          alert("SUCCESS")
          form.current.reset();
        },
        (error) => {
          alert("FAILED...")
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className="container content__container">
          <div className="content__options">
            <article className="content__option">
              <i className="fa-regular fa-envelope content__option-icon"></i>
              <h4>Email</h4>
              <h5>badr86923@gmail.com</h5>
              <a href="mailto:badr86923@gmail.com" target='_blank'>Send a massage</a>
            </article>
            {/* END EMAIL */}

            <article className="content__option">
              <i className="fa-regular fa-comment content__option-icon"></i>
              <h4>Messenger</h4>
              <h5>Mahomoud Mohamed</h5>
              <a href="https://m.me/?id=100011262520612" target='_blank'>Send a massage</a>
            </article>
            {/* END MASSENGER */}

            <article className="content__option">
              <i className="fa-brands fa-whatsapp content__option-icon"></i>
              <h4>WhatsApp</h4>
              <h5>+201020092209</h5>
              <a href="https://api.whatsapp.com/send?phone=+201020092209" target='_blank'>Send a massage</a>
            </article>
            {/* END WHATSAPP */}
          </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name' required />
              <input type="mail" name="email" placeholder='Your Email' required />
              <textarea name="massage" rows="7" placeholder='Your Massage' required></textarea>
              <button type='submit' className='btn btn-primary'>Sned Massage</button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Contact