import React from 'react';
import avatar from '../images/avatar.png';

import { Link } from 'react-router-dom';

function ContactCard(props) {

    // const { id, name, email} = props.contact;
    return (
        <>
            <tr >
                
                <th scope="row"> <img src={avatar} className="rounded" style={{width: "100px", height: '100px'}}/></th>
                <Link to={{pathname: `/contact/${props.contact.id}`, state:{contact: props.contact}}}>
                    <td>{props.contact.name}</td>
                    
                </Link>
                <td>{props.contact.email}</td>
                <td>
                    <span>
                        <i onClick={()=> props.clickHander(props.contact.id)} class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                    <Link to={{pathname: '/edit', state:{contact: props.contact}}}>
                        <span>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </span>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default ContactCard
