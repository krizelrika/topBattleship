import Gameboard from '../src/Gameboard.js';

test('places ship at coordinates', () => {
  const board = new Gameboard();
  board.placeShip([0, 0], 3, 'horizontal');

  expect(board.ships.length).toBe(1);
});

test('records a hit when ship is attacked', () => {
  const board = new Gameboard();
  board.placeShip([0, 0], 2, 'horizontal');

  board.receiveAttack([0, 0]);
  expect(board.ships[0].ship.hits).toBe(1);
});

test('records a missed attack', () => {
  const board = new Gameboard();
  board.receiveAttack([5, 5]);

  expect(board.missedAttacks).toContainEqual([5, 5]);
});

test('reports all ships sunk', () => {
  const board = new Gameboard();
  board.placeShip([0, 0], 1, 'horizontal');

  board.receiveAttack([0, 0]);
  expect(board.allShipsSunk()).toBe(true);
});
