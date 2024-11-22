// Сделаем отдельный класс для отображения игры в консоли.
const inquirer = require('inquirer');


class View {
  
  async newNickname() {
    const answer = await inquirer.default.prompt({
      type: 'input',
      name: 'nickname',
      message: 'Введите никнейм:',
    });
    return answer.nickname;
  }
  async newSkin() {
    const heroSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'];
    const choices = heroSkin.map((el, index) => ({
        name: el,
        value: index
    }));
    const playerChoises = await inquirer.default.prompt({
        type: 'list',
        name: 'skin',
        message: 'Выберите скин:',
        choices: choices,
      });
      return playerChoises['skin'];
  }

  static async Results() {
    const heroSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'];
    const nickname = await this.newNickname();
    const skinIndex = await this.newSkin();

    const chosenSkin = ['🤠', '💃', '🦹‍♂️', '🐧', '🗿', '👽'][skinIndex];

    return ({ nickname, emoji:heroSkin[skinIndex] });
  }
  
    render(track, score) {

    const yourTeamName = 'Bobri';


    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Your score - ${score}`);
    console.log('\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

// const view = new View();
// View.Results();

module.exports = View;
