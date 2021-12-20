import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { ThemeContext } from "../../context";
import { useContext } from "react";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <IconContext.Provider
        value={{
          color: darkMode ? "#fff" : "black",
        }}
      >
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{
            backgroundColor: darkMode ? "#1b2226" : "#DBE1E8",
            color: darkMode ? "black" : "#fff",
          }}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li
              className="navbar-toggle"
              style={{
                backgroundColor: darkMode ? "#1b2226" : "#DBE1E8",
              }}
            >
              <Link
                to="#"
                className="menu-bars"
                style={{
                  backgroundColor: darkMode ? "#1b2226" : "#DBE1E8",
                }}
              >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
