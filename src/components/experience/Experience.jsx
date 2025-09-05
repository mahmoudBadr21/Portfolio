import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import { forntEndLan, otherLan } from "./dataE";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <motion.div
            className="experience__frontend"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ rotateX: 15, rotateY: 10 }}
          >
            <h3>Frontend Devolopment</h3>
            <div className="experience__content">
              {forntEndLan.map((value, id) => {
                return (
                  <article className="experience__details" key={id}>
                    <i className="fas fa-check-circle experience__details-icon"></i>
                    <div>
                      <h4>{value.name}</h4>
                      <small className="text-light">{value.level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="experience__other"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.02, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ rotateX: 15, rotateY: -10 }}
          >
            <h3>Other Language</h3>
            <div className="experience__content">
              {otherLan.map((value, id) => {
                return (
                  <article className="experience__details" key={id}>
                    <i className="fas fa-check-circle experience__details-icon"></i>
                    <div>
                      <h4>{value.name}</h4>
                      <small className="text-light">{value.level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience;
