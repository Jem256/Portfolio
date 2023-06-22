import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/ecoOptions.png";
import IMG2 from '../../assets/vfarm.png';
import IMG3 from '../../assets/covid.png';

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG2,
      title: 'Virtual Farm',
      description: (
        <p>
          Developed a virtual farm platform for a local startup using ReactJS,
          Firebase, Context API, and Tailwind CSS. Implemented features such as
          user authentication, real-time updates, nested routing, search and
          cart functionality, favorites management, and a user-friendly
          dashboard.
        </p>
      ),
      github: 'https://github.com/Jem256/V-Farm-Web',
      demo: 'https://v-farm-4653d.web.app/',
    },
    {
      id: 2,
      image: IMG1,
      title: 'Eco Options',
      description: (
        <p>
          Developed a full-fledged e-commerce platform using ReactJS, and
          Firebase, and integrated the Flutterwave API for seamless payment
          processing. Implemented responsive design, efficient user
          authentication, real-time product updates, and secure payment
          handling.
        </p>
      ),
      github: 'https://github.com/Jem256/ecooptions',
      demo: 'http://ecooptions-71600.web.app/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Nigeria Covid Data',
      description: (
        <p>
          Developed a web application that uses redux to fetch covid data of
          Nigeria from an{' '}
          <a href="https://covidnigeria.herokuapp.com/api">open-source API</a> .
          I implemented a search feature to allow users to query data by state
          and get a summary of the country's covid-19 data. The UI was built
          using ReactJs and CSS.
        </p>
      ),
      github: 'https://github.com/Jem256/FrontendDevTask-FetchData',
      demo: 'https://fetchcoviddata.netlify.app/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} width={50} height={300} />
            </div>
            <div className="portfolio__content">
              <h3>{title}</h3>
              {description}
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
