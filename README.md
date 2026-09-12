# Rock Paper Scissors (GUI Web App)

A modern, responsive **Rock Paper Scissors** web application featuring custom SVG visual choices, live score tracking, and smooth animations. 

Originally created as a CLI browser-console script for [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) curriculum, this project has been fully upgraded to an interactive Graphical User Interface (GUI).

**Live Demo:** [https://rps-rockpaperscissors.vercel.app/](https://rps-rockpaperscissors.vercel.app/)

---

## What I Practiced

* **DOM Manipulation:** Event listeners, dynamic UI updates, and real-time score rendering.
* **Semantic HTML5:** Clean document architecture (`<nav>`, `<main>`, `<section>`, `<footer>`).
* **Modern CSS & Layouts:** Flexbox, `100vh` hero alignment, CSS transitions, and hover scale effects.
* **Responsive Design:** Mobile-first layout adjustments using media queries (`< 600px`).
* **JavaScript Architecture:** Pure Vanilla JS game logic decoupled from legacy prompt/console inputs.
* **Git & GitHub Workflow:** Feature branching (`rps-ui`), Pull Request documentation, and Vercel Continuous Deployment.

---

## How the Game Works

The game adheres to the classic rules:
* **Rock** beats **Scissors**
* **Scissors** beats **Paper**
* **Paper** beats **Rock**

Click any of the SVG choice buttons to make your move. The computer instantly generates its choice, evaluates the round winner using JavaScript, and updates the score on the interface in real time.

---

## Project Structure

```text
rock-paper-scissors/
├── assets/             # SVGs, icons, and visual media
├── styles/             # CSS styling and responsive media queries
├── index.html          # Semantic HTML structure
├── script.js           # Game logic and DOM interaction
├── LICENSE             # Open-source license
├── pseudocode.md       # Initial logical layout and pseudocode
└── README.md           # Project documentation