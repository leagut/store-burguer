import React,{useContext} from 'react'
import './car.css'
import { Context } from '../hooks/Context'
import { Constructor } from '../components/Constructor'
import { useState,useEffect } from 'react'

export const Car = () => {
const contexto = useContext(Context)

const [total, setTotal] = useState(0)
const [productoremove, setProductoremove] = useState(contexto.carrito)

const getTotal = () =>{
    var totalproduct=0;
    for(const product of productoremove){
    totalproduct = totalproduct+product.price
    }
    setTotal(totalproduct)
}

useEffect(()=>{
    getTotal()
})
const remove = (product)=>{

    console.log(productoremove)
    var result = productoremove.filter( x=> x.id !== product.id)
    setProductoremove(result)
    getTotal()
    

}

const senMessage =()=>{
    window.open(`https://api.whatsapp.com/send?phone=${"3186834366"}&text=${"hola quisiera pedir: "} ${productoremove} ${total}`)
}
return (
    <div className='car'>
        
        <div className='bc-black'>
            <div className='otal' >
            {productoremove.map(x=>{
                    
                return <Constructor  isremove={true} item={x} key={x.id} name={x.name} img={x.img} price={x.price} category={x.category} 
                callback={(product)=>{remove(product)}}  />
                    
                })}
            </div>

            <div className='sumatoria'>
                total: {total}
            </div>
                
            <div>
                <button onClick={() => {senMessage()}}>whatsapp</button>
            </div>
        </div>
        
        


    </div>
)
}
