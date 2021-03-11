import React from "react";
import aboutStyle from "../../styles/About.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "2vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <motion.section
      className={aboutStyle.main_wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={aboutStyle.left}>
        <div className={aboutStyle.about}>
          <h1 className={aboutStyle.title}>About Me</h1>
          <div className={aboutStyle.body_wrapper}>
            <p className={aboutStyle.body}>
              I am passionate individual for life and software. My desire for
              learning never stops and that shows in the projects that I create.
              I love to create software that the user can enjoy.My road to
              becoming a developer as had many pot holes. I decided to go back
              to college at the age of 28 while working a full time job. I
              picked Computer Science because I have always loved computers and
              I thought it would be cool to work with them on a daily basis, boy
              was I in for a rude awaking. After many months of struggling to
              comprehend what it meant to develop software I started to question
              my decision of going back to school. With many long nights and my
              wonderful wife by my side it started to become clear to me.It has
              taken me longer then I had original intended but I can honestly
              say that I love to learn and develop software.I have worked as a
              Software Developer and Test Engineer for Honeywell the past two
              years.
            </p>
          </div>
        </div>
      </div>
      <div className={aboutStyle.right}>
        <p className={aboutStyle.tool_title}>Languages and Tools that I know</p>
        <div className={aboutStyle.tools}>
          <img src="/html5.png" alt="" title="HTML5" />
          <img src="/css-3.png" alt="" title="CSS3" />
          <img src="/js.svg" alt="" title="JavaScript" />
          <img src="/java.svg" alt="" title="Java" />
          <img src="/laravel.png" alt="" title="Laravel" />
          <img
            src="/next-js.svg"
            alt=""
            title="Next.js"
            className={aboutStyle.filter}
          />
          <img src="/php.png" alt="" title="PHP" />
          <img
            src="/sql.png"
            alt=""
            title="SQL"
            className={aboutStyle.filter}
          />
          <img src="/vbscript.png" alt="" title="VBScript" />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
