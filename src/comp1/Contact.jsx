import React, { Component } from 'react'
import { Consumer } from "./Context"; 
// import { history } from "react-router-dom"
import axios from "axios"; 

class Contact extends Component {

    onDeleteClick = async(_id, dispatch) => { 
        console.log(_id);
        await axios.delete(`http://localhost:5000/deletecontact/${_id}`)
            dispatch({
                type: "DELETE_CONTACT",
                payload: _id
            })
            this.props.history.push("/");
        

}
        
    render() {
        const { name, email, phone, _id } = this.props.contact;
        // console.log(_id); 


        return(
            <Consumer>
                {value => { 
                    return (
                            <div>
                                <h1 onClick = {this.onDeleteClick.bind(this, _id,  value.dispatch)}>{name}</h1>
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
