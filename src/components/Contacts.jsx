import React, { Component } from 'react'
import Contact from "./Contact"

import { Consumer } from "../Context1"

 class Contacts extends Component {
  
   
    render(){
        return (
            <Consumer>
                {value => {
                    return(
                        <div>
        {
            value.contacts.map(contact => {
                return (
                    <Contact name = {contact.name}
                        email = {contact.email}
                        phone = {contact.phone}
                        id = {contact.id}
                    />
                )
            })
        }
    </div>
                        
                    )
                }}
            </Consumer>
        )
    }
   
    
}
export default Contacts; 

