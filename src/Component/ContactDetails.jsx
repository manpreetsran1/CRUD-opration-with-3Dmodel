import React from 'react';
import avatar from '../images/avatar.png';
import { Link, withRouter } from 'react-router-dom';
function ContactDetails(props) {
    const {name , email} = props.location.state.contact;
    return (
        <div className="container">
            <img src={avatar} className="rounded"/>
            <div className="content">
                <h5>{name}</h5>

                <p>{email}</p>
            </div>

            <Link to="/"><button className='btn btn-primary'>Back to Contact List</button></Link>
        </div>
    )
}

export default ContactDetails
