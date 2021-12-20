import React from "react";
import Card from "./Cards";
import "./Projects.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

function Projects() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="projects-title">Favorite Projects to Date!</div>
        <div className="projects-cards">
          <Card />
        </div>
        <div className="projects-button">
          <a href="https://github.com/JoeyTruszinski">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
