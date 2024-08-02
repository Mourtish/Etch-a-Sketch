const container = document.getElementById('container');

function createGrid(size = 16) {
    if (size > 100) {
        alert("The maximum grid size is 100. Please enter a number less than or equal to 100.");
        return;
    }
    container.innerHTML = '';  
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'white');
}

function promptGridSize() {
    const size = parseInt(prompt("Enter the number of squares per side for the new grid (maximum 100):"), 10);
    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}


createGrid();
