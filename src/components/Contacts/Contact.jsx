import React, { Component } from 'react';
import PropTypes from "prop-types";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { Consumer } from "../../Context1";
import axios from "axios"
import CreateIcon from '@material-ui/icons/Create';
import {NavLink} from "react-router-dom"; 

class Contact extends Component {
    state = {
        showInfo: false
    }

    showInfoHandler = () =>  {
        this.setState({showInfo: !this.state.showInfo})
     }

     onDeleteClick = async (id, dispatch) => { 
        //  console.log(id);
        try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        })
        }
        catch(err){
            console.log(err); 
        }
        
         
     }

    render() {
        const {name ,email ,phone ,id} = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                   
                    return (
                        <div className = "m-2 w-1/2 h-48 shadow-lg rounded hover:bg-yellow-400 hover:text-black  font-bold" style = {{backgroundColor:"#0D1633", color:"#92A2E4"}}>
                <h4>{name}  <ExpandMoreIcon  onClick = {this.showInfoHandler}/>  </h4>
                {this.state.showInfo ? 
               ( <ul>
                    <li>Email:{email}</li>
                    <li>Phone:{phone}</li>
                </ul>)
                :null}
                <div className ="flex justify-center mt-16 "> <NavLink to = {`contact/edit/${id}`}>
                <CreateIcon className = "rounded bg-green-100  text-blue-600  mr-2 hover:bg-blue-800 hover:text-blue-900" style = {{width:"70px", height:"50px"}} /> 
                </NavLink>
                <DeleteIcon  className = " text-red-600 bg-red-100 rounded hover:bg-red-900 hover:text-red-600" style = {{width:"70px", height:"50px"}} onClick = {this.onDeleteClick.bind(this, id, dispatch)} /></div>

            </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired, 
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact; 