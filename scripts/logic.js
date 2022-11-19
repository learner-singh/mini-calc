console.log("calc");

window.addEventListener('load', bindEvents);

let buttons;
let result = "";
// let screen = "";
let flag = true;

function bindEvents() {
    buttons = document.getElementsByTagName('button');
    console.log(buttons);
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', printOnScreen);
    }
}

function printOnScreen() {
    const currentButton = this;
    let buttonText = currentButton.innerText
    // console.log(" 1 Button Clicked is ", buttonText)
    // screen += buttonText;
    // document.getElementById('screen-2').innerText = screen;        

    if(buttonText== 'X') {
        buttonText = '*' ;
        result = result + buttonText;
    }
   
    else if(buttonText== "=") {
        document.getElementById('screen-1').innerText = result + "=";
        result = eval(result);
    }
    else if((buttonText == "AC") || (buttonText == "C")) {
        // currentButton.innerText = flag ? "AC" : "C"
        // result = flag ? 0 : result.slice(0,-1);
        // flag = !flag;
        result = 0;
    }
    else if(buttonText== '(') {
        buttonText = '*(' ;
        result = result + buttonText;
    }
    else if(buttonText== ')') {
        buttonText = ')*' ;
        result = result + buttonText;
    }
    else {
        result = result + buttonText;
    }

    // console.log(screen)
    // console.log(result);

    if(result != NaN){
    document.getElementById('screen-2').innerText = result;        
    }
    else {
      document.getElementById('screen-2').innerText = "Nan";
    }
}
