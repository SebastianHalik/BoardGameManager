import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';
import AppNavBar from "./visuals/AppNavBar";

function Home() {
    return (
        <div>
            <AppNavBar/>
            <Container fluid>
                <Button color="link"><Link to="/games">Collection</Link></Button>
            </Container>
        </div>
    );

}

export default Home;