import React, { Component } from "react"

const Context = React.createContext();


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
        ]
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 