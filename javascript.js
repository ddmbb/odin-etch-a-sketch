

let gridSize;

// mouse over listener to draw





// container.addEventListener('mouseover', function () {
//     container.ChildNodes.classList.add('black');
// });

// update grid size based on slider


// create grid on startup
const container = document.getElementById('container');

function createLayout() {
    for (let i = 0; i < 16; ++i) {
        var div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('grid');
        container.appendChild(div);
    }
}

createLayout();

//variables


let grid = document.querySelectorAll('.grid');
const colorPicker = document.getElementById('color');
const slider = document.getElementById('range');

function draw() {
    grid = document.querySelectorAll('.grid');
    for (let i = 0; i <= grid.length - 1; i++) {
        grid[i].addEventListener('mouseover', function () {
            grid[i].classList.add('.black');
        });
    };
};

draw();

slider.addEventListener('input', function () {
    gridSize = slider.value;
    clearContainer();
    prepareContainer();
    createContainer();
});

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
        draw();
    }
}
