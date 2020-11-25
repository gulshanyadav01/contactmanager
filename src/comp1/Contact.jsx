import React, { Component } from 'react'


class Contact extends Component {
    render() {
        const { name, email, phone, id } = this.props.contact;
        return (
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        )
    }
}
export default Contact; 
