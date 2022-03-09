import React from 'react'
import './constructor.css'
export const Constructor = (props) => {
return (
    <div className='bob'>
        
        {/* <img src={require(props.img)} alt="" /> */}
        
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <div>
            
        </div>
    </div>
)
}