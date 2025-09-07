import './App.css'
import './all.min.css'
import { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MessagePopup from './components/messagePopup/MessagePopup';

export default function Home() {
  const [popup, setPopup] = useState(false)
  const [popupContent, setPopupContent] = useState("")

  return (
    <>
      {popup && <MessagePopup popup={popup} setPopup={setPopup} popupContent={popupContent} />}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact setPopup={setPopup} setPopupContent={setPopupContent} />
      <Footer />
    </>
  );
}