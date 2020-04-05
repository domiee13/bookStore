import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './SignUpForm.css';
import {register} from './UserFunction';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        console.log("Event: " + e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        register(user).then(res=>{
            if(res) console.log("Res: " + res);
            this.props.history.push('/login');
        })
    }

    render(){
        return(
        <div className="SignUpForm">
          <Form className="Form" onSubmit={this.onSubmit}>
                <FormGroup onChange={this.onChange}>
                <Label for="exampleEmail">Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    id="exampleEmail" 
                    placeholder="Email" />
                </FormGroup>
                <FormGroup onChange={this.onChange}>
                <Label for="exampleEmail">Email</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="Email" />
                </FormGroup>
                <FormGroup onChange={this.onChange}>
                    <Label for="examplePassword">Password</Label>
                    <Input 
                    type="password" 
                    name="password" id="examplePassword" 
                    placeholder="Your password" />
                </FormGroup>
                <FormGroup onChange={this.onChange}>
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