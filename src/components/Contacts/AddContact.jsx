import React, { Component } from 'react'

class AddContact extends Component {

    state = {
        name:"", 
        email:"",
        phone:""
    }

    onchange = (e) => { 
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        const {name, email, phone} = this.state;
        return (
            <div>
               <form >
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" placeholder = 'enter name' name = "name" onChange = {this.onchange} value = {name}/><br/>
                    <label htmlFor = "email">Email:</label>
                    <input type = "text" placeholder = 'enter email' name = "email" onChange = {this.onchange} value = {email}/><br/>
                    <label htmlFor = "Phone">Phone:</label>
                    <input type = "Number" placeholder = 'enter Phone' name = "Phone" onChange = {this.onchange} value = {phone}/><br/>
                    <input type = "submit" value = "add contact"/>
               </form>
            </div>
        )
    }
}

export default AddContact; 
