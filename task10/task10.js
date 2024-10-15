function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    let result = num1 * num2;
    document.getElementById('result').innerText = result;
}


function divideNumbers() {
    let num1 = parseFloat(document.getElementById('firstNumber').value);
    let num2 = parseFloat(document.getElementById('secondNumber').value);
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = "Cannot divide by zero";
    }
}