import { expanSanek, onSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition()
const EXPENSION = 1


function update() {
  if (onSnake(food)) {
    expanSanek(EXPENSION)
    food = getRandomFoodPosition()
  }
}


function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()

  }
  return newFoodPosition
}



export { update, draw, }
