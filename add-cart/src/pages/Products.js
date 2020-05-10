import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row, Col, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { CartContext } from '../contexts/Cart';

class Products extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products')
      .then(res => {
        this.setState({
          products: res.data
        });
      })
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row> 
          {
            products.map( (product) => 
            <Col sm="6" md="3">
              <Card>
                <CardImg top width="100%" src={product.imageUrl}/>
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>{product.description}</CardSubtitle>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>Add to cart</Button>
                    )} 
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
            )
          }
        </Row> 
      </Container>
    );  
  }; 
}

export default Products;
