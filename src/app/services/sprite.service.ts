import { Injectable } from '@angular/core';

export interface Sprite {
  name: string;
  visibility: boolean;
  state: number; // 1=moving, 0=stationary
  direction: string; // left, right, up, down.
  lastDirection: string;
  maxSpeed: number; 
  acceleration: number;
  scale: number;
  playable: boolean;

  url: string;
  fps: number; //frames per second
  x: number; // horizontal coordinate
  y: number; //vertical coordinate

  rows: number; // how many rows in your sprite sheet
  columns: number; //how many columns in your sprite sheet

  spriteReference: any;

  leftFrames: number[];
  rightFrames: number[];
}

@Injectable({
  providedIn: 'root'
})
export class SpriteService {
  sprites:Sprite[]=[
    {
      name: 'Baby Boy',
      visibility: true,
      state: 0,
      direction: 'right',
      lastDirection: 'right',
      maxSpeed: 10,
      acceleration: 1,
      scale: .7,
      playable: true,
      url: '../assets/sprites/babyBoy.jpg',
      fps: 7,
      x: 200,
      y: 200,
      rows: 4,
      columns: 5,
      spriteReference: null,
      leftFrames: [10, 19],
      rightFrames: [0, 9]
    },
  ];

  constructor() { }
}
