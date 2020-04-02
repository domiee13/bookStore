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
    axios.get("/api/products").then(res=>{
      console.log(res.data); 
    this.setState({
        products: res.data
      });
    });
    console.log("Component did mount");
  }
  render(){
    return(
      <Container>
      <h2>Products</h2>
        <div className="Product">
          <Row >
            {
              this.state.products.map((item)=>(
                <Col sm="4">
                <div>
                <Card style={{marginBottom:"35px"}}>
                  <CardImg top width="100%" src={item.imgUrl} alt="Card image cap" />
                  <CardBody>
                    <CardTitle style={{fontWeight:"bold"}}>{item.name}</CardTitle>
                    <CardSubtitle>{item.author}</CardSubtitle>
                    <Button color="primary" outline style={{marginTop:"10px"}}>Add to cart</Button>
                  </CardBody>
                </Card>
              </div>
              </Col>
              ))
            }
            </Row>
        </div>
      </Container>
    );
  }
}

