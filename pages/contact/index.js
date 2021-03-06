import React, { useState } from "react";
import contactStyle from "../../styles/Contact.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const serviceId = "gmail";
  const userId = "user_jBYCtPviiAPNoXg09mxz5";
  const template = "cc_template";
  const [showMessage, setShowMessage] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, template, e.target, userId).then(
      (result) => {
        setShowMessage(true);
        setShowSuccess(true);
        setTimeout(function () {
          setShowSuccess(false);
        }, 5000);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.3,
        stiffness: 80,
      },
    },
  };

  const pdf = "https://combeecreations.com/resume/timesheet_2.pdf";

  return (
    <motion.section
      className={contactStyle.contact_wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={contactStyle.container}>
        <div className={contactStyle.left_content}>
          <h1 className={contactStyle.title}>Contact Me</h1>
          <p className={contactStyle.body}>
            If you want to talk to me in regards to possible employment or you
            just want to say hi, I want to hear from you.
          </p>

          <div className={contactStyle.contact_info}>
            <div className={contactStyle.mini_wrapper}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={contactStyle.email_icon}
              ></FontAwesomeIcon>
              <a
                href="mailto:ecombee28@gmail.com"
                className={contactStyle.email}
              >
                Ecombee28@gmail.com
              </a>
            </div>
            <div className={contactStyle.mini_wrapper}>
              <FontAwesomeIcon
                icon={faPaperclip}
                className={contactStyle.email_icon}
              ></FontAwesomeIcon>
              <a href={pdf} target="_blank" className={contactStyle.email}>
                Resume
              </a>
            </div>
            <div className={contactStyle.icon_wrapper}>
              <a
                href="https://www.linkedin.com/in/eric-combee-977509142/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={contactStyle.icon}
                />
              </a>
              <a href="https://github.com/ecombee28" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={contactStyle.icon}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={contactStyle.right_content}>
          <div
            className={`${
              showSuccess ? contactStyle.success_wrapper : contactStyle.hide
            }`}
          >
            <p>
              Thank you for reaching out. I will get back to you as soon as
              possible
            </p>
          </div>

          <form
            onSubmit={sendEmail}
            autoComplete="new-password"
            className={contactStyle.form}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="Off"
              required
              className={contactStyle.input}
            />

            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              required
              className={contactStyle.input}
            />

            <textarea
              type="text"
              name="message"
              placeholder="Message"
              autoComplete="off"
              required
              className={`${contactStyle.input} ${contactStyle.message}`}
            />
            <input
              type="submit"
              className={contactStyle.submit_button}
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
