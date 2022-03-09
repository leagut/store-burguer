import React from 'react'
import './comidas.css'
import { NavLink } from "react-router-dom"
import hs from '../images/burguer/sencilla.jpg'
import { Constructor } from '../components/Constructor'
import { useState } from 'react'

export const Comidas = () => {

    const products = [
        {
            id: 1,
            name: "Sencilla",
            price: 8000,
            category: "burguer",
            
        },
        {
            id: 2,
            name: "Especial",
            price: 12000,
            category: "burguer"
        },
        {
            id: 3,
            name: "Doble",
            price: 16000,
            category: "burguer"
        },
        {
            id: 4,
            name: "Sencillo",
            price: 6000,
            category: "dogs"
        },
        {
            id: 5,
            name: "Especial",
            price: 9000,
            category: "dogs"
        },
        {
            id: 6,
            name: "Choriperro",
            price: 7000,
            category: "dogs"
        },
        {
            id: 7,
            name: "Hawaiana",
            price: 7000,
            category: "colitas"
        },
        {
            id: 8,
            name: "Cordero",
            price: 7000,
            category: "colitas"
        },
        {
            id: 9,
            name: "Pernil",
            price: 30000,
            category: "colitas"
        },
        {
            id: 10,
            name: "Sencilla",
            price: 8000,
            category: "Salchipapa"
        },
        {
            id: 11,
            name: "Especial",
            price: 10000,
            category: "Salchipapa"
        },
        {
            id: 12,
            name: "Familiar",
            price: 23000,
            category: "Salchipapa"
        },
        {
            id: 13,
            name: "coca-cola",
            price: 1800,
            category: "Bebidas"
        },
        {
            id: 14,
            name: "colombiana-350",
            price: 1500,
            category: "Bebidas"
        },
        {
            id: 15,
            name: "colombiana litro",
            price: 3000,
            category: "Bebidas"
        },
        {
            id: 16,
            name: "pepi litro",
            price: 3000,
            category: "Bebidas"
        },
    ]

    const [estado, setEstado] = useState("burguer")
    

return (
    <div className='container-comida'>
        <div className='side'>
                    <ul className='letras-side'>
                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='hamburguesas'>Hamburguesas</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='perros'>Perros</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='colitas'>Colitas Cubanas</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='salchipapas'>Salchipapa</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='bebidas'>Bebidas</NavLink>
                            </li>
                    </ul>
        </div>

        <div className='container-comidaa'>
                {products.map(x=>{
                    return <Constructor key={x.id} name={x.name} img={x.img} price={x.price} category={x.category} />
                })}
        </div>


    </div>
)
}
