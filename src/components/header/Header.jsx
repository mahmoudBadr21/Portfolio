import { motion } from "framer-motion";
import './header.css'
import CTA from './CTA'
import ME from '../../images/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hallo I&apos;m</h5>
          <h1 className="name">Mahmoud Badr</h1>
          <h5 className="text-light typing">Front End Devoloper</h5>

          <CTA />

          <HeaderSocials />

          <motion.div
            className="me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={ME} alt="me" width="320" height="400" loading="lazy" />
          </motion.div>

          <motion.a
            href="#contact"
            className="scroll__dwon"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, rotate: 90 },
            }}
          >
            Scroll Dwon
          </motion.a>
        </div>
      </header>
    </>
  );
}

export default Header
