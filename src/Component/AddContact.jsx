import React, {useState} from 'react';
import { Col, Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
class AddContact extends React.Component {
    
    
        state = {
            name: "",
            email: "",
        };



    
    Add = (e) => {
        e.preventDefault();
        if(this.state.name === '' && this.state.email=== ''){
            alert('Please Fill the fields');
        }
        else{
            console.log(this.state);
            this.props.add(this.state); 
            this.setState({name: '', email: ''});

            this.props.history.push('/');
           
        }
    }
    render(){
        return (
            <div>
                <Container>
                <Link to="/"><button style={{float: 'right'}} className='btn btn-primary'> Contact List</button></Link>
                    <Form onSubmit={this.Add}>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={12} size="lg">Name</Label>
                            <Col sm={12}>
                            <Input type="text" id="exampleEmail" placeholder="name" bsSize="name" value={this.state.name} onChange = {(e)=> this.setState({name: e.target.value})}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail2" sm={12}>Email</Label>
                            <Col sm={12}>
                            <Input type="email" id="exampleEmail2" placeholder="email" value={this.state.email} onChange = {(e)=> this.setState({email: e.target.value})}/>
                            </Col>
                        </FormGroup>
                        <Button className="my-3">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(AddContact);
