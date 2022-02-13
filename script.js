const board = document.getElementById('board');
const clearButton = document.getElementById('clear');
const toggleGridButton = document.getElementById('toggleGrid');
const sizeSlider = document.getElementById('sizeSlider');
const sizeLabel = document.getElementById('boardSize');
const colorInput = document.getElementsByClassName('input-field');
const colorAccept = document.getElementsByClassName('apply-btn')

let boardSize = 16;
let markerColor = "#000000";
let children = [];

function boardGen(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for (let i = 0; i < size ** 2; i++) {
        let gridCell = document.createElement("div");
        gridCell.style.cssText = "width: 100%;";
        gridCell.classList.add('grid-outline');

        if (i < size) {
            gridCell.classList.add('grid-top-edge');
        } 
        if (i >= size * size - size) {
            gridCell.classList.add('grid-bottom-edge');
        } 
        if (i % size == 0) {
            gridCell.classList.add('grid-left-edge')
        }
        if (i % size == size - 1) {
            gridCell.classList.add('grid-right-edge')
        }

        board.appendChild(gridCell);
        
        gridCell.addEventListener("mouseover", () => {
            gridCell.style.cssText = `background-color: ${markerColor}; width: 100%;`
        });
    };
    
    children = Array.from(board.childNodes);
    // JS is retarded, this code is retarded because of that
    if (children.length != size ** 2){
        children.shift();
    }
};

function clearBoard() {
    board.childNodes.forEach((cell) => {
        cell.style.cssText = `background-color: pink; width: 100%;`
    });
};

boardGen(boardSize);



function clearBoard() {
    children.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
};

clearButton.onclick = () => clearBoard();

function toggleGrid() {
    children.forEach((cell) => {
        cell.classList.toggle('grid-outline');
    });
};

toggleGridButton.onclick = () => toggleGrid();

sizeSlider.addEventListener('change', () => {
    boardSize = sizeSlider.value;
    sizeLabel.textContent = `${boardSize}x${boardSize}`;
    board.innerHTML = '';
    boardGen(boardSize);
});

colorAccept[0].addEventListener('click', () => {
    let inp = colorInput[0].value.toString();
    console.log(inp);

    let RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    if (RegExp.test(inp)) {
        markerColor = inp;
    } else {
        console.log('Invalid input')
    };
    colorInput[0].value = '';
    colorInput[0].setAttribute('placeholder', `Set the color | Current: ${markerColor}`)
    // markerColor = is
});