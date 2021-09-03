import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactCard from "./ContactCard";
import { ContactList } from "./ContactList";
import API from "../API/contact";
import ContactDetails from "./ContactDetails";

import { uuid } from 'uuidv4';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {
   const LOCAL_STORAGE_KEY = "contacts";
   const [contact, setcontact] = useState([]);
   const [Searchterm, setSearchterm] = useState("");
   const [SearchResult, setSearchResult] = useState([]);
    
   //RetriveContacts
   const retriveContacts = async () => {
     const response = await API.get("/contact");

     return response.data;
   };

   // for Add in local storage

  // const add = (contactlist) =>{
  //   console.log(contactlist);
  //   setcontact([...contact , { id: uuid(), ...contactlist}]);
          
  // }

  const add = async (contactlist) => {
    console.log(contactlist);

    const request = {
      id: uuid(),
      ...contactlist, 
    };

    
    const response = await API.post("/contact", request);
    console.log(response);
    setcontact([...contact , response.data]);          
  };

  const update = async (contactlist) =>{
    const response = await API.put(`/contact/${contactlist.id}`, contactlist);
    const { id , name , email } = response.data;
    setcontact(
      contact.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    )
  }


  const removeContactHandler = async (id) => {
    await API.delete(`/contact/${id}`);
    const newContactlist = contact.filter((contacts)=> {
      return contacts.id !== id;
    }) ;

    setcontact(newContactlist);
  }

  useEffect(() => {
    // for get local storage
    // const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContact){
    //   setcontact(retriveContact);
    // }

    const getAllContacts = async () => {
      const allContacts = await retriveContacts();

      if(allContacts)
      {
        setcontact(allContacts);
      }
    }

    getAllContacts();
  }, []);

  useEffect(() => {
    // for set in local storage

    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  const searchHandler = (searchTerm) =>{
    setSearchterm(searchTerm);

    if(searchTerm !== ""){
      const newContactlist = contact.filter((contacts) =>{
          return Object.values(contacts)
          .join(" ").toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setSearchResult(newContactlist);
    }
    else{
      setSearchResult(contact);
    }
  }

  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/add">
            <AddContact add = {add}/>
        </Route>
        <Route exact path="/">
          <ContactList 
            contacts = {Searchterm.length < 1 ? contact : SearchResult} 
            getContactid={removeContactHandler}
            term={Searchterm}
            searchkeyword={searchHandler}
          />
        </Route>

        <Route exact path="/edit">
          <EditContact update = {update}/>
        </Route>
        
        <Route exact path="/contact/:id" component={ContactDetails}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
