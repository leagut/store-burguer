import React from 'react'
import './navbar.css'
import logo from '../images/lol.png'
import cart from '../images/carrosk.png'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
return (
    <div className='techo'>
        <div className='lefth-div'>
            <img src={logo} className='logo'/>
            <div className='letras-div'>
                {/* <div className='letras-letras'><h5>Nosotros</h5></div>
                <div className='letras-letras'><h5>Productos</h5></div> */}
                <Sidebar/>
            </div>
            
        </div>
        <div className='right-div'>
            <img src={cart} className='cart-div'/>
        </div>
    </div>
)
}
