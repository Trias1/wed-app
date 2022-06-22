import React, { useState } from 'react'
import '../commoncss/gallery.css'

import Img1 from '../images/foto2.JPG'
import Img2 from '../images/foto3.JPG'
import Img3 from '../images/foto4.JPG'
import Img4 from '../images/foto8.JPG'
import Img6 from '../images/foto6.JPG'
import Img5 from '../images/foto7.JPG'

const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <div className='container'>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Gallery