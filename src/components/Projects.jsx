import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import IMG1 from "../assets/eco2.PNG";

function Projects() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Eco Options",
      description: (
        <p>
          E-commerce website using ReactJs, CSS, and HTML5 for all frontend
          features and navigation Redux for state management and integrated
          flutterwave payments for checkout The process of making orders was
          eased for customers which increased sales by 50% The business
        </p>
      ),
      github: "https://github.com/Jem256/ecooptions",
      demo: "https://ecooptionsug.com",
    },
    {
      id: 2,
      image: IMG1,
      title: "Ecommerce Website",
      description: (
        <p>
          E-commerce website using ReactJs, CSS, and HTML5 for all frontend
          features and navigation Redux for state management and integrated
          flutterwave payments for checkout The process of making orders was
          eased for customers which increased sales by 50% The business
        </p>
      ),
      github: "https://github.com/Jem256/Amazon-clone",
      demo: "https://clone-288d7.web.app/",
    },
    {
      id: 3,
      image: IMG1,
      title: "Social Networking Site",
      description: (
        <p>
          E-commerce website using ReactJs, CSS, and HTML5 for all frontend
          features and navigation Redux for state management and integrated
          flutterwave payments for checkout The process of making orders was
          eased for customers which increased sales by 50% The business
        </p>
      ),
      github: "https://github.com/Jem256/linkedinclone",
      demo: "https://linkedin-clone-new-58e07.firebaseapp.com/",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-content">
      <div className="flex items-center gap-2 mb-6 text-3xl text-slate-500">
        <FaLaptopCode />
        <h2>My Work</h2>
      </div>

      <div className="portfolio__container">
        {data.map(({
          id, image, title, description, github, demo,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <div className="p-4">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
