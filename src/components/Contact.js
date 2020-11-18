import React, { Component } from 'react';
import PropTypes from "prop-types";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Contact extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}  <ExpandMoreIcon  onClick = {this.props.click}/></h4>
              {this.props.show ?
                <ul>
                    <li>Email:{this.props.email}</li>
                    <li>Phone:{this.props.phone}</li>
                </ul>
                : null}

               
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