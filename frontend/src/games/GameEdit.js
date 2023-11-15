import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import AppNavBar from "../visuals/AppNavBar";

function GameEdit() {

    function handleSubmit() {

    }

    function handleChange() {

    }
    
    return (
        <div>
            <AppNavBar/>
            <Container>
                {title}
                <Form onSubmit={() => handleSubmit()}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={() => handleChange()} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={() => handleChange()} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default GameEdit;