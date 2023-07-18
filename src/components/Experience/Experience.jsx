
import './experience.css'
import {BiSolidMessageRoundedCheck} from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { skillsFrontend } from '../../data'
import {skillsBackend} from '../../data'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Experience </h2>
      <div className="container experience_container">
        <div className="experience_frontEnd">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {
              skillsFrontend.map(({language,status},index)=>{
                return (
                  <article key={index} className='experience_detail'>
                  <FaLaptopCode className='experience_detail-icon'/>
                  <div>
                    <h4>{language}</h4>
                    <small className='text-light'>{status}</small>
                  </div>
                  </article>
                )
              })
            }
          </div>

        </div>
      
        {/* End of Front End  */}

        <div className="experience_backEnd">
        <h3>Backend Development</h3>
          <div className="experience_content">
            {
              skillsBackend.map(({language,status},index)=>{
                return (
                  <article key={index} className='experience_detail'>
                  <BiSolidMessageRoundedCheck className='experience_detail-icon'/>
                  <div>
                    <h4>{language}</h4>
                    <small className='text-light'>{status}</small>
                  </div>
                  </article>
                )
              })
            }
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience