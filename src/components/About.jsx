import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../App.css';

const About = () => {
  const [data, setData] = useState([])
  
  const {id} = useParams()

  
  
  // const[loading, setLoading] = useState(fals

  

  useEffect(() => {
     axios.get("https://zaybal.onrender.com")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
     
  } ,[])
  console.log(data)
 





  return (
    <section>
    <div className='container mt-4 '>
      <div className="row ">
        <div className="col">
        
            <div className=" cards">

        
      {data.map((d, i)=> (

        <div  key={d._id}className="card  mb-4"  >
          <img src={d.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{d.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p><h4>{d.name}</h4></p>
            <div className='d-flex me-3 '>
            <Link to={`/update/${d._id}`} className="btn btn-primary mx-3 ">O'zgartirish</Link>
            {/* <form action="/delete/:id"> */}

            <Link to={`/deleted/${d._id}`} className="btn btn-primary">O'chirish</Link>

            {/* </form> */}

            </div>
          </div>
          
        </div>
          ))}
          </div>
            </div>


</div>
        
      

    </div>
    </section>
  )
}

export default About
