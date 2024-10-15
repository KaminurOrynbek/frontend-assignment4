function calculateArea() {
    // Get the values from input fields
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);

    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Display the result
    document.getElementById('result').innerText = `Area of the triangle: ${area.toFixed(2)}`;
}