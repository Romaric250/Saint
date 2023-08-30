import React, { useState } from "react";
import "./projects.css";

const MyComponent = ({ isFlexReverse }) => {
  const [isFlexed, setIsFlexed] = useState(false);

  const flexDirection = isFlexReverse ? "row-reverse" : "row";

  return (
    <div className="swap-wrapper" style={{ flexDirection }}>
      <div className="project-image-wrapper reveal fad-right">
        <div className="image-wrapper"></div>
      </div>
      <div className="project-description reveal fade-left">
        <h1>project name</h1>

        <p>Description</p>
        <h2>Duration</h2>
        <p>Extra skills aquired</p>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="project__text">
        <div className="button-wrapper reveal fade-top">
          <button className="about_me_button">My work</button>
        </div>
        <h1>Some of the noteworthy projects I have Manage</h1>
      </div>

      <MyComponent isFlexReverse={false} />
      <MyComponent isFlexReverse={true} />
      <MyComponent isFlexReverse={false} />
    </div>
  );
}

export default Projects;
