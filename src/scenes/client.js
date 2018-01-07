/* global Phaser */

/*
 * Scene for the client view
 *
 */

export default class Client extends Phaser.Scene {
  constructor () {
    super({ key: 'Client' })
  }

  preload () {
    this.load.image('client-mock', 'assets/images/client-mock.png')
  }

  create () {
    this.introduce('kalle')
  }
  introduce (client) {
    var mock = this.add.image(0, 0, 'client-mock')
    mock.scaleX = 800 / mock.width
    mock.scaleY = 480 / mock.height
    mock.setOrigin(0, 0)

    this.input.events.on('POINTER_DOWN_EVENT',
                         this.endScene,
                         0,
                         this)

    console.log('Client ' + client + ' introduced')
  }
  endScene () {
    this.scene.swap('Desk')
  }
};
