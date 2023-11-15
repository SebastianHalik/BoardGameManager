import BoardGame from "./BoardGame";
import {Button, Container, Table} from "reactstrap";
import React from "react";
import AppNavBar from "../visuals/AppNavBar";

function BoardGamesOwnedList({games, removeAction}) {
    return (
        <div>
            <AppNavBar/>
            <Container>
                <div className="float-right">
                    <Button color="success">Add board game</Button>
                </div>
                <h3>Board Games List</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Min Players</th>
                        <th width="40%">Max Players</th>
                    </tr>
                    </thead>
                    <tbody>
                    {games.map(game =>
                        <BoardGame key={game.id} game={game} removeAction={removeAction}/>
                    )}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default BoardGamesOwnedList