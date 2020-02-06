const wrapper = document.querySelector(".wrapper");
const reset = document.querySelector("#reset");
const inputButton = document.querySelector("#submit")


function makeGrid(numSquares, wrapper) {
    // Make numofsquares x numofsquares grid
    const newSize = `calc(100% / ${numSquares})`

    for (let i = numSquares; i > 0; i--) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.style.height = newSize;
        
        for(let j = numSquares; j > 0; j--) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.style.height = `calc(100% - 2px)`;
            newSquare.style.width = `calc(${newSize} - 2px)`;

            newRow.appendChild(newSquare);    
        }
        wrapper.appendChild(newRow); 
    };
    squareListener();
};

function squareListener() {
    const nodelistSquares = document.querySelectorAll(".square");
    nodelistSquares.forEach(square => {     
        square.addEventListener("mouseenter", event => {
            square.style.background = "blue"
        });
    });
}

function clearWrapper(newNumber, wrapper) {
    while(wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    };
    makeGrid(newNumber, wrapper);
}

// New page
makeGrid(16, wrapper);



// Reset to default
reset.addEventListener("click", event => {
    clearWrapper(16, wrapper);
    input.value = "16";
})

// Make a grid with input / button
inputButton.addEventListener("click", event => {
    const input = document.querySelector("#grid-size")
    if (input.valueAsNumber && input.valueAsNumber > 0)  {
        const newNumber = input.valueAsNumber;
        console.log(newNumber);
        clearWrapper(newNumber, wrapper);
    };
});
