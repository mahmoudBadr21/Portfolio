import { motion } from "framer-motion";
import "./about.css";
import ME from "../../images/me5.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Us</h2>
        <div className="container about__container">
          <motion.div
            className="about__me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="about__me-image">
              <img src={ME} alt="#" width={320} height={400} />
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="about__cards">
              <motion.article
                className="about__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.02, duration: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <i className="fa-solid fa-award about__icon"></i>
                <h5>Experience</h5>
                <small>Junior</small>
              </motion.article>

              <motion.article
                className="about__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.02, duration: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <i className="fa-solid fa-users about__icon"></i>
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </motion.article>

              <motion.article
                className="about__card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.02, duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <i className="fa-solid fa-folder about__icon"></i>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </motion.article>
            </div>

            <p>
              A junior Front-End Developer specializing in React.js, focused on
              enhancing my skills in building interactive web applications using
              HTML, CSS, and JavaScript. I am passionate about continuous
              learning and collaborating within a team to deliver exceptional
              user experiences.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let&apos; Talk
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
