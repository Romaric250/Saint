import React from "react";
import { motion } from "framer-motion";
import "./section1.css";
import clickup from "../../../public/clickup.png"
import excel from "../../../public/excel.png"
import trello from "../../../public/trello.jpeg"
import word from "../../../public/word.png"
import saint from "../../../public/saint.jpg"

import { FaFacebookF, FaLinkedinIn, FaTwitter,FaTrello,FaSlack,FaGoogleDrive,FaFileExcel,FaFileWord} from "react-icons/fa";

function Section1() {
  return (
    <div className="section1-wrapper" id="about">
      <div className="landing-section">
      <motion.div
        className="caption-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="caption-wrapper-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hi, I am Manyor Saint Mbu 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            From the vibrant tapestry of his Cameroonian roots to the echo of
            purpose resonating within him,
            <br />
            Manyor Saint Mbu has embarked on a remarkable journey of
            self-discovery and inspiration. <br />
            His life, a testament to resilience and introspection, is now
            dedicated to guiding others on their own paths towards a meaningful
            existence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Early life: Shaped by the rich cultural heritage of the South West
            region,
            <br /> Manyor's formative years instilled in him a deep curiosity
            and a yearning to understand the world's deeper currents. <br />
            These experiences laid the foundation for his later exploration of
            purpose, <br />
            a pursuit that would become the cornerstone of his work.
          </motion.p>

          <div className="social-media-links">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100081437769621&mibextid=ZbWKwL"
              initial={{ opacity: 0, y: -20 }}
              target="_blank"
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <FaFacebookF size={30} color="white" />
            </motion.a>
            <motion.a
              href=" https://www.linkedin.com/in/manyor-saint-mbu-63a208206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              target="_blank"
              transition={{ delay: 2.5, duration: 1 }}
            >
              <FaLinkedinIn size={30} color="white" />
            </motion.a>

          </div>
        </div>
        <div className="caption-wrapper-image"><img src={saint} alt="saint" /></div>
      </motion.div>  
      </div>
      


      <div className="second-section1-wrapper">
        <div className="button-wrapper">
          <motion.button
            className="about_me_button reveal fade-top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            About me
          </motion.button>
        </div>
        <div className="main-wrapper">
        <div className="caption-wrapper-image"><img src={saint} alt="saint" /></div>
          <motion.div
            className="text reveal fade-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h2>Curious about me? Here you have it:</h2>
           

            <p>
             Beyond academia: Manyor's personal journey, with its trials and triumphs, served as the crucible in which his understanding of purpose was forged. He discovered that the quest for meaning is not a solitary journey, but a shared odyssey – a realization that would later fuel his desire to inspire change.
            </p>
            <p>
              Professional canvas: As a project manager, Manyor gained invaluable insights into the challenges individuals face in aligning their actions with their true calling. These insights became the driving force behind his commitment to empower others to chart their own purposeful paths.

            </p>
            <p>
              More than an author: Manyor is a storyteller, a youth leader, and a mentor. His words, imbued with authenticity and the wisdom gleaned from both success and setbacks, serve as a beacon for those navigating the labyrinth of purpose. His work transcends mere writing, offering practical guidance and inspiring others to embrace their own unique journeys towards a fulfilling life.
            </p>
            <p>
              In essence, Manyor Saint Mbu is not just an author, but a guiding voice. He is a testament to the transformative power of introspection, resilience, and a shared pursuit of purpose. His journey is an invitation to others to embark on their own quest for meaning, leaving a lasting impact on the lives he touches along the way.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="skills-container-wrapper">
        <div className="button-wrapper">
          <motion.button
            className="about_me_button reveal fade-top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            About me
          </motion.button>
        </div>
        <h2>Here some of the technologies am quit good at</h2>
        <div className="skills-wrapper reveal fade-left">
          <h2>😀😀😀</h2>
          <div className="main-skill-wrapper">
          
        
            <img src={trello} alt="trello" />
            <img src={word} alt="word" />
            <img src={excel} alt="excel" />
            <img src={clickup} alt="clickup" />
            
            
            
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Section1;