import React from "react";

import { AiFillHome, AiOutlineGithub } from "react-icons/ai";

import { BsMedium } from "react-icons/bs";
import { FaTimeline } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      path: "/blogs",
      icon: <BsMedium size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Experience",
      path: "/skills",
      icon: <FaTimeline size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Certificates",
      path: "/certificates",
      icon: <GrCertificate size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
