import React from "react";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <motion.div
      className="header__socials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ delay: 0.02, duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <a href="http://linkedin.com" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="http://github.com" target="_blank">
        <i className="fab fa-github"></i>
      </a>
      <a href="http://dribbble.com" target="_blank">
        <i className="fab fa-dribbble"></i>
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
