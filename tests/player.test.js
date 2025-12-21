import Player from '../src/Player.js';

test('player has a gameboard', () => {
  const player = new Player('human');
  expect(player.gameboard).toBeDefined();
});

test('computer can make a legal random move', () => {
  const computer = new Player('computer');
  const move = computer.getRandomMove();

  expect(move[0]).toBeGreaterThanOrEqual(0);
  expect(move[0]).toBeLessThan(10);
});
