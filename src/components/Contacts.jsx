import React, { Component } from 'react'
import Contact from "./Contact"

import { Consumer } from "../Context"

 class Contacts extends Component {
  
    //  onDeleteHandler = (id) => {
    //     console.log(id);
    //     const newContact = this.state.contacts.filter(contact => {
    //         return contact.id !== id; 
    //     });
    //     this.setState({contacts: newContact});
    //  }
   
    render() {
        return (
            <Consumer>
                { value => {
                    return (
            <div>
        {
            value.contacts.map(contact => {
                return (
                    <Contact name = {contact.name}
                        email = {contact.email}
                        phone = {contact.phone}
                        id = {contact.id}
                        deleteClickHandler = {() => this.onDeleteHandler(contact.id)}
                    />
                )
            })
        }
    </div>
)

        }}
    </Consumer>
        );
        
    }
}
export default Contacts; 

