import React, {Component} from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
  } from 'reactstrap';
  
export default class Product extends Component{
   constructor(props){
     super(props);
     this.state = {
       products: []
     }
   }
   componentDidMount(){
    axios.get("https://localhost:5000/api/products").then(res=>{
      console.log(res); 
      console.log("Bug cai dmm");
    // this.setState({
      //   products: res.data
      // });
    });
    console.log("Component did mount");
  }
  render(){
    return(
      <h2>This is Product site</h2>
    );
  }
}

