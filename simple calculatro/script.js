function calculate(){
    let number1 = parseFloat(document.getElementById('firstNumber').value);
    let number2 = parseFloat(document.getElementById('secondNumber').value);
    let operator = document.getElementById('operator').value;

    if (isNaN(number1) || isNaN(number2)){
        document.getElementById('result').innerHTML = 'Enter valid numbers';
        return;
    }

    let result;
    if( operator === '+'){
        result = number1 + number2;
    }else if( operator === '-'){
        result = number1 - number2;
    }else if( operator === '*'){
        result = number1 * number2;
    }else if( operator === '/'){
        if(number2 !== 0){
            result = number1 / number2;
        }else{
            result = 'Cannot divide by zero';
        }
    }
    document.getElementById('result').innerHTML = "Result is " + result;
}