/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./About.css";
import me from '../../assets/me.png';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <p>
            <span className="special">As a web developer,</span> I enjoy
            bridging the gap between engineering and design — combining my
            technical knowledge with my keen eye for design to create a
            beautiful product. My goal is to always build applications that are
            scalable and efficient under the hood while providing engaging,
            pixel-perfect user experiences.
            <br /> <br />
            <span className="special">
              When I'm not in front of a computer screen,
            </span>{' '}
            I'm probably immersing myself in some fictional literature and
            advocating for sustainable menstrual health practices at Eco
            Options.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
