/* global Phaser */

/*
 * Scene for the initial splash screen.
 *
 */

export default class Splash extends Phaser.Scene {
  constructor () {
    super({ key: 'Splash' })
  }

  preload () {
    this.load.atlas(
      'tns_logo',
      'assets/images/tns_logo_ss.png',
      'assets/images/tns_logo_ss.json')
  }

  create () {
    var centerX = this.game.config.width / 2
    var centerY = this.game.config.height / 2

    this.logo = this.add.image(
      centerX,
      centerY,
      'tns_logo',
      'nept_logo_stars').setAlpha(0.0)

    this.star1 = this.add.image(
      centerX + 67,
      centerY - 91,
      'tns_logo',
      'star1').setAlpha(0.0)

    this.star2 = this.add.image(
      centerX - 73,
      centerY + 83,
      'tns_logo',
      'star2').setAlpha(0.0)

    this.star3 = this.add.image(
      centerX - 77,
      centerY - 87,
      'tns_logo',
      'star3').setAlpha(0.0)

    this.star4 = this.add.image(
      centerX + 87,
      centerY + 33,
      'tns_logo',
      'star4').setAlpha(0.0)

    this.star5 = this.add.image(
      centerX - 84,
      centerY + 7,
      'tns_logo',
      'star1').setAlpha(0.0)

    var fadeInTimeline = this.tweens.createTimeline()

    this.addFadeInStar(fadeInTimeline, this.star1, 2000)
    this.addFadeInStar(fadeInTimeline, this.star2, 1000)
    this.addFadeInStar(fadeInTimeline, this.star3, 1000)
    this.addFadeInStar(fadeInTimeline, this.star4, 1000)
    this.addFadeInStar(fadeInTimeline, this.star5, 1000)
    this.addFadeInLogo(fadeInTimeline)

    this.input.on(
      'POINTER_DOWN_EVENT',
      this.endScene,
      0,
      this)

    this.input.on('pointerdown', this.endScene, this);

    fadeInTimeline.play()
  }

  addFadeInStar (timeline, star, duration) {
    timeline.add({
      targets: star,
      alpha: 1.0,
      ease: 'Power2',
      duration: duration
    })
  }

  addFadeOutStar (star) {
    this.tweens.add({
      targets: star,
      alpha: 0.0,
      ease: 'Power2',
      duration: 3000
    })
  }

  addFadeInLogo (timeline) {
    timeline.add({
      targets: this.logo,
      alpha: 1.0,
      duration: 3000,
      ease: 'Power2',
      onComplete: this.fadeOut,
      callbackScope: this,
      completeDelay: 2000
    })
  }

  addFadeOutLogo () {
    this.tweens.add({
      targets: this.logo,
      alpha: 0.0,
      duration: 3000,
      ease: 'Power2',
      onComplete: this.endScene,
      callbackScope: this
    })
  }

  fadeOut () {
    this.addFadeOutStar(this.star1)
    this.addFadeOutStar(this.star2)
    this.addFadeOutStar(this.star3)
    this.addFadeOutStar(this.star4)
    this.addFadeOutStar(this.star5)
    this.addFadeOutLogo()
  }

  endScene () {
    this.scene.start('Skyline')
  }
}
