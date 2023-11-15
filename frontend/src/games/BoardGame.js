import {Button, ButtonGroup, Link} from "@mui/material";

function BoardGame({game, removeAction}) {
    return (
        <tr>
            <td style={{whiteSpace: 'nowrap'}}>{game.name}</td>
            <td>{game.minPlayers}</td>
            <td>{game.maxPlayers}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/games/" + game.id} >Edit</Button>
                    <Button size="sm" color="warning" onClick={() => removeAction(game.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    )
}

export default BoardGame