import React from 'react'
import Homelogo from "../assets/images/doll.jpg"
import"./home.css"

import { useState} from 'react'

function Home() {

    const [number, setNumber] = useState(0);

    const handleAdd = () =>{
    setNumber(number+1)
    console.log(number)
    }

    const handleMinus= () =>{
        setNumber(number-1)
    }

    const handleSetToZero= () =>{

        setNumber(0)  
    }

  return (
    <div>
        <div className="parent">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Ullam quo laboriosam perspiciatis in, itaque minus quasi quam laborum quisquam eos incidunt doloribus,
                 quibusdam quae reprehenderit voluptas! Fugiat expedita perferendis magni?</p>
        </div>
       <div className="Img">
        <img src={Homelogo} alt="doll img" width="50px" />
       </div>


       <br />

    
       <button onClick={handleAdd}>
        Add
       </button>
 <br /> <br />
       
     <h2>
     {number}
     </h2>

       <br /> <br />
       <button onClick={handleMinus}>
        Minus
       </button>

       <button onClick={handleSetToZero}>
        set to zero
       </button>





    </div>
   
  )
}

export default Home