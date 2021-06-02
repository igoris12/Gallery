import { getInputDirection } from './input.js';

let SNAKE_SPEED = 5;
const sankeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = sankeBody.length - 2; i >= 0; i--) {
        sankeBody[i + 1] = { ...sankeBody[i] }
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

function expanSanek(amount) {
    newSegments += amount
}


function onSnake(position, { ignoreHead = false } = {}) {
    return sankeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })

}

function getSankeHead() {
    return sankeBody[0]
}

function sankeInteresection() {
    return onSnake(sankeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        sankeBody.push({ ...sankeBody[sankeBody.length - 1] })
    }
    newSegments = 0;
}

export { SNAKE_SPEED };
export { update };
export { draw };
export { expanSanek, onSnake };
export { getSankeHead };
export { sankeInteresection };

//Update
function chabgeSnakeSpeedLevel1() {
    SNAKE_SPEED = 5

};

document.getElementById("level1").addEventListener("click", chabgeSnakeSpeedLevel1);

function chabgeSnakeSpeedLevel2() {
    SNAKE_SPEED = 10

};

document.getElementById("level2").addEventListener("click", chabgeSnakeSpeedLevel2);

function chabgeSnakeSpeedLevel3() {
    SNAKE_SPEED = 15

};

document.getElementById("level3").addEventListener("click", chabgeSnakeSpeedLevel3);