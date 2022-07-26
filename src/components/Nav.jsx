import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function nav() {
  return (
    <nav>
      <div className="text-3xl flex flew-col gap-4">
        <a
          href="mailto:jemynagasha@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://github.com/Jem256"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          <RiLinkedinBoxFill />
        </a>
      </div>
    </nav>
  );
}

export default nav;
