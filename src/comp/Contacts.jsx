import React, { Component } from 'react'
import { Consumer } from "./Context"
import Contact from "./Contact"
class Contacts extends Component {
    render() {
        return(
            <Consumer>
                {value =>{
                    return(
                        <div>
                            {value.contacts.map((contact) => {
                                return (
                                    <Contact contact = {contact}/>
                                )
                            })}
                        </div>
                    )
                }}
            </Consumer>
        )
    
    }
}

export default Contacts;
