import React from "react";
import "../css/HomeApp.css";
import { Button } from "./Button";
import "../css/HeroSection.css";
import video1 from "../videos/videorecipe.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <h1 style={{fontSize: "5rem", marginTop: "50px",  fontStyle: "italic"}}>“A recipe has no soul. You as the cook must bring soul to the recipe.”</h1>
      <p style={{marginTop: "100px", fontStyle: "italic"}}>Thomas Keller</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
