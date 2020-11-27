import React, { Component } from 'react'

import axios from "axios"; 

const Context = React.createContext(); 
const reducer = (state, action) => { 
    console.log(action.type)
    switch(action.type){
        
        case "DELETE_CONTACT":
            console.log("kya hal hai");
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        case "ADD_CONTACT":
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
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
    async componentDidMount() {
        const res = await axios.get("http://localhost:5000/addcontact"); 
        console.log(res.data); 
        this.setState({contacts:res.data.contact}); 
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