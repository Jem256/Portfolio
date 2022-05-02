import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jem</a>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Jem256" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/nagasha_" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jemimah Nagasha. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer