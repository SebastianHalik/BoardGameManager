import {Button, ButtonGroup} from "@mui/material";
import {useNavigate} from "react-router-dom";

function BoardGame({game, removeAction}) {
    const navigate = useNavigate();
    const handleClick = () => {
        const url = '/games/' + game.id;
        navigate(url);
    };
    
    return (
        <tr>
            <td>{game.id}</td>
            <td style={{whiteSpace: 'nowrap'}}>{game.name}</td>
            <td>{game.minPlayers}</td>
            <td>{game.maxPlayers}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" onClick={() => handleClick()}>Edit</Button>
                    <Button size="sm" color="warning" onClick={() => removeAction(game.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    )
}

export default BoardGame