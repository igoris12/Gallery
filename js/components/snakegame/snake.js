
const SNAKE_SPEED = 1;
const sankeBody = [{ x: 11, y: 11 }];

function update() {
 console.log('update snake');
}

function draw(gameBoard) {
 sankeBody.forEach(segment => {
     const snakeElement = document.createElement('div')
     snakeElement.style.gridRowStart = segment.x
     snakeElement.style.gridColumnStart = segment.y
     snakeElement.classList.add('snake')
     gameBoard.appendChild(snakeElement)
 })
}

export { SNAKE_SPEED };
export { update };
export { draw };