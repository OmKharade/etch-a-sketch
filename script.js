/* task list :
1. configure buttons
    1. show-grid
    2. erase
2. add hover and status effects
3. fix css
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
        if(isEraser) // erase mode
            gridSquares[i].style.backgroundColor = 'var(--secondary)'
        else // ink mode
            gridSquares[i].style.backgroundColor = 'black'
    })
    gridSquares[i].addEventListener('mouseenter', e => {
        if(e.buttons >0){ // if mouse is pressed
            if(isEraser) // erase mode
                gridSquares[i].style.backgroundColor = 'var(--secondary)'
            else // ink mode
                gridSquares[i].style.backgroundColor = 'black'
        }
    })
}

// toggle buttons

const toggleGridLines = document.querySelector('#toggle-grid-lines')
toggleGridLines.addEventListener('click',()=>{
    gridContainer.classList.toggle('grid-lines') // grid lines on or off
    toggleGridLines.classList.toggle('toolbarBtnToggled') // change button color
})

const toggleEraser = document.querySelector('#toggle-eraser')
let isEraser = false // eraser is off by default

toggleEraser.addEventListener('click',()=>{
    isEraser = isEraser? false:true; // change eraser value (false <--> true)
    toggleEraser.classList.toggle('toolbarBtnToggled') // change button color
})

