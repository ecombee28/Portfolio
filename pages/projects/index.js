import React from "react";
import projectStyle from "../../styles/Projects.module.css";
import {
  faAngleDoubleRight,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const index = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className={projectStyle.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`${projectStyle.box} `}>
        <div className={`${projectStyle.project_description}`}>
          <h2>EMDB</h2>
          <p className={projectStyle.description}>
            Eric's movie database (EMDB) showcases new and upcoming movies
            similar to Netflix and Disney Plus. Search for your favorite movie
            with ease and view the accompanying trailer. It uses the TMDB API
            for all movie resources. This application was created with the
            following technologies: Next.js, HTML5, and CSS.
          </p>
          <div className={projectStyle.icon_wrapper}>
            <img
              src="next-js.svg"
              alt="next.js"
              className={projectStyle.reverse_image}
            />
            <img src="html5.png" alt="html5" />
            <img src="css-3.png" alt="css3" />
          </div>

          <a href={"https://github.com/ecombee28/EMDB"} target="_blank">
            <p className={projectStyle.source_code}>{`< Source Code />`}</p>
          </a>
          <a href={"https://emdb-8mwrn.ondigitalocean.app/"} target="_blank">
            <p className={projectStyle.demo}>
              Launch Site
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={projectStyle.code_icon}
              ></FontAwesomeIcon>
            </p>
          </a>
        </div>
      </div>

      <div className={`${projectStyle.box} `}>
        <div className={projectStyle.project_description}>
          <h2>Matching Game</h2>
          <p className={projectStyle.description}>
            A card matching game created for up to two players. It was created
            with the following technologies: JavaScript, HTML5, CSS, and PHP.
          </p>
          <div className={projectStyle.icon_wrapper}>
            <img src="html5.png" alt="html5" />
            <img src="css-3.png" alt="css3" />
            <img src="php.png" alt="php" />
          </div>
          <a href={"./"} target="_blank">
            <p className={projectStyle.source_code}>{`< Source Code />`} </p>
          </a>
          <a href={"https://combeecreations.com/matchgame/"} target="_blank">
            <p className={projectStyle.demo}>
              Launch Site
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={projectStyle.code_icon}
              ></FontAwesomeIcon>
            </p>
          </a>
        </div>
      </div>

      <div className={`${projectStyle.box} `}>
        <div className={projectStyle.project_description}>
          <h2>Card Dealing API</h2>
          <p className={projectStyle.description}>
            A card dealing API build with PHP Laravel. This is a great api if
            you are want to build a card game Poker or Blackjack. This API
            deals, shuffles, reorders, keeps track of your discarded cards, and
            keeps track of a 52 card deck.
          </p>
          <div className={projectStyle.icon_wrapper}>
            <img src="laravel.png" alt="laravel" />
            <img src="php.png" alt="php" />
          </div>
          <a
            href={"https://github.com/ecombee28/Card-Dealing-API"}
            target="_blank"
          >
            <p className={projectStyle.source_code}>{`< Source Code />`}</p>
          </a>
          <a
            href={"https://combeecreations.com/Card_Sample/index.php"}
            target="_blank"
          >
            <p className={projectStyle.demo}>
              Launch Site
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={projectStyle.code_icon}
              ></FontAwesomeIcon>
            </p>
          </a>
        </div>
      </div>

      <div className={`${projectStyle.box} `}>
        <div className={projectStyle.project_description}>
          <h2>Signup Page</h2>
          <p className={projectStyle.description}>
            This application shows what be done with user authentication. The
            user will be asked to input a username, email, and password. The
            application uses AJAX for database authentication to check if the
            username and email address is not already in use. It also a password
            requirement of a length, case, and number.It was created with the
            following technologies: JavaScript,HTML5, CSS, and PHP.
          </p>
          <div className={projectStyle.icon_wrapper}>
            <img src="js.svg" alt="javascript" />
            <img src="html5.png" alt="html5" />
            <img src="css-3.png" alt="css3" />
            <img src="php.png" alt="php" />
          </div>
          <a href={"https://github.com/ecombee28/Sign-Up"} target="_blank">
            <p className={projectStyle.source_code}>{`< Source Code />`}</p>
          </a>
          <a href={"https://combeecreations.com/signUp/"} target="_blank">
            <p className={projectStyle.demo}>
              Launch Site
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={projectStyle.code_icon}
              ></FontAwesomeIcon>
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
