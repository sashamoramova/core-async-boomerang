// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 25;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

 async moveLeft() {
    // Идём влево.
    if (this.position > 1) {
      this.position -= 1;
    }
  }

  die() {
    this.position = 20;
    // console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
