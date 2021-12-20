import React from "react";
import SkillBar from "react-skillbars";
import "./Skills.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import HTML5 from "../../images/html5.png";
import JavaScript from "../../images/javascript.jpg";
import CSS from "../../images/css.png";
import Reactimg from "../../images/react.png";
import Angular from "../../images/angular.png";

function Skills() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const skills = [
    { type: "Javascript", level: 75 },
    { type: "HTML", level: 85 },
    { type: "CSS", level: 75 },
    { type: "ReactJS", level: 85 },
    { type: "Angular", level: 75 },
    { type: "C++", level: 85 },
    { type: "C#", level: 75 },
    { type: "C", level: 65 },
    { type: "Java", level: 85 },
  ];

  return (
    <div className="skills">
      <div className="skills-left">
        <div className="skills-left-wrapper">
          <div className="skills-left-title">My Skills</div>
          <Card
            sx={{ minWidth: 275 }}
            style={{
              backgroundColor: darkMode ? "#1B2226" : "white",
              color: darkMode && "white",
            }}
          >
            <CardContent>
              <SkillBar skills={skills} />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="skills-right">
        <div className="skills-right-wrapper">
          <div className="skills-right-title">My Interests</div>
          <div className="skills-right-cards">
            <Card
              sx={{ minWidth: 275 }}
              style={{
                backgroundColor: darkMode ? "#1B2226" : "white",
                color: darkMode && "white",
                padding: 30,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <img src={HTML5} className="skills-icon" />
              </CardContent>
              <CardContent>
                <img src={JavaScript} className="skills-icon" />
              </CardContent>
              <CardContent>
                <img src={CSS} className="skills-icon" />
              </CardContent>
              <CardContent>
                <img src={Reactimg} className="skills-icon" />
              </CardContent>
              <CardContent>
                <img src={Angular} className="skills-icon" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
