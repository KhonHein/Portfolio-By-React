import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Khon Hien</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a tarGet='_blank' href="https://www.facebook.com/sai.bwathmara.9/"><BsFacebook/></a>
        <a><BsInstagram/></a>
        <a><BsTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Khon Hein . Portfolio . All right reserved ;</small>
      </div>
    </footer>
  )
}

export default footer