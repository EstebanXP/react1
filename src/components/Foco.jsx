import React,{useState} from 'react'




const Foco = (props) => {

    const [estatus, setEstatus]=useState(false)

    const switchEstatus=()=>{
        setEstatus(estatus=>!estatus)
    }





    return (
        <div>
            <img src={estatus?"imagenes/focoP.jpg":"imagenes/focoA.jpg"}
            onClick={switchEstatus} 
            alt="foco"
            width="200"
            ></img>
            <p>{props.lugar}</p>
        </div>
        
    )
}

export default Foco
