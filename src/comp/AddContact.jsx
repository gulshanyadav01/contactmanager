import React, { Component } from 'react'


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
    
    onSubmit = (e) => { 
        e.preventDefault(); 
        console.log(this.state); 

    }


    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input type = "text" name = "name" placeholder = 'enter name' value = {this.state.name}onChange = {this.onChange}/><br/>
                    <input type = "text" name = "email" placeholder = 'enter email' value = {this.state.email}onChange = {this.onChange}/><br/>
                    <input type = "text" name = "phone" placeholder = 'enter phone' value = {this.state.phone}onChange = {this.onChange}/><br/>
                    <input type = "submit" value = "submit"/>
                </form>
            </div>
        )
    }
}
export default AddContact; 