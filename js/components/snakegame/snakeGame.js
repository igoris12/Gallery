
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import { update as foodUpdate, draw as foodDraw } from './food.js';
import { getSankeHead, sankeInteresection } from './snake.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {

        if (confirm('You lost. Press ok to restart game.')) {
            window.location.assign("./index.html");
        } else { window.location.assign("/index.html"); }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    foodUpdate()
    checkDaeth()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    foodDraw(gameBoard)
}

function checkDaeth() {
    gameOver = outsideGrid(getSankeHead()) || sankeInteresection()
}