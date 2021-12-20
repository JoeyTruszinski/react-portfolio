import React from "react";
import "./Home.css";
import { SocialIcon } from "react-social-icons";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-left-wrapper">
          <h2 className="home-intro">Hello, My name is</h2>
          <h2 className="home-name">Joey Truszinski</h2>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-item">Web Developer</div>
              <div className="home-title-item">Student</div>
              <div className="home-title-item">Tutor</div>
              <div className="home-title-item">UI/UX Developer</div>
              <div className="home-title-item">Gamer</div>
            </div>
          </div>
          <div className="home-description">
            I tutor students at the University of Wisconsin - River Falls, and I
            am a Web developer and UI/UX devloper who is currently working for
            AGS Prime.
          </div>

          <div class="btn-group">
            <button type="button" class="btn btn-secondary btn-lg mr-4">
              About Me
            </button>

            <button type="button" class="btn btn-secondary btn-lg">
              My Work
            </button>
          </div>
          <div className="social-icons">
            <SocialIcon url="https://github.com/JoeyTruszinski" />
            <SocialIcon url="https://www.linkedin.com/in/joeytruszinski/" />
            <SocialIcon url="https://discord.com/channels/@me" />
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-bg"></div>
      </div>
    </div>
  );
}

export default Home;
