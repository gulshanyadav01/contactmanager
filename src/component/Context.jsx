import React, { Component } from 'react'

const Context = React.createContext(); 

const reducer = (state, action) => {
    switch(action.type){
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload
                )
            }
        default:
            return state;
    }
}

export  class Provider extends Component {

    state  = {
        contacts: [
            {
                id:1,
                name:"gulshan",
                email:"gulshany01@gmail.com",
                phone:"8860098313"
            },
            {
                id:2,
                name:"sudarshan",
                email:"gulshany01@gmail.com",
                phone:"8860098313"
            },
            {
                id:3,
                name:"karan",
                email:"gulshany01@gmail.com",
                phone:"8860098313"
            }
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    }
    render() {
        return (
            <div>
                <Context.Provider value = {this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer; 

