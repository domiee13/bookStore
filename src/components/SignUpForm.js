import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './SignUpForm.css';

export default class SignUpForm extends Component{
  render(){
    return(
    <div className="SignUpForm">
      <Form className="Form">
            <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                placeholder="Email" />
            </FormGroup>
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
            <FormGroup>
                <Label for="examplePassword">Confirm your password</Label>
                <Input 
                type="password" 
                name="password" id="examplePassword" 
                placeholder="Your password" />
            </FormGroup>
            <div className="buttonGroup">
                <Button color="success" outline className="ml-auto">Sign Up</Button>
            </div>
      </Form>
    </div>
    );
  }
}