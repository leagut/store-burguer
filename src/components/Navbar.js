import React from 'react'
import { NavLink } from "react-router-dom"
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
                    <ul className='letras-div2'>
                            <li>
                                <NavLink  className={({isActive}) => isActive ? 'active' : 'desactive'} to='/'>Nosotros</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active' : 'desactive'} to='comidas'>Productos</NavLink>
                            </li>
                    </ul>
                </div>
            
        </div>

        <div className='right-div'>
            <img src={cart} className='cart-div'/>
        </div>
    </div>
)
}
