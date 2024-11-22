// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = -1;
    this.direction = true;
  }

  fly() {
    if (this.direction) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
  }

  moveLeft() {
    // if (this.position > -1) {
    
    // }
    this.position -= 1;
    // Идём влево.
  }

  moveRight() {
    // Идём вправо.

    this.position += 1;
  }
}

module.exports = Boomerang;

