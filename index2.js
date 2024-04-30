const DEFAULT = 0
let counter = DEFAULT


$('#btnDecr').on('click', () => onDecreaseClicked())

$('#btnReset').on('click', () => onResetClicked())

$('#btnIncr').on('click', () => onIncreaseClicked())


function onDecreaseClicked() {
    decreaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onIncreaseClicked() {
    increaseCounter()
}

//Model

function decreaseCounter(){
    counter--
    showCounter()
}

function resetCounter(){
    counter = DEFAULT
    showCounter()
}


function increaseCounter(){
    counter++
    showCounter()
}


function showCounter(){
    const counterDOM = document.querySelector('#counter')
    counterDOM.innerHTML = counter

    styleCounter(counterDOM)
}

function styleCounter(counterDOM){
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)
}