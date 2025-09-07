import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">M-BADR</a>

      <ul className="permolinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; M-BADR Tutorials. All rights resaved</small>
      </div>
    </footer>
  )
}

export default Footer