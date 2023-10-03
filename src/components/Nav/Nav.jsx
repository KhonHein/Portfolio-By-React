import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserSecret} from 'react-icons/fa'
import { FcContacts } from 'react-icons/fc'
import { DiCodeigniter } from 'react-icons/di'
import {BsJournalBookmark} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {
  const [activeNav ,setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><FaUserSecret/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmark/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')}  className={activeNav === '#service' ? 'active' : ''}><DiCodeigniter/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></a>
    </nav>
  )
}

export default Nav