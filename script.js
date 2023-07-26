let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let operatorEror = document.getElementById("operatorError");
let btn = document.getElementById("btnCalculate")
let finalResult;
let numOneStatus,numTwoStatus,operatorStatus = true;

numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorEror.style.display = "none";

function calculate() {
    let num1 = document.getElementById("firstNumber")
    let num2 = document.getElementById("secondNumber")
    let operator = document.getElementById("operation")
    
    checkValidation(num1,num2,operator);

    if (numOneStatus == true && numOneStatus == true && operatorStatus == true) {
        num1 = parseInt(num1.value)
        num2 = parseInt(num2.value)
        switch (operator.value){
            case "addition":
                finalResult = num1 + num2 
                break;
            case "substraction":
                finalResult = num1 - num2
                break;
            case "multiplication":
                finalResult = num1 * num2
                break;
            case "division":
                finalResult = num1 / num2
                break;       
            default:
                console.log("Error")
                break;
        }
        result.innerHTML = finalResult
    
    }
}


function checkValidation(num1,num2,operator){
    if (num1.value == "" || num1.value == "null" || num1.value == "undefined") {
        numOneError.style.display = "block";
        numOneStatus = false;
    } else {
        numOneError.style.display = "none";
        numOneStatus = true;
    }
    if (num2.value == "" || num2.value == "null" || num2.value == "undefined") {
        numTwoError.style.display = "block";
        numTwoStatus = false;
    } else {
        numTwoError.style.display = "none";
        numTwoStatus = true;
    }
    if (operator.value == "empty") {
        operatorEror.style.display = "block";
        operatorStatus = false;
    } else {
        operatorEror.style.display = "none";
        operatorStatus = true;
    }
}