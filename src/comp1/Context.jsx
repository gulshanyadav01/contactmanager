import React, { Component } from "react"
import axios from "axios"; 
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
        contacts: [], 
        dispatch: action => this.setState(state => reducer(state, action))
    }

    async componentDidMount(){
        const res = await axios.get("http://localhost:5000/addcontact");
        console.log(res.data.contact);
        this.setState({contacts: res.data.contact});
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