import React, { useEffect, useState,  } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {


  const [name , setName] = useState('')
  const [title , setTitle] = useState('')
  const [image , setImage] = useState('')
  const navigate = useNavigate()


  const handlesubmit = async (e) =>{
    e.preventDefault()
    

    axios.post("https://zaybal.onrender.com", {
      name,
      title, 
      image
    })
    .then(()=>{
      alert(`jo'natildi`)
    }).catch((error) =>{
      console.log(error.status)
    })
    navigate("/about")

    console.log(title)


    // useEffect(() =>{
    //   handlesubmit()

    // },[])

  }
  return ( 
    <div className='container'>
      <div className="row">
        <div className="col">
          <form onSubmit={handlesubmit}>


          <div className="mb-3 mt-5">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="title" />
          </div>

          
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="text" value={image}  onChange={(e) =>setImage(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="image" />
          </div>
          <button type='submit' className='btn btn-outline-primary w-100'><h6>Jo'natish</h6></button>

          </form>



        </div>
      </div>
    </div>
  )
}

export default AddBook
