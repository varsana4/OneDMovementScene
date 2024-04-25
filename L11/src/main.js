// Varsana Ilango Gomathynaveena
// Created: 4/24/2024
// Phaser: 3.70.0
//
// L11: 1-D movement
//
// A template for building a monster using a series of assets from
// a sprite atlas.
// 
// Art assets from Kenny Assets "Scribble-platformer" set:
// https://kenney.nl/assets/scribble-platformer

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 600,
    scene: [OneDMovementScene],
    fps: { forceSetTimeOut: true, target: 30 }
    
}

const game = new Phaser.Game(config);