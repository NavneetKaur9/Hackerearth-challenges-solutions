import React from 'react';
import FoodListMenu from './FoodListMenu';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './App.scss';

class App extends React.Component {

    search = (e) => {
        console.log("yes", e.target.value);
    }

    render() {
        return (
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>Buffet</Navbar.Brand>
                   
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.search} />
                        <Button variant="light">Search</Button>
                    </Form>
                </Navbar>
                <FoodListMenu />
            </>
        );
    }
}

export default App;