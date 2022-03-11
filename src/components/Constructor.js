import React,{useState} from "react"
import './constructor.css'
import { Calculos } from '../components/Calculos';


export const Constructor = (props) => {



    function clickNumber(val){
        
        props.callback(val)
    } 



return (

    <div className='bob'>
        
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <div>
        <button onClick={() => {clickNumber(props.price)}}>Add</button> 
        </div>
    </div>
)
}