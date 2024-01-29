import React from "react";
import { motion } from "framer-motion";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer-wrapper">
      <div className="footer-wrapper ">
        <div className="button-wrapper">
          <motion.button
            className="about_me_button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch
          </motion.button>
        </div>
        <motion.div
          className="footer-content reveal fade-bottom"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            id="footer"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What’s next? Feel free to reach out to me. 
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           <a href="#">manyor.com@gmail.com
</a>
          </motion.h2>
         
          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            +237 670648098 

          </motion.h4>
          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
           +237 682598972

          </motion.h4>
         
        </motion.div>
      </div>
      
    </div>
  );
}

export default Footer;