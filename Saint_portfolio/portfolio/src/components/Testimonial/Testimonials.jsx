import React from "react";
import { motion } from "framer-motion";
import "./testimonial.css";
import data from "./testimonial";

function Testimonials() {
  return (
    <div className="testimonial-blog" id="testimonial">
      <motion.div
        className="button-wrapper reveal fade-top"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="about_me_button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Testimonial
        </motion.button>
      </motion.div>
      <motion.h1
        style={{ textAlign: "center", color: "white", marginBottom: "1rem" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nice things people have said about me
      </motion.h1>
      <div className="main-testimonial-wrapper">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="testimonial-wrapper reveal fade-bottom"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-image-wrapper">image</div>
             <h3>{item.name}</h3>
            <div className="content-holder">
             <p>{item.content}</p>
              <h4>{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;