import React from "react";
import banner from "../images/profile-banner.svg";

function About() {
  return (
    <div className="container">
      <br />
      <div className="container-fluid text-center">
        <img src={banner} alt="banner" className="col-12 col-md-5" />
        <br />
        <h1 className="display-1">ABOUT</h1>
      </div>
    </div>
  );
}

export default About;
