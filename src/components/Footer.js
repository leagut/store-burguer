import React from 'react'
import logi from '../images/lol.png'
import map from '../images/maps.JPG'
import './footer.css'

export const Footer = () => {
  return (
    <div className='ffooter'>
        <div >
            <img src={logi} className='logi'/>
            
        </div>
        <div>
          <img src={map} className='mapp'/>
        </div>
    </div>
  )
}
