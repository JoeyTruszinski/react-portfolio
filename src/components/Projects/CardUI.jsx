import React from "react";
import "./Card-style.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Card = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="card text-center"
      style={{
        backgroundColor: darkMode ? "#1B2226" : "white",
        color: darkMode && "white",
      }}
    >
      <div className="overflow">
        <img src={props.imgsrc} alt="image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          reprehenderit impedit illum accusamus error odio ipsam accusantium
          voluptas sint perspiciatis.
        </p>
        <a href="#" className="btn btn-outline-success">
          Click Me
        </a>
      </div>
    </div>
  );
};

export default Card;
