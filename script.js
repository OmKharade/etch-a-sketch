/* task list :
1. Select Colors
    1. Saturation
    2. Lightness
    3. Hue

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

const toggleColorSettings = document.querySelector('#toggle-colors')
const colorSettingsContainer = document.querySelector('.color-settings')
toggleColorSettings.addEventListener('click',()=>{
    colorSettingsContainer.style.display = 'flex'
    toggleColorSettings.classList.toggle('toolbarBtnToggled')
})

let hueInput = document.querySelector('.hue-handle')
let slColor = document.querySelector('.sl-color')
let colorInfoTxt = document.querySelector('.color-info-value')
hueInput.addEventListener('input',(e)=>{
    hue = e.target.value
    slColor.style.setProperty('background-color','hsl('+hue+',100%,50%')
    colorInfoTxt.textContent = 'HSL('+hue+',100%,50%)'
})

const slHandle = document.querySelector('.sl-handle')

draggable(slHandle)
function draggable(el) {
    el.addEventListener('mousedown', function(e) {
      var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
      var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
      
      function mouseMoveHandler(e) {
        if((e.clientY - offsetY)<605){
            el.style.top = (e.clientY - offsetY) + 'px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }
        else{
            el.style.top = '605px';
            el.style.left = (e.clientX - offsetX) + 'px';
        }
      }
  
      function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
      }
  
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', reset);
    });
}

