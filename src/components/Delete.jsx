import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'


const Delete = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  const deleteData = async () =>{
    await axios.delete(`https://zaybal.onrender.com/${id}`)

    
    .then(() =>{
      navigate("/about")
      alert("o'chirildi")
    }).catch((error) =>{
      console.log(error.status)
    })
  }
  // useEffect(() =>{
  //   // deleteData()
    

  // },[])



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col my-5">
            <div className="card  my-5 justify-content-center" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <h2 className="card-text my-5 ">haqiqatdan ham o'chirilsinmi.</h2>

                <Link to="/" className="card-link btn btn-outline-primary">orqaga</Link>
                
                <button  onClick={deleteData} className="btn btn-outline-primary ms-4">ha o'chirilsin</button>

                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
