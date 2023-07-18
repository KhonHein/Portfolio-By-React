import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub, AiOutlineDribbble} from 'react-icons/ai'


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/KhonHein" tarGet='_blank'> 
        <BsLinkedin/> 
        </a>
        <a href="https://github.com/KhonHein" tarGet='_blank'>
        <AiOutlineGithub/>
        </a>
        <a href="https://github.com/KhonHein" tarGet='_blank'>
        <AiOutlineDribbble/>
        </a>
    </div>
  )
}

export default HeaderSocial