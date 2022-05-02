import React from 'react'
import './About.css'
import me from '../../assets/me-about.png'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
// import {VscFolderLibrary} from 'react-icons/vsc'
// import {BsLinkedin} from 'react-icons/bs'
// import {FaGithub} from 'react-icons/fa'
// import {BsTwitter} from 'react-icons/bs'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          {/*<div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}

          <p>
            I am a self-taught frontend end developer located in Uganda. I am 
            passionate about creating beautiful and user friendly applications. <br />
            <br />
            Well-organised person, problem solver, independent worker with a high 
            attention to detail. A fan of african literature and a sustainable menstrual
            health advocate at Eco Options.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>

      </div>
    </section>
  )
}

export default About