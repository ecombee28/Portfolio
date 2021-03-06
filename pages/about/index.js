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
              I am Eric Combee and I am passionate about software. My desire for
              learning never stops and that shows in the projects that I create.
              I love to create software that the user can enjoy. When I am not
              programming I enjoy spending time with my wife and three children.
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
