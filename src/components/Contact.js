import React, { Component } from 'react';
import PropTypes from "prop-types";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';


class Contact extends Component {
    state = {
        showInfo: false
    }

    showInfoHandler = () =>  {
        this.setState({showInfo: !this.state.showInfo})
     }

     onDeleteClick = (id) => { 
         console.log("i m delete");
         this.props.deleteClickHandler(id);
     }

    render() {
        return (
            <div>
                <h4>{this.props.name}  <ExpandMoreIcon  onClick = {this.showInfoHandler}/> <DeleteIcon onClick = {() => this.onDeleteClick(this.props.id)} /> </h4>
                {this.state.showInfo ? 
               ( <ul>
                    <li>Email:{this.props.email}</li>
                    <li>Phone:{this.props.phone}</li>
                </ul>)
                :null}
               

               
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