/* global Phaser */

/*
 * Scene for the introduction of the game before title
 *
 */

export default class Skyline extends Phaser.Scene {
  constructor () {
    super({ key: 'Skyline' })
  }

  preload () {
    this.load.image('intro-mock', 'assets/images/intro-mock.png')
  }

  create () {
    var mock = this.add.image(0, 0, 'intro-mock')
    mock.scaleX = 800 / mock.width
    mock.scaleY = 480 / mock.height
    mock.setOrigin(0, 0)
    mock.alpha = 0

    this.tweens.add({
      targets: mock,
      alpha: 1,
      duration: 3000,
      ease: 'Power2',
      yoyo: true,
      onComplete: this.endScene,
      callbackScope: this,
      completeDelay: 2000
    })

    this.input.on('pointerdown', this.endScene, this);

    console.log('Intro created')
  }
  endScene () {
    this.scene.start('Title')
  }
};
