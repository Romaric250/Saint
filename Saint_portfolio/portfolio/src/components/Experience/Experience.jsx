import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import data from "./experiencedata";

const ExperienceBlog = ({ title, content, dateposted }) => {
  return (
    <div className="ex-blog-wrapper">
      <h3>Upwork</h3>
      <div className="content-holder">{content}</div>
      <h2>{dateposted}</h2>
    </div>
  );
};

const Managedata = () => {
  return (
    <div>
      {data.map((item) => (
        <motion.div
          key={item.id}
          
          className="ex-blog-wrapper reveal fade-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="upword">🦾</h3>
          <div className="content-holder">
            <h2>{item.title}</h2>
            <ul>
              {item.moreinfo.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>

          <h2>{item.duration}</h2>
        </motion.div>
      ))}
    </div>
  );
};

function Experience() {
  return (
    <div className="experience-wrapper" id="work">
      <div className="experience-wrapper-container">
        <div className="button-wrapper">
          <motion.button
            className="about_me_button reveal fade-top"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experiences
          </motion.button>
        </div>
      </div>
      <div className="main-ex-wrapper">
        <h2 className="reveal fade-right">
          Here is a quick summary of my most recent experiences:
        </h2>
        <Managedata />
      </div>
    </div>
  );
}

export default Experience;