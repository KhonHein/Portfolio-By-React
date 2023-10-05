import React, { useState } from 'react'
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import { PiFacebookLogoBold} from 'react-icons/pi'
import {BsTelegram} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [isSuccess,setSuccess] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p781qzj', 'template_crikasd', form.current, 'tmBAQ2LbYTnoTXfkG')
      .then((result) => {
           console.log(result.text);
          e.target.reset();
          if(result.text === 'OK'){ 
            setSuccess((true));
            
            setTimeout(()=>{
              
              setSuccess((false));
            },10000)
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me </h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_opton-icon' />
          <h4>Email</h4>
          <h6>www.thmarazewa@gmail.com</h6>
          <h5>khonhein.dev@gmail.com</h5>
          <a href="mailto:khonhein.dev@gmail.com" tarGet='_blank'> Send Messages </a>
          </article>
          <article className="contact_option">
            <PiFacebookLogoBold className='contact_opton-icon' />
          <h4>Facebook/sms</h4>
          <h5>Khon Hein </h5>
          <a href="https://www.facebook.com/sai.bwathmara.9/" tarGet='_blank'> Send Messages </a>
          </article>
          <article className="contact_option">
            <BsTelegram className='contact_opton-icon'/>
          <h4>09893102188</h4>
          <h5>@KhonHein1</h5>
          <a href="https://t.me/KhonHein1" tarGet='_blank'> Send Messages </a>
          </article>
        </div>
        {/* form  contact */}
        <form ref={form} onSubmit={sendEmail}>
          <small className={`submit_success ${isSuccess ? 'show' : ''}`}>Send Success ! </small>
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="text" name='email' placeholder='your email' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='your message'></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 