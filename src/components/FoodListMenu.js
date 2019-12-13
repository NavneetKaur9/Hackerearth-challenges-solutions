// import * as classNames from 'classnames';
import React from 'react';
// import { UserDetail } from './UserDetail';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/foodListActions';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

class FoodListMenu extends React.Component {

    componentDidMount() {
        this.props.foodListActions.fetchUsers();
    }

    showUserDetail=(user)=>{
        this.props.foodListActions.setUserDetail(user);
    }

    displaySelectedItems = () => {
        return (<span>3 x non-veg meals</span>)
    }

    addItem = (idx) => {
        console.log(idx);
    }

    render() {
        console.log("props",this.props);
        console.log("state", this.state);
        let displayUsers = this.props.foodListState.apiFoodList.map((food, index) => {

            return (
                // <Col sm>
                <Card key={index}>
                    <Card.Body>
                        <Card.Title>
                            {food.itemname}
                        </Card.Title>
                        <Card.Text>
                            ₹{food.price}
                        </Card.Text>
                        <Button variant="outline-warning" onClick={this.addItem.bind(this, index)}>Add</Button>
                    </Card.Body>
                </Card>
                // </Col>
            );
        });



        return (
            <div className="App-container">
                <Jumbotron fluid>
                    <Container>
                        <h4>Lunch</h4>
                        {/* <Container> */}
                        <Row>
                            {displayUsers}
                        </Row>
                        {/* </Container> */}
                        {/* {this.props.userDetail && (
                            <UserDetail showUserDetailOf={this.props.userDetail} />
                        )} */}
                    </Container>
                </Jumbotron>
                <div className="footer">
                    {this.displaySelectedItems()}
                    <div className="footer-right">
                        <span>Total: ₹ 243.50</span>
                        <Link to="/checkout">
                            <Button variant="outline-warning">Checkout</Button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

FoodListMenu.propTypes = {
    foodListActions: PropTypes.object,
    foodListState: PropTypes.array,
    userDetail: PropTypes.object
};

function mapStateToProps(state) {
    console.log(state);

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
