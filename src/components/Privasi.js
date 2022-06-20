import React from 'react'
import '../commoncss/keamanan.css'
import aman from '../images/keamanan.png'

const Privasi = () => {
  return (
    <section id='privasi'>
        <div className="section w-details-area center-text">
            <div className="container">
                    <div>
                        <h5>Acara ini mengikuti protokol kesehatan covid-19. Senantiasa kenakan masker dan jaga jarak</h5>
                        <img className="kali-graf" src={aman}></img>
                    </div>
            </div>
        </div>
    </section>
  );
}

export default Privasi