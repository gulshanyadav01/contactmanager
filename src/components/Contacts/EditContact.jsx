import React, { Component } from 'react'
import { Consumer  } from "../../Context1"
// import uuid from "react-uuid"; 
import TextInput from "../Layout/TextInput"
import axios from "axios"

class EditContact extends Component {

    state = {
        name:"", 
        email:"",
        phone:"",
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data; 
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = (e) => { 
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit = async (dispatch, e) => { 
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
                                    <input type = "submit" value = "update contact"/> 
                            </form>
                            </div>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default EditContact; 
