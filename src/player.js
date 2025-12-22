import Gameboard from './Gameboard.js';

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
    this.previousMoves = new Set();
  }

  getRandomMove() {
    let move;

    do {
      move = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
    } while (this.previousMoves.has(move.toString()));

    this.previousMoves.add(move.toString());
    return move;
  }
}
