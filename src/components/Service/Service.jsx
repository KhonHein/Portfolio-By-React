import React from 'react'
import './service.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer </h5>
      <h2>Services </h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
                *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
                *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              ******* 
              </p>
            </li>
          </ul>
        </article>
        {/* End UI/UX */}

        {/* Web-development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web-Development</h3>
          </div>
          <ul className="service_list">
          <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
          </ul>
        </article>

        {/* content creation */}
        <article className='service'>
          <div className="service_head">
            <h3>Content-Creation</h3>
          </div>
          <ul className="service_list">
          <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              *******
              </p>
            </li>
            <li>
              <AiFillCheckCircle className='service_list-icon'/>
              <p>
              ******* 
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service