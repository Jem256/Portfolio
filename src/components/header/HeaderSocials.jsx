import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        aria-label="linkedin"
        href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Jem256" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/nagasha_" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
