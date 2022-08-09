const container = document.getElementById('container');
const grid = document.getElementsByClassName('grid');
const defaultGridSize = 16;
const slider = document.getElementById('range');
let gridSize;

// update grid size based on slider

slider.addEventListener('input', function () {
    gridSize = slider.value;
    clearContainer();
    prepareContainer();
    createContainer();
});

// create grid on startup

function createLayout() {
    for (let i = 0; i < 16; ++i) {
        var div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('grid');
        container.appendChild(div);
    }
}

createLayout();

// clear current grid 

function clearContainer() {
    container.textContent = '';
}

// prepare new grid

function prepareContainer() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function createContainer() {
    for (let i = 0; i < gridSize ** 2; ++i) {
        var div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('grid');
        container.appendChild(div);
    }
}