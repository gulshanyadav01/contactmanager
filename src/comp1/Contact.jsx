import React, { Component } from 'react'
import { Consumer } from "./Context"; 
import axios from "axios"; 

class Contact extends Component {

    onDeleteClick = async(id, dispatch) => { 

       try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
    }catch(error){
        console.log(error); 
    }
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
