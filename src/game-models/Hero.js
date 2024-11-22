// Наш герой.

const Boomerang = require('./Boomerang');
// const { runInteractiveConsole } = require('../keyboard');
const keypress = require('keypress');

class Hero {
  constructor({ position } = {}) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position ?? 0;
    this.boomerang = new Boomerang();
    this.controlSet = {
      // w: () => this.moveUp(),
      a: () => this.moveLeft(),

      // s: () => this.moveDown(),
      d: () => this.moveRight(),
      space: () => {
        this.boomerang.direction = true;
        this.boomerang.position = this.position + 2;

        this.attack();
      },
    };
  }

  control() {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.controlSet) {
          this.controlSet[key.name]();
          return key.name;
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    setInterval(() => {
      if (this.boomerang.position >= this.position + 1) {
        this.boomerang.fly();
      } else {
        this.boomerang.position = -1;
      }

    }, 50);

  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;