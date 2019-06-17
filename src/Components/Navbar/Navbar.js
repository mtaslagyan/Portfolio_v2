import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="row d-flex justify-content-end">
                    <div className="col-2 pr-0">
                        <div className="nav-link-item">
                            <NavLink exact to="/">home</NavLink>
                        </div>
                        <div className="nav-link-item">
                            <NavLink to="/htmlAndCss">html&css</NavLink>
                        </div>
                        <div className="nav-link-item">
                            <NavLink to="/reactjs">react.js</NavLink>
                        </div>
                        <div className="nav-link-item">
                            <NavLink to="/resume">resum&eacute;</NavLink>
                        </div>
                        <div className="nav-link-item">
                            <NavLink to="/contact">contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
