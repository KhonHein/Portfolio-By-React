import React from 'react'
import './portfolio.css'
import { portfolios } from '../../data'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work Actavitivity</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          portfolios.map(({id, image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="" srcSet={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} tarGet='_blank' className='btn'>Github</a>
                  <a href={demo} tarGet='_blank' className='btn btn-primary'>Live Demo </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio