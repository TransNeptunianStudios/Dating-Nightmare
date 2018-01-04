/*
 * Scene for the main game, the desk
 *
 */

export default class Desk extends Phaser.Scene {
  constructor () {
    super({ key: 'Desk' })
  }

  preload () {
    this.load.image('desk', 'assets/images/mock_desk.png')
    this.load.image('arrow', 'assets/images/arrow.png')
  }

  create () {
    var desk = this.add.image(0, 0, 'desk')
    desk.setOrigin(0)

    var button2Client = this.add.image(200, 200, 'arrow').setInteractive()
    this.input.events.on('GAME_OBJECT_DOWN_EVENT', function (event) {
      console.log('CLICKED')
      this.scene.swap('client')
    }, this)

    console.log('Game created')
  }
};
