console.log("APP.js")
window.addEventListener('load', bindEvents);


let screen1;
let screen2;
let result = "";
let expression;
let isDecimal = false;
let isBracketOpen = false;

function bindEvents() {
    screen1 = document.getElementById('screen-1');
    screen2 = document.getElementById('screen-2');

    let numbers = document.querySelectorAll(".num");
    for (let btn of numbers) {
        btn.addEventListener('click', appendNumbers)
    }

    let operators = document.querySelectorAll('.opr')
    for (let btn of operators) {
        btn.addEventListener('click', appendOperator)
    }
}

function appendNumbers() {
    if (this.innerText == ".") {
        if (!isDecimal) {
            result += this.innerText;
            expression = result;

            isDecimal = true;
        }
    }
    else {
        result += this.innerText;
        expression = result;
    }
    console.log(this.innerText);
    expression = result;

    screen2.innerText = result;
    console.log("result ", result);
}

function appendOperator() {
    if (this.innerText == 'X') {
        result = expression + "*";
    }
    else if (this.innerText == "=") {
        if(result.endsWith(")*")) {
            // result = result.substring(0, result.length - 1);   
            result = result.slice(0,-1);         
        }
        result = eval(result);
        screen1.innerText = expression + "=";
        console.log("scr1 = ",screen1)
    }
    else if (this.innerText == "(") {
        result = expression + "*("
        isBracketOpen = !isBracketOpen;
    }
    else if (this.innerText == ")") {
        if(isBracketOpen) {
            result = expression + ")*";
            isBracketOpen = !isBracketOpen;
        }
    }
    else if(this.innerText=="C") {
        result = result.slice(0,-1);         
    }
    else {
        result = expression + this.innerText;
    }
    screen2.innerText = result;
    // screen1.innerText = expression + "=";

}