import React, { Component } from 'react'

class AddContact extends Component {

    

    constructor(props) {
        super(props);
        this.nameInput = React.createRef(); 
        this.emailInput = React.createRef(); 
        this.phoneInput = React.createRef(); 
    }

    onSubmit = (e) => { 
        e.preventDefault(); 
        const contact = {
            name : this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);

    }

    static defaultProps = {
        name:"gulshan",
        email:"gulshany01",
        phone:"88600"
    }

    render() {
        const {name, email, phone} = this.props;
        return (
            <div>
               <form onSubmit = {this.onSubmit}>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" placeholder = 'enter name' name = "name" ref = {this.nameInput} defaultValue = {name}/><br/>
                    <label htmlFor = "email">Email:</label>
                    <input type = "text" placeholder = 'enter email' name = "email" ref = {this.emailInput} defaultValue = {email}/><br/>
                    <label htmlFor = "Phone">Phone:</label>
                    <input type = "Number" placeholder = 'enter Phone' name = "phone" ref = {this.phoneInput} defaultValue = {phone}/><br/>
                    <input type = "submit" value = "add contact"/>
               </form>
            </div>
        )
    }
}

export default AddContact; 
