// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    // this.boomerang = new Boomerang();
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.score = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;

    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    }
    if (this.enemy.position <= this.hero.boomerang.position) {
      this.enemy = new Enemy();
      this.hero.boomerang.direction = false;
      this.score += 1;
    }
  }

  play() {
    this.hero.control();
    setInterval(() => {
      this.enemy.moveLeft();
    }, 100);

    setInterval(() => {
      // Let's play!

      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.score);
    }, 0.1);
  }
}

module.exports = Game;
