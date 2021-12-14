import {button} from './dom-search.js';
import {value} from './dom-search.js';

value.innerHTML = '0';

let operandOne = null;
let operandTwo = null;
let operator = null;
let selectedOperator = null;

button.backSpace.addEventListener('click', function() {
    let lenghtValue = value.innerHTML.length;
    if (lenghtValue == 1) {
        value.innerHTML = '0'
    } else {
        value.innerHTML = value.innerHTML.slice(0, lenghtValue - 1)
    }
})

button.clear.addEventListener('click', function() {
    value.innerHTML = '0';
    operandOne = null;
    operandTwo = null;
    operator = null;
})
 
for (let number of button.number) {
    number.addEventListener('click', function() {
        if (value.innerHTML != 0 && value.innerHTML != selectedOperator) {
            value.innerHTML += number.innerHTML;
        } else {
            value.innerHTML = number.innerHTML;
        }
    })		
}  

for (let elemOperation of button.operation) {
    elemOperation.addEventListener('click', function() {
        operator = elemOperation.id;

        switch (operator) {
            case "div":
            selectedOperator = "÷";
            break;
            
            case "mult":
            selectedOperator = "*";
            break;
            
            case "sub":
            selectedOperator = "-";
            break;
            
            case "sum":
            selectedOperator = "+";
            break;
        }

        if (operandOne === null) {
            operandOne = value.innerHTML;
            value.innerHTML = selectedOperator;
        } else if (operandTwo === null) {
            operandTwo = value.innerHTML;
        }
    })
}

button.equals.addEventListener('click', function() {
    operandTwo = value.innerHTML;
    value.innerHTML = calc(operandOne, operandTwo, operator);
})

function calc(operandOne, operandTwo, operator) {
    switch (operator) {
      case "div":
        if (operandTwo === "0") {
          return "Error!";
        } else {
          return operandOne / operandTwo;
        }
  
      case "mult":
        return operandOne * operandTwo;
  
      case "sub":
        return operandOne - operandTwo;
  
      case "sum":
        return +operandOne + +operandTwo;
    }
}