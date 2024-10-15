function findLargestAndSmallest() {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let largest, smallest;

    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
       
        largest = Math.max(num1, num2, num3);
        
        smallest = Math.min(num1, num2, num3);

       
        document.getElementById('result').innerText = 
            `Largest Number: ${largest}, Smallest Number: ${smallest}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid numbers.";
    }
}