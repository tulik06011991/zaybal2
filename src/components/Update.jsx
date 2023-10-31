import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [idd, setIdd] = useState([])
  const {id}= useParams()
  const navigate = useNavigate()
  
  // console.log(id)
  // const DATA = async () =>{

  // }
  
  
  
  useEffect(() =>{
    axios.get(`https://zaybal.onrender.com/${id}`)
   .then((res) =>{
     setName(res.data.name)
     setTitle(res.data.title)
     setImage(res.data.image)
     
     
     console.log(name, id)
   })
   .catch((error) =>console.log(error))
    
    
  },[])
      




      

  

  const putSubmit = async () =>{
    const data = {
      name,
      title,
      image

    }
    await axios.put(`https://zaybal.onrender.com/${id}`,data).then(() =>
        navigate("/about")
        
      ).catch((error)=>console.log(error))
    
      
    }
    return (
      <>
        
            
  
            
  
  
            <div className="mb-3 mt-5">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name" />
            </div>
            
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="title" />
            </div>
  
            
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="text" value={image} onChange={e=>setImage(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="image" />
            </div>
            {/* <form onSubmit={} > */}
            <button  onClick={putSubmit} type='submit' className='btn btn-outline-primary w-100'><h6>Jo'natish</h6></button>
  
            {/* </form> */}
           
  
  
  
          
      </>
    )
  }

  export default Update


    
    
  
 

  

