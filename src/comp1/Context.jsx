import React, { Component } from "react"

const Context = React.createContext(); 

const reducer = (state, action) => { 
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => {
                    return(
                        contact.id !== action.payload
                    )
                })
            }
        case "ADD_CONTACT":
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state;
    }
}

export class Provider extends Component{
    state = {
        contacts: [
            {
                id:1,
                name:"gulshan",
                email:"gulshany01@gmail.com",
                phone:"8585858"
            },
            {
                id:2,
                name:"gulshan",
                email:"gulshany01@gmail.com",
                phone:"8585858"
            }
        ], 
        dispatch: action => this.setState(state => reducer(state, action))
    }


    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>

        )
    }
}

export const Consumer = Context.Consumer; 