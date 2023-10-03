
import './about.css'
import ME from '../../assets/images/me.jpg'
import {DiCodeigniter} from 'react-icons/di'

import {GiMountedKnight} from 'react-icons/gi'
import {BsCodeSquare} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me </h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={ME} className='about_me-image' alt="About img " />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <DiCodeigniter className='about_icon'/>
              <h5>I love </h5>
              <small>Travelling ! </small>
            </article>
            <article className='about_card'>
              <BsCodeSquare className='about_icon'/>
              <h5>I love </h5>
              <small>Coding ! </small>
            </article>
            <article className='about_card'>
              <GiMountedKnight className='about_icon'/>
              <h5>I love </h5>
              <small>Eating ! </small>
            </article>
          </div>

          <p>
          All people smile in the same language. Smiles are free but they are worth a lot.
          Success is not an accident. 
          " Never give up !; At first, you didn't succceed , call it version 1.0; ". Develop the best , release the latest success version ;
          </p>
          <a href="#contact" className='btn btn'> Let's Talk </a>
          <a href="https://khonhein.github.io/portfolio/images/project1.jpg" className=' certificate' tarGet='_blank'> view certificate </a>
        </div>
      </div>
    </section>
  )
}

export default About