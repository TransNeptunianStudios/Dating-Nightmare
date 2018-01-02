/*
 * Game entry point.
 *
 */

import Splash from './scenes/splash.js'
import Game from './scenes/game.js'

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    title: 'Dating Nightmare',
    version: '1.0-alpha',
    scene: [ Splash, Game ]
};

var game = new Phaser.Game(config);
