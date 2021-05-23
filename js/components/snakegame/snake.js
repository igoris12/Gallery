import { getInputDirection } from './input.js';

const SNAKE_SPEED = 5;
const sankeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

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

function expanSanek (amount) {
    newSegments += amount
 }
 console.log(newSegments);

 function onSnake (position) {
     return sankeBody.some(segment => {
         return equalPositions(segment, position)
     })

 }

 function equalPositions(pos1, pos2) {
     return pos1.x === pos2.x && pos1.y === pos2.y
 }

export { SNAKE_SPEED };
export { update };
export { draw };
export { expanSanek, onSnake};