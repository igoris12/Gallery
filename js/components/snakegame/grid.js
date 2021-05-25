const GridSize = 21

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GridSize) + 1,
        y: Math.floor(Math.random() * GridSize) + 1
    }
}

function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GridSize ||
        position.y < 1 || position.y > GridSize
    )
}

export { outsideGrid }
export { randomGridPosition };

