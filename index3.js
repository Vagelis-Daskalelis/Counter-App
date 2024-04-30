let count = 0;

const value = document.querySelector('.text-lg');
const btnDecr = document.querySelector('#btnDecr')
const btnReset = document.querySelector('#btnReset')
const btnIncr = document.querySelector('#btnIncr')


btnDecr.addEventListener('click', () => decreaseCounter())

btnReset.addEventListener('click', () => resetCounter())

btnIncr.addEventListener('click', () => increaseCounter())


function decreaseCounter(){
    count--
    value.textContent = count;
}

function resetCounter(){
    count = 0
    value.textContent = count;
}


function increaseCounter(){
    count++
    value.textContent = count;
}



function style(count){
        if(count > 0){
        count.style.color = "green"
    }else if (counter < 0){
        count.style.color = "red"
    }else{
        count.style.color = "black"
    }

}