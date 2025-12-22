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