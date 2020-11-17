import React from "react"
import PropTypes from "prop-types";


const Header = (props) => { 
    
    return (
        <div>
            <h1>{props.branding}</h1>
            
        </div>
    )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}


export default Header; 