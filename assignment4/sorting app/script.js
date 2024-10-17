// Function to handle number sorting
function sortNumbers() {
    const numberInput = document.getElementById('numbers').value;
    const order = document.getElementById('order').value;
    const resultDiv = document.getElementById('result');
  
    // Validate the input to ensure it's a series of numbers
    if (!numberInput) {
      alert('Please enter some numbers.');
      return;
    }
  
    // Convert input string to an array of numbers
    let numbers = numberInput.split(' ').map(num => num.trim());
  
    // Check if all inputs are valid numbers
    if (numbers.some(isNaN)) {
      alert('Please enter valid numbers only.');
      return;
    }
  
    // Convert strings to numbers
    numbers = numbers.map(Number);
  
    // Sort numbers based on user choice
    if (order === 'asc') {
      numbers.sort((a, b) => a - b);
    } else if (order === 'desc') {
      numbers.sort((a, b) => b - a);
    }
  
    // Display the sorted result
    resultDiv.innerHTML = `<strong>Sorted Numbers:</strong> ${numbers.join(', ')}`;
  }
  