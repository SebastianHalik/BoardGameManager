package boardgame.manager.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class SellEntity {
  @Id @GeneratedValue
  private Long id;
  private Long boardGameId;
  private int buyPrice;
  private int sellPrice;
  private String currency;

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }
}
