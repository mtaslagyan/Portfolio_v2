import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => {
    return (
        <div className="header mt-3">
            <div className="container header-contact">
                <div className="row">
                    <div className="col-12 mr-0 pr-0">
                        <div className="header-content">
                            <a href="mailto:mtaslagyan@yahoo.com"><i class="far fa-envelope"></i></a>
                            <a href="tel:13238219808"><i class="fas mx-4 fa-phone"></i></a>
                            <a href="https://github.com/mtaslagyan"><i class="fab fa-github"></i></a>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="container nav2 text-center">
                <div className="row">
                    <div className="col-12">
                        <hr className="nav2-divider"/>
                        <div className="nav-link-item2">
                            <span>
                                <NavLink exact to="/">home</NavLink>
                            </span>
                            <span>
                                <NavLink to="/htmlAndCss">html&css</NavLink>
                            </span>
                            <span>
                                <NavLink to="/reactjs">react.js</NavLink>
                            </span>
                            <span>
                                <NavLink to="/resume">resum&eacute;</NavLink>
                            </span>
                            <span>
                                <NavLink to="/contact">contact</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>      
    )
}

export default Header
