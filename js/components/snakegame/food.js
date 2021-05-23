import {expanSanek, onSnake} from './snake.js';

let food = { x: 1, y: 1}
const EXPENSION = 1

 
function update() {
   if (onSnake(food)) {
       expanSanek(EXPENSION) 
           food = {x:20, y:10}
        
   }
   }
 
 
 function draw(gameBoard) {
      const foodElement = document.createElement('div')
      foodElement.style.gridRowStart = food.y
      foodElement.style.gridColumnStart = food.x
      foodElement.classList.add('food')
      gameBoard.appendChild(foodElement)
  
 }

 

 export {update, draw, }
 