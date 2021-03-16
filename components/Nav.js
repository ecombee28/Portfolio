import React from "react";
import navStyle from "../styles/Nav.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "next/link";

const Nav = () => {
  const move = (id) => {
    const e = document.getElementById(id);
    e.scrollIntoView();
  };

  const pdf = "https://combeecreations.com/resume/resume.pdf";

  return (
    <>
      <header className={navStyle.header}>
        <div className={navStyle.left_nav}>
          <Links href="/">
            <p className={navStyle.nav_links}>Home</p>
          </Links>
          <Links href="/projects/">
            <p className={navStyle.nav_links}>Portfolio</p>
          </Links>
        </div>

        <div className={`${navStyle.logo_wrapper}`}>
          <img src={`/ccLogo.png`} className={navStyle.logo} />
        </div>
        <div className={navStyle.right_nav}>
          <Links href="/about/">
            <p className={navStyle.nav_links}>About</p>
          </Links>
          <Links href="/contact/">
            <p className={navStyle.nav_links}>Contact</p>
          </Links>
        </div>
        <div className={navStyle.icon_wrapper}>
          <a href={pdf} target="_blank" className={navStyle.resume}>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/eric-combee-977509142/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={navStyle.icon} />
          </a>
          <a href="https://github.com/ecombee28" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={navStyle.icon} />
          </a>
        </div>
      </header>
    </>
  );
};

export default Nav;
