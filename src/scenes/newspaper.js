/*
 * Scene for the prologue of the game
 *
 */

export default class NewsPaper extends Phaser.Scene {
  constructor () {
    super({ key: 'NewsPaper' })
  }

  preload () {
    this.load.image('prologue-mock', 'assets/images/prologue-mock.png')
  }

  create () {
    var mock = this.add.image(0, 0, 'prologue-mock')
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

    this.input.events.on('POINTER_DOWN_EVENT',
           this.endScene,
           0,
           this)

    console.log('Prologue created')
  }
  endScene () {
    this.scene.start('Client')
  }
};
