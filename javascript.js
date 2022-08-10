let gridSize;

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

// select color

const colorPicker = document.getElementById('color');
let newColor = 'black';

colorPicker.addEventListener('input', function () {
    newColor = colorPicker.value;
});

// toggle button

const drawBtn = document.getElementById('draw');
const eraseBtn = document.getElementById('erase');
const clearBtn = document.getElementById('clear');
let draw = true;
let erase = false;


drawBtn.addEventListener('click', function () {
    draw = true;
    erase = false;
});

eraseBtn.addEventListener('click', function () {
    draw = false;
    erase = true;
});

clearBtn.addEventListener('click', function () {
    grid = document.querySelectorAll('.grid');
    for (let i = 0; i <= grid.length - 1; i++) {
        grid[i].style.backgroundColor = 'white';
    }
});

// mouseover grid listener

let grid = document.querySelectorAll('.grid');

function drawErase() {
    grid = document.querySelectorAll('.grid');
    for (let i = 0; i <= grid.length - 1; i++) {
        grid[i].addEventListener('mouseover', function () {
            if (draw === true) {
                grid[i].style.backgroundColor = `${newColor}`;
            } else {
                grid[i].style.backgroundColor = 'white';
            }
        });
    };
};

drawErase();

// resize grid

const slider = document.getElementById('range');

slider.addEventListener('input', function () {
    gridSize = slider.value;
    clearContainer();
    prepareContainer();
    createContainer();
});

// clear, prepare, and create new grid 

function clearContainer() {
    container.textContent = '';
}

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
        drawErase();
    }
}
