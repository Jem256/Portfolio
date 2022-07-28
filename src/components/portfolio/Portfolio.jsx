import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/ecoOptions.png";
import IMG2 from "../../assets/linked.png";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Eco Options",
      description: (
        <p>
          I built this project as a challenge for myself to apply the
          <span className="underline"> ReactJs </span>
          and
          <span className="underline"> Redux </span>
          concepts i had learned and also give our budding sustainable menstrual
          health Ecommerce business a website.
        </p>
      ),
      github: "https://github.com/Jem256/ecooptions",
      demo: "https://ecooptionsug.com",
    },
    {
      id: 3,
      image: IMG2,
      title: "Social Networking App",
      description: (
        <p>
          I built this LinkedIn clone from a
          {" "}
          <a href="https://www.youtube.com/watch?v=QaYts9sPmcY&t=1s">
            Youtube Tutorial
          </a>
          {" "}
          while learning
          <span className="underline"> ReactJs </span>
          and
          <span className="underline"> Redux </span>
          concepts. It
          {" "}
          <span className="underline"> Firebase </span>
          for authentication, database management and hosting.
        </p>
      ),
      github: "https://github.com/Jem256/linkedinclone",
      demo: "https://linkedin-clone-new-58e07.firebaseapp.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id, image, title, github, demo, description,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio__content">
                <h3>{title}</h3>
                {description}
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
}

export default Portfolio;