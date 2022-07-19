import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Jem256" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://twitter.com/nagasha_" target="_blank" rel="noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made by <a href="/" >Jem</a>💎 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer