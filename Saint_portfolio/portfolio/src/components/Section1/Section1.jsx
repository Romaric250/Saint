import React from "react";
import "./section1.css";
import "../../animate";

function Section1() {
  return (
    <div className="section1-wrapper">
      <div className="caption-wrapper">
        <div className="caption-wrapper-text">
          <h1>Hi, I am Saint 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) <br /> exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. <br /> Even though I have been creating web applications
            for over 7 years, I still love it as if it was something new.
          </p>
          <h3 className="location">
            <b>icon</b> Cameroon, Yaounde
          </h3>
          <h3 className="status">
            <b>icon</b> Available for new projects
          </h3>
          <div className="social-media-links">facebook twitter likedn</div>
        </div>
        <div className="caption-wrapper-image">photo here</div>
      </div>

      <div className="second-section1-wrapper">
        <div className="button-wrapper">
          <button className="about_me_button reveal fade-top">About me</button>
        </div>
        <div className="main-wrapper">
          <div className="caption-wrapper-image reveal fade-right"></div>
          <div className="text reveal fade-left">
            <h2>Curious about me? Here you have it:</h2>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack <br /> development (React.js & Node.js). I am very
              enthusiastic about bringing the <br />
              technical and visual aspects of digital products to life. User
              experience, pixel <br /> perfect design, and writing clear,
              readable, highly performant code matters <br />
              to me.
            </p>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and <br /> say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>

      <div className="skills-container-wrapper">
        <div className="button-wrapper">
          <button className="about_me_button reveal fade-top">About me</button>
        </div>
        <h2>Here some of the technologies am quit good at</h2>
        <div className="skills-wrapper reveal fade-left">
          <h2>😀😀😀😀😀😀😀😀</h2>
          <div className="main-skill-wrapper">
            <div className="skill-holder"></div>
            <div className="skill-holder"></div>
            <div className="skill-holder"></div>
            <div className="skill-holder"></div>
            <div className="skill-holder"></div>
            <div className="skill-holder"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
