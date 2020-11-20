import React, { Component } from "react"

const Context = React.createContext();

// reducer have all the logic 

const reducer = (state, action) => { 
    switch(action.type){
        case("DELETE_CONTACT"):
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        default:
            return state;
    }
}


export class Provider extends Component { 
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