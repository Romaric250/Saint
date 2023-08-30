import React from "react";
import "./testimonial.css";
import data from "./testimonial";
function Testimonials() {
  return (
    <div className="testimonial-blog">
      <div className="button-wrapper reveal fade-top">
        <button className="about_me_button">Testimonial</button>
      </div>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "1rem" }}>
        Nice things people have said about me
      </h1>
      <div className="main-testimonial-wrapper">
        {data.map((item) => (
          <div key={item.id} className="testimonial-wrapper reveal fade-bottom">
            <div className="testimonial-image-wrapper">image</div>
            <p>{item.content}</p>
            <div className="content-holder">
              <h1>{item.name}</h1>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
