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
                        <div>
                <h4>{name}  <ExpandMoreIcon  onClick = {this.showInfoHandler}/> <NavLink to = {`contact/edit/${id}`}>
                <CreateIcon style ={{color:"green", marginRight:"10px"}}/> 
                </NavLink>
                <DeleteIcon onClick = {this.onDeleteClick.bind(this, id, dispatch)} style ={{color:"red", cursor:"pointer"}} />  </h4>
                {this.state.showInfo ? 
               ( <ul>
                    <li>Email:{email}</li>
                    <li>Phone:{phone}</li>
                </ul>)
                :null}
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