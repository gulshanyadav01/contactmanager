import React, { Component } from 'react'
import { Consumer } from "./Context"; 

class Contact extends Component {

    onDeleteClick = (id, dispatch) => { 
        console.log(id); 
        console.log("i am clicked"); 
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }
    render() {
        const { name, email, phone, id } = this.props.contact;

        return(
            <Consumer>
                {value => { 
                    return (
                            <div>
                                <h1 onClick = {this.onDeleteClick.bind(this,id,  value.dispatch)}>{name}</h1>
                                <p>{email}</p>
                                <p>{phone}</p>
                            </div>
                   )
                }}
            </Consumer>
        )
        
    }
}
export default Contact; 
