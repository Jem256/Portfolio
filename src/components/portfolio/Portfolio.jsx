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
          I am building this platform for a local startup using{' '}
          <span className="underline">ReactJs</span> ,{' '}
          <span className="underline">Context API</span> for state management
          and <span className="underline">TailwindCss</span> for styling. It
          uses <span className="underline">Firebase</span> for the backend and
          hosting.
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
          I built this project for a local ecommerce sustainable menstrual
          health startup,{' '}
          <a href="http://ecooptions-71600.web.app/">Eco Options.</a>{' '}
          <span className="underline">ReactJs</span> and the
          <span className="underline"> Redux ToolKit</span> was used to build
          and handle state management. It is integrated with{' '}
          <span className="underline">Flutterwave API</span> to handle customer
          payments and uses <span className="underline">Firebase</span> for it's
          backend and hosting.
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
          This project was built as part of an interview process. It uses{' '}
          <span className="underline">redux</span> to fetch covid data of
          nigeria from{' '}
          <a href="https://covidnigeria.herokuapp.com/api">
            an open source api.
          </a>{' '}
          The UI was built using ReactJs and CSS. A summary of the country's
          data is displayed and the search feature is used to query data by
          state.
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
