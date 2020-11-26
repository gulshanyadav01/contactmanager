import React from "react"
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom"

const Header = (props) => { 
    
    return (
        <div >
            <div className = "flex bg-red-400 h-12 justify-between items-center text-white-300 font-bold hover:text-red-800 ">
                <div>
                    <h1 className = "m-3 border-b-4 border-red-600">{props.branding}</h1>
                </div>
                <div className = "flex justify-between m-3">
                    <nav className = "m-3">
                        <NavLink to ="/" className = "m-3">Home</NavLink>
                        <NavLink to ="/AddContact">About us</NavLink> 
                    </nav>
                </div>
            </div>
            
        </div>
    )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}


export default Header; 