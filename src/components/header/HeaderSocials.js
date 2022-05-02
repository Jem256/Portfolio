import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jemimah-nagasha-99b256190/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Jem256" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/nagasha_" target='_blank'><BsTwitter/></a>
      </div>
  )
}

export default HeaderSocials