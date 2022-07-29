//console.log("Hello World!");

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}



// UTILIZANDO ADDEVENTLISTENER

/*var btnAdc = document.getElementsByName('adicionar');
var btnSub = document.getElementsByName('subtrair');

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

btnAdc[0].addEventListener("click", increment);
btnSub[0].addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/



//REMOVENDO EVENTLISTENER

/*var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    let count = 0;
    count = currentNumber;

    if(count >= 10) {
        document.getElementsByName('adicionar').disabled = true;
    } else {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    let count = 0;
    count = currentNumber;
    
    if(count <= 0) {
        document.getElementsByName('subtrair').disabled = true;
    } else {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}*/



//ALTERANDO A COR

/*var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber > 0) {
        currentNumberWrapper.style.color = "green";
    } else if(currentNumber === 0) {
        currentNumberWrapper.style.color = "gray";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    } else if(currentNumber === 0) {
        currentNumberWrapper.style.color = "gray";
    }
}*/