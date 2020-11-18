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
         ],
         showInfo:false
     }
     showInfoHandler = () =>  {
        this.setState({showInfo: !this.state.showInfo})
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
                            click = {this.showInfoHandler}
                            show = {this.state.showInfo}

                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default Contacts; 
