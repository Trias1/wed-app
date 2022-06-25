import React from 'react'
import foto2 from "../images/MempelaiPria.JPG";
import foto1 from "../images/AYXE0057.JPG";
import '../commoncss/calonpasangan.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Calonpasangan = () => {
  return (
    <section className="section w-details-area center-text">    
    <div className="container about__containerr">
        <div className="about__mee">
          <div className="about__me-imagee">
            <img src={foto2 }alt="About Imagee" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>1 Years Working</small>
              </article>
              
              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ </small>
              </article>

              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>3+ completed</small>
              </article>
            </div>

            <p>
            Hello introducing myself Trias, from Jakarta, I recently graduated from the National University majoring in Information Systems with an interest in Technology. 
            My expertise includes, but is not limited to Java, Android, and MySQL. 
            I'm currently looking for a job opportunity that can give me the opportunity to grow
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Calonpasangan