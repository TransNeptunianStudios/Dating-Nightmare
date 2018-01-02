/*
 * Scene for the title
 *
 */

export default class Title extends Phaser.Scene {

    constructor() {
	super({ key: 'Title'});
    }

    preload() {
	this.load.image('title', 'assets/images/title-mock.png');
    }

    create() {
	var mock = this.add.image(0, 0, 'title')
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
			     this);

	console.log('Title created');
    }
    endScene() {
	this.scene.start('Prologue')
    }

};
