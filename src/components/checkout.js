import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFoodList, updateTotalPrice } from '../actions/foodListActions';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class Checkout extends React.Component {

  addItem = (id) => {

    this.props.foodListState.map((food, i) => {
      if (id === food.id) {
        if (food.quantity) {
          food.quantity++;
        } else {
          food.quantity = 1
        }
        let price = this.props.totalPrice + food.price;
        this.props.checkoutActions.updateTotalPrice(price);
      }

      return food
    });
    this.props.checkoutActions.setFoodList(this.props.foodListState);
  }

  removeItem = (id) => {
    this.props.foodListState.map((food, i) => {
      if (id === food.id) {
        food.quantity--;
        let price = this.props.totalPrice - food.price;
        this.props.checkoutActions.updateTotalPrice(price);
      }
      return food
    });
    this.props.checkoutActions.setFoodList(this.props.foodListState);
  }

  addMore=()=>{
    this.props.history.goBack();
  }

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Buffet</Navbar.Brand>
        </Navbar>
        <Jumbotron fluid>
          <Container className="checkout">
            <h4>Your Order Details</h4>
            <div className="App-container">

              <Card style={{ width: '20rem', margin: '0 auto' }}>
                <Card.Header>Buffet</Card.Header>
                <ListGroup variant="flush">

                  {this.props.foodListState.map((food, i) => {
                    if (food.quantity > 0) {

                      return (<ListGroup.Item>
                        <div className="list-group-item__itemDetail">
                          <div className="list-group-item__name">
                            {food.itemname}
                          </div>
                          <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-warning" onClick={this.removeItem.bind(this, food.id)}>-</Button>
                            <Button variant="outline-warning">{food.quantity}</Button>
                            <Button variant="outline-warning" onClick={this.addItem.bind(this, food.id)}> +</Button>
                          </ButtonGroup>
                        </div>

                        <div className="list-group-item__priceDetail"> 
                          <div className="list-group-item__quantity">
                            {food.quantity} X ₹ {food.price}
                          </div>
                          <div className="list-group-item__totalPrice">
                            ₹ {food.quantity * food.price}
                          </div>
                        </div>
                      </ListGroup.Item>)
                    }
                  })}
                   <ListGroup.Item>
                      <Button variant="outline-warning" onClick={this.addMore}>+</Button>
                   </ListGroup.Item>
                  <ListGroup.Item>
                    Grand Total:{this.props.totalPrice}
                  </ListGroup.Item>

                </ListGroup>
              </Card>

            </div>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    foodListState: state.foodList.apiFoodList,
    totalPrice: state.foodList.totalPrice
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkoutActions: bindActionCreators({ setFoodList, updateTotalPrice }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
