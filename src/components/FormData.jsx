import React from 'react'
import { useState, useEffect } from 'react'
import './formdata.css'

function FormData() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function FetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const result = await response.json()
        setData(result)
        setLoading(false)

        
      } catch (error) {
        console.log(" error occured: " + error)
        setLoading(false)
      }
    }

    FetchPosts()

  },[])


  return (
    <div className='parentClass'>

    {
      loading? <p className='loading'>Loading...</p> : (
        <div className='card'>
         {data.map((postData)=>(
          <div className="postData" key={postData.id}>
          <p className='userid'>{postData.userId}</p>
         <p className='title'> {postData.title }</p>
          <p className='body'>{postData.body}</p>
        </div>
        )) }
        </div>

      
      )
    }
     
     


    </div>
  )
}

export default FormData