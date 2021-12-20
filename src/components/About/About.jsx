import React from "react";
import "./About.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <AutoplaySlider
            className="about-image"
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            <div data-src="https://images.pexels.com/photos/9940841/pexels-photo-9940841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></div>
            <div data-src="https://images.pexels.com/photos/10012065/pexels-photo-10012065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></div>
            <div data-src="https://images.pexels.com/photos/9392378/pexels-photo-9392378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></div>
            <div data-src="https://images.pexels.com/photos/10230711/pexels-photo-10230711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></div>
          </AutoplaySlider>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">This is a subtitle</p>
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>

        <AwesomeButton type="primary">Resume</AwesomeButton>
      </div>
    </div>
  );
}

export default About;
