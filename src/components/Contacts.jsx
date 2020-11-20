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
                    <Contact 
                        contact = {contact}
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

