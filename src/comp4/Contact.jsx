import React, { Component } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Contact extends Component {
    state = {
        show: false
    }

    render() {
        const { name, email, phone } = this.props.contact; 
        return (
            <div>
                <h1> {name}  <ExpandMoreIcon onClick = {() => {this.setState({show: !this.state.show})}} /> </h1>
                {this.state.show ? (
                    <div>
                    <p>{email}</p>
                    <p>{phone}</p>
                    </div>
                ): null}

            </div>
        )
    }
}

export default Contact; 
