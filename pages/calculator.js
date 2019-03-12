// ************************ operations ************************ 
function plus() {
    let val = calculator.ENTER.value += '+';
    return val;
}

function minus() {
    let val = calculator.ENTER.value += '-';
    return val;
}

function divide() {
    let val = calculator.ENTER.value += '/';
    return val;
}

function multiply() {
    let val = calculator.ENTER.value += '*';
    return val;
}
// ************************ operations ************************

// ************************* numbers *************************
function zero() {
    let val = calculator.ENTER.value += '0';
    return val;
}

function one() {
    let val = calculator.ENTER.value += '1';
    return val;
}

function two() {
    let val = calculator.ENTER.value += '2';
    return val;
}

function three() {
    let val = calculator.ENTER.value += '3';
    return val;
}

function four() {
    let val = calculator.ENTER.value += '4';
    return val;
}

function five() {
    let val = calculator.ENTER.value += '5';
    return val;
}

function six() {
    let val = calculator.ENTER.value += '6';
    return val;
}

function seven() {
    let val = calculator.ENTER.value += '7';
    return val;
}

function eight() {
    let val = calculator.ENTER.value += '8';
    return val;
}

function nine() {
    let val = calculator.ENTER.value += '9';
    return val;
}
// ************************* numbers *************************

// ************************* others *************************

function dot() {
    let val = calculator.ENTER.value += '.';
    return val;
}

//can only place a negative value on the first input regardless of number of digits, but cannot place negative value on subsequent numbers after pressing on any of the operation buttoms.
function negative() {
    let input = document.getElementById("head");
    let neg = input.value;
    neg *= -1;
    input.value = neg;
    return input.value;
}

function clearf() {
    let val = calculator.ENTER.value = '';
    return val;
}

function off() {
    let val = calculator.ENTER.value = 'OFF';
    window.alert("You turn me off!");
    return val;
}

function equal() {
    let val = calculator.ENTER.value = eval(calculator.ENTER.value);
    return val;
}

// Can only average single digit values, double digit values will give the wrong output.
function average() {
    let input = document.getElementById("head").value;
    let split = input.split('');
    let num = []
    let sum = 0;
    let count = 0
    for(let i = 0; i < split.length; i++) {
        if(split[i] !== "-" && split[i] !== "+" && split[i] !== "/" && split[i] !== "*") {
            num.push(split[i]);
        }
    }
    for(let j = 0; j < num.length; j++) {
        sum += parseInt(num[j]);
        count++;
    }
    let val = calculator.ENTER.value = (sum/count);
    return val;
}