import React from "react";
import style from "../styles/Bottom.module.css";
import Links from "next/link";
import {
  faHome,
  faLaptopCode,
  faAddressCard,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const move = (id) => {
    const e = document.getElementById(id);
    e.scrollIntoView();
  };
  const url =
    "https://docs.google.com/document/d/e/2PACX-1vQJYsmMayada-PacoIVObaccPwO46REA_4DK-yfpsAtVMB76sXyJcv1_rGXXKHVXA/pub";
  return (
    <div className={style.nav_bar}>
      <div className={style.nav_options}>
        <Links href="/">
          <p className={style.links}>
            <FontAwesomeIcon icon={faHome} className={style.icon} />
            Home
          </p>
        </Links>
      </div>
      <div className={style.nav_options}>
        <Links href="/projects">
          <p className={style.links}>
            <FontAwesomeIcon icon={faLaptopCode} className={style.icon} />
            Projects
          </p>
        </Links>
      </div>
      <div className={style.nav_options}>
        <Links href="/about">
          <p className={style.links}>
            <FontAwesomeIcon icon={faAddressCard} className={style.icon} />
            About
          </p>
        </Links>
      </div>
      <div className={style.nav_options}>
        <Links href="/contact">
          <p className={style.links}>
            <FontAwesomeIcon icon={faPhoneSquare} className={style.icon} />
            Contact
          </p>
        </Links>
      </div>
    </div>
  );
};

export default NavBar;
