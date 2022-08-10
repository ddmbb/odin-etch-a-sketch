const container = document.getElementById('container');
const grid = document.querySelectorAll('.grid');
const colorPicker = document.getElementById('color');
const slider = document.getElementById('range');
const gridHover = document.querySelectorAll('grid');

let gridSize;

// mouse over listener to draw

grid.addEventListener('mouseover', function () {
    for (let i = 0; i < grid.length; ++i) {
        console.log('grid');
        grid[i].classList.add('black');
    };
});

// container.addEventListener('mouseover', function () {
//     container.ChildNodes.classList.add('black');
// });

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
