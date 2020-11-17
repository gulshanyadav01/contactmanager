import React, { Component } from 'react';
import PropTypes from "prop-types";

class Contact extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    <li>Email:{this.props.email}</li>
                    <li>Phone:{this.props.phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired, 
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact; 