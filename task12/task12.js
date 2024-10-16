function checkEvenOdd() {
    let number = parseInt(document.getElementById('numberInput').value); 
    let resultText;

    if (!isNaN(number)) { 
        if (number % 2 === 0) {
            resultText = `${number} is an Even number.`;
        } else {
            resultText = `${number} is an Odd number.`;
        }
    } else {
        resultText = "Please enter a valid number."; 
    }

    document.getElementById('result').innerHTML = resultText; 
}