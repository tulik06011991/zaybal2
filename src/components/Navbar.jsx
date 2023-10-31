import React from 'react'
import{Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fs-4  py-3">
  <div className="container-fluid">
    <Link className="navbar-brand text-white fs-3" to="/">Menu</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/addbook">Qo'shish</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">Ma'lumotlar</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
