import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/eco.png'
import IMG2 from '../../assets/amazon.png'
import IMG3 from '../../assets/linked.png'

function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Eco Options',
      github: 'https://github.com/Jem256/ecooptions',
      demo: 'https://ecooptionsug.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Ecommerce Website',
      github: 'https://github.com/Jem256/Amazon-clone',
      demo: 'https://clone-288d7.web.app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Social Networking Site',
      github: 'https://github.com/Jem256/linkedinclone',
      demo: 'https://linkedin-clone-new-58e07.firebaseapp.com/'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Portfolio

// 07571704649  0701889014