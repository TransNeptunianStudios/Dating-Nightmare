/* global Phaser */

/*
 * Game entry point.
 *
 */

import Splash from './scenes/splash.js'
import Skyline from './scenes/skyline.js'
import Title from './scenes/title.js'
import NewsPaper from './scenes/newspaper.js'
import Client from './scenes/client.js'
import Desk from './scenes/desk.js'

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 480,
  pixelArt: true,
  title: 'Dating Nightmare',
  version: '1.0-alpha',
  scene: [ Splash, Skyline, Title, NewsPaper, Client, Desk ]
}

this.game = new Phaser.Game(config)
