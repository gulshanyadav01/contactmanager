import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Consumer } from "./Context"

class Contact extends Component {

    onDeleteClick = (id, dispatch) => { 
        console.log("i am deleted");
        dispatch({
            type:"DELETE_CONTACT",
            payload:id
        })
        console.log(id);
    }
    render() {
        // const {name, email, phone, id } = this.props.contact;
        return (
            <Consumer>
            {value => { 
                const { dispatch } = value;
                return (
            <div>
                <h2>{this.props.name} <DeleteIcon onClick = {this.onDeleteClick.bind(this, this.props.id, dispatch)} /> </h2>
                <ul>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>

                )
            }}
        </Consumer>

        )
    }
}
export default Contact;