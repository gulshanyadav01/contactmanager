import React, { Component } from 'react'
import { Consumer  } from "../../Context1"
import uuid from "react-uuid"; 

class AddContact extends Component {

    state = {
        name:"", 
        email:"",
        phone:""
    }

    onchange = (e) => { 
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (dispatch, e) => { 
        e.preventDefault(); 
        // console.log(this.state);
        const { name, email, phone} = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }
        console.log(newContact);

        dispatch({
            type:"ADD_CONTACT",
            payload:newContact
});
        this.setState({
            name:"",
            email:"",
            phone:""
        })

    }
    render() {
        const {name, email, phone} = this.state;

        return(
            <Consumer>
                {value => {
                    const {dispatch} = value; 
                    return (
                            <div>
                            <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                                    <label htmlFor = "name">Name:</label>
                                    <input type = "text" placeholder = 'enter name' name = "name" onChange = {this.onchange} value = {name}/><br/>
                                    <label htmlFor = "email">Email:</label>
                                    <input type = "text" placeholder = 'enter email' name = "email" onChange = {this.onchange} value = {email}/><br/>
                                    <label htmlFor = "Phone">Phone:</label>
                                    <input type = "Number" placeholder = 'enter Phone' name = "phone" onChange = {this.onchange} value = {phone}/><br/>
                                    <input type = "submit" value = "add contact"/>
                            </form>
                            </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default AddContact; 
