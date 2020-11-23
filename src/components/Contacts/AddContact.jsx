import React, { Component } from 'react'
import { Consumer  } from "../../Context1"
import uuid from "react-uuid"; 
import TextInput from "../Layout/TextInput"


class AddContact extends Component {

    state = {
        name:"", 
        email:"",
        phone:"",
        errors: {}
    }

    onChange = (e) => { 
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = (dispatch, e) => { 
        e.preventDefault(); 
        // console.log(this.state);
        const { name, email, phone } = this.state;
        
        // check for Errors 
        if(name === ''){
            this.setState({errors: {name: "name is required"}}); 
            return;
        }
        if(email === ''){
            this.setState({errors: {email: "email is required"}}); 
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: "phone is required"}}); 
            return;
        }
        const newContact = {
            id: uuid(),
            name,
            email,
            phone,

        }
        // console.log(newContact);

        dispatch({
            type:"ADD_CONTACT",
            payload:newContact
});
        this.setState({
            name:"",
            email:"",
            phone:"",
            errors: {}
        })

        this.props.history.push("/");

    }
    render() {
        const {name, email, phone, errors} = this.state;

        return(
            <Consumer>
                {value => {
                    const {dispatch} = value; 
                    return (
                            <div>
                            <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                                    <TextInput 
                                        label = "Name"
                                        name = "name"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                        error = {errors.name}
                                    /><br/>

                                    <TextInput 
                                        label = "email"
                                        name = "email"
                                        type = "email"
                                        placeholder = "Enter email"
                                        value = {email}
                                        onChange = {this.onChange}
                                        error = {errors.email}
                                    /><br/>
                                    <TextInput 
                                        label = "Phone"
                                        name = "phone"
                                        placeholder = "Enter phone"
                                        value = {phone}
                                        onChange = {this.onChange}
                                        error = {errors.phone}
                                    /><br/>


                                    {/* /* <label htmlFor = "name">Name:</label>
                                    <input type = "text" placeholder = 'enter name' name = "name" onChange = {this.onchange} value = {name}/><br/>
                                    <label htmlFor = "email">Email:</label>
                                    <input type = "text" placeholder = 'enter email' name = "email" onChange = {this.onchange} value = {email}/><br/>
                                    <label htmlFor = "Phone">Phone:</label>
                                    <input type = "Number" placeholder = 'enter Phone' name = "phone" onChange = {this.onchange} value = {phone}/><br/> */}
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
