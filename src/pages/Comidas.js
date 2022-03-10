import React, { useEffect } from 'react'
import './comidas.css'
import { NavLink , useParams } from "react-router-dom"
import { Constructor } from '../components/Constructor'
import { useState } from 'react'


export const Comidas = () => {

    const {category} = useParams()

    const products = [
        {
            id: 1,
            name: "Sencilla",
            price: 8000,
            category: "hamburguesas",
            img:require("../images/burguer/sencilla.jpg"),
            
        },
        {
            id: 2,
            name: "Especial",
            price: 12000,
            category: "hamburguesas",
            img:require("../images/burguer/especial.PNG")
        },
        {
            id: 3,
            name: "Doble",
            price: 16000,
            category: "hamburguesas",
            img:require("../images/burguer/doble.jpg")
        },
        {
            id: 4,
            name: "Sencillo",
            price: 6000,
            category: "perros",
            img:require("../images/dogs/sencillo.webp")
        },
        {
            id: 5,
            name: "Especial",
            price: 9000,
            category: "perros",
            img:require("../images/dogs/especial.jpg")
        },
        {
            id: 6,
            name: "Choriperro",
            price: 7000,
            category: "perros",
            img:require("../images/dogs/choriperro.jpg")
        },
        {
            id: 7,
            name: "Hawaiana",
            price: 7000,
            category: "colitas",
            img:require("../images/colita/cola.jpg")
        },
        {
            id: 8,
            name: "Cordero",
            price: 7000,
            category: "colitas",
            img:require("../images/colita/cola.jpg")
        },
        {
            id: 9,
            name: "Pernil",
            price: 30000,
            category: "colitas",
            img:require("../images/colita/cola.jpg")
        },
        {
            id: 10,
            name: "Sencilla",
            price: 8000,
            category: "salchipapas",
            img:require("../images/salchipapa/especial.jpg")
        },
        {
            id: 11,
            name: "Especial",
            price: 10000,
            category: "salchipapas",
            img:require("../images/salchipapa/sencilla.jpeg")
        },
        {
            id: 12,
            name: "Familiar",
            price: 23000,
            category: "salchipapas",
            img:require("../images/salchipapa/familiar.jpeg")
        },
        {
            id: 13,
            name: "coca-cola",
            price: 1800,
            category: "bebidas",
            img:require("../images/bebidas/coca350.webp")
        },
        {
            id: 14,
            name: "colombiana-350",
            price: 1500,
            category: "bebidas",
            img:require("../images/bebidas/col350.jpg")
        },
        {
            id: 15,
            name: "colombiana litro",
            price: 3000,
            category: "bebidas",
            img:require("../images/bebidas/col1lt.webp")
        },
        {
            id: 16,
            name: "pepi litro",
            price: 3000,
            category: "bebidas",
            img:require("../images/bebidas/pep1t.jpg")
        },
    ]

    const [filtro, setFiltro] = useState("hamburguesas")
    useEffect(()=>{
        setFiltro(category)
    },[category])

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
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='salchipapas'>salchipapas</NavLink>
                            </li>

                            <li>
                                <NavLink className={({isActive}) => isActive ? 'active2' : 'desactive2'} to='bebidas'>bebidas</NavLink>
                            </li>
                    </ul>
        </div>

        <div className='container-comidaa'>
                {products.map(x=>{
                    if(x.category === filtro){
                        return <Constructor key={x.id} name={x.name} img={x.img} price={x.price} category={x.category} />
                    }
                    return ""
                })} 
        </div>


    </div>
)
}
