import React,{useState} from "react"


export const Calculos = () => {

const [result, setResult] = useState(0);
function clickNumberi(val){
    setResult(result + val);
    
} 


return (
    <div>Calculos</div>
    
)
}
