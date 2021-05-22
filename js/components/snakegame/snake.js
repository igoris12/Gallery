import { getInputDirection } from './input.js';

const SNAKE_SPEED = 1;
const sankeBody = [{ x: 10, y: 11 }];

function update() {
   const inputDirection = getInputDirection()
  for (let i = sankeBody.length - 2; i >= 0; i--) {
      sankeBody[i + 1] = {  ...sankeBody[i] }
  }
 
  sankeBody[0].x += inputDirection.x;
  sankeBody[0].y += inputDirection.y;
}

function draw(gameBoard) {
 sankeBody.forEach(segment => {
     const snakeElement = document.createElement('div')
     snakeElement.style.gridRowStart = segment.y
     snakeElement.style.gridColumnStart = segment.x
     snakeElement.classList.add('snake')
     gameBoard.appendChild(snakeElement)
 })
}

export { SNAKE_SPEED };
export { update };
export { draw };