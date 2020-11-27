import React, { Component } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { Consumer } from "./Context"; 
import axios from "axios"; 

class Contact extends Component {
    state = {
        show: false
    }
    deleteContactHandler = async(id, dispatch) => {
        console.log(id);
    dispatch({
            type:"DELETE_CONTACT",
            payload:id
        }) 
        await axios.delete(`http://localhost:5000/deletecontact/${id}`)

    }

    render() {
        
        return(
            <Consumer>
                {value =>{
                    return (
            <div>
                <h1> {this.props.name}  <ExpandMoreIcon onClick = {() => {this.setState({show: !this.state.show})}} /> </h1>
                {this.state.show ? (
                    <div>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    </div>
                ): null}
                <DeleteIcon onClick = {this.deleteContactHandler.bind(this, this.props.id, value.dispatch)}/>
            </div>
        )
                }}
            </Consumer>

        ) 
        
    }
}

export default Contact; 
