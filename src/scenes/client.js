/* global Phaser */

/*
 * Scene for the client view
 *
 */

export default class Client extends Phaser.Scene {
  constructor () {
    super({ key: 'Client',
            width: 800,
            height: 960,
          })
  }

  preload () {
    this.load.image('office-mock', 'assets/images/mock_desk_and_client.png')
  }

  create () {
    var mock = this.add.image(0, 0, 'office-mock')
    mock.scaleX = 800 / mock.width
    mock.scaleY = 960 / mock.height
    mock.setOrigin(0, 0)

    // this.tweens.add({
    //   targets: this.cameras.main,
    //   y: -480,
    //   duration: 2000,
    //   ease: 'Power2',
    // })

  }
  introduce (client) {
    var mock = this.add.image(0, 0, 'client-mock')
    mock.scaleX = 800 / mock.width
    mock.scaleY = 480 / mock.height
    mock.setOrigin(0, 0)

    this.input.on('pointerdown', this.endScene, this);

    console.log('Client ' + client + ' introduced')
  }
  endScene () {
    this.scene.swap('Desk')
  }
};
