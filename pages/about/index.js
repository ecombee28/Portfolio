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
              I am a Software Developer with over 4 years of experience. The
              last two years I have been professionally developing software for
              the Honeywell Corporation. I have experience in web development
              using front end frameworks such as React/Next.js as well as
              backend languages like PHP and SQL. I am eager to learn which is
              why I would be a perfect fit for your company.
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
