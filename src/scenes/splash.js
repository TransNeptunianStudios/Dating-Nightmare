/*
 * Scene for the initial splash screen.
 *
 */

export default class Splash extends Phaser.Scene {

    constructor() {
	    super({ key: 'Splash' });
    }

    preload() {
	    this.load.image('logo', 'assets/images/TNSLogo.png');
    }

    create() {
	    var logo = this.add.image(400, 200, 'logo')
	    logo.alpha = 0

	    this.tweens.add({
            targets: logo,
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

	    console.log('Splash created');
    }
    endScene() {
	    this.scene.start('Skyline')
    }

};
