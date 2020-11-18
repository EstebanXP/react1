import React,{useState} from 'react'



const Contador = () => {
    const [cont, setCont] = useState(0)

    return (
        <div>
            <p>{cont}</p>
            <button onClick={ () => setCont(cont+1) }>Sumar 1</button>
        </div>
    )
}

export default Contador