import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './LoginForm.css';

export default class LoginForm extends Component{
  render(){
    return(
    <div className="LoginForm">
      <Form className="Form">
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                placeholder="Email" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                type="password" 
                name="password" id="examplePassword" 
                placeholder="Your password" />
            </FormGroup>
            <div className="buttonGroup">
                <Button color="success" outline className="mr-auto">Sign Up</Button>
                <Button color="primary" outline className="ml-auto">Login</Button>
            </div>
      </Form>
    </div>
    );
  }
}