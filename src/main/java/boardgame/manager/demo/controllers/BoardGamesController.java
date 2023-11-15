package boardgame.manager.demo.controllers;

import boardgame.manager.demo.model.boardgames.BoardGame;
import boardgame.manager.demo.repositories.BoardGameRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/boardgames")
public class BoardGamesController {
  private final BoardGameRepository repository;

  public BoardGamesController(BoardGameRepository repository) {
    this.repository = repository;
  }

  @GetMapping
  public Iterable<BoardGame> getBoardGames() {
    return repository.findAll();
  }

  @GetMapping("/{id}")
  public BoardGame getBoardGame(@PathVariable Long id) {
    return repository.findById(id).orElseThrow(RuntimeException::new);
  }

  @PostMapping
  public ResponseEntity<BoardGame> createClient(@RequestBody BoardGame game) throws URISyntaxException {
    BoardGame savedBoardGame = repository.save(game);
    return ResponseEntity.created(new URI("/boardgames/" + savedBoardGame.getId())).body(savedBoardGame);
  }

  @PutMapping("/{id}")
  public ResponseEntity<BoardGame> updateClient(@PathVariable Long id, @RequestBody BoardGame game) {
    BoardGame currentGame = repository.findById(id).orElseThrow(RuntimeException::new);
    currentGame.setName(game.getName());
    currentGame.setMinPlayers(game.getMinPlayers());
    currentGame.setMaxPlayers(game.getMaxPlayers());
    currentGame = repository.save(game);

    return ResponseEntity.ok(currentGame);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<BoardGame> deleteClient(@PathVariable Long id) {
    repository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}
