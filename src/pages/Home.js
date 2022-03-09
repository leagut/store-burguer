import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './home.css'
import letrero from '../images/lol3.png'

export const Home = () => {
return (
    <div>
        <div className='Bodyy'>
        <img src={letrero} className='letreto'/>
        <div className='charla'>
        <p>Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger. Se presenta en un pan ligero partido en dos que posee forma de óvalo. Suele estar acompañada de aros de cebolla, hojas de lechuga, alguna rodaja de tomate, láminas de encurtidos y papas fritas. Se suele aliñar con algún condimento, como puede ser la salsa de tomate (o kétchup), la mostaza, el relish, o la mayonesa, entre otros.En el caso de que se ponga una lámina de queso procesado, se convierte en una hamburguesa con queso</p>
        </div>

        </div>
        
    </div>
)
}
