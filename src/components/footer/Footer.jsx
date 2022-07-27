import React from "react";
import "./Footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer__logo">
        💎Jem
      </a>

      <div className="footer__socials">
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          aria-label="Github"
          href="https://github.com/Jem256"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          aria-label="twitter"
          href="https://twitter.com/nagasha_"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jemimah Nagasha. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
