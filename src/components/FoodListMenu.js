import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/foodListActions';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { foodListMenu } from "../data";
import Header from './Header';

class FoodListMenu extends React.Component {

    componentDidMount() {
        this.props.foodListActions.setFoodList(foodListMenu);
    }

    addItem = (id) => {

        this.props.foodListState.apiFoodList.map((food, i) => {
            if (id === food.id) {
                if (food.quantity) {
                    food.quantity++;
                } else {
                    food.quantity = 1
                }
                let price = this.props.foodListState.totalPrice + food.price;
                this.props.foodListActions.updateTotalPrice(price);
            }

            return food
        });
        this.props.foodListActions.setFoodList(this.props.foodListState.apiFoodList);
    }

    removeItem = (id) => {
        this.props.foodListState.apiFoodList.map((food, i) => {
            if (id === food.id) {
                food.quantity--;
                let price = this.props.foodListState.totalPrice - food.price;
                this.props.foodListActions.updateTotalPrice(price);
            }
            return food
        });
        this.props.foodListActions.setFoodList(this.props.foodListState.apiFoodList);
    }

    render() {
        let displayFoodItems = this.props.foodListState.apiFoodList.map((food, index) => {

            return (
                <Card key={food.id}>
                    <Card.Body>
                        <Card.Title>
                            {food.itemname}
                        </Card.Title>
                        <Card.Text>
                            ₹{food.price}
                        </Card.Text>

                        {(food.quantity > 0) ? (
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-warning" onClick={this.removeItem.bind(this, food.id)}>-</Button>
                                <Button variant="outline-warning">{food.quantity}</Button>
                                <Button variant="outline-warning" onClick={this.addItem.bind(this, food.id)}> +</Button>
                            </ButtonGroup>
                        ) : (
                                <Button variant="outline-warning" onClick={this.addItem.bind(this, food.id)}>Add</Button>
                            )
                        }

                    </Card.Body>
                </Card>
            );
        });

        let displaySelectedItems = this.props.foodListState.apiFoodList.map((food, index) => {
            if (food.quantity) {
                return (<span key={food.id}>{food.quantity} X {food.itemname}, </span>)
            }
        });

        return (
            <>
                <Header />
                <div className="App-container">
                    <Jumbotron fluid>
                        <Container className="foodListMenu">
                            <h4>Lunch</h4>
                            <Row>
                                {displayFoodItems}
                            </Row>
                        </Container>
                    </Jumbotron>
                    <div className="footer">
                        {displaySelectedItems}
                        <div className="footer-right">
                            <span>Total: ₹ {this.props.foodListState.totalPrice}</span>
                            <Button variant="outline-warning" onClick={() => { this.props.history.push('/checkout') }}>Checkout</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

FoodListMenu.propTypes = {
    foodListActions: PropTypes.object,
    foodListState: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        foodListState: state.foodList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        foodListActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodListMenu);

/*
    mapStateToProps will hydrate the props of your component from the state of the application.
    mapDispatchToProps ensures our actions have access to dispatch from redux.
*/
