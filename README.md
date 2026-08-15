# Rock Paper Scissors

A simple **Rock Paper Scissors** game built with JavaScript as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) Foundations curriculum.

The game is played entirely through the browser console.

## What I Practiced

* JavaScript functions
* Function parameters and return values
* `Math.random()`
* Conditional statements
* User input with `prompt()`
* Variables and scope
* String methods
* Case-insensitive input
* Basic game logic
* Keeping track of scores
* Problem-solving and pseudocode
* Testing JavaScript through the browser console

## How the Game Works

The game follows the classic rules:

* **Rock** beats Scissors
* **Scissors** beats Paper
* **Paper** beats Rock

The computer randomly chooses one of the three options, while the player enters their choice.

The game consists of **5 rounds**, after which the final score determines the winner.

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── script.js
├── LICENSE
├── pseudocode.md
└── README.md
```

## Running the Project

1. Clone the repository.
2. Open `index.html` in your browser.
3. Open the browser's Developer Tools.
4. Go to the **Console** tab.
5. Play the game through the prompts and console output.

## Key Functions

### `getComputerChoice()`

Randomly selects and returns:

```text
rock
paper
scissors
```

### `getHumanChoice()`

Gets the player's choice using `prompt()`.

### `playRound()`

Takes the human and computer choices, determines the winner of the round, and updates the appropriate score.

### `playGame()`

Runs the complete 5-round game and declares the final winner.

## Notes

This project intentionally focuses on **JavaScript logic rather than UI**. The graphical interface will be introduced later in The Odin Project curriculum.

> Plan → Code → Test

This project was also an opportunity to practice breaking a problem into smaller steps before writing the actual code.

## Credits

Project assignment: [The Odin Project — Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

Built as part of my journey through **The Odin Project Foundations** curriculum.
