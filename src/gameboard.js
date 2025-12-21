import Ship from './Ship.js';

export default class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(start, length, direction) {
    const ship = new Ship(length);
    const coordinates = [];

    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        coordinates.push([start[0] + i, start[1]]);
      } else {
        coordinates.push([start[0], start[1] + i]);
      }
    }

    this.ships.push({ ship, coordinates });
  }

  receiveAttack(coord) {
    for (const entry of this.ships) {
      for (const shipCoord of entry.coordinates) {
        if (
          shipCoord[0] === coord[0] &&
          shipCoord[1] === coord[1]
        ) {
          entry.ship.hit();
          return;
        }
      }
    }
    this.missedAttacks.push(coord);
  }

  allShipsSunk() {
    return this.ships.every(entry => entry.ship.isSunk());
  }
}
