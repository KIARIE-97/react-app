import React from 'react'
import FormData from './FormData'
import { useState } from 'react'

function Contacts() {
  const [formData , setFormData] = useState({name: "", email: "", age: ""})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormData({name: name, email:email, age: age})

    
  }

  const handleNameChange = (e) =>{
    setName(e.target.value)
    
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }

  const handleAgeChange = (e)=>{
    setAge(e.target.value)
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <label htmlFor="name">UserName</label>
      <input type="text" 
      value={name}
      onChange={handleNameChange}
      
      />
 <br /> <br />

      <label htmlFor="Email">Email</label>
      <input type="email" 
      value={email} 
      onChange={handleEmailChange}/>

<br /> <br />

      <label htmlFor="Age">Age</label>
      <input type="text" 
      value={age} 
      onChange={handleAgeChange}/>
      <button>Submit</button>
      <br /> <br />
      
     </form>

     <h2>your name is {formData.name}</h2>
     <p>Your Age is {formData.age} </p>
     <p>Your email is : {formData.email} </p>
    </div>
  )
}

export default Contacts