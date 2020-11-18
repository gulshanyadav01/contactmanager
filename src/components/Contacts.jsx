import React, { Component } from 'react'
import Contact from "./Contact"

 class Contacts extends Component {
     state = {
         contacts: [
             {
                 id:1, 
                 name: "gulshan yadav",
                 email:"gulshany01@gmail.com",
                 phone:"8860098313"
             },
             {
                 id:2,
                 name:"sudarshan yadav",
                 email:"sudarshany01@gmail.com",
                 phone:"7210106229"
             },
             {
                 id:3,
                 name:"karan yadav",
                 email:"karan@gmail.com",
                 phone:"9654536064"
             }
         ]
     }
   
    render() {
        return (
            <div>
                {
                    this.state.contacts.map(contact => {
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
    }
}
export default Contacts; 
