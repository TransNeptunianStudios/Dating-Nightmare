/*
 * Scene for the main game?
 *
 */

import FancyBox from '../objects/fancybox';

export default class Game extends Phaser.Scene {

    constructor() {
	super({ key: 'Game' });
    }

    preload() {
	this.load.image('box-center', 'assets/images/box-center.png');
	this.load.image('box-corner', 'assets/images/box-corner.png');
	this.load.image('box-side', 'assets/images/box-side.png');
    }

    create() {
	var testBox = new FancyBox(this, 100, 100, 200, 400);
	var testBox = new FancyBox(this, 400, 100, 250, 100);
	var testBox = new FancyBox(this, 400, 300, 150, 200);

	console.log('Game created');
    }
};
