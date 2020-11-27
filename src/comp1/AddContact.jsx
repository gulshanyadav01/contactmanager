import React, { Component } from 'react'
import { Consumer } from "./Context";
import uuid from "react-uuid"; 
import axios from 'axios'; 

class AddContact extends Component {
    state = {
        name:"",
        email:"",
        phone:""
    }
    onChange = (e) => { 

        this.setState({[e.target.name]: e.target.value}); 
    }

    onSubmit = async (dipatch, e) => { 
        e.preventDefault(); 
        const { name, email, phone} = this.state; 
        // console.log(this.state); 
        const newContact = {
            id:uuid(),
            name, 
            email,
            phone
        }
        dipatch({
            type:"ADD_CONTACT",
            payload: newContact
        })
       const res = await axios.post("http://localhost:5000/addcontact", newContact);

       if(res){
           console.log("created");
       }
        
        this.history.push("/");
        // this is for redirect

    }

    

    render() {
        const { name, email, phone} = this.state;
        return(
            <Consumer>
                {value =>{
                return (
                    <div>
                        
                        <form onSubmit = {this.onSubmit.bind(this,value.dispatch)}>
                            <input type = "text" name = "name" placeholder = "enter name" value = {name} onChange = {this.onChange}/><br/>
                            <input type = "email" name = "email" placeholder = "enter email" value = {email} onChange = {this.onChange}/><br/>
                            <input type = "text" name = "phone" placeholder = "enter phone" value = {phone} onChange = {this.onChange}/><br/>
                            <input type = "submit" value ="submit" className = "text-red-500"/>
                        </form>
                    </div>
        )
                }}
            </Consumer>
        )
        
    }
}

export default AddContact; 
