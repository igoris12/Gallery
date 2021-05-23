
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import {update as foodUpdate, draw as foodDraw} from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    if (secondsSinceLastRender < 1/ SNAKE_SPEED) { 
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
}

function draw() {
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    foodDraw(gameBoard)
}