# Battleship 🛳️

This project is part of The Odin Project – JavaScript Testing & TDD curriculum.
The goal is to build the classic game Battleship using Test Driven Development (TDD) with Jest, while keeping game logic fully separated from the DOM.

## 📚 Project Overview
Battleship is a turn-based strategy game where players place ships on a grid and take turns attacking enemy coordinates. The game ends when all ships of one player are sunk.

This implementation focuses on:
- Writing tests before writing implementation
- Clean object-oriented design
- Separating game logic from UI logic
- Practicing Jest with ES Modules (ESM)

## 🎯 Learning Objectives
- Practice Test Driven Development
- Write unit tests using Jest
- Design modular, testable JavaScript code
- Work with ES6 modules
- Build game logic without relying on the DOM
- Prepare logic for future UI integration

## 🧩 Core Modules
### Ship
Represents a ship in the game.

Public API:
- length
- hit()
- isSunk()

Ships track how many times they’ve been hit and determine when they are sunk.

### Gameboard
Represents a 10×10 board that holds ships and tracks attacks.

Responsibilities:
- Place ships at coordinates
- Receive attacks
- Track missed attacks
- Report whether all ships are sunk

Public API:
- placeShip(ship, coordinates)
- receiveAttack(coordinates)
- allShipsSunk()

### Player
Represents either a human or computer player.

Responsibilities:
- Owns a Gameboard
- Makes attacks
- Computer player generates legal random moves

Public API:
- attack(enemyBoard, coordinates)
- randomAttack(enemyBoard) (computer only)

## 🕹️ Game Flow
Game flow and turn logic are managed in a controller module, not inside individual classes.

* Players are created
* Gameboards are populated with ships
* Players take turns attacking
* Hits and misses are recorded
* The game ends when all ships of one player are sunk

## 🚀 Future Improvements
- Multiplayer support
- Mobile responsiveness
- Save/load game state
- Difficulty levels for AI

## 📌 Notes
- Only public methods are tested
- Helper/internal functions are not directly tested
- Tests validate behavior, not implementation details
- Emphasis is placed on readability and maintainability
