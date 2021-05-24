const GridSize = 21

function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GridSize) + 1,
        y: Math.floor(Math.random() * GridSize) + 1
    }
}

export { randomGridPosition };