import React from "react"
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom"

const Header = (props) => { 
    
    return (
        <div>
            <h1>{props.branding}</h1>
            <div>
            <div>

            </div>
            <div>
                <nav>
                    <NavLink to = "/">Home</NavLink>
                    <NavLink to = "AddContact">Add Contact</NavLink>
                  
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