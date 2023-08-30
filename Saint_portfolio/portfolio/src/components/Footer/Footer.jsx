import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer-wrapper">
      <div className="footer-wrapper ">
        <div className="button-wrapper">
          <button className="about_me_button">Get in touch</button>
        </div>
        <div className="footer-content reveal fade-bottom">
          <h1>
            What’s next? Feel free to reach out to me if you're looking for{" "}
            <br />a developer, have a query, or simply want to connect.
          </h1>
          <h2>Email: saint@gmail.com</h2>
          <h3>+237 650 450 534</h3>
          <h4>You may also find me on these platforms</h4>
          <h4>facebook twitter linkedin</h4>
        </div>
      </div>
      <div className="copy-right">
        2023 | Designed and coded with ❤️️ Romaric Lonfonyuy
      </div>
    </div>
  );
}

export default Footer;
