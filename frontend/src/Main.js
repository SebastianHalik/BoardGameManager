import {useEffect, useState} from "react";
import BoardGamesOwnedList from "./games/BoardGamesOwnedList";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import GameEdit from "./games/GameEdit";

function Main() {
    const [games, setGames] = useState([]);

    async function fetchBoardGames() {
        const response = await fetch('/boardgames');
        const body = await response.json();
        console.log(body)
        setGames(body);
    }

    async function remove(id) {
        await fetch(`/boardgames/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGames = games.filter(i => i.id !== id);
            setGames([...updatedGames]);
        });
    }

    useEffect(() => {
        fetchBoardGames().then(r => r);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/games' element={<BoardGamesOwnedList games={games} removeAction={remove}/>}/>
                <Route path='/games/:id' element={<GameEdit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;