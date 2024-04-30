const DEFAULT = 0
let counter = DEFAULT

window.addEventListener('DOMContentLoaded' , function(){
    const btnDecr = document.querySelector('#btnDecr')
    const btnReset = document.querySelector('#btnReset')
    const btnIncr = document.querySelector('#btnIncr')

    btnDecr.addEventListener('click', () => onDecreaseClicked())

    btnReset.addEventListener('click', () => onResetClicked())

    btnIncr.addEventListener('click', () => onIncreaseClicked())

})

/**
 * Action taken after buttons are clicked
 * 
 * Action include decrease, increase, and reset the     
 * counter
 */

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

    // if(counter > 0){
    //     counterDOM.style.color = "green"
    // }else if (counter < 0){
    //     counterDOM.style.color = "red"
    // }else{
    //     counterDOM.style.color = "black"
    // }
}