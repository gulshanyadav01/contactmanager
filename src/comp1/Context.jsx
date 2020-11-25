import React, { Component } from "react"

const Context = React.createContext(); 

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
                id:1,
                name:"gulshan",
                email:"gulshany01@gmail.com",
                phone:"8585858"
            }
        ]
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