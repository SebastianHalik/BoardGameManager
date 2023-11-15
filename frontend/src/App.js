import {useEffect, useState} from "react";
import BoardGamesOwnedList from "./games/BoardGamesOwnedList";

function App() {
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
  },[]);
  
    return (
        <div className="App">
              <BoardGamesOwnedList games={games} removeAction={remove} />
        </div>
    );
}
export default App;