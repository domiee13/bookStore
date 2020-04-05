import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './LoginForm.css';
import {login} from './UserFunction';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
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
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res=>{
            if(res) console.log("Res: " + res);
        })
        this.props.history.push('/');
    }

    render(){
        return(
        <div className="LoginForm">
          <Form className="Form" onSubmit={this.onSubmit}>
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
                <div className="buttonGroup">
                    <Button color="success" outline className="mr-auto">Sign Up</Button>
                    <Button color="primary" outline className="ml-auto">Login</Button>
                </div>
          </Form>
        </div>
        );
      }
}