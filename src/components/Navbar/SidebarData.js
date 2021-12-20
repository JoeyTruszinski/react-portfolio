import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <BsIcons.BsLightbulbFill />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiFillFolder />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
