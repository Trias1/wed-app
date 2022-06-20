import React from 'react'
import '../commoncss/maps.css'
 
const Maps = () => {
  return (
    <selection id='maps'>
    <div>
    <div className="section w-details-area center-text">
      <div className="container">
        <div className="map-responsive">
          <iframe width="550" height="550" id="gmap_canvas" src="https://maps.google.com/maps?q=Jl.%20Kapten%20Heru%20Suryadi%20106-72,%20Cisadap,%20Kec.%20Ciamis,%20Kabupaten%20Ciamis,%20Jawa%20Barat%2046215&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
          <a href="https://www.whatismyip-address.com/divi-discount/"></a>
          <a href="https://www.embedgooglemap.net"></a>
        </div>
        <a href="https://www.google.com/maps/place/Jl.+Kapten+Heru+Suryadi+No.106,+Cisadap,+Kec.+Ciamis,+Kabupaten+Ciamis,+Jawa+Barat+46215,+Indonesia/@-7.313052,108.315476,13z/data=!4m5!3m4!1s0x2e6f5958c6f84799:0x7479bb95ef5f06c9!8m2!3d-7.3130519!4d108.3154755?hl=en-US" className='btn'>Buka Maps</a>
      </div>
      </div>
    </div>
    </selection>
  )
}

export default Maps