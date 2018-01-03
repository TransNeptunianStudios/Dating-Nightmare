/*
 * Game entry point.
 *
 */

import Splash from './scenes/splash.js'
import Intro from './scenes/intro.js'
import Title from './scenes/title.js'
import Prologue from './scenes/prologue.js'
import Client from './scenes/client.js'
import Desk from './scenes/desk.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 480,
    pixelArt: true,
    title: 'Dating Nightmare',
    version: '1.0-alpha',
    scene: [ Splash, Intro, Title, Prologue, Client, Desk ]
};

var game = new Phaser.Game(config);
