import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/me1.png'

import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Khon Hein</h1>
        <h5 className='text-warning '>Junior, Fullstack Web-Developer </h5>
        <CTA />
        
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>


        <a href="#contact" className='scroll_down'>Scroll Down </a>
      
      </div>
    </header>
  ) 
}

export default Header