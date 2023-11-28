import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import AppNavBar from "../visuals/AppNavBar";

function GameEdit() {

    const params = useParams();

    async function handleSubmit(event) {
        console.log("HANDLE SUBMIT")
        /*
        await fetch('/games' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        
         */
    }

    /*
    const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/about');
  };
     */

    /*
    async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
        const client = await (await fetch(`/clients/${this.props.match.params.id}`)).json();
        this.setState({item: client});
    }
}
     */

    async function fetchData(id) {
        const response = await fetch('/boardgames/' + id);
        return await response.json();
    }

    const [game, setGame] = useState({name: '', minPlayers: '', maxPlayers: ''});

    useEffect(() => {
        const id = params.id;
        let isFetched = false;
        async function fetchGame() {
            if (id !== 'new' && !isFetched) {
                const newGame = await fetchData(id);
                setGame(newGame);
            }
        }
        
        fetchGame().then(r => r);
        return () => {
            isFetched = true;
        };
    }, []);


    return (
        <div>
            <AppNavBar/>
            <Container>
                <h2>{game.id ? 'Edit Game' : 'Add Game'}</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" defaultValue={game.name}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="minPlayers">Min players</Label>
                        <Input type="number" name="minPlayers" id="minPlayers" defaultValue={game.minPlayers}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="maxPlayers">Min players</Label>
                        <Input type="number" name="maxPlayers" id="maxPlayers" defaultValue={game.maxPlayers}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/games">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default GameEdit;