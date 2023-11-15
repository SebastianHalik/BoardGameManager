package boardgame.manager.demo.model.boardgames;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class BoardGame {
  @Id
  @GeneratedValue
  private Long id;

  @Override
  public String toString() {
    return "BoardGame.js{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", minPlayers=" + minPlayers +
        ", maxPlayers=" + maxPlayers +
        '}';
  }

  private String name;
  private int minPlayers;
  private int maxPlayers;

  public BoardGame(String name, int minPlayers, int maxPlayers) {
    this.name = name;
    this.minPlayers = minPlayers;
    this.maxPlayers = maxPlayers;
  }

  public BoardGame() {
    
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getMinPlayers() {
    return minPlayers;
  }

  public void setMinPlayers(int minPlayers) {
    this.minPlayers = minPlayers;
  }

  public int getMaxPlayers() {
    return maxPlayers;
  }

  public void setMaxPlayers(int maxPlayers) {
    this.maxPlayers = maxPlayers;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
