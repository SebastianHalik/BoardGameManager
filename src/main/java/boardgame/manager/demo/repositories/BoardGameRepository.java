package boardgame.manager.demo.repositories;

import boardgame.manager.demo.model.boardgames.BoardGame;
import org.springframework.data.repository.CrudRepository;

public interface BoardGameRepository extends CrudRepository<BoardGame, Long> {
}
