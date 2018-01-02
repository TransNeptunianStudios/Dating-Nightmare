/*
 * Scene for the main game, the desk
 *
 */

export default class Desk extends Phaser.Scene {

    constructor() {
	super({ key: 'Desk' });
    }

    preload() {
	this.load.image('desk', 'assets/images/mock_desk.png');
    }

    create() {
	var desk = this.add.image(0, 0, 'desk')
	desk.setOrigin(0)

	console.log('Game created');
    }
};
