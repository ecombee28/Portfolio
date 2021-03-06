import React from "react";
import footerStyle from "../styles/Footer.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <FontAwesomeIcon icon={faCopyright} className={footerStyle.icon} />
      <p className={footerStyle.text}>Combee Creations</p>
    </footer>
  );
};

export default Footer;
