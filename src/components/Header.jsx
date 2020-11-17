import React from "react"
import PropTypes from "prop-types";


const Header = (props) => { 
    
    return (
        <div>
            <h1>{props.branding}</h1>
            <div>
            <div>

            </div>
            <div>
                <nav>
                    <a href = "home">Home</a>
                    <a href = "About">About</a>
                    <a href = "contact">Contact</a>
                    <a href = "services">Service</a>
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