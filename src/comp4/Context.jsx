import React, { Component } from 'react'
const Context = React.createContext(); 


const reducer = (state, action) => { 
    switch(action.type){
        case "DELETE_CONTACT":
            return{
                ...state,
                contacts: state.contacts.filter(contact => {
                    return(
                        contact.id !== action.payload
                    )
                })
            }
        default:
            return state
    }
}

export class Provider extends Component {

    state = {
        contacts: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    render() {
        return (
            <div>
                <Context.Provider>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}
export const Consumer = Context.Consumer; 