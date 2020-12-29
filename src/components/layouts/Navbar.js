import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler"
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="about">Sobre</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="contact">Contato</NavLink>
              </li>             
            </ul>
          </div>
          <Link exact to="addUser" className="btn btn-outline-light">Add user</Link>
        </div>
      </nav>

    )
}


export default Navbar