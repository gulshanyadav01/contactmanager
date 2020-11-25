import React, { Component } from 'react'
import { Consumer } from "./Context"; 

class AddContact extends Component {
    state = {
        name:"",
        email:"",
        phone:""
    }
    onChange = (e) => { 

        this.setState({[e.target.name]: e.target.value}); 
    }

    onSubmit = (dipatch, e) => { 
        e.preventDefault(); 
        const { name, email, phone} = this.state; 
        // console.log(this.state); 
        const newContact = {
            name, 
            email,
            phone
        }
        dipatch({
            type:"ADD_CONTACT",
            payload: newContact
        })

    }

    

    render() {
        // const { name, email, phone} = this.state;
        return(
            <Consumer>
                {value =>{
                return (
                    <div>
                        <form onSubmit = {this.onSubmit.bind(this,value.dispatch)}>
                            <input type = "text" name = "name" placeholder = "enter name" value = {this.state.name} onChange = {this.onChange}/><br/>
                            <input type = "email" name = "email" placeholder = "enter email" value = {this.state.email} onChange = {this.onChange}/><br/>
                            <input type = "text" name = "phone" placeholder = "enter phone" value = {this.state.phone} onChange = {this.onChange}/><br/>
                            <input type = "submit" value ="submit"/>
                        </form>
                    </div>
        )
                }}
            </Consumer>
        )
        
    }
}

export default AddContact; 
