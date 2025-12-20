import Ship from '../src/Ship.js';

test('ship has correct length', () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test('ship starts with 0 hits', () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
});

test('hit increases hit count', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});

test('ship is sunk when hits equal length', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
