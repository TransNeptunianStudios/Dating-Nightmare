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
    }

    create() {

	console.log('Game created');
    }
};
