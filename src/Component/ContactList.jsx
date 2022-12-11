import React, { useRef } from 'react';
import { Container, Table , Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const inputEl = useRef("");
  

    const deleteContactHandler = (id) => {
        props.getContactid(id);
    }

    const getSearchTerm = (e) =>{
        //console.log(e.target.value);
         props.searchkeyword(e.target.value);
    }
    const renderList = props.contacts.map((contact) => {
            return(
                <>
                  <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}/>    
                </>
            )
        });
    return (
        <div>
            <Container>


                <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" src="https://d1a370nemizbjq.cloudfront.net/f8e25565-9091-474b-aed9-67625f51855a.glb" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
                <h1>Contact List
                    
                    
                </h1>

                <Link to="/add"><button style={{float: 'right'}} className='btn btn-primary'> AddContact</button></Link>

                <div className="search">
                    <Input 
                        
                        type="text" 
                        placeholder="Search"
                        value={props.term}
                        onChange={getSearchTerm}
                     />
                </div>
                {renderList.length ===0 ? "no todo found" :
                    <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderList}
                    </tbody>
                </Table>}
            </Container>
            
        </div>
    )
}

export {ContactList};
