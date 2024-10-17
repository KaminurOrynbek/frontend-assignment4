// Append value to the display
function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  // Delete last character
  function deleteLast() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }
  
  // Perform calculation
  function calculate() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  // Calculate square root
  function calculateSqrt() {
    const result = document.getElementById('result');
    const currentValue = parseFloat(result.value);
    if (!isNaN(currentValue)) {
      result.value = Math.sqrt(currentValue);
    } else {
      result.value = 'Error';
    }
  }
  