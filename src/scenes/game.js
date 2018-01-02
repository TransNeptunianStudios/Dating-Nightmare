/*
 * Scene for the initial splash screen.
 *
 */

export default class Game extends Phaser.Scene {

   constructor() {
      super({ key: 'Game' });
   }

    preload() {
	console.log('Game preloaded');
    }

   create() {
      console.log('Game created');
   }

};
