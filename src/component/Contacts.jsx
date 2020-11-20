import React, { Component } from 'react'
import Contact from "./Contact"
import { Consumer } from "./Context"

class Contacts extends Component {
  
    render() {
        return (
            <Consumer>
                {value => 
                  
                     (
                            <div>
                                {
                                    value.contacts.map((contact) => (
                                        <Contact name = {contact.name}
                                                email = {contact.email}
                                                phone = {contact.phone}
                                                id  = {contact.id}
                                        />
                                    ))
                                }
                            </div>
        )

                }
            </Consumer>
        )
        
    }
}

export default Contacts;

