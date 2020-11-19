import React, { Component } from 'react';
import PropTypes from "prop-types";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { Consumer } from "../Context1";

class Contact extends Component {
    state = {
        showInfo: false
    }

    showInfoHandler = () =>  {
        this.setState({showInfo: !this.state.showInfo})
     }

     onDeleteClick = (id, dispatch) => { 
         dispatch({
             type:"DELETE_CONTACT",
             payload:id
         });
     }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                <h4>{this.props.name}  <ExpandMoreIcon  onClick = {this.showInfoHandler}/> <DeleteIcon onClick = {() => this.onDeleteClick(value.contacts.id, dispatch)} /> </h4>
                {this.state.showInfo ? 
               ( <ul>
                    <li>Email:{this.props.email}</li>
                    <li>Phone:{this.props.phone}</li>
                </ul>)
                :null}
            </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired, 
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact; 