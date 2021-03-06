import React, { useState } from "react";
import bannerStyle from "../styles/Banner.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className={bannerStyle.big_logo}>
        <img src="/ccLogo.png" alt="" />
      </div>
      <motion.div
        className={bannerStyle.title}
        initial={{ opacity: 0, y: "5vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p className={bannerStyle.small}>Hi, I am </p>
        <p className={bannerStyle.big}>Eric Combee</p>
        <p className={bannerStyle.medium}>
          I am a Software developer that loves to create simple yet effective
          applications with a great UI/UX experience.
        </p>
        <Links href="/projects">
          <motion.button
            className={bannerStyle.project_btn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            View my Portfolio
          </motion.button>
        </Links>
      </motion.div>
    </>
  );
};

export default Banner;
