import React, { Component } from 'react'
import { Consumer } from "./Context"; 
import axios from "axios"; 

class Contact extends Component {

    onDeleteClick = async(_id, dispatch) => { 
        // console.log(_id);

       try{
        await axios.delete(`http://localhost:5000/deletecontact/${_id}`);
        
        dispatch({
            type: "DELETE_CONTACT",
            payload: _id
        })
    }catch(error){
        console.log(error); 
    }
}
        
    render() {
        const { name, email, phone, _id } = this.props.contact;

        return(
            <Consumer>
                {value => { 
                    return (
                            <div>
                                <h1 onClick = {this.onDeleteClick.bind(this,_id,  value.dispatch)}>{name}</h1>
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
