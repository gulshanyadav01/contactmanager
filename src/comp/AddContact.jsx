import React, { Component } from 'react'
import { Consumer } from "./Context"
import uuid from "react-uuid"
class AddContact extends Component {
    state = {
        name:"",
        email:"",
        phone:""
    }

    onChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (dispatch, e) => { 
        e.preventDefault(); 
        const { name, email, phone } = this.state; 
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({
            type:"ADD_CONTACT",
            payload: newContact
        })
        // console.log(this.state);

    }


    render() {
        return(
            <Consumer>
                {value =>{
                    return (
                            <div>
                            <form onSubmit = {this.onSubmit.bind(this, value.dispatch)}>
                                <input type = "text" name = "name" placeholder = 'enter name' value = {this.state.name}onChange = {this.onChange}/><br/>
                                <input type = "text" name = "email" placeholder = 'enter email' value = {this.state.email}onChange = {this.onChange}/><br/>
                                <input type = "text" name = "phone" placeholder = 'enter phone' value = {this.state.phone}onChange = {this.onChange}/><br/>
                                <input type = "submit" value = "submit"/>
                            </form>
                            </div>
        )
            
                }}
            </Consumer>
        )
        
    }
}
export default AddContact; 