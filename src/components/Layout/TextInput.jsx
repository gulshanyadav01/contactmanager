import React from 'react'
import PropTypes from 'prop-types'

 const TextInput = ({label, name, type, placeholder,onChange, value}) => {
       
    return (
        <div>
            <label htmlFor = {name}>{label}</label>
            <input type = {type} placeholder = {placeholder} name = {name} onChange = {onChange} value = {value}/>
        </div>
    )
}
TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired


}
TextInput.defaultProps = {
    type: "text"
}

export default TextInput;
