/* task list :
1. create 16x16 grid 
2. add .grid-square as child to .grid
3. onmousedown -> background-color of .grid-square = black
*/

// select .grid
const gridContainer = document.querySelector('.grid')

// create 16*16 divs and append them as child to .grid
for(let i = 0; i < 16*16; i++){
    const gridSquare = document.createElement('div')
    gridSquare.classList.add('grid-square')
    gridContainer.appendChild(gridSquare)
}

// select all squares as an array (NodeList)
const gridSquares = document.querySelectorAll('.grid-square')

// on mouse down on any square -> change background 
// on mouse enter on any square -> change background
for(let i = 0; i < 16*16; i++){
    gridSquares[i].addEventListener('mousedown', e => {
        gridSquares[i].style.backgroundColor = 'black'
        console.log(i);
    })
    gridSquares[i].addEventListener('mouseenter', e => {
        if(e.buttons >0){ // if mouse is pressed
        gridSquares[i].style.backgroundColor = 'black'
        console.log(i);
        }
    })
}