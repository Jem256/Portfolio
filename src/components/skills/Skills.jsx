import React from "react";
import "./Skills.css";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>TailwindCss</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
